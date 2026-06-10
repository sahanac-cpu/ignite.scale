import { useEffect } from 'react'

export default function SEOMeta({
  title,
  description,
  canonical,
  ogImage = 'https://ignite-scale.com/og-image.jpg',
  keywords,
  author = 'Ignite Scale',
  twitterHandle = '@ignitescale',
}) {
  useEffect(() => {
    // Title
    document.title = title

    // Meta: Description
    let desc = document.querySelector('meta[name="description"]')
    if (!desc) {
      desc = document.createElement('meta')
      desc.setAttribute('name', 'description')
      document.head.appendChild(desc)
    }
    desc.setAttribute('content', description)

    // Meta: Keywords
    if (keywords) {
      let meta = document.querySelector('meta[name="keywords"]')
      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute('name', 'keywords')
        document.head.appendChild(meta)
      }
      meta.setAttribute('content', keywords)
    }

    // Meta: Viewport (for mobile)
    let viewport = document.querySelector('meta[name="viewport"]')
    if (!viewport) {
      viewport = document.createElement('meta')
      viewport.setAttribute('name', 'viewport')
      viewport.setAttribute('content', 'width=device-width, initial-scale=1.0')
      document.head.appendChild(viewport)
    }

    // Meta: Charset
    let charset = document.querySelector('meta[charset]')
    if (!charset) {
      charset = document.createElement('meta')
      charset.setAttribute('charset', 'UTF-8')
      document.head.appendChild(charset)
    }

    // Meta: Author
    let authorMeta = document.querySelector('meta[name="author"]')
    if (!authorMeta) {
      authorMeta = document.createElement('meta')
      authorMeta.setAttribute('name', 'author')
      document.head.appendChild(authorMeta)
    }
    authorMeta.setAttribute('content', author)

    // Canonical
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]')
      if (!link) {
        link = document.createElement('link')
        link.setAttribute('rel', 'canonical')
        document.head.appendChild(link)
      }
      link.setAttribute('href', canonical)
    }

    // OG: Title
    let ogTitle = document.querySelector('meta[property="og:title"]')
    if (!ogTitle) {
      ogTitle = document.createElement('meta')
      ogTitle.setAttribute('property', 'og:title')
      document.head.appendChild(ogTitle)
    }
    ogTitle.setAttribute('content', title)

    // OG: Description
    let ogDesc = document.querySelector('meta[property="og:description"]')
    if (!ogDesc) {
      ogDesc = document.createElement('meta')
      ogDesc.setAttribute('property', 'og:description')
      document.head.appendChild(ogDesc)
    }
    ogDesc.setAttribute('content', description)

    // OG: URL
    if (canonical) {
      let ogUrl = document.querySelector('meta[property="og:url"]')
      if (!ogUrl) {
        ogUrl = document.createElement('meta')
        ogUrl.setAttribute('property', 'og:url')
        document.head.appendChild(ogUrl)
      }
      ogUrl.setAttribute('href', canonical)
    }

    // OG: Image
    let ogImageMeta = document.querySelector('meta[property="og:image"]')
    if (!ogImageMeta) {
      ogImageMeta = document.createElement('meta')
      ogImageMeta.setAttribute('property', 'og:image')
      document.head.appendChild(ogImageMeta)
    }
    ogImageMeta.setAttribute('content', ogImage)

    // OG: Type
    let ogType = document.querySelector('meta[property="og:type"]')
    if (!ogType) {
      ogType = document.createElement('meta')
      ogType.setAttribute('property', 'og:type')
      document.head.appendChild(ogType)
    }
    ogType.setAttribute('content', 'website')

    // Twitter Card
    let twitterCard = document.querySelector('meta[name="twitter:card"]')
    if (!twitterCard) {
      twitterCard = document.createElement('meta')
      twitterCard.setAttribute('name', 'twitter:card')
      document.head.appendChild(twitterCard)
    }
    twitterCard.setAttribute('content', 'summary_large_image')

    let twitterTitle = document.querySelector('meta[name="twitter:title"]')
    if (!twitterTitle) {
      twitterTitle = document.createElement('meta')
      twitterTitle.setAttribute('name', 'twitter:title')
      document.head.appendChild(twitterTitle)
    }
    twitterTitle.setAttribute('content', title)

    let twitterDesc = document.querySelector('meta[name="twitter:description"]')
    if (!twitterDesc) {
      twitterDesc = document.createElement('meta')
      twitterDesc.setAttribute('name', 'twitter:description')
      document.head.appendChild(twitterDesc)
    }
    twitterDesc.setAttribute('content', description)

    if (twitterHandle) {
      let twitterHandle_ = document.querySelector('meta[name="twitter:creator"]')
      if (!twitterHandle_) {
        twitterHandle_ = document.createElement('meta')
        twitterHandle_.setAttribute('name', 'twitter:creator')
        document.head.appendChild(twitterHandle_)
      }
      twitterHandle_.setAttribute('content', twitterHandle)
    }

    // Robots meta
    let robots = document.querySelector('meta[name="robots"]')
    if (!robots) {
      robots = document.createElement('meta')
      robots.setAttribute('name', 'robots')
      document.head.appendChild(robots)
    }
    robots.setAttribute('content', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1')

    // JSON-LD Schema: Organization
    let organizationSchema = document.querySelector('script[type="application/ld+json"][data-schema="organization"]')
    if (!organizationSchema) {
      organizationSchema = document.createElement('script')
      organizationSchema.setAttribute('type', 'application/ld+json')
      organizationSchema.setAttribute('data-schema', 'organization')
      document.head.appendChild(organizationSchema)
    }
    organizationSchema.innerHTML = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Ignite Scale',
      description: 'Dubai-based digital agency specializing in paid social, content creation, and lead generation',
      url: 'https://ignite-scale.com',
      telephone: '+971-XXXXXXXXX',
      email: 'hello@ignite-scale.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Dubai',
        addressRegion: 'Dubai',
        addressCountry: 'AE',
      },
      areaServed: ['AE', 'UAE'],
      priceRange: 'High-ticket B2B',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.6',
        ratingCount: '50',
      },
    })

    // JSON-LD Schema: WebPage
    let webpageSchema = document.querySelector('script[type="application/ld+json"][data-schema="webpage"]')
    if (!webpageSchema) {
      webpageSchema = document.createElement('script')
      webpageSchema.setAttribute('type', 'application/ld+json')
      webpageSchema.setAttribute('data-schema', 'webpage')
      document.head.appendChild(webpageSchema)
    }
    webpageSchema.innerHTML = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: title,
      description: description,
      url: canonical,
      image: ogImage,
      datePublished: new Date().toISOString(),
      inLanguage: 'en-US',
      isPartOf: {
        '@type': 'WebSite',
        name: 'Ignite Scale',
        url: 'https://ignite-scale.com',
      },
    })
  }, [title, description, canonical, ogImage, keywords, author, twitterHandle])

  return null
}
