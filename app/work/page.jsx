import Link from 'next/link'
import Image from 'next/image'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'
import { work } from '@/lib/content'

export const metadata = {
  title: 'Case Studies & Results — Marketing Agency Dubai',
  description:
    'Real ROAS, lower cost per lead and pipeline growth for UAE real estate, hospitality and luxury retail brands. See Ignite Scale case studies.',
  alternates: { canonical: '/work' },
}

export default function WorkPage() {
  return (
    <>
      <PageHero
        kicker="Selected work"
        title="Growth you can measure, not just admire."
        intro="Anonymised engagements across the Emirates. Client names are held under NDA, so these are presented by sector. The focus is the system and the outcome it’s built to reach."
      />

      <section className="shell" style={{ paddingBottom: 'clamp(72px, 11vw, 160px)', display: 'grid', gap: 'clamp(32px, 5vw, 64px)' }}>
        {work.map((w, i) => (
          <Reveal key={w.slug} delay={i * 0.05}>
            <article className="case">
              <div className="case-media">
                <Image src={w.image} alt={w.alt} fill sizes="(max-width: 820px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
              </div>
              <div className="case-body">
                <span className="meta">{w.sector}</span>
                <h2 style={{ fontSize: 'clamp(28px, 4vw, 46px)', marginBlock: '12px 16px' }}>{w.client}</h2>
                <p style={{ color: 'var(--ink-dim)', fontSize: 16.5, lineHeight: 1.7, maxWidth: '44ch' }}>{w.blurb}</p>
                <dl className="case-metrics">
                  {w.metrics.map((m) => (
                    <div key={m.k}>
                      <dd style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'clamp(24px, 3vw, 34px)', color: 'var(--accent-soft)' }}>{m.v}</dd>
                      <dt className="meta" style={{ marginTop: 6 }}>{m.k}</dt>
                    </div>
                  ))}
                </dl>
              </div>
            </article>
          </Reveal>
        ))}

        <Reveal>
          <div style={{ textAlign: 'center', paddingTop: 'clamp(16px, 3vw, 32px)' }}>
            <p style={{ color: 'var(--ink-dim)', fontSize: 17, marginBottom: 22 }}>Your brand could be the next case study.</p>
            <Link href="/contact" className="btn btn-primary" data-cursor="hover">Start a conversation →</Link>
          </div>
        </Reveal>
      </section>

      <style>{`
        .case { display: grid; gap: 24px; border: 1px solid var(--line); border-radius: 20px; overflow: hidden; background: var(--bg-1); }
        .case-media { position: relative; aspect-ratio: 16/10; }
        .case-body { padding: clamp(24px, 3.5vw, 44px); }
        .case-metrics { display: flex; flex-wrap: wrap; gap: clamp(24px, 4vw, 48px); margin-top: clamp(24px, 3vw, 36px); }
        @media (min-width: 820px) {
          .case { grid-template-columns: 1fr 1fr; align-items: stretch; }
          .case:nth-child(even) .case-media { order: 2; }
          .case-media { aspect-ratio: auto; min-height: 380px; }
          .case-body { padding: clamp(36px, 4vw, 56px); display: flex; flex-direction: column; justify-content: center; }
        }
      `}</style>
    </>
  )
}
