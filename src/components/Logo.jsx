/* Ignite Scale "is." monogram — used as the navbar mark. */
export default function Logo({ height = 30 }) {
  return (
    <img
      src="/logo-mark.png"
      alt="Ignite Scale"
      width={height}
      height={height}
      decoding="async"
      draggable="false"
      style={{
        display: 'block',
        width: height,
        height: height,
        borderRadius: Math.round(height * 0.22),
        objectFit: 'cover',
        userSelect: 'none',
      }}
    />
  )
}
