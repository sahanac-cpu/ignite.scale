#!/usr/bin/env node
/* AI-powered blog post generator.
   Called only by .github/workflows/weekly-blog-generate.yml (disabled by default).
   Requires ANTHROPIC_API_KEY in environment.
   Picks a topic from content/blog/topics-backlog.json, generates a 1500-word
   post + frontmatter via Claude API, saves to content/blog/queue/ as the next
   numbered file (so the publisher picks it up). */

import { readFileSync, writeFileSync, existsSync, readdirSync, mkdirSync } from 'node:fs'
import { resolve, join } from 'node:path'

const API_KEY = process.env.ANTHROPIC_API_KEY
if (!API_KEY) {
  console.error('ANTHROPIC_API_KEY missing. This workflow is disabled by default — add the secret to enable.')
  process.exit(0)
}

const ROOT = resolve(process.cwd())
const TOPICS_PATH = join(ROOT, 'content', 'blog', 'topics-backlog.json')
const QUEUE_DIR = join(ROOT, 'content', 'blog', 'queue')

if (!existsSync(QUEUE_DIR)) mkdirSync(QUEUE_DIR, { recursive: true })

if (!existsSync(TOPICS_PATH)) {
  console.error('content/blog/topics-backlog.json missing.')
  process.exit(1)
}

const topics = JSON.parse(readFileSync(TOPICS_PATH, 'utf8'))
const pending = topics.filter((t) => !t.usedAt)
if (pending.length === 0) {
  console.log('All topics in the backlog have been used. Add more to topics-backlog.json or stop the workflow.')
  process.exit(0)
}

const topic = pending[0]

const systemPrompt = `You are Sahana, co-founder of ignite-scale, a Dubai growth agency. You write blog posts about marketing in the UAE drawn from real campaigns you've run. Your voice is the most important thing about this post.

VOICE RULES (this is what makes the writing feel human, not AI):

1. Start with a real observation, not a thesis. The first sentence should sound like something you'd say to a friend, not a textbook.

2. Vary sentence length deliberately. Mix short punchy sentences with longer ones. Three short sentences in a row, then one long one with multiple clauses, then a short one again. AI defaults to medium-length sentences and that's the biggest tell.

3. Use specific numbers, not round ones. "About 50" sounds AI. "47" sounds human. "Most" sounds AI. "9 out of 10 we audit" sounds human.

4. Insert one or two mildly opinionated takes that a generic article would never make. "This is why X is overrated" or "I disagree with the conventional wisdom on Y." Conviction reads human.

5. Use sentence fragments occasionally. Not every line needs to be grammatically complete. Especially for emphasis. Like this.

6. Reference specific Dubai context — actual neighbourhood names, actual platform versions, actual currency in AED, actual UAE law. Generic "the region" or "the market" is an AI tell.

7. Self-correct or hedge sometimes. "Probably." "In most cases." "We've seen this maybe 60% of the time." Real experts hedge. Confident AI doesn't.

8. NEVER use em-dashes (—). Use a comma, period, or middle-dot (·) instead. Em-dashes are the single biggest AI signal.

9. NEVER use these AI-cliché phrases: "in today's fast-paced world", "leverage", "synergy", "10x", "ultimate guide", "definitive", "harness the power of", "unleash", "delve into", "embark on a journey", "navigate the landscape", "in conclusion", "it's worth noting".

10. British spelling: optimise, colour, behaviour, organisation. Not optimize.

11. First-person plural ("we") when speaking as the agency. Occasional first-person singular ("I") for personal observations or anecdotes.

12. End with a soft CTA, not a hard sell. Mention the free 45-minute strategy call in a relaxed way, not a "DON'T MISS OUT" way.`

const userPrompt = `Write a 1500-word blog post for ignite-scale on this topic: "${topic.title}"

Notes:
${topic.notes || '(none)'}

Output format — produce ONLY valid markdown with this exact frontmatter structure (no preamble, no explanation):

\`\`\`
---
title: "<headline, 60 chars or fewer>"
description: "<150 char SEO description>"
slug: "${topic.slug}"
publishedAt: ""
tags: [${(topic.tags || []).map((t) => `"${t}"`).join(', ')}]
readingMinutes: <number>
---

<body in markdown with ## H2 sections, occasional ### H3 sub-sections, bullet lists where helpful, no images. Hook in the first paragraph that earns the read. End with a soft CTA mentioning a free 45-minute strategy call.>
\`\`\``

const res = await fetch('https://api.anthropic.com/v1/messages', {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
    'x-api-key': API_KEY,
    'anthropic-version': '2023-06-01',
  },
  body: JSON.stringify({
    model: 'claude-sonnet-4-6',
    max_tokens: 8000,
    system: systemPrompt,
    messages: [{ role: 'user', content: userPrompt }],
  }),
})

if (!res.ok) {
  console.error(`API error ${res.status}: ${await res.text()}`)
  process.exit(1)
}

const data = await res.json()
const body = data.content[0].text.trim().replace(/^```markdown\n?/, '').replace(/```$/, '')

/* Save to queue with next sequence number. */
const existing = readdirSync(QUEUE_DIR).filter((f) => /^\d+-.*\.md$/.test(f))
const nextN = (existing.length === 0 ? 10 : Math.max(...existing.map((f) => parseInt(f.split('-')[0], 10))) + 1)
  .toString()
  .padStart(2, '0')
const filename = `${nextN}-${topic.slug}.md`
writeFileSync(join(QUEUE_DIR, filename), body)

/* Mark topic as used. */
topic.usedAt = new Date().toISOString().slice(0, 10)
writeFileSync(TOPICS_PATH, JSON.stringify(topics, null, 2))

console.log(`✓ Generated: content/blog/queue/${filename}`)
console.log(`  Topic: ${topic.title}`)
