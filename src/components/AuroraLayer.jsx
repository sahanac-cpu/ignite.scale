/**
 * AuroraLayer — drop this inside any section (position:relative)
 * to add atmospheric gradient glow. z-index 0, pointer-events none.
 */
import { motion } from 'framer-motion'

const presets = {
  hero: {
    a: 'radial-gradient(ellipse 80% 65% at 8%  60%, rgba(136,90,46,0.42)   0%, transparent 60%), radial-gradient(ellipse 70% 60% at 92% 15%, rgba(56,84,62,0.45)   0%, transparent 56%), radial-gradient(ellipse 60% 55% at 50% 98%, rgba(114,92,52,0.34)    0%, transparent 58%)',
    b: 'radial-gradient(ellipse 55% 50% at 72% 68%, rgba(58,86,62,0.28)  0%, transparent 52%), radial-gradient(ellipse 48% 42% at 25% 18%, rgba(122,98,56,0.24)   0%, transparent 50%)',
    durA: 6, durB: 9,
  },
  services: {
    a: 'radial-gradient(ellipse 70% 55% at 90% 30%, rgba(56,84,62,0.30)  0%, transparent 58%), radial-gradient(ellipse 55% 45% at 5%  70%, rgba(120,96,54,0.22)   0%, transparent 55%)',
    b: 'radial-gradient(ellipse 45% 40% at 50% 10%, rgba(128,86,44,0.18)   0%, transparent 50%), radial-gradient(ellipse 40% 38% at 80% 80%, rgba(54,82,60,0.20)    0%, transparent 50%)',
    durA: 7, durB: 11,
  },
  results: {
    a: 'radial-gradient(ellipse 65% 55% at 15% 40%, rgba(54,82,60,0.32)  0%, transparent 58%), radial-gradient(ellipse 60% 50% at 88% 65%, rgba(118,94,54,0.26)    0%, transparent 55%)',
    b: 'radial-gradient(ellipse 50% 45% at 55% 95%, rgba(132,88,44,0.22)   0%, transparent 52%), radial-gradient(ellipse 42% 38% at 30% 15%, rgba(54,82,60,0.18)     0%, transparent 50%)',
    durA: 8, durB: 12,
  },
  process: {
    a: 'radial-gradient(ellipse 60% 50% at 95% 50%, rgba(52,80,58,0.28)  0%, transparent 55%), radial-gradient(ellipse 50% 45% at 0%  30%, rgba(112,90,50,0.22)    0%, transparent 52%)',
    b: 'radial-gradient(ellipse 45% 40% at 50% 0%,  rgba(124,84,42,0.18)   0%, transparent 50%), radial-gradient(ellipse 40% 35% at 70% 90%, rgba(54,82,60,0.18)    0%, transparent 48%)',
    durA: 7, durB: 10,
  },
  testimonials: {
    a: 'radial-gradient(ellipse 70% 60% at 10% 55%, rgba(56,84,62,0.30)  0%, transparent 58%), radial-gradient(ellipse 55% 45% at 90% 35%, rgba(124,100,58,0.24)   0%, transparent 54%)',
    b: 'radial-gradient(ellipse 48% 42% at 50% 90%, rgba(136,90,46,0.20)   0%, transparent 52%), radial-gradient(ellipse 38% 34% at 25% 10%, rgba(58,86,62,0.18)    0%, transparent 48%)',
    durA: 8, durB: 11,
  },
  booking: {
    a: 'radial-gradient(ellipse 75% 60% at 5%  50%, rgba(128,86,44,0.30)   0%, transparent 58%), radial-gradient(ellipse 60% 52% at 95% 60%, rgba(52,80,58,0.32)   0%, transparent 55%)',
    b: 'radial-gradient(ellipse 50% 44% at 50% 5%,  rgba(112,90,50,0.22)   0%, transparent 52%), radial-gradient(ellipse 40% 36% at 60% 95%, rgba(54,82,60,0.20)    0%, transparent 48%)',
    durA: 7, durB: 10,
  },
  faq: {
    a: 'radial-gradient(ellipse 65% 55% at 90% 40%, rgba(52,80,58,0.28)  0%, transparent 56%), radial-gradient(ellipse 55% 48% at 10% 65%, rgba(118,94,54,0.22)    0%, transparent 52%)',
    b: 'radial-gradient(ellipse 44% 38% at 50% 95%, rgba(120,80,40,0.18)   0%, transparent 50%), radial-gradient(ellipse 38% 32% at 75% 8%,  rgba(54,82,60,0.16)    0%, transparent 48%)',
    durA: 9, durB: 13,
  },
}

export default function AuroraLayer({ variant = 'services', intensity = 1 }) {
  const p = presets[variant] || presets.services

  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>
      <motion.div
        style={{ position: 'absolute', inset: 0, background: p.a, opacity: intensity }}
        animate={{ opacity: [0.7 * intensity, 1 * intensity, 0.7 * intensity] }}
        transition={{ duration: p.durA, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        style={{ position: 'absolute', inset: 0, background: p.b, opacity: 0.85 * intensity }}
        animate={{ opacity: [0.55 * intensity, 0.9 * intensity, 0.55 * intensity], x: [0, 16, 0], y: [0, -8, 0] }}
        transition={{ duration: p.durB, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
