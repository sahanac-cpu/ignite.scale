import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform, useInView } from 'framer-motion'
import ParticleCanvas from './ParticleCanvas'

/* ── Magnetic button ─────────────────────────────────────── */
function MagneticBtn({ children, className, style, onClick, href }) {
  const ref = useRef(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const x  = useSpring(mx, { stiffness: 280, damping: 22 })
  const y  = useSpring(my, { stiffness: 280, damping: 22 })

  const handleMove = (e) => {
    const r = ref.current.getBoundingClientRect()
    mx.set((e.clientX - r.left - r.width  / 2) * 0.38)
    my.set((e.clientY - r.top  - r.height / 2) * 0.38)
  }
  const handleLeave = () => { mx.set(0); my.set(0) }

  const Tag = href ? 'a' : 'button'
  return (
    <motion.div ref={ref} style={{ x, y, display: 'inline-block' }}
      onMouseMove={handleMove} onMouseLeave={handleLeave}>
      <Tag
        href={href}
        onClick={onClick}
        className={className}
        style={style}
        data-cursor="hover"
      >
        {children}
      </Tag>
    </motion.div>
  )
}

/* ── Clip-path text reveal ───────────────────────────────── */
const wipe = (delay = 0) => ({
  initial: { clipPath: 'inset(0 100% 0 0)' },
  animate: { clipPath: 'inset(0 0% 0 0)' },
  transition: { duration: 1.1, ease: [0.76, 0, 0.24, 1], delay },
})

/* ── Parallax helper ─────────────────────────────────────── */
function useParallax(rawX, rawY, factorX = 1, factorY = 1) {
  const px = useTransform(rawX, v => v * factorX)
  const py = useTransform(rawY, v => v * factorY)
  const sx  = useSpring(px, { stiffness: 60, damping: 18 })
  const sy  = useSpring(py, { stiffness: 60, damping: 18 })
  return { x: sx, y: sy }
}

/* ── Data card ───────────────────────────────────────────── */
function DataCard({ label, value, sub, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rx = useSpring(useTransform(my, [-1, 1], [ 6, -6]), { stiffness: 200, damping: 20 })
  const ry = useSpring(useTransform(mx, [-1, 1], [-8,  8]), { stiffness: 200, damping: 20 })

  const handleMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    mx.set(((e.clientX - r.left) / r.width  - 0.5) * 2)
    my.set(((e.clientY - r.top ) / r.height - 0.5) * 2)
  }
  const handleLeave = () => { mx.set(0); my.set(0) }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay }}
      style={{ perspective: 600 }}
    >
      <motion.div
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{
          rotateX: rx, rotateY: ry,
          transformStyle: 'preserve-3d',
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,130,60,0.12)',
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
          borderRadius: 16,
          padding: '22px 28px',
          cursor: 'default',
          boxShadow: '0 8px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,160,80,0.06)',
          minWidth: 150,
        }}
        data-cursor="hover"
      >
        <div style={{
          fontSize: 11,
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          color: 'rgba(255,160,100,0.5)',
          fontFamily: '"DM Sans", sans-serif',
          marginBottom: 8,
        }}>{label}</div>
        <div style={{
          fontSize: 'clamp(22px, 3vw, 34px)',
          fontWeight: 700,
          fontFamily: '"DM Sans", sans-serif',
          background: 'linear-gradient(135deg, #FF7040 0%, #FFAA70 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          lineHeight: 1,
          marginBottom: 6,
        }}>{value}</div>
        <div style={{
          fontSize: 11,
          color: 'rgba(255,200,160,0.35)',
          fontFamily: '"DM Sans", sans-serif',
        }}>{sub}</div>
      </motion.div>
    </motion.div>
  )
}

/* ── Main Hero ───────────────────────────────────────────── */
export default function Hero() {
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const [ready, setReady] = useState(false)
  const heroRef = useRef(null)

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 120)
    return () => clearTimeout(t)
  }, [])

  const handleMouseMove = (e) => {
    const r = heroRef.current?.getBoundingClientRect()
    if (!r) return
    rawX.set((e.clientX - r.left - r.width  / 2) / r.width)
    rawY.set((e.clientY - r.top  - r.height / 2) / r.height)
  }
  const handleMouseLeave = () => { rawX.set(0); rawY.set(0) }

  const plate1   = useParallax(rawX, rawY, -18, -12)
  const plate2   = useParallax(rawX, rawY,  22,  16)
  const plate3   = useParallax(rawX, rawY, -10,  24)
  const headlineP = useParallax(rawX, rawY,   6,   4)

  return (
    <section
      ref={heroRef}
      id="hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden flex flex-col items-center justify-center"
      style={{ minHeight: '100vh', background: '#080304' }}
    >
      {/* Canvas particles */}
      <ParticleCanvas />

      {/* Aurora mesh */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 2 }}>
        <motion.div
          style={{
            position: 'absolute',
            inset: 0,
            background: `
              radial-gradient(ellipse 70% 55% at 18% 62%, rgba(155,18,0,0.25) 0%, transparent 65%),
              radial-gradient(ellipse 50% 40% at 82% 32%, rgba(200,48,0,0.16) 0%, transparent 60%),
              radial-gradient(ellipse 55% 45% at 50% 85%, rgba(90,8,0,0.20) 0%, transparent 60%)
            `,
          }}
          animate={{ opacity: [0.75, 1, 0.75] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Back-plate left */}
      <motion.div
        style={{
          x: plate1.x, y: plate1.y,
          position: 'absolute',
          left: '4%',
          top: '15%',
          width: 'clamp(160px, 18vw, 300px)',
          height: 'clamp(280px, 42vh, 500px)',
          background: 'rgba(255,90,20,0.04)',
          border: '1px solid rgba(255,110,40,0.07)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          borderRadius: 20,
          rotate: '-7deg',
          zIndex: 3,
          boxShadow: 'inset 0 1px 0 rgba(255,160,80,0.05)',
        }}
      />
      {/* Back-plate right */}
      <motion.div
        style={{
          x: plate2.x, y: plate2.y,
          position: 'absolute',
          right: '6%',
          top: '22%',
          width: 'clamp(120px, 14vw, 240px)',
          height: 'clamp(200px, 34vh, 400px)',
          background: 'rgba(255,60,10,0.03)',
          border: '1px solid rgba(255,90,30,0.06)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderRadius: 18,
          rotate: '9deg',
          zIndex: 3,
        }}
      />
      {/* Accent plate */}
      <motion.div
        style={{
          x: plate3.x, y: plate3.y,
          position: 'absolute',
          right: '20%',
          bottom: '20%',
          width: 'clamp(80px, 9vw, 150px)',
          height: 'clamp(80px, 9vw, 150px)',
          background: 'rgba(255,80,20,0.05)',
          border: '1px solid rgba(255,120,50,0.08)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderRadius: 14,
          rotate: '22deg',
          zIndex: 3,
        }}
      />

      {/* Main content */}
      <motion.div
        style={{ x: headlineP.x, y: headlineP.y, position: 'relative', zIndex: 10, width: '100%' }}
        className="flex flex-col items-center text-center px-6"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 28 }}
        >
          <span style={{
            display: 'inline-block', width: 32, height: 1,
            background: 'linear-gradient(90deg, transparent, rgba(255,100,40,0.7))',
          }} />
          <span style={{
            fontSize: 11, letterSpacing: '0.4em', textTransform: 'uppercase',
            color: 'rgba(255,150,90,0.6)', fontFamily: '"DM Sans", sans-serif',
          }}>
            Dubai's Premier Growth Agency
          </span>
          <span style={{
            display: 'inline-block', width: 32, height: 1,
            background: 'linear-gradient(90deg, rgba(255,100,40,0.7), transparent)',
          }} />
        </motion.div>

        {/* Giant display type */}
        <div style={{
          fontFamily: '"DM Sans", system-ui, sans-serif',
          fontSize: 'clamp(68px, 15vw, 210px)',
          lineHeight: 0.88,
          fontWeight: 800,
          userSelect: 'none',
          letterSpacing: '-0.03em',
        }}>
          {/* IGNITE — outlined */}
          <motion.div {...wipe(0.3)} style={{ display: 'block', overflow: 'hidden' }}>
            <span style={{
              WebkitTextStroke: '1.5px rgba(255,255,255,0.72)',
              WebkitTextFillColor: 'transparent',
              color: 'transparent',
              display: 'block',
            }}>
              IGNITE
            </span>
          </motion.div>

          {/* .SCALE — solid ember gradient */}
          <motion.div {...wipe(0.62)} style={{ display: 'block', overflow: 'hidden' }}>
            <span style={{
              background: 'linear-gradient(135deg, #E83000 0%, #FF6820 48%, #FFAA60 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'block',
            }}>
              .SCALE
            </span>
          </motion.div>
        </div>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 1.0 }}
          style={{
            marginTop: 32, maxWidth: 480,
            fontSize: 'clamp(15px, 1.5vw, 17px)',
            lineHeight: 1.8,
            color: 'rgba(255,200,170,0.45)',
            fontFamily: '"DM Sans", sans-serif',
            fontWeight: 400,
          }}
        >
          Performance-led social media for Dubai's most ambitious brands.
          We turn scroll into revenue.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 1.25 }}
          style={{ display: 'flex', gap: 16, marginTop: 44, flexWrap: 'wrap', justifyContent: 'center' }}
        >
          <MagneticBtn
            href="#booking"
            className="btn-primary"
            style={{ fontSize: 13, letterSpacing: '0.15em', padding: '14px 36px' }}
          >
            Book a Strategy Call
          </MagneticBtn>

          <MagneticBtn
            href="#results"
            style={{
              fontSize: 13, letterSpacing: '0.15em', padding: '14px 36px',
              borderRadius: 999,
              border: '1px solid rgba(255,120,60,0.22)',
              color: 'rgba(255,180,130,0.7)',
              fontFamily: '"DM Sans", sans-serif', fontWeight: 500,
              background: 'rgba(255,60,10,0.04)',
              cursor: 'pointer',
              backdropFilter: 'blur(8px)',
              textDecoration: 'none',
              display: 'inline-block',
            }}
          >
            See Our Results →
          </MagneticBtn>
        </motion.div>

        {/* Stat cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={ready ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1.5 }}
          style={{ display: 'flex', gap: 14, marginTop: 64, flexWrap: 'wrap', justifyContent: 'center' }}
        >
          <DataCard label="Average ROAS"     value="2–5×"  sub="Across all active campaigns"  delay={1.6}  />
          <DataCard label="CPL Reduction"    value="60%+"  sub="vs. client's previous agency" delay={1.75} />
          <DataCard label="Active Campaigns" value="25+"   sub="Running across UAE & GCC"     delay={1.9}  />
          <DataCard label="Client Rating"    value="4.6/5" sub="Based on client feedback"     delay={2.05} />
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={ready ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 2.3 }}
        style={{
          position: 'absolute', bottom: 28, left: '50%', transform: 'translateX(-50%)',
          zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
        }}
      >
        <span style={{
          fontSize: 9, letterSpacing: '0.35em', textTransform: 'uppercase',
          color: 'rgba(255,150,90,0.3)', fontFamily: '"DM Sans", sans-serif',
        }}>Scroll</span>
        <motion.div
          style={{ width: 1, background: 'rgba(255,100,40,0.3)', originY: 0 }}
          animate={{ height: [0, 34, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}
