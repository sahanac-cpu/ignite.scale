'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import ParticleField from './ParticleField'
import MagneticButton from './MagneticButton'
import { stats } from '@/lib/site'

const ease = [0.16, 1, 0.3, 1]

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const orbY = useTransform(scrollYProgress, [0, 1], [0, 220])
  const orbScale = useTransform(scrollYProgress, [0, 1], [1, 1.25])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 120])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const goldY = useTransform(scrollYProgress, [0, 1], [0, -120])

  return (
    <section ref={ref} style={{ position: 'relative', minHeight: '100svh', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      {/* Atmospheric layers */}
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: `
        radial-gradient(120% 90% at 80% 12%, rgba(150,30,36,0.34) 0%, transparent 46%),
        radial-gradient(90% 80% at 6% 102%, rgba(203,164,90,0.12) 0%, transparent 52%),
        radial-gradient(140% 120% at 50% 0%, #2A1418 0%, var(--bg-0) 60%)
      ` }} />
      {/* Aura — wine core wrapped in a gold halo */}
      <motion.div aria-hidden="true"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease, delay: 0.2 }}
        style={{
          position: 'absolute', top: '2%', right: '0%',
          width: 'clamp(300px, 46vw, 640px)', height: 'clamp(300px, 46vw, 640px)',
          borderRadius: '50%', filter: 'blur(26px)',
          background: 'radial-gradient(circle at 40% 36%, rgba(231,206,146,0.55) 0%, rgba(192,69,76,0.42) 22%, rgba(150,30,36,0.30) 42%, transparent 68%)',
          pointerEvents: 'none', y: orbY, scale: orbScale,
        }}
      />
      {/* Soft gold aura, lower-left, slow counter-drift */}
      <motion.div aria-hidden="true"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ duration: 2.4, ease, delay: 0.5 }}
        style={{
          position: 'absolute', bottom: '-8%', left: '-6%',
          width: 'clamp(240px, 36vw, 460px)', height: 'clamp(240px, 36vw, 460px)',
          borderRadius: '50%', filter: 'blur(34px)',
          background: 'radial-gradient(circle, rgba(203,164,90,0.26) 0%, rgba(156,122,58,0.10) 40%, transparent 70%)',
          pointerEvents: 'none', y: goldY,
        }}
      />
      <ParticleField />

      {/* Content */}
      <motion.div className="shell" style={{ position: 'relative', zIndex: 2, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: 120, paddingBottom: 48, y: contentY, opacity: contentOpacity }}>
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease, delay: 0.15 }}
          style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 'clamp(28px, 5vh, 52px)' }}>
          <span className="kicker">Growth studio</span>
          <span style={{ width: 28, height: 1, background: 'var(--line-strong)' }} />
          <span className="meta">Dubai · UAE</span>
        </motion.div>

        <h1 style={{ fontSize: 'clamp(42px, 8vw, 96px)', maxWidth: '15ch', letterSpacing: '-0.01em', lineHeight: 1.04 }}>
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
      </motion.div>

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
