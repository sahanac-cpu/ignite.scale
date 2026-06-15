#!/usr/bin/env node
/* For the latest blog post just published, generate a matching LinkedIn post.
   Reads the most recently modified content/blog/*.md (excluding queue/), pulls its
   frontmatter, generates a LinkedIn-optimised post + posting instructions,
   saves to social/linkedin/<date>-<slug>.md.
   Triggered automatically after weekly-blog-publish.yml. */

import { readdirSync, readFileSync, writeFileSync, statSync, existsSync, mkdirSync } from 'node:fs'
import { resolve, join } from 'node:path'
import matter from 'gray-matter'

const ROOT = resolve(process.cwd())
const BLOG = join(ROOT, 'content', 'blog')
const OUT = join(ROOT, 'social', 'linkedin')

if (!existsSync(OUT)) mkdirSync(OUT, { recursive: true })

/* Find the most recently modified .md file at the top level of content/blog/. */
const candidates = readdirSync(BLOG)
  .filter((f) => f.endsWith('.md'))
  .map((f) => ({ name: f, mtime: statSync(join(BLOG, f)).mtime }))
  .sort((a, b) => b.mtime - a.mtime)

if (candidates.length === 0) {
  console.log('No blog posts to draft from.')
  process.exit(0)
}

const newest = candidates[0]
const raw = readFileSync(join(BLOG, newest.name), 'utf8')
const { data, content } = matter(raw)
const slug = newest.name.replace(/\.md$/, '')

/* Skip if we've already drafted for this slug. */
const todayDate = new Date().toISOString().slice(0, 10)
const outFile = join(OUT, `${todayDate}-${slug}.md`)
const existingForSlug = readdirSync(OUT).find((f) => f.endsWith(`${slug}.md`))
if (existingForSlug) {
  console.log(`LinkedIn draft already exists for ${slug}: ${existingForSlug}`)
  process.exit(0)
}

/* Heuristic LinkedIn post from blog frontmatter + first ~600 chars of body.
   Engagement formula:
   - Hook (first sentence is a strong claim, contrarian or counterintuitive)
   - 3-5 line breaks visible above the fold (LinkedIn shows ~3 lines on mobile)
   - Bullet list or numbered list (scannable)
   - Question at the end (invites comments)
   - Link in comment, not post body (LinkedIn punishes external links)
*/

const firstParagraph = content.replace(/^#.*$/m, '').trim().split('\n\n')[0].trim().slice(0, 240)
const url = `https://ignite-scale.com/blog/${slug}`

const draft = `---
postType: linkedin
linksTo: ${url}
forBlogPost: ${slug}
optimisedFor: engagement (hook + scannable + question close)
suggestedPostTime: Tuesday or Wednesday, 8:00 AM Dubai time
---

# LinkedIn post draft

${data.title}

A few honest observations from the past few months running paid campaigns in Dubai:

${(data.tags || []).slice(0, 3).map((tag, i) => `${i + 1}. ${tag} — replace with one specific data point from the full blog post.`).join('\n\n')}

${firstParagraph}

Full breakdown on our blog. Link in the comments.

What's the one of these you'd push back on?

—

# Comment to post immediately after (LinkedIn punishes external links in main post body)

${url}

# How to post

1. Copy the post body above (between the first --- and the "—")
2. Personalise: replace the placeholder bullets with the specific data points from your actual experience
3. Open LinkedIn → Start a post → paste → Post
4. Within 60 seconds, comment on your own post with the URL above
5. Reply to every comment within 4 hours — each reply boosts reach ~10%
6. Don't add more than 3 hashtags (they cap reach in 2026)

# What to expect

- Mid-tier Dubai marketing posts get 800-3000 impressions
- The question-close format gets 5-15 comments on average
- Best Dubai time slots: Tuesday 7:30-9:00am, Wednesday 12:00-13:30, Thursday 17:00-18:30

# Tip

LinkedIn algorithm rewards posts that get strong reply velocity in the first 60 minutes. Have one trusted person in your network ready to comment immediately after you post, with a substantive reply (not "great post!"). It signals to LinkedIn that this is conversation-worthy content.
`

writeFileSync(outFile, draft)
console.log(`✓ LinkedIn draft: ${outFile}`)
console.log(`   For blog post: ${slug}`)
console.log(`   You'll need to personalise the bullet points before posting.`)
