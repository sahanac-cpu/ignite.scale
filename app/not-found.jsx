import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="shell" style={{ minHeight: '70vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 24, paddingTop: 140 }}>
      <span className="kicker">404</span>
      <h1 style={{ fontSize: 'clamp(40px, 7vw, 88px)', letterSpacing: '-0.03em' }}>This page drifted off.</h1>
      <p style={{ color: 'var(--ink-dim)', fontSize: 18, maxWidth: '40ch' }}>The link you followed doesn’t exist anymore, but everything else is right where you left it.</p>
      <Link href="/" className="btn btn-primary" data-cursor="hover">Back to home →</Link>
    </section>
  )
}
