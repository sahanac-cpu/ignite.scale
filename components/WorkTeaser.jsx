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
            <Link href="/work" data-cursor="hover" className="work-tile">
              <Image src={w.image} alt={w.alt} fill sizes="(max-width: 720px) 86vw, 460px" style={{ objectFit: 'cover' }} />
              <span className="work-result glass-pill">{w.result}</span>
              <div className="work-overlay">
                <span className="meta">{w.sector}</span>
                <h3 style={{ fontSize: 'clamp(26px, 3vw, 34px)', marginBlock: '6px 10px' }}>{w.client}</h3>
                <p style={{ color: 'var(--ink-dim)', fontSize: 14.5, lineHeight: 1.6, maxWidth: '34ch' }}>{w.blurb}</p>
              </div>
            </Link>
          </Reveal>
        ))}
        <div className="work-spacer" aria-hidden="true" />
      </div>

      <style>{`
        .work-rail { display: flex; gap: 22px; overflow-x: auto; padding-inline: clamp(20px, 5vw, 64px); padding-bottom: 8px; }
        .work-card { flex: 0 0 86vw; max-width: 460px; }
        .work-spacer { flex: 0 0 clamp(20px,5vw,64px); }
        @media (min-width: 720px) { .work-card { flex-basis: 460px; } }
        .work-tile { position: relative; display: block; width: 100%; aspect-ratio: 4/5; border-radius: 18px; overflow: hidden; border: 1px solid var(--line); }
        .work-tile :global(img) { transition: transform .8s cubic-bezier(0.16,1,0.3,1); }
        .work-tile:hover :global(img) { transform: scale(1.06); }
        .work-tile::after { content:''; position:absolute; inset:0; background: linear-gradient(to top, rgba(15,9,11,0.92) 0%, rgba(15,9,11,0.35) 42%, transparent 70%); z-index: 1; }
        .work-result { position: absolute; left: 16px; top: 16px; z-index: 2; padding: 8px 15px; font-family: var(--font-display); font-weight: 600; font-size: 16px; color: var(--ink); }
        .work-overlay { position: absolute; left: 0; right: 0; bottom: 0; z-index: 2; padding: clamp(20px, 2.6vw, 30px); }
      `}</style>
    </section>
  )
}
