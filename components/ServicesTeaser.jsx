import Link from 'next/link'
import { services } from '@/lib/content'
import SectionHead from './SectionHead'
import Reveal from './Reveal'

export default function ServicesTeaser() {
  return (
    <section className="section shell" id="services">
      <SectionHead
        kicker="What we do"
        title="Four disciplines, one connected growth engine."
        intro="We don’t sell channels in isolation. Media, creative, funnels and brand work as a single system measured against pipeline."
        link={<Link href="/services" className="ulink" data-cursor="hover" style={{ color: 'var(--accent)', fontWeight: 500, width: 'fit-content' }}>All services →</Link>}
      />

      <div className="svc-grid">
        {services.map((s, i) => (
          <Reveal key={s.slug} delay={i * 0.06}>
            <Link href="/services" data-cursor="hover" className="svc-card">
              <span style={{ fontFamily: 'var(--font-display)', color: 'var(--accent)', fontSize: 13, fontWeight: 600 }}>{String(i + 1).padStart(2, '0')}</span>
              <h3 style={{ fontSize: 'clamp(22px, 2.6vw, 30px)', marginBlock: '14px 12px' }}>{s.title}</h3>
              <p style={{ color: 'var(--ink-dim)', fontSize: 15, lineHeight: 1.65 }}>{s.summary}</p>
              <span className="svc-arrow" aria-hidden="true">→</span>
            </Link>
          </Reveal>
        ))}
      </div>

      <style>{`
        .svc-grid { display: grid; grid-template-columns: 1fr; gap: 16px; }
        @media (min-width: 720px) { .svc-grid { grid-template-columns: 1fr 1fr; } }
        .svc-card {
          display: block; position: relative; height: 100%;
          padding: clamp(24px, 3vw, 36px);
          border: 1px solid var(--line); border-radius: 16px;
          background: var(--bg-1);
          transition: transform .5s cubic-bezier(0.16,1,0.3,1), border-color .4s ease, background-color .4s ease;
        }
        .svc-card:hover { transform: translateY(-4px); border-color: var(--line-strong); background: var(--bg-2); }
        .svc-arrow { position: absolute; top: clamp(24px,3vw,36px); right: clamp(24px,3vw,36px); color: var(--ink-mute); transition: color .3s ease, transform .4s cubic-bezier(0.16,1,0.3,1); }
        .svc-card:hover .svc-arrow { color: var(--accent); transform: translate(3px, -3px); }
      `}</style>
    </section>
  )
}
