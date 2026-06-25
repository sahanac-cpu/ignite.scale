/* Ignite Scale wordmark — inline SVG so it renders identically everywhere
   regardless of font-load timing. The spark mark doubles as the separator. */
export default function Logo({ height = 22 }) {
  return (
    <svg
      height={height}
      viewBox="0 0 196 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Ignite Scale"
      style={{ display: 'block' }}
    >
      {/* IGNITE — white, light weight */}
      <text
        x="0"
        y="19"
        fontFamily="'DM Sans', system-ui, sans-serif"
        fontSize="14"
        fontWeight="300"
        letterSpacing="2.8"
        fill="#FFFFFF"
        fillOpacity="0.92"
      >
        IGNITE
      </text>

      {/* spark mark — 4-point star in orange accent */}
      <g transform="translate(87, 13)">
        <path
          d="M0 -5.5 C0.2 -2 2 -0.2 5.5 0 C2 0.2 0.2 2 0 5.5 C-0.2 2 -2 0.2 -5.5 0 C-2 -0.2 -0.2 -2 0 -5.5Z"
          fill="#C9A96E"
        />
      </g>

      {/* SCALE — white, 50% opacity */}
      <text
        x="101"
        y="19"
        fontFamily="'DM Sans', system-ui, sans-serif"
        fontSize="14"
        fontWeight="300"
        letterSpacing="2.8"
        fill="#FFFFFF"
        fillOpacity="0.52"
      >
        SCALE
      </text>
    </svg>
  )
}
