import { useRef, useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform, useInView } from 'framer-motion'

const cases = [
  {
    client: 'Real Estate Client',
    segment: 'Luxury Real Estate · Dubai Marina',
    duration: '90 Days',
    badge: 'Real Estate',
    metrics: [
      { val: '+247%', label: 'Qualified Leads',         sub: 'vs. 90-day pre-campaign baseline' },
      { val: '2.8×',  label: 'Lower Cost Per Lead',     sub: 'Paid social CPL reduced significantly' },
      { val: '+180%', label: 'Instagram Profile Reach', sub: 'Organic growth via content strategy' },
    ],
    tags: ['Instagram', 'Meta Ads', 'Content'],
    accent: 'rgba(255,100,40,0.15)',
  },
  {
    client: 'F&B Group',
    segment: 'Fine Dining · DIFC',
    duration: '6 Months',
    badge: 'Hospitality',
    metrics: [
      { val: '185%', label: 'Direct Booking Inquiries', sub: 'Via social channels vs. prior period' },
      { val: '4.2×', label: 'Lower Cost Per Reservation', sub: 'From paid social campaigns' },
      { val: '67%',  label: 'Reduction in Paid CPL',    sub: 'Across Meta reservation campaigns' },
    ],
    tags: ['TikTok', 'Instagram Reels', 'Content'],
    accent: 'rgba(220,60,0,0.15)',
  },
  {
    client: 'Automotive Dealer',
    segment: 'Luxury Automotive · Sheikh Zayed Rd',
    duration: '4 Months',
    badge: 'Automotive',
    metrics: [
      { val: '3.2×', label: 'More Qualified Leads',      sub: 'Month-on-month by end of campaign' },
      { val: '61%',  label: 'CPL Reduction',             sub: 'Audience refinement & creative testing' },
      { val: '44%',  label: 'Test-Drive Booking Uplift', sub: 'Via retargeting & WhatsApp CTAs' },
    ],
    tags: ['Google Ads', 'Meta Ads', 'SEO'],
    accent: 'rgba(255,80,10,0.15)',
  },
  {
    client: 'Fashion Brand',
    segment: 'E-Commerce · Fashion & Lifestyle',
    duration: '5 Months',
    badge: 'E-Commerce',
    metrics: [
      { val: '3.9×',  label: 'Return on Ad Spend',       sub: 'Up from 1.4× at campaign start' },
      { val: '57%',   label: 'Lower CPL on Meta',        sub: 'Creative iteration & targeting' },
      { val: '+220%', label: 'Instagram Engagement',     sub: 'Content-led organic growth' },
    ],
    tags: ['TikTok Ads', 'Meta Ads', 'Instagram'],
    accent: 'rgba(200,40,0,0.15)',
  },
]

/* ── CountUp ─────────────────────────────────────────── */
function CountUp({ target, inView }) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!inView) return
    let start = null
    const duration = 1800
    const numStr = target.replace(/[^0-9.]/g, '')
    const num = parseFloat(numStr) || 0
    const raf = (ts) => {
      if (!start) start = ts
      const p = Math.min((ts - start) / duration, 1)
      const ease = 1 - Math.pow(1 - p, 3)
      setVal(Math.round(ease * num * 10) / 10)
      if (p < 1) requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [inView, target])
  const prefix  = target.match(/^[^\d]*/)?.[0] ?? ''
  const suffix  = target.match(/[^\d.]+$/)?.[0] ?? ''
  const display = Number.isInteger(val) ? val.toLocaleString() : val.toFixed(1)
  return <>{prefix}{display}{suffix}</>
}

/* ── 3D Tilt Card ────────────────────────────────────── */
function CaseCard({ c, index }) {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rx = useSpring(useTransform(my, [-1, 1], [7, -7]),  { stiffness: 180, damping: 20 })
  const ry = useSpring(useTransform(mx, [-1, 1], [-9, 9]),  { stiffness: 180, damping: 20 })
  const gx = useTransform(mx, [-1, 1], ['0%', '100%'])
  const gy = useTransform(my, [-1, 1], ['0%', '100%'])

  const handleMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    mx.set(((e.clientX - r.left) / r.width  - 0.5) * 2)
    my.set(((e.clientY - r.top ) / r.height - 0.5) * 2)
  }
  const handleLeave = () => { mx.set(0); my.set(0) }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
      style={{ perspective: 800 }}
    >
      <motion.article
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{
          rotateX: rx,
          rotateY: ry,
          transformStyle: 'preserve-3d',
          background: 'rgba(255,255,255,0.025)',
          border: '1px solid rgba(255,110,40,0.10)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderRadius: 20,
          overflow: 'hidden',
          cursor: 'default',
          boxShadow: '0 16px 60px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,160,80,0.06)',
          position: 'relative',
        }}
        data-cursor="hover"
      >
        {/* Shimmer highlight that follows mouse */}
        <motion.div
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            zIndex: 1,
            background: `radial-gradient(circle at ${gx} ${gy}, rgba(255,130,60,0.07) 0%, transparent 60%)`,
            borderRadius: 20,
          }}
        />

        {/* Accent top line */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0,
          height: 1,
          background: 'linear-gradient(90deg, transparent, rgba(255,120,50,0.35), transparent)',
          zIndex: 2,
        }} />

        {/* Card inner */}
        <div style={{ position: 'relative', zIndex: 3 }}>
          {/* Header */}
          <div style={{
            padding: '28px 28px 20px',
            borderBottom: '1px solid rgba(255,255,255,0.04)',
          }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 18 }}>
              <span style={{
                fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase',
                color: 'rgba(255,160,80,0.7)', fontFamily: '"DM Sans", sans-serif',
                border: '1px solid rgba(255,130,50,0.2)',
                borderRadius: 4, padding: '4px 10px',
                background: 'rgba(255,80,20,0.06)',
              }}>
                {c.badge}
              </span>
              <span style={{
                fontSize: 10, letterSpacing: '0.2em',
                color: 'rgba(255,255,255,0.25)', fontFamily: '"DM Sans", sans-serif',
              }}>
                {c.duration}
              </span>
            </div>
            <h3 style={{
              fontSize: 20, fontWeight: 600, fontFamily: '"DM Sans", sans-serif',
              color: 'rgba(255,255,255,0.85)', letterSpacing: '-0.01em',
              margin: '0 0 4px',
            }}>
              {c.client}
            </h3>
            <p style={{
              fontSize: 11, letterSpacing: '0.1em',
              color: 'rgba(255,180,130,0.35)', fontFamily: '"DM Sans", sans-serif',
            }}>
              {c.segment}
            </p>
          </div>

          {/* Metrics */}
          <div style={{ padding: '20px 28px', display: 'flex', flexDirection: 'column', gap: 18 }}>
            {c.metrics.map((m, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                <div style={{
                  fontSize: 28, fontWeight: 700, fontFamily: '"DM Sans", sans-serif',
                  lineHeight: 1, flexShrink: 0,
                  background: 'linear-gradient(135deg, #FF6030 0%, #FFAA60 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  minWidth: 72,
                }}>
                  <CountUp target={m.val} inView={inView} />
                </div>
                <div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', fontFamily: '"DM Sans", sans-serif', fontWeight: 500 }}>
                    {m.label}
                  </div>
                  <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.22)', marginTop: 2, fontFamily: '"DM Sans", sans-serif' }}>
                    {m.sub}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div style={{ padding: '0 28px 24px', display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {c.tags.map(t => (
              <span key={t} style={{
                fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase',
                color: 'rgba(255,160,90,0.45)', fontFamily: '"DM Sans", sans-serif',
                border: '1px solid rgba(255,130,50,0.1)',
                borderRadius: 4, padding: '4px 10px',
              }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.article>
    </motion.div>
  )
}

/* ── Section ─────────────────────────────────────────── */
export default function Results() {
  const headRef = useRef(null)
  const inView  = useInView(headRef, { once: true, margin: '-60px' })

  return (
    <section
      id="results"
      style={{
        padding: 'clamp(80px, 12vh, 140px) clamp(20px, 8vw, 120px)',
        background: '#080304',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient */}
      <div style={{
        position: 'absolute',
        top: '10%', right: '-5%',
        width: '50%', height: '70%',
        background: 'radial-gradient(ellipse at center, rgba(140,20,0,0.09) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ marginBottom: 64 }}
        >
          <div style={{
            display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18,
          }}>
            <span style={{ width: 28, height: 1, background: 'rgba(255,100,40,0.6)' }} />
            <span style={{
              fontSize: 11, letterSpacing: '0.4em', textTransform: 'uppercase',
              color: 'rgba(255,140,70,0.55)', fontFamily: '"DM Sans", sans-serif',
            }}>
              Proven Results
            </span>
          </div>
          <div style={{
            display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end',
            justifyContent: 'space-between', gap: 20,
          }}>
            <h2 style={{
              fontSize: 'clamp(36px, 5.5vw, 72px)',
              fontWeight: 700, fontFamily: '"DM Sans", sans-serif',
              color: 'rgba(255,255,255,0.88)',
              letterSpacing: '-0.02em', lineHeight: 1.05, margin: 0,
            }}>
              Numbers That<br />
              <span style={{
                background: 'linear-gradient(135deg, #E83000 0%, #FF8040 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>
                Don't Lie.
              </span>
            </h2>
            <p style={{
              fontSize: 14, lineHeight: 1.7,
              color: 'rgba(255,200,160,0.35)', fontFamily: '"DM Sans", sans-serif',
              maxWidth: 320, fontWeight: 400,
            }}>
              Real clients. Real data. No vanity metrics — only revenue, leads, and growth that moves the needle.
            </p>
          </div>
        </motion.div>

        {/* Cards grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 480px), 1fr))',
          gap: 20,
        }}>
          {cases.map((c, i) => <CaseCard key={c.badge} c={c} index={i} />)}
        </div>

        {/* Aggregate strip */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            marginTop: 24,
            background: 'rgba(255,255,255,0.025)',
            border: '1px solid rgba(255,110,40,0.10)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderRadius: 20,
            padding: 'clamp(24px, 4vw, 40px)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: 32,
            textAlign: 'center',
            boxShadow: 'inset 0 1px 0 rgba(255,160,80,0.06)',
          }}
        >
          {[
            { val: '2–5×',   label: 'Avg. Return on Ad Spend' },
            { val: '60%+',   label: 'Avg. CPL Reduction' },
            { val: '25+',    label: 'Active Client Campaigns' },
            { val: '4.6/5',  label: 'Client Satisfaction' },
          ].map(s => (
            <div key={s.label}>
              <div style={{
                fontSize: 'clamp(24px, 3.5vw, 40px)',
                fontWeight: 700, fontFamily: '"DM Sans", sans-serif',
                lineHeight: 1, marginBottom: 8,
                background: 'linear-gradient(135deg, #FF6030 0%, #FFAA60 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>
                {s.val}
              </div>
              <div style={{
                fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase',
                color: 'rgba(255,180,130,0.35)', fontFamily: '"DM Sans", sans-serif',
              }}>
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
