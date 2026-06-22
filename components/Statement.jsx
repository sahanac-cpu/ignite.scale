'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import BlobBackground from '@/components/ui/blob-background'

const ease = [0.16, 1, 0.3, 1]

/* Vivid+Co statement wall — monolithic centered display type.
   Full-bleed pure black, two mask-revealed lines, body below.
   "compounds." rendered as ghost-stroke text, the sole accent. */
export default function Statement() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const bodyY = useTransform(scrollYProgress, [0, 1], [24, -24])

  const LINE_A = 'Attention is the'
  const LINE_B = 'only currency that'
  const LINE_C = 'compounds.'

  return (
    <section
      ref={ref}
      style={{
        position: 'relative',
        background: 'rgba(0,0,0,0.15)',
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        paddingBlock: 'clamp(108px, 15vw, 200px)',
      }}
    >
      <BlobBackground />

      {/* fine horizontal rule top */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0,
          height: '1px',
          background: 'var(--line)',
        }}
      />

      <div className="shell" style={{ textAlign: 'center', position: 'relative', zIndex: 3 }}>

        {/* kicker */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease }}
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 11,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'var(--ink-mute)',
            marginBottom: 'clamp(36px, 5vw, 60px)',
          }}
        >
          Why we exist
        </motion.p>

        {/* three-line staggered headline */}
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: 'clamp(44px, 8.8vw, 128px)',
            letterSpacing: '-0.03em',
            lineHeight: 0.96,
            color: '#fffdf9',
            margin: 0,
          }}
        >
          {[LINE_A, LINE_B, LINE_C].map((line, i) => (
            <motion.span
              key={i}
              style={{
                display: 'block',
                color: line === LINE_C ? 'var(--color-gold)' : 'var(--color-bone)',
              }}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 1.0, ease, delay: i * 0.11 }}
            >
              {line}
            </motion.span>
          ))}
        </h2>

        {/* body */}
        <motion.p
          style={{ y: bodyY }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, ease, delay: 0.55 }}
          className="stmt-body"
        >
          A brand that owns its market keeps getting cheaper to grow — while everyone else pays more to be ignored.
        </motion.p>
      </div>

      {/* fine horizontal rule bottom */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: 0, left: 0, right: 0,
          height: '1px',
          background: 'var(--line)',
        }}
      />

      <style>{`
        .stmt-body {
          margin-top: clamp(36px, 5vw, 60px);
          margin-inline: auto;
          max-width: 52ch;
          font-family: var(--font-sans);
          font-size: 18px;
          font-weight: 400;
          line-height: 1.6;
          color: var(--ink-dim);
        }
      `}</style>
    </section>
  )
}
