/* ignite.scale wordmark — monochrome, inherits text color from parent */
export default function Logo({ size = 18, withWordmark = true }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 9 }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        style={{ display: 'block', flexShrink: 0 }}
      >
        {/* four-point spark — concave diamond */}
        <path
          d="M12 0 C12.9 6.6 17.4 11.1 24 12 C17.4 12.9 12.9 17.4 12 24 C11.1 17.4 6.6 12.9 0 12 C6.6 11.1 11.1 6.6 12 0 Z"
          fill="currentColor"
        />
      </svg>
      {withWordmark && (
        <span
          style={{
            fontFamily: 'var(--font-roobert, Inter, ui-sans-serif)',
            fontWeight: 400,
            fontSize: 12,
            letterSpacing: '0.04em',
            color: 'currentColor',
            lineHeight: 1,
            textTransform: 'lowercase',
          }}
        >
          ignite·scale
        </span>
      )}
    </span>
  )
}
