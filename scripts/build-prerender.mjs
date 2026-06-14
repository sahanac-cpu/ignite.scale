/* Per-route head-templating prerender (EN + AR).
   For each route, generates dist/<route>/index.html AND dist/ar/<route>/index.html
   with locale-specific <head>: title, description, canonical, JSON-LD, dir, lang.
   Body stays the same SPA bundle that hydrates and reads locale from URL. */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { resolve, join } from 'node:path'
import { SITE, allLocaleRoutes } from './seo-routes.mjs'

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

function webpageJsonLd(route, canonical, locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: route.title,
    description: route.description,
    url: canonical,
    image: `${SITE}/og-image.jpg`,
    inLanguage: locale === 'ar' ? 'ar-AE' : 'en-AE',
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

function articleJsonLd(route, canonical, locale) {
  const a = route.article
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: a.headline || route.title,
    description: route.description,
    image: `${SITE}/og-image.jpg`,
    inLanguage: locale === 'ar' ? 'ar-AE' : 'en-AE',
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

function serviceJsonLd(route, canonical) {
  const s = route.service
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: s.name,
    serviceType: s.serviceType,
    description: s.description,
    url: canonical,
    provider: { '@type': 'Organization', name: 'Ignite Scale', url: SITE, '@id': `${SITE}#org` },
    areaServed: [
      { '@type': 'Country', name: 'United Arab Emirates' },
      { '@type': 'Country', name: 'Saudi Arabia' },
      { '@type': 'City', name: 'Dubai' },
    ],
  }
}

function howToJsonLd(route) {
  const h = route.howTo
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: h.name,
    totalTime: h.totalTime,
    step: h.steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  }
}

function renderHead(route) {
  const locale = route.locale
  const enUrl = route.path === '/' ? `${SITE}/` : `${SITE}${route.path}`
  const arUrl = route.path === '/' ? `${SITE}/ar` : `${SITE}/ar${route.path}`
  const canonical = locale === 'ar' ? arUrl : enUrl
  const ogType = route.article ? 'article' : 'website'
  const ogLocale = locale === 'ar' ? 'ar_AE' : 'en_US'
  const ogLocaleAlt = locale === 'ar' ? 'en_US' : 'ar_AE'

  const scripts = []
  scripts.push(jsonScript('organization', organizationJsonLd()))
  scripts.push(jsonScript('webpage', webpageJsonLd(route, canonical, locale)))
  if (route.breadcrumbs && route.breadcrumbs.length > 1) {
    scripts.push(jsonScript('breadcrumb', breadcrumbJsonLd(route.breadcrumbs)))
  }
  if (route.article) {
    scripts.push(jsonScript('article', articleJsonLd(route, canonical, locale)))
  }
  if (route.service) {
    scripts.push(jsonScript('service', serviceJsonLd(route, canonical)))
  }
  if (route.howTo) {
    scripts.push(jsonScript('howto', howToJsonLd(route)))
  }

  return [
    `<title>${escapeHtml(route.title)}</title>`,
    `<meta name="description" content="${escapeHtml(route.description)}" />`,
    `<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />`,
    `<meta name="author" content="Ignite Scale" />`,
    `<link rel="canonical" href="${canonical}" />`,
    `<link rel="alternate" hreflang="en" href="${enUrl}" />`,
    `<link rel="alternate" hreflang="en-AE" href="${enUrl}" />`,
    `<link rel="alternate" hreflang="ar-AE" href="${arUrl}" />`,
    `<link rel="alternate" hreflang="x-default" href="${enUrl}" />`,
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
    `<meta property="og:locale" content="${ogLocale}" />`,
    `<meta property="og:locale:alternate" content="${ogLocaleAlt}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:site" content="@ignitescale" />`,
    `<meta name="twitter:creator" content="@ignitescale" />`,
    `<meta name="twitter:title" content="${escapeHtml(route.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(route.description)}" />`,
    `<meta name="twitter:image" content="${SITE}/og-image.jpg" />`,
    ...scripts,
  ].join('\n    ')
}

function generate(route) {
  const newHead = renderHead(route)
  const locale = route.locale

  let html = shell

  /* Swap the <html lang=...> and add dir if Arabic. */
  if (locale === 'ar') {
    html = html.replace(/<html lang="en">/, '<html lang="ar" dir="rtl">')
  }

  const preconnectIdx = html.indexOf('<link rel="preconnect"')
  const titleIdx = html.indexOf('<title>')
  if (titleIdx < 0 || preconnectIdx < 0 || preconnectIdx < titleIdx) {
    throw new Error('Could not locate head block boundaries')
  }
  html = html.slice(0, titleIdx) + newHead + '\n\n    ' + html.slice(preconnectIdx)

  /* Output path:
     EN  /                                  → dist/index.html
     EN  /services                          → dist/services/index.html
     AR  /ar                                → dist/ar/index.html
     AR  /ar/services                       → dist/ar/services/index.html */
  const outDir = route.urlPath === '/' ? DIST : join(DIST, route.urlPath.replace(/^\//, ''))
  mkdirSync(outDir, { recursive: true })
  writeFileSync(join(outDir, 'index.html'), html)
  console.log(`✓ ${route.urlPath}  →  ${outDir.replace(DIST + '/', '')}/index.html`)
}

const routes = allLocaleRoutes()
console.log(`Prerendering ${routes.length} routes (EN + AR)…`)
for (const r of routes) generate(r)
console.log(`✓ Done`)
