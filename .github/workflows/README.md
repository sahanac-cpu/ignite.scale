# Autonomous SEO agents

Three GitHub Actions run weekly to maintain SEO momentum on ignite-scale.com without any manual work.

## What's running

| Workflow | Day | Time (Dubai) | What it does |
|---|---|---|---|
| `weekly-blog-publish.yml` | Monday | 09:00 | Pops the oldest file from `content/blog/queue/`, moves it to `content/blog/`, commits + pushes. Vercel auto-deploys. |
| `weekly-outreach-drafts.yml` | Wednesday | 09:00 | Picks 3 fresh UAE business sites from `outreach/targets/uae-business-sites.json`, drafts personalised guest-post pitches in `outreach/drafts/<date>/`. You review + send manually. |
| `weekly-seo-monitor.yml` | Friday | 09:00 | Audits the live site (every route, every schema, every OG image), writes a report to `reports/seo/<date>.md`. Flags broken routes, schema errors, duplicate titles. |

You can manually trigger any of them from the GitHub Actions tab — useful for testing.

---

## How the blog publisher works

The system is **markdown-first**:

1. Blog posts live as `.md` files with frontmatter in `content/blog/queue/` (unpublished) or `content/blog/` (live).
2. Vite reads `content/blog/*.md` via `import.meta.glob`, so a new file = a new live blog post the next time Vercel builds. No code touching needed.
3. The build-prerender script (`scripts/build-prerender.mjs`) auto-discovers MD files and generates per-route HTML with the correct meta + JSON-LD `Article` schema.
4. The sitemap (`scripts/build-sitemap.mjs`) also auto-discovers and includes them with hreflang.

### To add more posts manually
Drop a `.md` file in `content/blog/queue/`. Frontmatter required:

```yaml
---
title: "Your post title"
description: "150-character description for SEO and social previews"
slug: "url-slug"
publishedAt: "2026-09-15"      # populated by the publisher script if missing
tags: ["Dubai marketing", "Whatever"]
readingMinutes: 8
---
```

### Current queue status
- ✅ Already live: `dubai-marketing-best-practices-2026.md`
- 📅 Queued (auto-publishes 21 June, 28 June, 5 July): `01-dubai-neighborhood-targeting.md`, `02-arabic-content-strategy.md`, `03-roas-framework.md`
- After the queue runs out, the workflow logs "Queue is empty" and skips. Either add more `.md` files manually, or enable the Anthropic auto-writer workflow below.

---

## Enabling unlimited content (Anthropic API auto-writer)

For ongoing content beyond the queue, set up the Anthropic auto-writer. **This is optional and only needed if you want infinite AI-generated content without writing more posts manually.**

### Setup steps

1. Sign up for an Anthropic API key at https://console.anthropic.com
2. Top up at least $20 (covers ~50 blog posts worth of generation)
3. In the GitHub repo: **Settings → Secrets and variables → Actions → New repository secret**
   - Name: `ANTHROPIC_API_KEY`
   - Value: your key
4. Enable the (currently disabled) `weekly-blog-generate.yml` workflow — see file in this folder. It will:
   - Fire every Monday at 04:00 UTC (before the publisher)
   - Pick a topic from `content/blog/topics-backlog.json`
   - Generate a 1500-word post + frontmatter via Claude API
   - Save to `content/blog/queue/` as the next-to-publish
   - Publisher picks it up at 05:00 UTC same day

### Cost estimate
Each post: ~$0.30 in Claude Sonnet 4 input + output tokens. ~$15/year for weekly auto-generation.

### Quality control
The Anthropic-generated drafts go to a STAGING queue (`content/blog/staging/`) by default. You're emailed via GitHub commit notifications when a draft lands. Move it to `content/blog/queue/` (manually or via a follow-up workflow) once reviewed.

---

## How outreach drafting works

Each Wednesday the agent:

1. Reads `outreach/targets/uae-business-sites.json` (30 UAE business sites with DA 35–89)
2. Picks 3 that haven't been drafted for yet
3. Applies the `outreach/templates/01-guest-post-pitch.md` template, filling in the site's specific pitch angle
4. Saves drafts to `outreach/drafts/<YYYY-MM-DD>/<site-slug>.md`
5. Commits + pushes

### Your job (5 minutes per draft)
- Replace placeholders (`{editor name}`, `{a real recent piece they published}`) with real values you'd look up on LinkedIn / the site's recent articles
- Send from `admin@ignite-scale.com`
- Move the file from `outreach/drafts/<date>/` to `outreach/drafts/sent/` so the agent doesn't re-draft it

### Add more targets
Append to `outreach/targets/uae-business-sites.json` — agent picks them up automatically.

---

## How SEO monitor works

Every Friday, the monitor:

1. Pulls every key route on `ignite-scale.com` (with a cache-bust param)
2. Verifies HTTP 200 status
3. Parses every JSON-LD block to confirm valid JSON
4. Checks for unique `<title>` tags
5. Confirms `og:image` is set
6. Writes a Markdown report to `reports/seo/<date>.md`

If any check fails, it's flagged in the report's "Issues to investigate" section at the top. You can also set up GitHub email notifications for failed workflows.

---

## Manually triggering any workflow

In the GitHub UI: **Actions tab → select workflow → Run workflow**. Useful for testing or for catching up if a week was missed.

---

## How to disable / pause an agent

Either:
- Comment out the `schedule:` block in the workflow YAML, or
- Settings → Actions → General → Disable the specific workflow

The workflows are commit-and-push, so a paused agent doesn't burn any credits.
