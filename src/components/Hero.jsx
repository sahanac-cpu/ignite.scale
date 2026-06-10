import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

function MagneticBtn({ children, className, style, href }) {
  const ref = useRef(null)

  return (
    <motion.a
      ref={ref}
      href={href}
      className={className}
      style={style}
      data-cursor="hover"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      {children}
    </motion.a>
  )
}

const wipe = (delay = 0, duration = 1.0) => ({
  initial: { clipPath: 'inset(0 100% 0 0)' },
  animate: { clipPath: 'inset(0 0% 0 0)' },
  transition: { duration, ease: [0.76, 0, 0.24, 1], delay },
})

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.85, ease: [0.25, 0.1, 0.25, 1], delay },
})

function StatPill({ val, label }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
        borderLeft: '1px solid rgba(255,130,50,0.18)',
        paddingLeft: 20,
      }}
    >
      <span
        style={{
          fontFamily: '"DM Sans", sans-serif',
          fontWeight: 700,
          fontSize: 'clamp(18px, 2vw, 24px)',
          background: 'linear-gradient(135deg, #FF7040, #FFBB80)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          lineHeight: 1,
        }}
      >
        {val}
      </span>
      <span
        style={{
          fontFamily: '"DM Sans", sans-serif',
          fontSize: 10,
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          color: 'rgba(240,210,180,0.45)',
        }}
      >
        {label}
      </span>
    </motion.div>
  )
}

export default function Hero() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setTimeout(() => setReady(true), 80)
  }, [])

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh',
        background: '#03050F',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Animated background gradient elements */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none' }}>
        {/* Primary glow - pulsing */}
        <motion.div
          style={{
            position: 'absolute',
            inset: 0,
            background: `
              radial-gradient(ellipse 85% 70% at 8%  45%, rgba(255,80,20,0.18)   0%, transparent 55%),
              radial-gradient(ellipse 75% 65% at 92% 25%, rgba(30,50,200,0.12)   0%, transparent 60%),
              radial-gradient(ellipse 65% 60% at 50% 98%, rgba(100,20,150,0.1)  0%, transparent 65%)
            `,
          }}
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Secondary glow - floating */}
        <motion.div
          style={{
            position: 'absolute',
            inset: 0,
            background: `
              radial-gradient(ellipse 60% 50% at 70% 60%, rgba(255,110,40,0.08)  0%, transparent 58%),
              radial-gradient(ellipse 50% 45% at 20% 25%, rgba(80,30,180,0.06)   0%, transparent 60%)
            `,
          }}
          animate={{ x: [0, 20, 0], y: [0, -15, 0], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Decorative accent shapes - top right */}
      <motion.div
        style={{
          position: 'absolute',
          top: '10%',
          right: '8%',
          width: 120,
          height: 120,
          borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
          background: 'rgba(255, 100, 40, 0.06)',
          border: '1px solid rgba(255, 120, 60, 0.12)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
        animate={{
          rotate: [0, 90, 180, 270, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Decorative accent shapes - bottom left */}
      <motion.div
        style={{
          position: 'absolute',
          bottom: '15%',
          left: '5%',
          width: 100,
          height: 100,
          borderRadius: '70% 30% 30% 70% / 70% 70% 30% 30%',
          background: 'rgba(100, 40, 180, 0.05)',
          border: '1px solid rgba(120, 60, 200, 0.1)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
        animate={{
          rotate: [360, 270, 180, 90, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Main content */}
      <motion.div
        style={{
          position: 'relative',
          zIndex: 10,
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        {/* Wide editorial layout */}
        <div
          style={{
            padding: 'clamp(60px, 12vh, 130px) clamp(20px, 7vw, 100px) 0',
            display: 'flex',
            gap: 'clamp(20px, 4vw, 60px)',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
          }}
        >
          {/* Left: headline + description */}
          <div style={{ flex: 1, minWidth: '280px' }}>
            {/* Eyebrow with animated accent line */}
            <motion.div
              {...fadeUp(0.1)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                marginBottom: 28,
              }}
            >
              <motion.span
                style={{
                  width: 28,
                  height: 2,
                  display: 'inline-block',
                  background: 'linear-gradient(90deg, #FF6820, rgba(255,120,55,0.3))',
                  borderRadius: 1,
                }}
                animate={{ scaleX: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />
              <span
                style={{
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: 10,
                  letterSpacing: '0.4em',
                  textTransform: 'uppercase',
                  color: 'rgba(240,200,160,0.55)',
                  fontWeight: 500,
                }}
              >
                Dubai's Premier Growth Agency
              </span>
            </motion.div>

            {/* Headline with gradient text and animation */}
            <div
              style={{
                fontFamily: '"DM Sans", system-ui, sans-serif',
                fontWeight: 800,
                lineHeight: 0.95,
                letterSpacing: '-0.03em',
                fontSize: 'clamp(42px, 8vw, 96px)',
                userSelect: 'none',
                marginBottom: 32,
              }}
            >
              <motion.div
                {...wipe(0.25)}
                style={{ display: 'block', overflow: 'hidden' }}
              >
                <motion.span
                  style={{
                    WebkitTextStroke: '1.5px rgba(245,235,220,0.7)',
                    WebkitTextFillColor: 'transparent',
                    display: 'block',
                  }}
                  animate={{ textShadow: [
                    '0 0 20px rgba(255,110,40,0)',
                    '0 0 40px rgba(255,110,40,0.3)',
                    '0 0 20px rgba(255,110,40,0)',
                  ] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  IGNITE
                </motion.span>
              </motion.div>
              <motion.div
                {...wipe(0.55)}
                style={{
                  display: 'block',
                  overflow: 'hidden',
                  marginLeft: 'clamp(10px, 2vw, 36px)',
                }}
              >
                <motion.span
                  style={{
                    background: 'linear-gradient(135deg, #E83000 0%, #FF6820 45%, #FFAA60 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    display: 'block',
                  }}
                  animate={{ textShadow: [
                    '0 0 20px rgba(255,110,40,0.2)',
                    '0 0 50px rgba(255,110,40,0.4)',
                    '0 0 20px rgba(255,110,40,0.2)',
                  ] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
                >
                  .SCALE
                </motion.span>
              </motion.div>
            </div>

            {/* Description */}
            <motion.p
              {...fadeUp(0.8)}
              style={{
                fontFamily: '"DM Sans", sans-serif',
                fontSize: 15,
                lineHeight: 1.8,
                color: 'rgba(240,210,180,0.68)',
                fontWeight: 400,
                maxWidth: 420,
                margin: 0,
                marginBottom: 24,
              }}
            >
              We engineer paid social, content and funnels for Dubai's most
              competitive niches — turning every dirham of ad spend into
              qualified pipeline.
            </motion.p>

            {/* CTA Button */}
            <motion.div {...fadeUp(1.0)}>
              <MagneticBtn
                href="#booking"
                className="btn-primary"
                style={{
                  fontSize: 12,
                  padding: '13px 30px',
                  textDecoration: 'none',
                  display: 'inline-block',
                  fontWeight: 500,
                  letterSpacing: '0.05em',
                }}
              >
                Book a Call
              </MagneticBtn>
            </motion.div>
          </div>

          {/* Right column — secondary CTA (hidden on small screens) */}
          <div
            style={{
              display: 'none',
              flexDirection: 'column',
              gap: 28,
              paddingBottom: 'clamp(6px, 1.5vw, 18px)',
              minWidth: 'clamp(220px, 24vw, 380px)',
            }}
            className="lg:flex"
          >
            <motion.p
              {...fadeUp(0.8)}
              style={{
                fontFamily: '"DM Sans", sans-serif',
                fontSize: 'clamp(14px, 1.4vw, 16px)',
                lineHeight: 1.75,
                color: 'rgba(240,210,180,0.62)',
                maxWidth: 340,
                fontWeight: 400,
                margin: 0,
              }}
            >
              We engineer paid social, content and funnels for Dubai's most
              competitive niches — turning every dirham of ad spend into
              qualified pipeline.
            </motion.p>
            <motion.div {...fadeUp(1.0)} style={{ display: 'flex', gap: 12 }}>
              <MagneticBtn
                href="#booking"
                className="btn-primary"
                style={{
                  fontSize: 12,
                  padding: '12px 28px',
                  textDecoration: 'none',
                  display: 'inline-block',
                }}
              >
                Book a Call
              </MagneticBtn>
              <MagneticBtn
                href="#results"
                style={{
                  fontSize: 12,
                  letterSpacing: '0.15em',
                  padding: '12px 24px',
                  borderRadius: 999,
                  border: '1px solid rgba(255,130,60,0.22)',
                  color: 'rgba(240,200,155,0.7)',
                  fontFamily: '"DM Sans", sans-serif',
                  fontWeight: 500,
                  background: 'rgba(255,60,10,0.04)',
                  textDecoration: 'none',
                  display: 'inline-block',
                  backdropFilter: 'blur(8px)',
                }}
              >
                Our Work →
              </MagneticBtn>
            </motion.div>
          </div>
        </div>

        {/* Bottom stats section */}
        <div
          style={{
            position: 'relative',
            zIndex: 10,
            padding:
              'clamp(36px, 5vh, 64px) clamp(24px, 7vw, 100px)',
          }}
        >
          {/* Divider line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={ready ? { scaleX: 1 } : {}}
            transition={{
              duration: 1.2,
              ease: [0.76, 0, 0.24, 1],
              delay: 1.1,
            }}
            style={{
              height: 1,
              marginBottom: 28,
              originX: 0,
              background:
                'linear-gradient(90deg, rgba(255,110,40,0.4), rgba(255,110,40,0.08) 60%, transparent)',
            }}
          />

          {/* Stats row with staggered reveals */}
          <motion.div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'clamp(20px, 4vw, 48px)',
              flexWrap: 'wrap',
            }}
            initial="hidden"
            animate={ready ? 'visible' : 'hidden'}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.08,
                  delayChildren: 1.3,
                },
              },
            }}
          >
            <StatPill val="2–5×" label="Average ROAS" />
            <StatPill val="60%+" label="CPL Reduction" />
            <StatPill val="50+" label="Active Campaigns" />
            <StatPill val="4.6/5" label="Client Rating" />

            {/* Mobile CTA */}
            <div style={{ flex: 1 }} />
            <motion.div
              {...fadeUp(1.5)}
              className="flex lg:hidden"
              style={{ gap: 10 }}
            >
              <MagneticBtn
                href="#booking"
                className="btn-primary"
                style={{
                  fontSize: 12,
                  padding: '11px 24px',
                  textDecoration: 'none',
                  display: 'inline-block',
                }}
              >
                Book a Call
              </MagneticBtn>
            </motion.div>

            {/* Scroll hint */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={ready ? { opacity: 1 } : {}}
              transition={{ delay: 2, duration: 1 }}
              style={{ display: 'flex', alignItems: 'center', gap: 10 }}
              className="hidden lg:flex"
            >
              <span
                style={{
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: 9,
                  letterSpacing: '0.35em',
                  textTransform: 'uppercase',
                  color: 'rgba(240,210,180,0.28)',
                }}
              >
                Scroll
              </span>
              <motion.div
                style={{
                  width: 28,
                  height: 1,
                  background: 'rgba(255,110,40,0.35)',
                  originX: 0,
                }}
                animate={{ scaleX: [0, 1, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 2.2,
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
