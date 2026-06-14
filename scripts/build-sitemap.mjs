import { writeFileSync, mkdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { SITE, ROUTES } from './seo-routes.mjs'

const today = new Date().toISOString().slice(0, 10)

/* For each canonical route, output both EN and AR locs with paired hreflang annotations. */
const entries = []
for (const r of ROUTES) {
  const en = `${SITE}${r.path}`
  const ar = `${SITE}/ar${r.path === '/' ? '' : r.path}`

  const altLinks = `
    <xhtml:link rel="alternate" hreflang="en" href="${en}" />
    <xhtml:link rel="alternate" hreflang="en-AE" href="${en}" />
    <xhtml:link rel="alternate" hreflang="ar-AE" href="${ar}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${en}" />`

  entries.push(`  <url>
    <loc>${en}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>${altLinks}
  </url>`)
  entries.push(`  <url>
    <loc>${ar}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority * 0.9}</priority>${altLinks}
  </url>`)
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join('\n')}
</urlset>
`

const outPath = resolve('public/sitemap.xml')
mkdirSync(dirname(outPath), { recursive: true })
writeFileSync(outPath, xml)
console.log(`✓ Wrote ${outPath} (${ROUTES.length * 2} URLs)`)
