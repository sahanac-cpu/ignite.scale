#!/usr/bin/env node
/* Autonomous publisher: pop the oldest file from content/blog/queue/ → content/blog/.
   Sets publishedAt to today, updates frontmatter, ready for Vite import.glob to pick it up.
   Run by .github/workflows/weekly-blog-publish.yml every Monday. */

import { readdirSync, readFileSync, writeFileSync, renameSync, existsSync, mkdirSync } from 'node:fs'
import { resolve, join } from 'node:path'
import matter from 'gray-matter'

const ROOT = resolve(process.cwd())
const QUEUE = join(ROOT, 'content', 'blog', 'queue')
const BLOG = join(ROOT, 'content', 'blog')

if (!existsSync(QUEUE)) {
  console.error('No content/blog/queue/ directory.')
  process.exit(0)
}

const queued = readdirSync(QUEUE)
  .filter((f) => f.endsWith('.md'))
  .sort()

if (queued.length === 0) {
  console.log('Queue is empty. Nothing to publish.')
  process.exit(0)
}

const next = queued[0]
const srcPath = join(QUEUE, next)
const raw = readFileSync(srcPath, 'utf8')
const { data, content } = matter(raw)

const slug = data.slug || next.replace(/^\d+-/, '').replace(/\.md$/, '')
const todayIso = new Date().toISOString().slice(0, 10)
data.publishedAt = todayIso
data.slug = slug

const newRaw = matter.stringify(content, data)
const destPath = join(BLOG, `${slug}.md`)

if (!existsSync(BLOG)) mkdirSync(BLOG, { recursive: true })
writeFileSync(destPath, newRaw)
renameSync(srcPath, srcPath + '.published')

console.log(`✓ Published: ${slug}`)
console.log(`  from: content/blog/queue/${next}`)
console.log(`  to:   content/blog/${slug}.md`)
console.log(`  publishedAt: ${todayIso}`)
