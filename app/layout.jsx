import './globals.css'
import { Bodoni_Moda, Hanken_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { site } from '@/lib/site'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Cursor from '@/components/Cursor'
import Aurora from '@/components/Aurora'
import PageTransition from '@/components/PageTransition'

const display = Bodoni_Moda({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
})

const sans = Hanken_Grotesk({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
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
  themeColor: '#06110E',
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
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <Aurora />
        <Cursor />
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
