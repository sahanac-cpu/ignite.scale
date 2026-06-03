import Link from 'next/link'
import Image from 'next/image'
import { services } from '@/lib/content'
import SectionHead from './SectionHead'
import Reveal from './Reveal'

export default function ServicesTeaser() {
  return (
    <section className="section shell" id="services">
      <SectionHead
        kicker="What we do"
        title="Four disciplines, one growth engine."
        intro="We don’t sell channels in isolation. Media, creative, funnels and brand work as a single system measured against pipeline."
        link={<Link href="/services" className="ulink" data-cursor="hover" style={{ color: 'var(--accent)', fontWeight: 500, width: 'fit-content' }}>All services →</Link>}
      />

      <div className="svc-bento">
        {services.map((s, i) => (
          <Reveal key={s.slug} delay={i * 0.08} className={`svc-cell svc-cell-${i}`}>
            <Link href="/services" data-cursor="hover" className="bezel svc-card group" style={{ display: 'block', height: '100%' }}>
              <div className="bezel-core svc-core">
                <Image src={s.image} alt={s.alt} fill sizes="(max-width: 760px) 90vw, 640px" className="svc-img" style={{ objectFit: 'cover' }} />
                <div className="svc-veil" />
                <div className="svc-body">
                  <span className="svc-num">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 style={{ fontSize: 'clamp(24px, 2.8vw, 34px)', marginBottom: 12 }}>{s.title}</h3>
                    <p style={{ color: 'var(--ink-dim)', fontSize: 15, lineHeight: 1.6, maxWidth: '40ch' }}>{s.summary}</p>
                    <span className="svc-go" aria-hidden="true">Explore <span className="svc-go-ico">→</span></span>
                  </div>
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>

      <style>{`
        .svc-bento { display: grid; grid-template-columns: 1fr; gap: 18px; }
        .svc-cell { min-height: 300px; }
        @media (min-width: 760px) {
          .svc-bento { grid-template-columns: 1.25fr 1fr; grid-auto-rows: 300px; }
          .svc-cell-0 { grid-row: span 1; }
          .svc-cell-1 { grid-column: 2; grid-row: span 1; }
          /* offset rhythm so it isn't a flat 2x2 */
          .svc-cell-2, .svc-cell-3 { grid-row: span 1; }
        }
        @media (min-width: 1040px) {
          .svc-bento { grid-auto-rows: 320px; }
          .svc-cell-0 { grid-column: 1; grid-row: 1 / span 2; }
          .svc-cell-1 { grid-column: 2; grid-row: 1; }
          .svc-cell-2 { grid-column: 2; grid-row: 2; }
          .svc-cell-3 { grid-column: 1 / span 2; grid-row: 3; }
        }
        .svc-card { transition: transform .6s var(--ease-drawer); }
        .svc-card:hover { transform: translateY(-5px); }
        .svc-core { display: flex; }
        .svc-card :global(.svc-img) { opacity: 0.20; transform: scale(1.05); transition: opacity .7s var(--ease-out), transform 1s var(--ease-drawer); }
        .svc-card:hover :global(.svc-img) { opacity: 0.40; transform: scale(1.1); }
        .svc-veil { position: absolute; inset: 0; background: linear-gradient(150deg, rgba(10,5,6,0.55), rgba(10,5,6,0.9)); }
        .svc-body { position: relative; z-index: 1; padding: clamp(24px, 3vw, 40px); display: flex; flex-direction: column; justify-content: space-between; gap: 28px; width: 100%; }
        .svc-num { font-family: var(--font-display); font-style: italic; color: var(--accent); font-size: 20px; }
        .svc-go { display: inline-flex; align-items: center; gap: 8px; margin-top: 18px; font-size: 12px; font-weight: 600; letter-spacing: 0.18em; text-transform: uppercase; color: var(--ink-mute); transition: color .3s var(--ease-out); }
        .svc-go-ico { transition: transform .5s var(--ease-drawer); }
        .svc-card:hover .svc-go { color: var(--accent); }
        .svc-card:hover .svc-go-ico { transform: translateX(5px); }
      `}</style>
    </section>
  )
}
