'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { stats } from '@/lib/site'

const ease = [0.16, 1, 0.3, 1]

/* Circular "SCROLL TO EXPLORE" text indicator */
function ScrollIndicator() {
  const text = 'SCROLL TO EXPLORE · SCROLL TO EXPLORE · '
  const r = 36
  const circumference = 2 * Math.PI * r

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        bottom: 'clamp(24px, 4vw, 40px)',
        left: 'clamp(20px, 5vw, 64px)',
        width: 84,
        height: 84,
        animation: 'spin-text 14s linear infinite',
      }}
    >
      <svg viewBox="0 0 84 84" width="84" height="84" style={{ overflow: 'visible' }}>
        <defs>
          <path id="circle-path" d={`M 42,42 m -${r},0 a ${r},${r} 0 1,1 ${r * 2},0 a ${r},${r} 0 1,1 -${r * 2},0`} />
        </defs>
        <text
          style={{
            fontSize: 7.5,
            fontFamily: 'var(--font-roobert, Inter, ui-sans-serif)',
            fontWeight: 400,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            fill: 'rgba(255,255,255,0.55)',
          }}
        >
          <textPath href="#circle-path">{text}</textPath>
        </text>
        {/* center dot */}
        <circle cx="42" cy="42" r="2.5" fill="rgba(255,255,255,0.6)" />
      </svg>

      <style>{`
        @keyframes spin-text {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="spin-text"] { animation: none !important; }
        }
      `}</style>
    </div>
  )
}

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 100])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])

  return (
    <section
      ref={ref}
      style={{
        position: 'relative',
        minHeight: '100svh',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        background: 'var(--color-slate-veil)',
      }}
    >
      {/* Hero video background */}
      <video
        aria-hidden="true"
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover', pointerEvents: 'none',
        }}
        src="/hero.mp4"
      />

      {/* dark scrim so text stays legible over video */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'linear-gradient(to bottom, rgba(12,12,12,0.55) 0%, rgba(12,12,12,0.38) 60%, rgba(12,12,12,0.72) 100%)',
      }} />

      {/* Content */}
      <motion.div
        style={{
          position: 'relative', zIndex: 2, flex: 1,
          display: 'flex', flexDirection: 'column',
          justifyContent: 'center', alignItems: 'center',
          textAlign: 'center',
          padding: 'clamp(100px, 14vh, 160px) clamp(20px, 8vw, 120px) clamp(60px, 8vh, 100px)',
          y: contentY, opacity: contentOpacity,
        }}
      >
        {/* micro-label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.1 }}
          style={{ marginBottom: 'clamp(32px, 5vh, 56px)' }}
        >
          <span
            style={{
              display: 'inline-flex',
              padding: '8px 14px',
              borderRadius: 0,
              border: '1px solid var(--line-accent)',
              fontSize: 13,
              fontWeight: 400,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--color-gunmetal-blue)',
            }}
          >
            Growth studio · Dubai, UAE
          </span>
        </motion.div>

        {/* display headline — pressed against the canvas (Vivid+Co signature) */}
        <h1
          style={{
            fontSize: 'clamp(58px, 13vw, 168px)',
            fontWeight: 400,
            lineHeight: 0.92,
            letterSpacing: '-0.02em',
            color: 'var(--color-bone-white)',
            maxWidth: '14ch',
          }}
        >
          {['We turn', 'attention', 'into revenue.'].map((line, i) => (
            <span key={i} style={{ display: 'block', overflow: 'hidden', paddingBottom: '0.06em' }}>
              <motion.span
                initial={{ y: '110%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 1.1, ease, delay: 0.25 + i * 0.11 }}
                style={{ display: 'block', fontWeight: i === 1 ? 700 : 400 }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* sub */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.72 }}
          style={{
            marginTop: 'clamp(28px, 4vh, 44px)',
            maxWidth: '46ch',
            fontSize: '18px',
            fontWeight: 400,
            lineHeight: 1.5,
            color: 'rgba(255,255,255,0.55)',
          }}
        >
          A Dubai growth studio for real estate, hospitality and luxury retail.
          Paid social, content and funnels that turn ad spend into qualified pipeline.
        </motion.p>

        {/* actions */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.9 }}
          style={{ marginTop: 'clamp(32px, 5vh, 52px)', display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}
        >
          <Link href="/contact" className="btn btn-primary-light" data-cursor="hover">
            Book a strategy call <span className="btn-ico" aria-hidden="true">→</span>
          </Link>
          <Link href="/work" className="btn btn-ghost-light" data-cursor="hover">
            See the work
          </Link>
        </motion.div>
      </motion.div>

      {/* stat strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
        style={{ position: 'relative', zIndex: 2, borderTop: '1px solid rgba(255,255,255,0.08)' }}
      >
        <div
          className="shell hero-stats"
          style={{ paddingBlock: 'clamp(18px, 3vh, 28px)' }}
        >
          {stats.map((s) => (
            <div key={s.label} style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
              <span style={{ fontFamily: 'var(--font-roobert)', fontWeight: 400, fontSize: 'clamp(18px, 2.2vw, 24px)', color: 'var(--color-paper-white)', letterSpacing: '-0.02em' }}>
                {s.value}
              </span>
              <span style={{ fontSize: 10.5, fontWeight: 400, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      <ScrollIndicator />

      <style>{`
        .hero-stats { display: grid; grid-template-columns: 1fr 1fr; gap: 16px 24px; }
        @media (min-width: 720px) { .hero-stats { display: flex; justify-content: space-between; gap: 24px; } }
      `}</style>
    </section>
  )
}
