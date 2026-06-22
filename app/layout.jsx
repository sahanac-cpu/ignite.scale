import './globals.css'
import { Inter, Cormorant_Garamond } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { site } from '@/lib/site'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Cursor from '@/components/Cursor'
import SmoothScroll from '@/components/SmoothScroll'
import ScrollProgress from '@/components/ScrollProgress'
import PageTransition from '@/components/PageTransition'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-neue',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
})

/* Cormorant Garamond — high-contrast editorial serif. Gold on black. */
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-editorial',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
})

export const metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: 'Ignite Scale — Growth Marketing Studio in Dubai, UAE',
    template: '%s · Ignite Scale',
  },
  description: site.description,
  keywords: [
    'marketing agency Dubai',
    'social media marketing Dubai',
    'paid ads UAE',
    'performance marketing Dubai',
    'growth studio UAE',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    url: site.domain,
    siteName: site.legalName,
    title: 'Ignite Scale — Growth Marketing Studio in Dubai',
    description: site.description,
  },
  twitter: { card: 'summary_large_image', title: 'Ignite Scale', description: site.description },
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
  icons: { icon: '/favicon.svg' },
}

export const viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
}

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: site.legalName,
  description: site.description,
  url: site.domain,
  email: site.email,
  areaServed: 'United Arab Emirates',
  address: { '@type': 'PostalAddress', addressLocality: 'Dubai', addressCountry: 'AE' },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <SmoothScroll />
        <Cursor />
        <ScrollProgress />
        <Navbar />
        <PageTransition>
          <main>{children}</main>
          <Footer />
        </PageTransition>
        <div className="grain-overlay" aria-hidden="true" />
        <Analytics />
      </body>
    </html>
  )
}
