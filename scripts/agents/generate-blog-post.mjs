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

const systemPrompt = `You are an experienced Dubai-based marketing strategist writing for ignite-scale, a UAE growth agency. Voice: confident, specific, data-led, no fluff. Avoid em-dashes (use commas or periods instead). Avoid generic "in today's fast-paced world" filler. Use concrete numbers when possible. Use British spelling (optimise, colour, behaviour). Write in first person plural ("we") when speaking from the agency. No "ultimate guide" / "definitive" / "10x your..." clichés.`

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
