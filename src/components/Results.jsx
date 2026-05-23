import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform, useInView } from 'framer-motion'

const cases = [
  {
    badge:    'Real Estate',
    segment:  'Dubai Marina',
    duration: '90 days',
    headline: '+247%',
    sub:      'Qualified Leads',
    detail:   '2.8× lower CPL vs. prior 90 days. Paid social + content.',
    gradient: 'linear-gradient(160deg, #5C1000 0%, #A82000 40%, #E84000 75%, #FF6020 100%)',
    tag:      'Meta Ads · Content',
  },
  {
    badge:    'Fine Dining',
    segment:  'DIFC',
    duration: '6 months',
    headline: '4.2×',
    sub:      'Lower Cost Per Reservation',
    detail:   '185% more direct booking inquiries via social.',
    gradient: 'linear-gradient(160deg, #3A1500 0%, #7A3000 40%, #C85800 75%, #E87A10 100%)',
    tag:      'TikTok · Reels',
  },
  {
    badge:    'Luxury Auto',
    segment:  'Sheikh Zayed Rd',
    duration: '4 months',
    headline: '61%',
    sub:      'CPL Reduction',
    detail:   '3.2× more qualified leads month-on-month.',
    gradient: 'linear-gradient(160deg, #0D0D28 0%, #1E1E5A 40%, #3030A0 75%, #5050D0 100%)',
    tag:      'Meta · Google Ads',
  },
  {
    badge:    'E-Commerce',
    segment:  'Fashion & Lifestyle',
    duration: '5 months',
    headline: '3.9×',
    sub:      'Return on Ad Spend',
    detail:   '+220% Instagram engagement. 57% lower CPL on Meta.',
    gradient: 'linear-gradient(160deg, #280010 0%, #5C0028 40%, #A0005A 75%, #CC0070 100%)',
    tag:      'TikTok Ads · Meta',
  },
  {
    badge:    'Healthcare',
    segment:  'JLT Clinic',
    duration: '3 months',
    headline: '68%',
    sub:      'Lower Lead Cost',
    detail:   '3.1× more bookings from paid social in 90 days.',
    gradient: 'linear-gradient(160deg, #001A10 0%, #004428 40%, #007A48 75%, #00A060 100%)',
    tag:      'Meta Ads · Content',
  },
]

/* ── Single Voyager card ─────────────────────────────────── */
function VoyagerCard({ c, rotateY, scale, zIndex, isCenter, delay }) {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rx = useSpring(useTransform(my, [-1, 1], [ 5, -5]), { stiffness: 200, damping: 22 })
  const ry = useSpring(useTransform(mx, [-1, 1], [-7,  7]), { stiffness: 200, damping: 22 })

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    mx.set(((e.clientX - r.left) / r.width  - 0.5) * 2)
    my.set(((e.clientY - r.top ) / r.height - 0.5) * 2)
  }
  const onLeave = () => { mx.set(0); my.set(0) }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay }}
      style={{
        perspective: 900,
        position: 'relative',
        zIndex,
      }}
    >
      <motion.div
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{
          rotateX: isCenter ? rx : 0,
          rotateY: isCenter ? ry : rotateY,
          scale,
          transformStyle: 'preserve-3d',
          width:        'clamp(200px, 18vw, 280px)',
          height:       'clamp(300px, 40vh, 460px)',
          borderRadius: 20,
          background:   c.gradient,
          overflow:     'hidden',
          cursor:       'default',
          position:     'relative',
          boxShadow:    isCenter
            ? '0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.06)'
            : '0 20px 50px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)',
          flexShrink: 0,
        }}
        whileHover={isCenter ? {} : { rotateY: rotateY * 0.55, scale: scale + 0.04 }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        data-cursor="hover"
      >
        {/* Grain overlay */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          opacity: 0.05, mixBlendMode: 'overlay',
        }} />

        {/* Top: badge + duration */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, padding: '20px 20px 12px',
          zIndex: 3,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, transparent 100%)',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{
              fontFamily: '"DM Sans", sans-serif', fontSize: 9,
              letterSpacing: '0.3em', textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.7)',
              border: '1px solid rgba(255,255,255,0.18)',
              borderRadius: 4, padding: '3px 8px',
            }}>{c.badge}</span>
            <span style={{
              fontFamily: '"DM Sans", sans-serif', fontSize: 9,
              color: 'rgba(255,255,255,0.35)', letterSpacing: '0.15em',
            }}>{c.duration}</span>
          </div>
        </div>

        {/* Bottom: metric + context */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, padding: '28px 20px 22px',
          zIndex: 3,
          background: 'linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.6) 60%, transparent 100%)',
        }}>
          <div style={{
            fontFamily: '"DM Sans", sans-serif', fontWeight: 800,
            fontSize: 'clamp(34px, 4.5vw, 52px)', lineHeight: 1,
            color: '#FFFFFF', marginBottom: 4,
            textShadow: '0 2px 20px rgba(0,0,0,0.5)',
          }}>{c.headline}</div>
          <div style={{
            fontFamily: '"DM Sans", sans-serif', fontSize: 12, fontWeight: 600,
            color: 'rgba(255,230,200,0.9)', marginBottom: 6, lineHeight: 1.3,
          }}>{c.sub}</div>
          <div style={{
            fontFamily: '"DM Sans", sans-serif', fontSize: 11,
            color: 'rgba(255,210,170,0.5)', lineHeight: 1.5,
          }}>{c.detail}</div>
          <div style={{
            marginTop: 10,
            fontFamily: '"DM Sans", sans-serif', fontSize: 9,
            letterSpacing: '0.2em', textTransform: 'uppercase',
            color: 'rgba(255,200,150,0.4)',
          }}>{c.tag}</div>
        </div>
      </motion.div>
    </motion.div>
  )
}

/* ── Section ─────────────────────────────────────────────── */
export default function Results() {
  const headRef = useRef(null)
  const inView  = useInView(headRef, { once: true, margin: '-60px' })

  const fanConfig = [
    { rotateY:  32, scale: 0.82, zIndex: 1, delay: 0.3 },
    { rotateY:  16, scale: 0.91, zIndex: 2, delay: 0.2 },
    { rotateY:   0, scale: 1.00, zIndex: 4, delay: 0.1, isCenter: true },
    { rotateY: -16, scale: 0.91, zIndex: 2, delay: 0.2 },
    { rotateY: -32, scale: 0.82, zIndex: 1, delay: 0.3 },
  ]

  return (
    <section
      id="results"
      style={{
        padding: 'clamp(80px, 11vh, 130px) 0',
        background: '#03050F',
        position: 'relative', overflow: 'hidden',
      }}
    >
      {/* Ambient */}
      <div style={{
        position: 'absolute', top: '5%', right: '-8%',
        width: '48%', height: '70%',
        background: 'radial-gradient(ellipse at center, rgba(18,38,180,0.10) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      {/* Header */}
      <motion.div
        ref={headRef}
        initial={{ opacity: 0, y: 22 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.75, ease: [0.25, 0.1, 0.25, 1] }}
        style={{
          padding: '0 clamp(24px, 7vw, 100px)',
          marginBottom: 'clamp(48px, 7vh, 80px)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
          <span style={{ width: 24, height: 1, background: 'rgba(255,110,40,0.6)' }} />
          <span style={{
            fontFamily: '"DM Sans", sans-serif', fontSize: 10,
            letterSpacing: '0.4em', textTransform: 'uppercase',
            color: 'rgba(240,190,140,0.5)',
          }}>Proven Results</span>
        </div>
        <div style={{
          display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end',
          justifyContent: 'space-between', gap: 16,
        }}>
          <h2 style={{
            fontFamily: '"DM Sans", sans-serif', fontWeight: 700,
            fontSize: 'clamp(28px, 3.8vw, 52px)',
            color: 'rgba(245,230,210,0.9)',
            letterSpacing: '-0.02em', lineHeight: 1.1, margin: 0,
          }}>
            Numbers that{' '}
            <span style={{
              background: 'linear-gradient(135deg, #E83000 0%, #FF8040 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>don't lie.</span>
          </h2>
          <p style={{
            fontFamily: '"DM Sans", sans-serif', fontSize: 13,
            color: 'rgba(240,200,165,0.38)', lineHeight: 1.7,
            maxWidth: 300, fontWeight: 400,
          }}>
            No vanity metrics. Only CPL, ROAS, and qualified leads.
          </p>
        </div>
      </motion.div>

      {/* Fan of cards */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        gap: 'clamp(-20px, -1.5vw, -8px)',
        padding: '0 clamp(12px, 4vw, 60px)',
        perspective: 1200,
        perspectiveOrigin: '50% 80%',
        overflowX: 'auto',
        overflowY: 'visible',
        paddingBottom: 32,
      }}>
        {cases.map((c, i) => (
          <VoyagerCard
            key={c.badge}
            c={c}
            rotateY={fanConfig[i].rotateY}
            scale={fanConfig[i].scale}
            zIndex={fanConfig[i].zIndex}
            isCenter={!!fanConfig[i].isCenter}
            delay={fanConfig[i].delay}
          />
        ))}
      </div>

      {/* Aggregate strip */}
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        style={{
          margin: 'clamp(40px, 6vh, 64px) clamp(24px, 7vw, 100px) 0',
          background: 'rgba(255,255,255,0.025)',
          border: '1px solid rgba(255,110,40,0.09)',
          backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
          borderRadius: 18, padding: 'clamp(20px, 3vw, 36px)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
          gap: 28, textAlign: 'center',
        }}
      >
        {[
          { val: '2–5×',  label: 'Avg. ROAS' },
          { val: '60%+',  label: 'Avg. CPL Reduction' },
          { val: '25+',   label: 'Active Campaigns' },
          { val: '4.6/5', label: 'Client Rating' },
        ].map(s => (
          <div key={s.label}>
            <div style={{
              fontFamily: '"DM Sans", sans-serif', fontWeight: 700,
              fontSize: 'clamp(22px, 3vw, 36px)', lineHeight: 1, marginBottom: 6,
              background: 'linear-gradient(135deg, #FF6030 0%, #FFAA60 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>{s.val}</div>
            <div style={{
              fontFamily: '"DM Sans", sans-serif', fontSize: 10,
              letterSpacing: '0.2em', textTransform: 'uppercase',
              color: 'rgba(240,200,165,0.35)',
            }}>{s.label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
