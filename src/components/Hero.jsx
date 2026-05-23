import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import ParticleCanvas from './ParticleCanvas'

/* ── Magnetic button ─────────────────────────────────────── */
function MagneticBtn({ children, className, style, href }) {
  const ref = useRef(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const x  = useSpring(mx, { stiffness: 300, damping: 22 })
  const y  = useSpring(my, { stiffness: 300, damping: 22 })

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect()
    mx.set((e.clientX - r.left - r.width  / 2) * 0.35)
    my.set((e.clientY - r.top  - r.height / 2) * 0.35)
  }
  const onLeave = () => { mx.set(0); my.set(0) }

  return (
    <motion.div ref={ref} style={{ x, y, display: 'inline-block' }}
      onMouseMove={onMove} onMouseLeave={onLeave}>
      <a href={href} className={className} style={style} data-cursor="hover">
        {children}
      </a>
    </motion.div>
  )
}

/* ── Clip wipe ───────────────────────────────────────────── */
const wipe = (delay = 0, duration = 1.0) => ({
  initial:    { clipPath: 'inset(0 100% 0 0)' },
  animate:    { clipPath: 'inset(0 0% 0 0)' },
  transition: { duration, ease: [0.76, 0, 0.24, 1], delay },
})

/* ── Fade up ─────────────────────────────────────────────── */
const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 22 },
  animate:    { opacity: 1, y: 0 },
  transition: { duration: 0.85, ease: [0.25, 0.1, 0.25, 1], delay },
})

/* ── Stat pill ───────────────────────────────────────────── */
function StatPill({ val, label }) {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', gap: 3,
      borderLeft: '1px solid rgba(255,130,50,0.18)',
      paddingLeft: 20,
    }}>
      <span style={{
        fontFamily: '"DM Sans", sans-serif', fontWeight: 700,
        fontSize: 'clamp(18px, 2vw, 24px)',
        background: 'linear-gradient(135deg, #FF7040, #FFBB80)',
        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
        lineHeight: 1,
      }}>{val}</span>
      <span style={{
        fontFamily: '"DM Sans", sans-serif',
        fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase',
        color: 'rgba(240,210,180,0.45)',
      }}>{label}</span>
    </div>
  )
}

/* ── Main ────────────────────────────────────────────────── */
export default function Hero() {
  const [ready, setReady] = useState(false)
  const heroRef = useRef(null)
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)

  useEffect(() => { setTimeout(() => setReady(true), 80) }, [])

  const onMouseMove = (e) => {
    const r = heroRef.current?.getBoundingClientRect()
    if (!r) return
    rawX.set((e.clientX - r.left - r.width  / 2) / r.width)
    rawY.set((e.clientY - r.top  - r.height / 2) / r.height)
  }
  const onMouseLeave = () => { rawX.set(0); rawY.set(0) }

  /* parallax layers */
  const px1 = useSpring(useTransform(rawX, v => v * -22), { stiffness: 55, damping: 18 })
  const py1 = useSpring(useTransform(rawY, v => v * -14), { stiffness: 55, damping: 18 })
  const px2 = useSpring(useTransform(rawX, v => v *  26), { stiffness: 50, damping: 16 })
  const py2 = useSpring(useTransform(rawY, v => v *  18), { stiffness: 50, damping: 16 })
  const hx  = useSpring(useTransform(rawX, v => v *   7), { stiffness: 70, damping: 20 })
  const hy  = useSpring(useTransform(rawY, v => v *   5), { stiffness: 70, damping: 20 })

  return (
    <section
      ref={heroRef}
      id="hero"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        position: 'relative', overflow: 'hidden',
        minHeight: '100vh', background: '#080304',
        display: 'flex', flexDirection: 'column',
      }}
    >
      {/* Canvas */}
      <ParticleCanvas />

      {/* Aurora mesh */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none' }}>
        <motion.div style={{
          position: 'absolute', inset: 0,
          background: `
            radial-gradient(ellipse 65% 50% at 15% 55%, rgba(155,18,0,0.28) 0%, transparent 60%),
            radial-gradient(ellipse 45% 40% at 85% 25%, rgba(190,45,0,0.18) 0%, transparent 58%),
            radial-gradient(ellipse 50% 45% at 50% 90%, rgba(80,8,0,0.22) 0%, transparent 60%)
          `,
        }}
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Back-plates */}
      <motion.div style={{
        x: px1, y: py1,
        position: 'absolute', left: '2%', top: '10%',
        width: 'clamp(140px, 14vw, 260px)', height: 'clamp(220px, 36vh, 460px)',
        background: 'rgba(255,80,15,0.035)', border: '1px solid rgba(255,100,40,0.07)',
        backdropFilter: 'blur(22px)', WebkitBackdropFilter: 'blur(22px)',
        borderRadius: 18, rotate: '-6deg', zIndex: 3,
        boxShadow: 'inset 0 1px 0 rgba(255,150,70,0.05)',
      }} />
      <motion.div style={{
        x: px2, y: py2,
        position: 'absolute', right: '4%', top: '18%',
        width: 'clamp(110px, 12vw, 220px)', height: 'clamp(180px, 30vh, 380px)',
        background: 'rgba(255,55,8,0.03)', border: '1px solid rgba(255,85,25,0.06)',
        backdropFilter: 'blur(18px)', WebkitBackdropFilter: 'blur(18px)',
        borderRadius: 16, rotate: '8deg', zIndex: 3,
      }} />

      {/* ── Main content ── */}
      <motion.div
        style={{ x: hx, y: hy, position: 'relative', zIndex: 10, flex: 1 }}
        className="flex flex-col justify-center"
      >
        {/* ── Wide editorial layout ── */}
        <div style={{
          padding: 'clamp(80px, 12vh, 130px) clamp(24px, 7vw, 100px) 0',
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gap: 'clamp(20px, 4vw, 60px)',
          alignItems: 'flex-end',
        }}>

          {/* Left: giant type */}
          <div>
            {/* Eyebrow */}
            <motion.div {...fadeUp(0.1)} style={{
              display: 'flex', alignItems: 'center', gap: 10, marginBottom: 28,
            }}>
              <span style={{
                width: 28, height: 1, display: 'inline-block',
                background: 'linear-gradient(90deg, transparent, rgba(255,120,55,0.8))',
              }} />
              <span style={{
                fontFamily: '"DM Sans", sans-serif', fontSize: 10,
                letterSpacing: '0.4em', textTransform: 'uppercase',
                color: 'rgba(240,200,160,0.55)',
              }}>Dubai's Premier Growth Agency</span>
            </motion.div>

            {/* Headline */}
            <div style={{
              fontFamily: '"DM Sans", system-ui, sans-serif',
              fontWeight: 800, lineHeight: 0.86,
              letterSpacing: '-0.03em',
              fontSize: 'clamp(76px, 14.5vw, 200px)',
              userSelect: 'none',
            }}>
              {/* IGNITE — outlined */}
              <motion.div {...wipe(0.25)} style={{ display: 'block', overflow: 'hidden' }}>
                <span style={{
                  WebkitTextStroke: '1.5px rgba(245,235,220,0.7)',
                  WebkitTextFillColor: 'transparent',
                  display: 'block',
                }}>IGNITE</span>
              </motion.div>

              {/* .SCALE — filled ember */}
              <motion.div {...wipe(0.55)} style={{ display: 'block', overflow: 'hidden', marginLeft: 'clamp(12px, 2vw, 36px)' }}>
                <span style={{
                  background: 'linear-gradient(135deg, #E83000 0%, #FF6820 45%, #FFAA60 100%)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                  display: 'block',
                }}>.SCALE</span>
              </motion.div>
            </div>
          </div>

          {/* Right: description + CTA (desktop only) */}
          <div style={{
            display: 'flex', flexDirection: 'column', gap: 28,
            paddingBottom: 'clamp(6px, 1.5vw, 18px)',
            minWidth: 'clamp(220px, 24vw, 380px)',
          }}
            className="hidden md:flex"
          >
            <motion.p {...fadeUp(0.8)} style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: 'clamp(14px, 1.4vw, 16px)', lineHeight: 1.75,
              color: 'rgba(240,210,180,0.62)', maxWidth: 340, fontWeight: 400,
            }}>
              We engineer paid social, content and funnels for Dubai's most competitive niches — turning
              every dirham of ad spend into qualified pipeline.
            </motion.p>
            <motion.div {...fadeUp(1.0)} style={{ display: 'flex', gap: 12 }}>
              <MagneticBtn
                href="#booking"
                className="btn-primary"
                style={{ fontSize: 12, padding: '12px 28px' }}
              >
                Book a Call
              </MagneticBtn>
              <MagneticBtn
                href="#results"
                style={{
                  fontSize: 12, letterSpacing: '0.15em', padding: '12px 24px',
                  borderRadius: 999, border: '1px solid rgba(255,130,60,0.22)',
                  color: 'rgba(240,200,155,0.7)', fontFamily: '"DM Sans", sans-serif',
                  fontWeight: 500, background: 'rgba(255,60,10,0.04)',
                  textDecoration: 'none', display: 'inline-block',
                  backdropFilter: 'blur(8px)',
                }}
              >
                Our Work →
              </MagneticBtn>
            </motion.div>
          </div>
        </div>

        {/* ── Bottom strip: thin rule + stats ── */}
        <div style={{
          position: 'relative', zIndex: 10,
          padding: 'clamp(36px, 5vh, 64px) clamp(24px, 7vw, 100px)',
        }}>
          {/* Thin rule */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={ready ? { scaleX: 1 } : {}}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 1.1 }}
            style={{
              height: 1, marginBottom: 28, originX: 0,
              background: 'linear-gradient(90deg, rgba(255,110,40,0.4), rgba(255,110,40,0.08) 60%, transparent)',
            }}
          />

          {/* Stats row */}
          <motion.div
            {...fadeUp(1.3)}
            style={{
              display: 'flex', alignItems: 'center',
              gap: 'clamp(20px, 4vw, 48px)', flexWrap: 'wrap',
            }}
          >
            <StatPill val="2–5×"   label="Average ROAS" />
            <StatPill val="60%+"   label="CPL Reduction" />
            <StatPill val="25+"    label="Active Campaigns" />
            <StatPill val="4.6/5"  label="Client Rating" />

            {/* Spacer + mobile CTA */}
            <div style={{ flex: 1 }} />
            <motion.div {...fadeUp(1.5)} className="flex md:hidden" style={{ gap: 10 }}>
              <MagneticBtn href="#booking" className="btn-primary"
                style={{ fontSize: 12, padding: '11px 24px' }}>
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
              <span style={{
                fontFamily: '"DM Sans", sans-serif', fontSize: 9,
                letterSpacing: '0.35em', textTransform: 'uppercase',
                color: 'rgba(240,210,180,0.28)',
              }}>Scroll</span>
              <motion.div
                style={{ width: 28, height: 1, background: 'rgba(255,110,40,0.35)', originX: 0 }}
                animate={{ scaleX: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 2.2 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
