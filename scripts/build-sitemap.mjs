import { writeFileSync, mkdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { SITE, ROUTES } from './seo-routes.mjs'

const today = new Date().toISOString().slice(0, 10)

const urls = ROUTES.map((r) => {
  const en = `${SITE}${r.path}`
  const ar = `${SITE}/ar${r.path === '/' ? '/' : r.path}`
  return `  <url>
    <loc>${en}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${en}" />
    <xhtml:link rel="alternate" hreflang="en-AE" href="${en}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${en}" />
  </url>`
}).join('\n')

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`

const outPath = resolve('public/sitemap.xml')
mkdirSync(dirname(outPath), { recursive: true })
writeFileSync(outPath, xml)
console.log(`✓ Wrote ${outPath} (${ROUTES.length} routes)`)
