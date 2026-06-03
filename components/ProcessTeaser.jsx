import Link from 'next/link'
import { process } from '@/lib/content'
import SectionHead from './SectionHead'
import Reveal from './Reveal'

export default function ProcessTeaser() {
  return (
    <section className="section shell" id="process">
      <SectionHead
        kicker="How we work"
        title="A four-step loop that gets cheaper as it scales."
        link={<Link href="/process" className="ulink" data-cursor="hover" style={{ color: 'var(--accent)', fontWeight: 500, width: 'fit-content' }}>See the full process →</Link>}
      />
      <ol className="proc-grid">
        {process.map((p, i) => (
          <Reveal as="li" key={p.n} delay={i * 0.06} className="proc-step">
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 600, color: 'var(--accent)', lineHeight: 1 }}>{p.n}</span>
            <h3 style={{ fontSize: 21, marginBlock: '16px 10px' }}>{p.title}</h3>
            <p style={{ color: 'var(--ink-dim)', fontSize: 14.5, lineHeight: 1.65 }}>{p.body}</p>
          </Reveal>
        ))}
      </ol>
      <style>{`
        .proc-grid { list-style: none; display: grid; grid-template-columns: 1fr; gap: 0; border-top: 1px solid var(--line); }
        .proc-step { padding: clamp(26px, 3vw, 40px) 0; border-bottom: 1px solid var(--line); }
        @media (min-width: 720px) {
          .proc-grid { grid-template-columns: repeat(4, 1fr); border-bottom: 1px solid var(--line); }
          .proc-step { padding: clamp(28px,3vw,44px) clamp(20px,2vw,28px) clamp(28px,3vw,44px) 0; border-bottom: none; border-right: 1px solid var(--line); }
          .proc-step:last-child { border-right: none; }
        }
      `}</style>
    </section>
  )
}
