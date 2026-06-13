/* Per-route head-templating prerender.
   After vite build, this script:
   1. Reads dist/index.html (the homepage SPA shell)
   2. For each route, generates dist/<route>/index.html with route-specific <head>
   3. Body stays the same (empty <div id="root">) — React hydrates on load
   This gives crawlers + social previewers proper unique meta per route. */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { dirname, resolve, join } from 'node:path'
import { SITE, ROUTES } from './seo-routes.mjs'

const DIST = resolve('dist')
const SHELL_PATH = join(DIST, 'index.html')

if (!existsSync(SHELL_PATH)) {
  console.error(`✗ dist/index.html missing — run vite build first`)
  process.exit(1)
}

const shell = readFileSync(SHELL_PATH, 'utf8')

function escapeHtml(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

function jsonScript(id, payload) {
  return `<script type="application/ld+json" data-schema="${id}">${JSON.stringify(payload)}</script>`
}

function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE}#org`,
    name: 'Ignite Scale',
    description: 'Dubai growth agency engineering paid social, content and funnels for luxury, real estate, hospitality and B2B brands across the UAE.',
    url: SITE,
    logo: `${SITE}/logo.svg`,
    image: `${SITE}/og-image.jpg`,
    telephone: '+971555116465',
    email: 'admin@ignite-scale.com',
    address: { '@type': 'PostalAddress', addressLocality: 'Dubai', addressCountry: 'AE' },
    areaServed: ['AE', 'SA', 'QA', 'KW', 'BH', 'OM'],
    priceRange: '$$$',
    openingHoursSpecification: [{
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00', closes: '18:00',
    }],
    sameAs: [],
  }
}

function webpageJsonLd(route, canonical) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: route.title,
    description: route.description,
    url: canonical,
    image: `${SITE}/og-image.jpg`,
    inLanguage: 'en-AE',
    isPartOf: { '@type': 'WebSite', name: 'Ignite Scale', url: SITE },
  }
}

function breadcrumbJsonLd(crumbs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((b, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: b.name,
      item: b.url.startsWith('http') ? b.url : `${SITE}${b.url}`,
    })),
  }
}

function articleJsonLd(route, canonical) {
  const a = route.article
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: a.headline || route.title,
    description: route.description,
    image: `${SITE}/og-image.jpg`,
    author: { '@type': 'Organization', name: 'Ignite Scale', url: SITE },
    publisher: {
      '@type': 'Organization',
      name: 'Ignite Scale',
      logo: { '@type': 'ImageObject', url: `${SITE}/logo.svg` },
    },
    datePublished: a.datePublished,
    dateModified: a.dateModified || a.datePublished,
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
  }
}

function renderHead(route) {
  const canonical = route.path === '/' ? `${SITE}/` : `${SITE}${route.path}`
  const arCanonical = route.path === '/' ? `${SITE}/ar/` : `${SITE}/ar${route.path}`
  const ogType = route.article ? 'article' : 'website'

  const scripts = []
  scripts.push(jsonScript('organization', organizationJsonLd()))
  scripts.push(jsonScript('webpage', webpageJsonLd(route, canonical)))
  if (route.breadcrumbs && route.breadcrumbs.length > 1) {
    scripts.push(jsonScript('breadcrumb', breadcrumbJsonLd(route.breadcrumbs)))
  }
  if (route.article) {
    scripts.push(jsonScript('article', articleJsonLd(route, canonical)))
  }

  return [
    `<title>${escapeHtml(route.title)}</title>`,
    `<meta name="description" content="${escapeHtml(route.description)}" />`,
    `<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />`,
    `<meta name="author" content="Ignite Scale" />`,
    `<link rel="canonical" href="${canonical}" />`,
    `<link rel="alternate" hreflang="en" href="${canonical}" />`,
    `<link rel="alternate" hreflang="en-AE" href="${canonical}" />`,
    `<link rel="alternate" hreflang="x-default" href="${canonical}" />`,
    `<meta name="geo.region" content="AE-DU" />`,
    `<meta name="geo.placename" content="Dubai" />`,
    `<meta property="og:type" content="${ogType}" />`,
    `<meta property="og:site_name" content="Ignite Scale" />`,
    `<meta property="og:url" content="${canonical}" />`,
    `<meta property="og:title" content="${escapeHtml(route.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(route.description)}" />`,
    `<meta property="og:image" content="${SITE}/og-image.jpg" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="Ignite Scale, Dubai growth agency" />`,
    `<meta property="og:locale" content="en_US" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:site" content="@ignitescale" />`,
    `<meta name="twitter:creator" content="@ignitescale" />`,
    `<meta name="twitter:title" content="${escapeHtml(route.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(route.description)}" />`,
    `<meta name="twitter:image" content="${SITE}/og-image.jpg" />`,
    ...scripts,
  ].join('\n    ')
}

/* Replace head meta in a copy of the shell, write to dist/<route>/index.html. */
function generate(route) {
  const newHead = renderHead(route)

  // Strip the homepage SEO block (everything from <title> to closing JSON-LD scripts that were generated for homepage) — we just replace the head meta block in place.
  // Strategy: replace from <title> up to the </script> right before fonts preconnect, OR if simpler, replace from <title> up through closing JSON-LD.
  // Simpler: target the block from `<title>` to the closing JSON-LD `</script>` that ends with `}\n    </script>`.

  let html = shell

  // Pull out and replace the meta block. Find <title>...</title> ... </script>(.|\n)*?<link rel="preconnect"
  // Replace the existing <title> + meta + JSON-LD up to (but not including) the preconnect link.
  const preconnectIdx = html.indexOf('<link rel="preconnect"')
  const titleIdx = html.indexOf('<title>')
  if (titleIdx < 0 || preconnectIdx < 0 || preconnectIdx < titleIdx) {
    throw new Error('Could not locate head block boundaries')
  }
  html = html.slice(0, titleIdx) + newHead + '\n\n    ' + html.slice(preconnectIdx)

  const outDir = route.path === '/' ? DIST : join(DIST, route.path.replace(/^\//, ''))
  mkdirSync(outDir, { recursive: true })
  writeFileSync(join(outDir, 'index.html'), html)
  console.log(`✓ ${route.path}  →  ${outDir.replace(DIST + '/', '')}/index.html`)
}

console.log(`Prerendering ${ROUTES.length} routes…`)
for (const route of ROUTES) generate(route)
console.log(`✓ Done`)
