import Link from 'next/link'
import { process } from '@/lib/content'
import Reveal from './Reveal'

export default function ProcessTeaser() {
  return (
    <section className="section shell" id="process">
      <div className="proc-head">
        <div>
          <Reveal as="span" className="pill" style={{ marginBottom: 20, display: 'inline-flex' }}>How we work</Reveal>
          <Reveal as="h2" delay={0.05} style={{ fontSize: 'clamp(32px, 4.6vw, 60px)', maxWidth: '14ch' }}>
            A loop that <span className="accent-word">compounds</span>.
          </Reveal>
        </div>
        <Reveal delay={0.1} style={{ maxWidth: '40ch', alignSelf: 'end' }}>
          <p style={{ color: 'var(--ink-dim)', fontSize: 16, lineHeight: 1.7, marginBottom: 18 }}>
            Four steps, run on repeat. Each cycle teaches the next, so your cost per result falls as spend rises.
          </p>
          <Link href="/process" className="ulink" data-cursor="hover" style={{ color: 'var(--accent)', fontWeight: 500 }}>See the full process →</Link>
        </Reveal>
      </div>

      <div className="proc-grid">
        {process.map((p, i) => (
          <Reveal key={p.n} delay={i * 0.08}>
            <div className="bezel proc-card">
              <div className="bezel-core" style={{ padding: 'clamp(22px, 2vw, 30px)', display: 'flex', flexDirection: 'column', gap: 16, height: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 26, color: 'var(--accent)' }}>{p.n}</span>
                  <span className="proc-dot" aria-hidden="true" />
                </div>
                <div>
                  <h3 style={{ fontSize: 22, marginBottom: 10 }}>{p.title}</h3>
                  <p style={{ color: 'var(--ink-dim)', fontSize: 14.5, lineHeight: 1.6 }}>{p.body}</p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <style>{`
        .proc-head { display: grid; gap: 28px; margin-bottom: clamp(40px, 5vw, 64px); }
        @media (min-width: 880px) { .proc-head { grid-template-columns: 1fr 1fr; align-items: end; gap: 56px; } }
        .proc-grid { display: grid; grid-template-columns: 1fr; gap: 16px; }
        @media (min-width: 560px) { .proc-grid { grid-template-columns: 1fr 1fr; } }
        @media (min-width: 1000px) { .proc-grid { grid-template-columns: repeat(4, 1fr); } }
        .proc-card { height: 100%; transition: transform .6s var(--ease-drawer); }
        .proc-card:hover { transform: translateY(-4px); }
        .proc-dot { width: 7px; height: 7px; border-radius: 999px; background: var(--accent); box-shadow: 0 0 12px var(--accent-glow); }
      `}</style>
    </section>
  )
}
