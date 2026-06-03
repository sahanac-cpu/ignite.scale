import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import Reveal from '@/components/Reveal'
import { journal } from '@/lib/content'
import { site } from '@/lib/site'

export function generateStaticParams() {
  return journal.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const a = journal.find((x) => x.slug === slug)
  if (!a) return {}
  return {
    title: a.title,
    description: a.excerpt,
    alternates: { canonical: `/journal/${a.slug}` },
    openGraph: { title: a.title, description: a.excerpt, type: 'article', images: [a.image] },
  }
}

function fmt(d) {
  return new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default async function ArticlePage({ params }) {
  const { slug } = await params
  const a = journal.find((x) => x.slug === slug)
  if (!a) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: a.title,
    description: a.excerpt,
    datePublished: a.date,
    image: a.image,
    author: { '@type': 'Organization', name: site.legalName },
    publisher: { '@type': 'Organization', name: site.legalName },
  }

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header style={{ paddingTop: 'clamp(130px, 18vh, 200px)' }} className="shell">
        <Link href="/journal" className="ulink" data-cursor="hover" style={{ color: 'var(--ink-dim)', fontSize: 14 }}>← Journal</Link>
        <div style={{ marginTop: 26, display: 'flex', gap: 14, alignItems: 'center' }}>
          <span className="meta" style={{ color: 'var(--accent)' }}>{a.tag}</span>
          <span className="meta">{fmt(a.date)}</span>
          <span className="meta">{a.readingTime}</span>
        </div>
        <h1 style={{ marginTop: 18, fontSize: 'clamp(30px, 5vw, 60px)', maxWidth: '20ch', letterSpacing: '-0.03em' }}>{a.title}</h1>
      </header>

      <div className="shell" style={{ marginTop: 'clamp(32px, 5vw, 56px)' }}>
        <div style={{ position: 'relative', aspectRatio: '16/9', borderRadius: 18, overflow: 'hidden', border: '1px solid var(--line)' }}>
          <Image src={a.image} alt={a.alt} fill sizes="100vw" priority style={{ objectFit: 'cover' }} />
        </div>
      </div>

      <div className="shell" style={{ paddingBlock: 'clamp(40px, 6vw, 72px)', maxWidth: 720 }}>
        {a.body.map((para, i) => (
          <Reveal key={i} delay={i * 0.03}>
            <p style={{ fontSize: 'clamp(16px, 1.7vw, 19px)', lineHeight: 1.85, color: 'var(--ink-dim)', marginBottom: 26 }}>{para}</p>
          </Reveal>
        ))}

        <Reveal>
          <div style={{ marginTop: 24, paddingTop: 32, borderTop: '1px solid var(--line)', display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(18px, 2.4vw, 24px)', maxWidth: '20ch' }}>Want this working for your brand?</span>
            <Link href="/contact" className="btn btn-primary" data-cursor="hover">Book a strategy call →</Link>
          </div>
        </Reveal>
      </div>
    </article>
  )
}
