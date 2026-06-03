import Link from 'next/link'
import Image from 'next/image'
import { work } from '@/lib/content'
import SectionHead from './SectionHead'
import Reveal from './Reveal'

export default function WorkTeaser() {
  return (
    <section className="section" id="work" style={{ position: 'relative' }}>
      <div className="shell">
        <SectionHead
          kicker="Selected work"
          title="The kind of growth we build."
          intro="Anonymised engagements across the Emirates. Client names are held under NDA; these reflect the outcomes our systems are built to reach."
          link={<Link href="/work" className="ulink" data-cursor="hover" style={{ color: 'var(--accent)', fontWeight: 500, width: 'fit-content' }}>All case studies →</Link>}
        />

        <div className="work-grid">
          {work.map((w, i) => (
            <Reveal key={w.slug} delay={i * 0.08}>
              <Link href="/work" data-cursor="hover" className="bezel work-card group" style={{ display: 'block' }}>
                <div className="bezel-core work-core">
                  <Image src={w.image} alt={w.alt} fill sizes="(max-width: 720px) 90vw, 400px" className="work-img" style={{ objectFit: 'cover' }} />
                  <span className="work-result">{w.result}</span>
                  <div className="work-overlay">
                    <span className="meta" style={{ color: 'var(--accent-soft)' }}>{w.sector}</span>
                    <h3 style={{ fontSize: 'clamp(22px, 2.4vw, 28px)', marginBlock: '6px 8px' }}>{w.client}</h3>
                    <p style={{ color: 'var(--ink-dim)', fontSize: 14, lineHeight: 1.55 }}>{w.blurb}</p>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .work-grid { display: grid; grid-template-columns: 1fr; gap: 20px; }
        @media (min-width: 680px) { .work-grid { grid-template-columns: 1fr 1fr; } }
        @media (min-width: 1000px) { .work-grid { grid-template-columns: repeat(3, 1fr); } }
        .work-card { transition: transform .6s var(--ease-drawer); }
        .work-card:hover { transform: translateY(-5px); }
        .work-core { aspect-ratio: 4 / 5; }
        .work-card :global(.work-img) { transition: transform 1s var(--ease-drawer); }
        .work-card:hover :global(.work-img) { transform: scale(1.06); }
        .work-core::after { content:''; position:absolute; inset:0; background: linear-gradient(to top, rgba(10,5,6,0.94) 4%, rgba(10,5,6,0.25) 46%, transparent 72%); }
        .work-result { position: absolute; left: 14px; top: 14px; z-index: 2; padding: 7px 13px; border-radius: 999px;
          background: rgba(10,5,6,0.5); backdrop-filter: blur(10px); border: 1px solid var(--line-strong);
          font-family: var(--font-display); font-weight: 600; font-size: 14px; color: var(--accent-soft); }
        .work-overlay { position: absolute; left: 0; right: 0; bottom: 0; z-index: 2; padding: clamp(20px, 2vw, 26px); }
      `}</style>
    </section>
  )
}
