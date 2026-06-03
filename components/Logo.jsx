/* Ignite Scale mark: a four-point spark (a struck ember / luxury sparkle),
   not a tree. Gold on dark. Scales cleanly from 16px to hero size. */
export default function Logo({ size = 20, withWordmark = true }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 11 }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        style={{ display: 'block', flexShrink: 0 }}
      >
        {/* four-point spark: concave diamond */}
        <path
          d="M12 0 C12.9 6.6 17.4 11.1 24 12 C17.4 12.9 12.9 17.4 12 24 C11.1 17.4 6.6 12.9 0 12 C6.6 11.1 11.1 6.6 12 0 Z"
          fill="var(--accent)"
        />
      </svg>
      {withWordmark && (
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 500,
            fontSize: 19,
            letterSpacing: '0.01em',
            color: 'var(--ink)',
            lineHeight: 1,
          }}
        >
          Ignite<span style={{ color: 'var(--accent)' }}>·</span>Scale
        </span>
      )}
    </span>
  )
}
