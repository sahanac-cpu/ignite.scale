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

      <div className="svc-grid">
        {services.map((s, i) => (
          <Reveal key={s.slug} delay={i * 0.06}>
            <Link href="/services" data-cursor="hover" className="svc-card">
              <Image src={s.image} alt={s.alt} fill sizes="(max-width: 720px) 90vw, 600px" className="svc-img" style={{ objectFit: 'cover' }} />
              <div className="svc-body">
                <span style={{ fontFamily: 'var(--font-display)', color: 'var(--accent)', fontSize: 14, fontWeight: 600 }}>{String(i + 1).padStart(2, '0')}</span>
                <h3 style={{ fontSize: 'clamp(24px, 2.8vw, 34px)', marginBlock: '12px 12px' }}>{s.title}</h3>
                <p style={{ color: 'var(--ink-dim)', fontSize: 15, lineHeight: 1.65 }}>{s.summary}</p>
                <span className="svc-arrow" aria-hidden="true">→</span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>

      <style>{`
        .svc-grid { display: grid; grid-template-columns: 1fr; gap: 16px; }
        @media (min-width: 720px) { .svc-grid { grid-template-columns: 1fr 1fr; } }
        .svc-card {
          display: block; position: relative; height: 100%; min-height: 280px;
          border: 1px solid var(--line); border-radius: 16px; overflow: hidden;
          background: var(--bg-1);
          transition: transform .5s cubic-bezier(0.16,1,0.3,1), border-color .4s ease;
        }
        .svc-card :global(.svc-img) {
          opacity: 0.14; transform: scale(1.04);
          transition: opacity .6s ease, transform .8s cubic-bezier(0.16,1,0.3,1);
        }
        .svc-card::after { content:''; position:absolute; inset:0; background: linear-gradient(160deg, rgba(19,10,12,0.6), rgba(19,10,12,0.92)); }
        .svc-card:hover { transform: translateY(-4px); border-color: var(--line-strong); }
        .svc-card:hover :global(.svc-img) { opacity: 0.28; transform: scale(1.08); }
        .svc-body { position: relative; z-index: 1; padding: clamp(24px, 3vw, 38px); }
        .svc-arrow { position: absolute; top: clamp(24px,3vw,38px); right: clamp(24px,3vw,38px); color: var(--ink-mute); transition: color .3s ease, transform .4s cubic-bezier(0.16,1,0.3,1); }
        .svc-card:hover .svc-arrow { color: var(--accent); transform: translate(3px, -3px); }
      `}</style>
    </section>
  )
}
