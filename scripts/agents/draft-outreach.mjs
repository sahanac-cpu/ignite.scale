#!/usr/bin/env node
/* Autonomous outreach drafter: every Wednesday, pick 3 fresh targets from
   outreach/targets/uae-business-sites.json that we haven't drafted for yet
   (no matching file in outreach/drafts/sent/), generate per-target pitch
   drafts using the 01-guest-post-pitch.md template, save them to
   outreach/drafts/<YYYY-MM-DD>/. Commit + push handled by the workflow. */

import { readdirSync, readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { resolve, join } from 'node:path'

const ROOT = resolve(process.cwd())
const TARGETS_PATH = join(ROOT, 'outreach', 'targets', 'uae-business-sites.json')
const TEMPLATE_PATH = join(ROOT, 'outreach', 'templates', '01-guest-post-pitch.md')
const DRAFTS_DIR = join(ROOT, 'outreach', 'drafts')
const SENT_DIR = join(DRAFTS_DIR, 'sent')

if (!existsSync(SENT_DIR)) mkdirSync(SENT_DIR, { recursive: true })

const targets = JSON.parse(readFileSync(TARGETS_PATH, 'utf8'))
const template = readFileSync(TEMPLATE_PATH, 'utf8')

/* Skip targets where a draft already exists (filename match in either /drafts/<date>/<site>.md
   or /drafts/sent/<site>.md). */
function alreadyDrafted(siteSlug) {
  if (existsSync(join(SENT_DIR, `${siteSlug}.md`))) return true
  for (const entry of readdirSync(DRAFTS_DIR)) {
    const sub = join(DRAFTS_DIR, entry)
    try {
      if (existsSync(join(sub, `${siteSlug}.md`))) return true
    } catch (_) { /* directory iteration race — ignore */ }
  }
  return false
}

function slugify(site) {
  return site.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
}

const today = new Date().toISOString().slice(0, 10)
const todayDir = join(DRAFTS_DIR, today)
if (!existsSync(todayDir)) mkdirSync(todayDir, { recursive: true })

const fresh = targets.filter((t) => !alreadyDrafted(slugify(t.site))).slice(0, 3)

if (fresh.length === 0) {
  console.log('All targets have been drafted for. Add more to outreach/targets/uae-business-sites.json.')
  process.exit(0)
}

for (const t of fresh) {
  const siteSlug = slugify(t.site)
  const draft = template
    .replace(/\{pitchAngle\}/g, t.pitchAngle)
    .replace(/\{editor name\}/g, 'team')  // generic until we look up real name
    .replace(/\{site name\}/g, t.site)
    .replace(/\{section name\}/g, t.category)
    .replace(/\{a real recent piece they published\}/g, '[manual: insert a recent article you actually read here]')

  const header = `# Pitch: ${t.site}
**Domain Authority:** ${t.domainAuthority}
**URL:** ${t.url}
**Category:** ${t.category}
**Audience:** ${t.audience}
**Submission:** ${t.submissionUrl}
**Contact:** ${t.contactEmail}
**Suggested angle:** ${t.pitchAngle}

---

`

  writeFileSync(join(todayDir, `${siteSlug}.md`), header + draft)
  console.log(`✓ Drafted: ${todayDir}/${siteSlug}.md`)
}

console.log(`\n${fresh.length} new pitches drafted for ${today}.`)
console.log('Workflow: review → personalise editor name + recent article reference → send from admin@ignite-scale.com → move file to outreach/drafts/sent/ when sent.')
