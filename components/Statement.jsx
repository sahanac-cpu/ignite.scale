'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1]

export default function Statement() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const glowY = useTransform(scrollYProgress, [0, 1], ['-20%', '30%'])
  const glowScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.15, 0.9])

  const words = 'Attention is the only currency that compounds.'.split(' ')

  return (
    <section ref={ref} style={{
      position: 'relative', overflow: 'hidden',
      minHeight: '92vh', display: 'flex', alignItems: 'center',
      borderBlock: '1px solid var(--line)',
    }}>
      {/* Parallax molten glow */}
      <motion.div aria-hidden="true" style={{
        position: 'absolute', left: '50%', top: '50%', x: '-50%', y: glowY, scale: glowScale,
        width: 'clamp(420px, 70vw, 1100px)', height: 'clamp(420px, 70vw, 1100px)',
        borderRadius: '50%', filter: 'blur(40px)', pointerEvents: 'none',
        background: 'radial-gradient(circle, rgba(150,30,36,0.36) 0%, rgba(203,164,90,0.12) 36%, transparent 66%)',
      }} />

      <div className="shell" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <p className="kicker" style={{ marginBottom: 28 }}>Why we exist</p>
        <h2 style={{ fontSize: 'clamp(34px, 7vw, 88px)', lineHeight: 1.1, letterSpacing: '-0.005em', maxWidth: '16ch', marginInline: 'auto' }}>
          {words.map((w, i) => {
            const isAccent = w === 'compounds.'
            return (
              <motion.span
                key={i}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.75, ease, delay: i * 0.07 }}
                style={{ display: 'inline-block', color: isAccent ? 'var(--accent-soft)' : 'var(--ink)', fontStyle: isAccent ? 'italic' : 'normal' }}
              >
                {w}{i < words.length - 1 ? ' ' : ''}
              </motion.span>
            )
          })}
        </h2>
        <motion.p
          initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7, ease, delay: 0.45 }}
          style={{ marginTop: 'clamp(24px, 4vw, 40px)', marginInline: 'auto', maxWidth: '52ch', fontSize: 'clamp(15px, 1.6vw, 18px)', color: 'var(--ink-dim)', lineHeight: 1.75 }}
        >
          Clicks fade. Trends fade. A brand that owns attention in its market keeps
          getting cheaper to grow while everyone else pays more to be ignored.
        </motion.p>
      </div>
    </section>
  )
}
