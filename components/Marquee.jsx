const words = ['Paid social', 'Content', 'Funnels', 'Brand strategy', 'Creative', 'CRO', 'Performance']

export default function Marquee() {
  const row = [...words, ...words]
  return (
    <div className="marquee-mask" style={{ borderBlock: '1px solid var(--line)', paddingBlock: 'clamp(18px, 3vw, 30px)', overflow: 'hidden', background: 'var(--bg-1)' }}>
      <div className="marquee-track">
        {row.map((w, i) => (
          <span key={i} style={{ display: 'inline-flex', alignItems: 'center' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(18px, 2.6vw, 30px)', color: 'var(--ink-dim)', letterSpacing: '-0.01em' }}>{w}</span>
            <span aria-hidden="true" style={{ color: 'var(--accent)', margin: '0 clamp(20px, 3vw, 44px)', fontSize: 14 }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
