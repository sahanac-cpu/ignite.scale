import Reveal from './Reveal'

/* Lighter atmospheric header for subpages. */
export default function PageHero({ kicker, title, intro, children }) {
  return (
    <header style={{ position: 'relative', overflow: 'hidden', paddingTop: 'clamp(130px, 18vh, 200px)', paddingBottom: 'clamp(48px, 8vw, 96px)' }}>
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: `
        radial-gradient(90% 70% at 85% 0%, rgba(244,203,163,0.12) 0%, transparent 45%),
        radial-gradient(80% 60% at 0% 100%, rgba(157,233,201,0.07) 0%, transparent 55%)
      ` }} />
      <div className="shell" style={{ position: 'relative' }}>
        <Reveal as="span" className="kicker" style={{ display: 'block', marginBottom: 22 }}>{kicker}</Reveal>
        <Reveal as="h1" delay={0.05} style={{ fontSize: 'clamp(38px, 6.5vw, 84px)', maxWidth: '16ch', letterSpacing: '-0.03em' }}>{title}</Reveal>
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
