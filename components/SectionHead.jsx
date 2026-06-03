import Reveal from './Reveal'
import SplitText from './SplitText'

/* A header used once per major section. Title reveals word-by-word on scroll. */
export default function SectionHead({ kicker, title, intro, link, accent = [] }) {
  return (
    <div className="sh-wrap">
      <div style={{ maxWidth: '20ch' }}>
        {kicker && <Reveal as="span" className="pill" style={{ display: 'inline-flex', marginBottom: 22 }}>{kicker}</Reveal>}
        <SplitText text={title} as="h2" accent={accent} delay={0.05} style={{ fontSize: 'clamp(30px, 4.6vw, 56px)' }} />
      </div>
      {(intro || link) && (
        <Reveal delay={0.1} style={{ maxWidth: '42ch', display: 'flex', flexDirection: 'column', gap: 18, alignSelf: 'end' }}>
          {intro && <p style={{ color: 'var(--ink-dim)', fontSize: 16, lineHeight: 1.7 }}>{intro}</p>}
          {link}
        </Reveal>
      )}
      <style>{`
        .sh-wrap { display: grid; gap: 28px; margin-bottom: clamp(40px, 6vw, 72px); }
        @media (min-width: 880px) { .sh-wrap { grid-template-columns: 1fr 1fr; align-items: end; gap: 56px; } }
      `}</style>
    </div>
  )
}
