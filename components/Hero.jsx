'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'

const easeQuart = [0.165, 0.84, 0.44, 1]
const easeOut   = [0.23, 1, 0.32, 1]

const LINES = ['We turn', 'attention', 'into revenue']

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const railOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0])

  return (
    <section
      ref={ref}
      style={{
        position: 'relative',
        minHeight: '100svh',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* full-bleed video */}
      <video
        autoPlay muted loop playsInline
        src="/hero.mp4"
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover',
          zIndex: 0,
          filter: 'grayscale(0.10) contrast(1.02) brightness(0.82)',
        }}
      />

      {/* scrim — darkens bottom third for legibility */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.02) 30%, rgba(0,0,0,0.35) 72%, rgba(0,0,0,0.60) 100%)',
      }} />

      {/* ── content ── */}
      <div
        className="shell"
        style={{
          paddingTop: 'clamp(100px, 14vh, 148px)',
          paddingBottom: 'clamp(56px, 7vh, 88px)',
          position: 'relative',
          zIndex: 2,
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}
      >
        {/* label row */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: easeOut, delay: 0.2 }}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            gap: 16,
            marginBottom: 'clamp(20px, 3vh, 36px)',
          }}
        >
          <span className="byline" style={{ color: 'var(--ink-mute)' }}>Ignite Scale — Growth Studio</span>
          <span className="byline" style={{ textAlign: 'right', color: 'var(--ink-mute)' }}>Dubai, UAE · Est. 2024</span>
        </motion.div>

        {/* headline */}
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontWeight: 600,
            lineHeight: 0.9,
            letterSpacing: '-0.01em',
            color: 'var(--color-gold)',
            margin: 0,
            fontSize: 'clamp(40px, 5.5vw, 80px)',
          }}
        >
          {LINES.map((line, i) => (
            <span key={i} style={{ display: 'block', overflow: 'hidden', paddingBottom: '0.06em' }}>
              <motion.span
                style={{ display: 'block' }}
                initial={{ y: '110%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 1.2, ease: easeQuart, delay: 0.3 + i * 0.12 }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* subtext + CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: easeOut, delay: 1.0 }}
          className="hero-foot"
        >
          <p style={{ maxWidth: '40ch', fontSize: 15, lineHeight: 1.55, color: 'var(--ink-dim)' }}>
            Paid social, content and funnels for real estate, hospitality and luxury retail.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-primary-light" data-cursor="hover">
              Book a strategy call <span className="btn-ico" aria-hidden="true">→</span>
            </Link>
            <Link href="/work" className="btn btn-ghost-light" data-cursor="hover">
              See the work
            </Link>
          </div>
        </motion.div>
      </div>

      {/* ── kinetic marquee ── */}
      <motion.div
        style={{
          position: 'relative', zIndex: 2,
          borderTop: '1px solid rgba(201,169,110,0.18)',
          paddingBlock: 'clamp(14px, 2vh, 20px)',
          overflow: 'hidden',
          opacity: railOpacity,
        }}
      >
        <div className="marquee-mask">
          <div className="marquee-track" style={{ animationDuration: '42s' }}>
            {Array.from({ length: 2 }).flatMap((_, dup) =>
              ['Real Estate', 'Hospitality', 'Luxury Retail', 'Paid Social', 'Content', 'Funnels', 'Brand'].map((w, i) => (
                <span
                  key={`${dup}-${i}`}
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontStyle: 'italic',
                    fontSize: 'clamp(18px, 2.5vw, 28px)',
                    fontWeight: 400,
                    letterSpacing: '0.01em',
                    color: 'rgba(201,169,110,0.28)',
                    paddingInline: '0.5em',
                    display: 'inline-flex', alignItems: 'center', gap: '0.7em',
                  }}
                >
                  {w}
                  <span aria-hidden="true" style={{ color: 'rgba(201,169,110,0.16)', fontStyle: 'normal' }}>✺</span>
                </span>
              ))
            )}
          </div>
        </div>
      </motion.div>

      <style>{`
        .hero-foot {
          display: flex; align-items: flex-end; justify-content: space-between;
          gap: 32px; flex-wrap: wrap;
          margin-top: clamp(20px, 3vh, 36px);
        }
        @media (max-width: 720px) {
          .hero-foot { flex-direction: column; align-items: flex-start; }
        }
      `}</style>
    </section>
  )
}
