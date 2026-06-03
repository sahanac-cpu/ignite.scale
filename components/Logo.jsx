/* Ignite Scale mark: an upward spark built from three rising strokes,
   paired with the wordmark. Scales cleanly from 16px to hero size. */
export default function Logo({ size = 22, withWordmark = true }) {
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
        <path
          d="M12 1.5 L19 9 L15.2 9 L20.5 16.2 L12.8 16.2 L12.8 22.5 L11.2 22.5 L11.2 16.2 L3.5 16.2 L8.8 9 L5 9 Z"
          fill="var(--accent)"
        />
      </svg>
      {withWordmark && (
        <span
          style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 600,
            fontSize: 16,
            letterSpacing: '-0.01em',
            color: 'var(--ink)',
            lineHeight: 1,
          }}
        >
          ignite<span style={{ color: 'var(--accent)' }}>.</span>scale
        </span>
      )}
    </span>
  )
}
