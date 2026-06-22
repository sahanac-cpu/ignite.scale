const words = ['Paid social', 'Content', 'Funnels', 'Brand strategy', 'Creative', 'CRO', 'Performance', 'Real estate', 'Hospitality']

export default function Marquee() {
  const row = [...words, ...words]
  return (
    <div
      className="marquee-mask"
      style={{
        borderBlock: '1px solid var(--line-soft)',
        paddingBlock: 'clamp(18px, 2.8vw, 28px)',
        overflow: 'hidden',
        background: 'var(--color-ink-black)',
      }}
    >
      <div className="marquee-track">
        {row.map((w, i) => (
          <span key={i} style={{ display: 'inline-flex', alignItems: 'center' }}>
            <span
              style={{
                fontFamily: 'var(--font-neue, Inter, ui-sans-serif)',
                fontWeight: 300,
                fontSize: 'clamp(16px, 2.2vw, 26px)',
                color: 'var(--color-paper-white)',
                letterSpacing: '-0.01em',
              }}
            >
              {w}
            </span>
            <span
              aria-hidden="true"
              style={{
                color: 'rgba(255,255,255,0.4)',
                margin: '0 clamp(18px, 2.8vw, 40px)',
                fontSize: 10,
              }}
            >
              ·
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
