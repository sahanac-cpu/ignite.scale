import Link from 'next/link'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'
import { services } from '@/lib/content'

export const metadata = {
  title: 'Social Media Marketing & Paid Ads Services in Dubai',
  description:
    'Paid social, content production, conversion funnels and brand strategy for Dubai and UAE brands. One connected growth engine measured against pipeline.',
  alternates: { canonical: '/services' },
}

const detail = {
  'paid-social': { deliverables: ['Meta, TikTok & Snap account builds', 'Audience & offer testing', 'Weekly spend reallocation', 'Transparent performance reporting'] },
  'content-creative': { deliverables: ['UGC & in-studio production', 'Hook-led short-form editing', 'Arabic + English versions', 'Monthly content calendars'] },
  'funnels-cro': { deliverables: ['Landing page design & build', 'Lead routing into your CRM', 'A/B testing roadmap', 'Form & checkout optimisation'] },
  'brand-strategy': { deliverables: ['Positioning workshops', 'Messaging frameworks', 'Visual identity systems', 'Go-to-market planning'] },
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        kicker="Services"
        title="Everything you need to scale, under one roof."
        intro="We run media, creative, funnels and brand as a single team. No agency hand-offs, no finger-pointing when a number slips, one group accountable to your pipeline."
      />

      <section className="shell" style={{ paddingBottom: 'clamp(72px, 11vw, 160px)' }}>
        <div style={{ display: 'grid', gap: 16 }}>
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.05}>
              <article className="svc-row">
                <div className="svc-row-head">
                  <span style={{ fontFamily: 'var(--font-display)', color: 'var(--accent)', fontSize: 14, fontWeight: 600 }}>{String(i + 1).padStart(2, '0')}</span>
                  <h2 style={{ fontSize: 'clamp(26px, 3.4vw, 40px)', marginBlock: '14px 14px' }}>{s.title}</h2>
                  <p style={{ color: 'var(--ink-dim)', fontSize: 16, lineHeight: 1.7, maxWidth: '46ch' }}>{s.summary}</p>
                </div>
                <ul className="svc-row-list">
                  {detail[s.slug].deliverables.map((d) => (
                    <li key={d} style={{ display: 'flex', gap: 12, alignItems: 'baseline', paddingBlock: 10, borderBottom: '1px solid var(--line)' }}>
                      <span style={{ color: 'var(--accent)', fontSize: 13 }}>✦</span>
                      <span style={{ fontSize: 15.5, color: 'var(--ink)' }}>{d}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div style={{ marginTop: 'clamp(48px, 7vw, 80px)', display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center', justifyContent: 'space-between', padding: 'clamp(28px, 4vw, 44px)', border: '1px solid var(--line)', borderRadius: 0, background: 'var(--bg-1)' }}>
            <h2 style={{ fontSize: 'clamp(22px, 3vw, 32px)', maxWidth: '20ch' }}>Not sure which mix you need? That’s the first call.</h2>
            <Link href="/contact" className="btn btn-primary" data-cursor="hover">Book a strategy call →</Link>
          </div>
        </Reveal>
      </section>

      <style>{`
        .svc-row { display: grid; gap: 24px; padding: clamp(26px, 3.5vw, 44px); border: 1px solid var(--line); border-radius: 0; background: var(--bg-1); }
        @media (min-width: 820px) { .svc-row { grid-template-columns: 1fr 1fr; gap: 56px; align-items: start; } }
      `}</style>
    </>
  )
}
