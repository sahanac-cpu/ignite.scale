import Link from 'next/link'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'
import { process } from '@/lib/content'

export const metadata = {
  title: 'Our Process — How We Scale Dubai Brands',
  description:
    'Diagnose, build, scale, compound. A four-step growth process that gets cheaper to run as it scales. See how Ignite Scale works with UAE brands.',
  alternates: { canonical: '/process' },
}

const expanded = {
  '01': ['Funnel & ad-account audit', 'Competitor & offer teardown', 'Growth model & forecast'],
  '02': ['Account architecture', 'Creative system & first assets', 'Landing pages & tracking'],
  '03': ['Daily optimisation', 'Weekly creative refresh', 'Spend reallocation to winners'],
  '04': ['Brand & retargeting layer', 'Lower blended acquisition cost', 'Quarterly strategy reviews'],
}

export default function ProcessPage() {
  return (
    <>
      <PageHero
        kicker="Process"
        title="A loop, not a launch and pray."
        intro="Most agencies set up campaigns and hope. We run a tight four-step loop that compounds: each cycle teaches the next, so your cost per result falls as spend rises."
      />

      <section className="shell" style={{ paddingBottom: 'clamp(72px, 11vw, 160px)' }}>
        <ol className="timeline">
          {process.map((p, i) => (
            <Reveal as="li" key={p.n} delay={i * 0.06} className="tl-step">
              <div className="tl-marker">
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 15, color: 'var(--bg-0)' }}>{p.n}</span>
              </div>
              <div className="tl-content">
                <h2 style={{ fontSize: 'clamp(26px, 3.6vw, 42px)', marginBottom: 14 }}>{p.title}</h2>
                <p style={{ color: 'var(--ink-dim)', fontSize: 16.5, lineHeight: 1.7, maxWidth: '50ch' }}>{p.body}</p>
                <ul style={{ marginTop: 22, display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                  {expanded[p.n].map((d) => (
                    <li key={d} className="glass-pill" style={{ padding: '8px 16px', fontSize: 13.5, color: 'var(--ink-dim)' }}>{d}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal>
          <div style={{ marginTop: 'clamp(40px, 6vw, 72px)', textAlign: 'center' }}>
            <Link href="/contact" className="btn btn-primary" data-cursor="hover">Map your growth loop →</Link>
          </div>
        </Reveal>
      </section>

      <style>{`
        .timeline { list-style: none; position: relative; display: grid; gap: clamp(36px, 5vw, 56px); }
        .timeline::before { content: ''; position: absolute; left: 19px; top: 12px; bottom: 12px; width: 1px; background: linear-gradient(var(--accent), var(--line) 30%, var(--line)); }
        .tl-step { display: grid; grid-template-columns: 40px 1fr; gap: clamp(20px, 3vw, 36px); align-items: start; }
        .tl-marker { width: 40px; height: 40px; border-radius: 50%; background: var(--accent); display: flex; align-items: center; justify-content: center; position: relative; z-index: 1; box-shadow: 0 0 0 6px var(--bg-0), 0 0 28px var(--accent-glow); }
        .tl-content { padding-top: 2px; }
      `}</style>
    </>
  )
}
