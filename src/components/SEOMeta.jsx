import { useEffect } from 'react'

const SITE = 'https://ignite-scale.com'
const BRAND = 'Ignite Scale'
const PHONE = '+442079460958'
const EMAIL = 'admin@ignite-scale.com'

function upsertMeta(selector, attrs) {
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement('meta')
    for (const [k, v] of Object.entries(attrs.create)) el.setAttribute(k, v)
    document.head.appendChild(el)
  }
  el.setAttribute(attrs.contentAttr || 'content', attrs.value)
}

function upsertLink(rel, href, extra = {}) {
  let el = document.head.querySelector(`link[rel="${rel}"]${extra.hreflang ? `[hreflang="${extra.hreflang}"]` : ''}`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    if (extra.hreflang) el.setAttribute('hreflang', extra.hreflang)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

function upsertJsonLd(key, payload) {
  let el = document.head.querySelector(`script[data-schema="${key}"]`)
  if (!el) {
    el = document.createElement('script')
    el.setAttribute('type', 'application/ld+json')
    el.setAttribute('data-schema', key)
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(payload)
}

function removeJsonLd(key) {
  const el = document.head.querySelector(`script[data-schema="${key}"]`)
  if (el) el.remove()
}

export default function SEOMeta({
  title,
  description,
  canonical,
  ogImage = `${SITE}/og-image.jpg`,
  author = BRAND,
  locale = 'en',
  breadcrumbs,
  article,
}) {
  useEffect(() => {
    const absCanonical = canonical || SITE
    const arCanonical = absCanonical.includes('/ar/')
      ? absCanonical
      : absCanonical.replace(SITE, `${SITE}/ar`).replace(`${SITE}/ar/`, `${SITE}/ar/`)
    const enCanonical = absCanonical.replace('/ar/', '/')

    document.title = title

    document.documentElement.setAttribute('lang', locale === 'ar' ? 'ar' : 'en')
    document.documentElement.setAttribute('dir', locale === 'ar' ? 'rtl' : 'ltr')

    upsertMeta('meta[name="description"]', { create: { name: 'description' }, value: description })
    upsertMeta('meta[name="author"]', { create: { name: 'author' }, value: author })
    upsertMeta('meta[name="robots"]', { create: { name: 'robots' }, value: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' })

    upsertLink('canonical', absCanonical)
    upsertLink('alternate', enCanonical, { hreflang: 'en' })
    upsertLink('alternate', enCanonical, { hreflang: 'en-AE' })
    upsertLink('alternate', enCanonical, { hreflang: 'x-default' })

    upsertMeta('meta[property="og:type"]', { create: { property: 'og:type' }, value: article ? 'article' : 'website' })
    upsertMeta('meta[property="og:site_name"]', { create: { property: 'og:site_name' }, value: BRAND })
    upsertMeta('meta[property="og:title"]', { create: { property: 'og:title' }, value: title })
    upsertMeta('meta[property="og:description"]', { create: { property: 'og:description' }, value: description })
    upsertMeta('meta[property="og:url"]', { create: { property: 'og:url' }, value: absCanonical })
    upsertMeta('meta[property="og:image"]', { create: { property: 'og:image' }, value: ogImage })
    upsertMeta('meta[property="og:image:width"]', { create: { property: 'og:image:width' }, value: '1200' })
    upsertMeta('meta[property="og:image:height"]', { create: { property: 'og:image:height' }, value: '630' })
    upsertMeta('meta[property="og:locale"]', { create: { property: 'og:locale' }, value: locale === 'ar' ? 'ar_AE' : 'en_US' })

    upsertMeta('meta[name="twitter:card"]', { create: { name: 'twitter:card' }, value: 'summary_large_image' })
    upsertMeta('meta[name="twitter:title"]', { create: { name: 'twitter:title' }, value: title })
    upsertMeta('meta[name="twitter:description"]', { create: { name: 'twitter:description' }, value: description })
    upsertMeta('meta[name="twitter:image"]', { create: { name: 'twitter:image' }, value: ogImage })

    upsertJsonLd('organization', {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      '@id': `${SITE}#org`,
      name: BRAND,
      alternateName: ['ignite-scale', 'ignite.scale', 'ignite-scale.com', 'IgniteScale'],
      description: 'London growth agency engineering paid social, content and funnels for luxury, real estate, hospitality and B2B brands across the United Kingdom. Remote-first operation serving clients nationwide.',
      url: SITE,
      logo: `${SITE}/logo.svg`,
      image: `${SITE}/og-image.jpg`,
      telephone: PHONE,
      email: EMAIL,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'London',
        addressCountry: 'GB',
      },
      areaServed: [
        { '@type': 'AdministrativeArea', name: 'United Kingdom' },
        { '@type': 'AdministrativeArea', name: 'England' },
        { '@type': 'AdministrativeArea', name: 'Scotland' },
        { '@type': 'AdministrativeArea', name: 'Wales' },
        { '@type': 'AdministrativeArea', name: 'Northern Ireland' },
      ],
      priceRange: '$$$',
      openingHoursSpecification: [{
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '18:00',
      }],
      sameAs: [
        'https://www.linkedin.com/company/119244218',
        'https://www.trustpilot.com/review/ignite-scale.com',
      ],
    })

    upsertJsonLd('webpage', {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: title,
      description,
      url: absCanonical,
      image: ogImage,
      inLanguage: locale === 'ar' ? 'ar-AE' : 'en-AE',
      isPartOf: { '@type': 'WebSite', name: BRAND, url: SITE },
    })

    if (breadcrumbs && breadcrumbs.length) {
      upsertJsonLd('breadcrumb', {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((b, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: b.name,
          item: b.url.startsWith('http') ? b.url : `${SITE}${b.url}`,
        })),
      })
    } else {
      removeJsonLd('breadcrumb')
    }

    if (article) {
      upsertJsonLd('article', {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: article.headline || title,
        description,
        image: ogImage,
        author: { '@type': 'Organization', name: BRAND, url: SITE },
        publisher: {
          '@type': 'Organization',
          name: BRAND,
          logo: { '@type': 'ImageObject', url: `${SITE}/logo.svg` },
        },
        datePublished: article.datePublished,
        dateModified: article.dateModified || article.datePublished,
        mainEntityOfPage: { '@type': 'WebPage', '@id': absCanonical },
      })
    } else {
      removeJsonLd('article')
    }
  }, [title, description, canonical, ogImage, author, locale, JSON.stringify(breadcrumbs), JSON.stringify(article)])

  return null
}
