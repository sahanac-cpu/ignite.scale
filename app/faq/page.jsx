import Link from 'next/link'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'
import Accordion from '@/components/Accordion'
import { faqs } from '@/lib/content'

export const metadata = {
  title: 'FAQ — Working With a Dubai Growth Studio',
  description:
    'Costs, timelines, who we work with and what to expect. Answers to the most common questions about working with Ignite Scale in Dubai and the UAE.',
  alternates: { canonical: '/faq' },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

export default function FAQPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <PageHero
        kicker="FAQ"
        title="The questions everyone asks first."
        intro="If yours isn’t here, the strategy call is the fastest way to a straight answer."
      />

      <section className="shell" style={{ paddingBottom: 'clamp(72px, 11vw, 160px)', maxWidth: 920 }}>
        <Reveal><Accordion items={faqs} /></Reveal>
        <Reveal>
          <div style={{ marginTop: 'clamp(40px, 6vw, 64px)', display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center' }}>
            <span style={{ color: 'var(--ink-dim)', fontSize: 16 }}>Still have a question?</span>
            <Link href="/contact" className="btn btn-ghost" data-cursor="hover">Ask us directly →</Link>
          </div>
        </Reveal>
      </section>
    </>
  )
}
