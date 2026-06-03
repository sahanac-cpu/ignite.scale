'use client'

import { motion } from 'framer-motion'
import ParticleField from './ParticleField'
import MagneticButton from './MagneticButton'
import { stats } from '@/lib/site'

const ease = [0.16, 1, 0.3, 1]

export default function Hero() {
  return (
    <section style={{ position: 'relative', minHeight: '100svh', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      {/* Atmospheric layers */}
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: `
        radial-gradient(120% 90% at 78% 12%, rgba(244,203,163,0.16) 0%, transparent 42%),
        radial-gradient(90% 80% at 12% 95%, rgba(157,233,201,0.10) 0%, transparent 50%),
        radial-gradient(140% 120% at 50% 0%, #0a1a15 0%, var(--bg-0) 60%)
      ` }} />
      {/* Warm orb — the lantern light from the reference */}
      <motion.div aria-hidden="true"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease, delay: 0.2 }}
        style={{
          position: 'absolute', top: '6%', right: '4%',
          width: 'clamp(260px, 38vw, 520px)', height: 'clamp(260px, 38vw, 520px)',
          borderRadius: '50%', filter: 'blur(20px)',
          background: 'radial-gradient(circle at 38% 34%, rgba(244,203,163,0.9) 0%, rgba(235,168,119,0.5) 26%, rgba(201,122,64,0.12) 52%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <ParticleField />

      {/* Content */}
      <div className="shell" style={{ position: 'relative', zIndex: 2, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: 120, paddingBottom: 48 }}>
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease, delay: 0.15 }}
          style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 'clamp(28px, 5vh, 52px)' }}>
          <span className="kicker">Growth studio</span>
          <span style={{ width: 28, height: 1, background: 'var(--line-strong)' }} />
          <span className="meta">Dubai · UAE</span>
        </motion.div>

        <h1 style={{ fontSize: 'clamp(40px, 8.2vw, 92px)', maxWidth: '15ch', letterSpacing: '-0.03em' }}>
          {['We turn', 'attention', 'into revenue'].map((line, i) => (
            <span key={i} style={{ display: 'block', overflow: 'hidden' }}>
              <motion.span
                initial={{ y: '110%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 1, ease, delay: 0.3 + i * 0.12 }}
                style={{ display: 'block' }}
              >
                {i === 1 ? <em className="accent-word">attention</em> : line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease, delay: 0.7 }}
          style={{ marginTop: 'clamp(24px, 4vh, 40px)', maxWidth: '52ch', fontSize: 'clamp(15px, 1.6vw, 18px)', color: 'var(--ink-dim)', lineHeight: 1.7 }}>
          A Dubai growth studio for real estate, hospitality and luxury retail. We build paid social,
          content and funnels that turn ad spend into qualified pipeline, then prove it in your numbers.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease, delay: 0.85 }}
          style={{ marginTop: 'clamp(32px, 5vh, 48px)', display: 'flex', flexWrap: 'wrap', gap: 14 }}>
          <MagneticButton href="/contact" className="btn btn-primary">Book a strategy call →</MagneticButton>
          <MagneticButton href="/work" className="btn btn-ghost">See the work</MagneticButton>
        </motion.div>
      </div>

      {/* Stat strip — inline, restrained (not the big-number-card template) */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.1 }}
        style={{ position: 'relative', zIndex: 2, borderTop: '1px solid var(--line)' }}>
        <div className="shell hero-stats" style={{ paddingBlock: 'clamp(18px, 3vh, 28px)' }}>
          {stats.map((s) => (
            <div key={s.label} style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'clamp(18px, 2.2vw, 24px)', color: 'var(--ink)' }}>{s.value}</span>
              <span className="meta" style={{ fontSize: 10.5 }}>{s.label}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <style>{`
        .hero-stats { display: grid; grid-template-columns: 1fr 1fr; gap: 16px 24px; }
        @media (min-width: 760px) { .hero-stats { display: flex; justify-content: space-between; gap: 24px; } }
      `}</style>
    </section>
  )
}
