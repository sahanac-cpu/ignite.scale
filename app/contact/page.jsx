import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'
import BookingForm from '@/components/BookingForm'
import { site, stats } from '@/lib/site'

export const metadata = {
  title: 'Book a Strategy Call — Contact Ignite Scale Dubai',
  description:
    'Book a free 30-minute strategy call with Ignite Scale. We’ll review your funnel, find the biggest constraint on growth and tell you honestly if we can help.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Contact"
        title="Book a strategy call."
        intro="Thirty minutes, no pitch deck. We review your current funnel, find the single biggest thing holding back growth, and tell you plainly whether we’re the right team to fix it."
      />

      <section className="shell" style={{ paddingBottom: 'clamp(72px, 11vw, 160px)' }}>
        <div className="contact-grid">
          <Reveal>
            <div style={{ padding: 'clamp(24px, 3.5vw, 40px)', border: '1px solid var(--line)', borderRadius: 18, background: 'var(--bg-1)' }}>
              <BookingForm />
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <aside style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
              <div>
                <span className="meta">Direct</span>
                <div style={{ marginTop: 14, display: 'grid', gap: 8 }}>
                  <a href={`mailto:${site.email}`} className="ulink" data-cursor="hover" style={{ fontSize: 18, color: 'var(--ink)', width: 'fit-content' }}>{site.email}</a>
                  <span style={{ fontSize: 18, color: 'var(--ink-dim)' }}>{site.phone}</span>
                </div>
              </div>
              <div>
                <span className="meta">Studio</span>
                <p style={{ marginTop: 14, fontSize: 18, color: 'var(--ink-dim)', lineHeight: 1.6 }}>{site.city}<br />{site.region}</p>
              </div>
              <hr className="rule" />
              <dl style={{ display: 'grid', gap: 18 }}>
                {stats.map((s) => (
                  <div key={s.label} style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
                    <dd style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 22, color: 'var(--accent-soft)' }}>{s.value}</dd>
                    <dt className="meta">{s.label}</dt>
                  </div>
                ))}
              </dl>
            </aside>
          </Reveal>
        </div>

        <style>{`
          .contact-grid { display: grid; gap: clamp(32px, 5vw, 64px); }
          @media (min-width: 880px) { .contact-grid { grid-template-columns: 1.4fr 1fr; align-items: start; } }
        `}</style>
      </section>
    </>
  )
}
