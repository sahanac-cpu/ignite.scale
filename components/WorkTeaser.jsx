import Link from 'next/link'
import Image from 'next/image'
import { work } from '@/lib/content'
import SectionHead from './SectionHead'
import Reveal from './Reveal'

export default function WorkTeaser() {
  return (
    <section className="section" id="work" style={{ background: 'var(--bg-1)', borderBlock: '1px solid var(--line)' }}>
      <div className="shell">
        <SectionHead
          kicker="Selected work"
          title="Numbers our clients can take to the board."
          intro="A few of the brands we’ve scaled across the Emirates. Real budgets, real pipeline, measured month over month."
          link={<Link href="/work" className="ulink" data-cursor="hover" style={{ color: 'var(--accent)', fontWeight: 500, width: 'fit-content' }}>All case studies →</Link>}
        />
      </div>

      <div className="snap-rail work-rail">
        {work.map((w, i) => (
          <Reveal key={w.slug} delay={i * 0.06} className="snap-item work-card">
            <Link href="/work" data-cursor="hover" style={{ display: 'block' }}>
              <div className="work-img">
                <Image src={w.image} alt={w.alt} fill sizes="(max-width: 720px) 80vw, 380px" style={{ objectFit: 'cover' }} />
                <span className="work-result glass-pill">{w.result}</span>
              </div>
              <div style={{ marginTop: 18 }}>
                <span className="meta">{w.sector}</span>
                <h3 style={{ fontSize: 24, marginBlock: '8px 8px' }}>{w.client}</h3>
                <p style={{ color: 'var(--ink-dim)', fontSize: 14.5, lineHeight: 1.6 }}>{w.blurb}</p>
              </div>
            </Link>
          </Reveal>
        ))}
        <div className="work-spacer" aria-hidden="true" />
      </div>

      <style>{`
        .work-rail { display: flex; gap: 20px; overflow-x: auto; padding-inline: clamp(20px, 5vw, 64px); padding-bottom: 8px; }
        .work-card { flex: 0 0 78vw; max-width: 380px; }
        .work-spacer { flex: 0 0 clamp(20px,5vw,64px); }
        @media (min-width: 720px) { .work-card { flex-basis: 380px; } }
        .work-img { position: relative; width: 100%; aspect-ratio: 4/5; border-radius: 16px; overflow: hidden; border: 1px solid var(--line); }
        .work-img::after { content:''; position:absolute; inset:0; background: linear-gradient(to top, rgba(6,17,14,0.55), transparent 55%); }
        .work-result { position: absolute; left: 14px; bottom: 14px; z-index: 1; padding: 7px 14px; font-family: var(--font-display); font-weight: 600; font-size: 15px; color: var(--ink); }
      `}</style>
    </section>
  )
}
