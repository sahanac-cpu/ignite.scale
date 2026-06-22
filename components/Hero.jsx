'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { stats } from '@/lib/site'

const easeQuad = [0.25, 0.46, 0.45, 0.94]
const easeQuart = [0.165, 0.84, 0.44, 1]
const easeOutBack = [0.175, 0.885, 0.32, 1.275]

/* Circular "SCROLL TO EXPLORE" text indicator with breathing animation */
function ScrollIndicator() {
  const text = 'SCROLL TO EXPLORE · SCROLL TO EXPLORE · '
  const r = 36
  const circumference = 2 * Math.PI * r

  return (
    <motion.div
      aria-hidden="true"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 1.4, ease: easeOutBack }}
      style={{
        position: 'absolute',
        bottom: 'clamp(24px, 4vw, 40px)',
        left: 'clamp(20px, 5vw, 64px)',
        width: 84,
        height: 84,
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
        <motion.circle
          cx="42" cy="42" r="2.5"
          fill="rgba(255,255,255,0.6)"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </svg>

      <style>{`
        @keyframes spin-text {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        svg {
          animation: spin-text 18s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          svg { animation: none !important; }
        }
      `}</style>
    </motion.div>
  )
}

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  // Parallax effects for video and overlays
  const videoY = useTransform(scrollYProgress, [0, 1], [0, 60])
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.6], [0.38, 0.72])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 120])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const statOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section
      ref={ref}
      style={{
        position: 'relative',
        minHeight: '100svh',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        background: 'var(--color-ink-black)',
      }}
    >
      {/* Hero video background with parallax */}
      <motion.div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          y: videoY,
          overflow: 'hidden',
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            pointerEvents: 'none',
          }}
          src="/hero.mp4"
        />
      </motion.div>

      {/* dynamic scrim overlay with scroll-driven opacity */}
      <motion.div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background: 'linear-gradient(to bottom, rgba(12,12,12,0.55) 0%, rgba(12,12,12,0.38) 60%, rgba(12,12,12,0.72) 100%)',
          opacity: overlayOpacity,
        }}
      />

      {/* vignette edge fade */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background: 'radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.4) 100%)',
          zIndex: 1,
        }}
      />

      {/* Content with parallax scroll */}
      <motion.div
        style={{
          position: 'relative',
          zIndex: 2,
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: 'clamp(92px, 11vh, 124px) clamp(20px, 8vw, 120px) clamp(40px, 6vh, 72px)',
          y: contentY,
          opacity: contentOpacity,
        }}
      >
        {/* animated micro-label with staggered reveal */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: easeQuart, delay: 0.15 }}
          style={{ marginBottom: 'clamp(24px, 3.5vh, 40px)' }}
          whileHover={{ scale: 1.05 }}
        >
          <motion.span
            style={{
              display: 'inline-flex',
              padding: '7px 16px',
              borderRadius: 'var(--radius-full)',
              border: '1px solid rgba(255,255,255,0.22)',
              fontSize: 11,
              fontWeight: 400,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.7)',
              background: 'rgba(255,255,255,0.02)',
              backdropFilter: 'blur(8px)',
            }}
            whileHover={{
              borderColor: 'rgba(255,255,255,0.55)',
              background: 'rgba(255,255,255,0.06)',
            }}
          >
            Social-first growth studio · Dubai, UAE
          </motion.span>
        </motion.div>

        {/* hero headline with character-level stagger */}
        <h1
          style={{
            fontSize: 'clamp(52px, 10.8vw, var(--text-hero))',
            fontWeight: 300,
            lineHeight: 'var(--leading-hero)',
            letterSpacing: '-0.03em',
            color: 'var(--color-paper-white)',
            maxWidth: '14ch',
            marginBottom: 0,
          }}
        >
          {['We turn', 'attention', 'into revenue.'].map((line, i) => (
            <span
              key={i}
              style={{
                display: 'block',
                overflow: 'hidden',
                paddingBottom: '0.08em',
                position: 'relative',
              }}
            >
              <motion.span
                initial={{ y: '120%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{
                  duration: 1.2,
                  ease: easeQuart,
                  delay: 0.28 + i * 0.15,
                }}
                style={{
                  display: 'block',
                  fontWeight: i === 1 ? 600 : 300,
                }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* subheading with fade and slide */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, ease: easeQuad, delay: 0.82 }}
          style={{
            marginTop: 'clamp(20px, 3vh, 32px)',
            maxWidth: '46ch',
            fontSize: '18px',
            fontWeight: 400,
            lineHeight: 1.6,
            color: 'rgba(255,255,255,0.65)',
            letterSpacing: '-0.01em',
          }}
        >
          A Dubai growth studio for real estate, hospitality and luxury retail.
          Paid social, content and funnels that turn ad spend into qualified pipeline.
        </motion.p>

        {/* CTA buttons with staggered entrance and hover effects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: easeQuad, delay: 1.05 }}
          style={{
            marginTop: 'clamp(24px, 3.5vh, 40px)',
            display: 'flex',
            flexWrap: 'wrap',
            gap: 12,
            justifyContent: 'center',
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: easeQuad, delay: 1.1 }}
            whileHover={{ scale: 1.06, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link href="/contact" className="btn btn-primary-light" data-cursor="hover">
              Book a strategy call <span className="btn-ico" aria-hidden="true">→</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: easeQuad, delay: 1.2 }}
            whileHover={{ scale: 1.06, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link href="/work" className="btn btn-ghost-light" data-cursor="hover">
              See the work
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* stats strip with scroll fade */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: easeQuad, delay: 1.2 }}
        style={{
          position: 'relative',
          zIndex: 2,
          borderTop: '1px solid rgba(255,255,255,0.08)',
          opacity: statOpacity,
        }}
      >
        <div
          className="shell hero-stats"
          style={{ paddingBlock: 'clamp(14px, 2.2vh, 24px)' }}
        >
          {stats.map((s, idx) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: easeQuad,
                delay: 1.3 + idx * 0.1,
              }}
              style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-roobert)',
                  fontWeight: 400,
                  fontSize: 'clamp(18px, 2.2vw, 24px)',
                  color: 'var(--color-paper-white)',
                  letterSpacing: '-0.02em',
                }}
              >
                {s.value}
              </span>
              <span
                style={{
                  fontSize: 10.5,
                  fontWeight: 400,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.4)',
                }}
              >
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <ScrollIndicator />

      <style>{`
        .hero-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px 24px;
        }
        @media (min-width: 720px) {
          .hero-stats {
            display: flex;
            justify-content: space-between;
            gap: 24px;
          }
        }
      `}</style>
    </section>
  )
}
