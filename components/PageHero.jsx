import Reveal from './Reveal'
import SplitText from './SplitText'

/* Lighter atmospheric header for subpages. Title reveals word-by-word. */
export default function PageHero({ kicker, title, intro, accent = [], children }) {
  return (
    <header style={{ position: 'relative', overflow: 'hidden', paddingTop: 'clamp(140px, 19vh, 210px)', paddingBottom: 'clamp(48px, 8vw, 96px)' }}>
      <div className="shell" style={{ position: 'relative' }}>
        <Reveal as="span" className="pill" style={{ display: 'inline-flex', marginBottom: 24 }}>{kicker}</Reveal>
        <SplitText text={title} as="h1" accent={accent} delay={0.05} style={{ fontSize: 'clamp(38px, 6.5vw, 84px)', maxWidth: '16ch', letterSpacing: '-0.01em' }} />
        {intro && (
          <Reveal delay={0.12}>
            <p style={{ marginTop: 'clamp(20px, 3vw, 32px)', maxWidth: '56ch', fontSize: 'clamp(15px, 1.5vw, 18px)', color: 'var(--ink-dim)', lineHeight: 1.7 }}>{intro}</p>
          </Reveal>
        )}
        {children}
      </div>
    </header>
  )
}
