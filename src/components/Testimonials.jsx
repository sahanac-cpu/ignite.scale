import { useRef, useState, useEffect } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import AuroraLayer from './AuroraLayer'

const reviews = [
  {
    quote: "ignite.scale transformed our brand's online presence. We went from 3–4 leads a month to consistently 40+ qualified inquiries. The ROI is undeniable — this is the only agency I'll recommend in Dubai.",
    role: 'CEO · Luxury Real Estate · Canary Wharf',
    initials: 'A.R.',
    niche: 'Real Estate',
    metric: '40+',
    metricLabel: 'Leads / month',
  },
  {
    quote: "Our reservations increased 280% in six months. The content they produce is world-class and perfectly captures the fine dining experience we offer. Our TikTok grew from nothing to 180K followers.",
    role: 'F&B Director · Fine Dining · Dubai',
    initials: 'S.M.',
    niche: 'Hospitality',
    metric: '280%',
    metricLabel: 'More Reservations',
  },
  {
    quote: "We were spending £50K per month on ads with minimal return. ignite.scale restructured our entire paid strategy from scratch. Now we're generating 8× returns. Game-changing.",
    role: 'Founder · Fashion E-Commerce · UK',
    initials: 'M.C.',
    niche: 'E-Commerce',
    metric: '8×',
    metricLabel: 'Return on Ad Spend',
  },
]

const Stars = () => (
  <div style={{ display: 'flex', gap: 4 }}>
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} width="12" height="12" viewBox="0 0 11 11" fill="#C9A96E">
        <path d="M5.5 1l1.3 2.6 2.9.4-2.1 2.1.5 2.9-2.6-1.4-2.6 1.4.5-2.9L1.3 4l2.9-.4L5.5 1z"/>
      </svg>
    ))}
  </div>
)

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const headRef = useRef(null)
  const inView  = useInView(headRef, { once: true, margin: '-60px' })

  /* Auto-advance */
  useEffect(() => {
    if (paused) return
    const id = setInterval(() => setActive(a => (a + 1) % reviews.length), 6000)
    return () => clearInterval(id)
  }, [paused])

  const r = reviews[active]

  return (
    <section id="testimonials" style={{ position: 'relative', overflow: 'hidden', background: '#03050F' }}>
      <AuroraLayer variant="testimonials" />

      <div className="section-pad max-w-7xl mx-auto" style={{ position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: 'clamp(40px, 7vh, 72px)', textAlign: 'center' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, marginBottom: 20 }}>
            <span style={{ width: 32, height: 1, background: 'rgba(160,130,80,0.6)' }} />
            <span style={{
              fontFamily: '"DM Sans", sans-serif', fontSize: 10,
              letterSpacing: '0.4em', textTransform: 'uppercase',
              color: 'rgba(240,190,140,0.55)',
            }}>Client Voices</span>
            <span style={{ width: 32, height: 1, background: 'rgba(160,130,80,0.6)' }} />
          </div>
          <h2 style={{
            fontFamily: '"DM Sans", sans-serif', fontWeight: 700,
            fontSize: 'clamp(32px, 5.5vw, 72px)',
            color: 'rgba(245,230,210,0.92)',
            letterSpacing: '-0.03em', lineHeight: 1, margin: 0,
          }}>
            What the UAE's{' '}
            <em style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontStyle: 'italic', fontWeight: 300,
              background: 'linear-gradient(135deg, #A8895A, #C9A96E)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>Elite Say.</em>
          </h2>
        </motion.div>

        {/* Hero quote panel */}
        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          style={{ position: 'relative' }}
        >
          {/* Background metric watermark */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`metric-${active}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                position: 'absolute',
                right: '-2%', top: '50%',
                transform: 'translateY(-50%)',
                fontFamily: '"DM Sans", sans-serif',
                fontWeight: 800,
                fontSize: 'clamp(80px, 16vw, 200px)',
                lineHeight: 1,
                letterSpacing: '-0.04em',
                background: 'linear-gradient(135deg, rgba(160,130,80,0.07) 0%, rgba(201,169,110,0.04) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                pointerEvents: 'none',
                userSelect: 'none',
                zIndex: 0,
              }}
            >
              {r.metric}
            </motion.div>
          </AnimatePresence>

          {/* Glass quote card */}
          <div style={{
            background: 'rgba(255,255,255,0.042)',
            backdropFilter: 'blur(32px) saturate(200%)',
            WebkitBackdropFilter: 'blur(32px) saturate(200%)',
            border: '1px solid rgba(200,220,255,0.13)',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.11), 0 24px 80px rgba(0,0,0,0.35)',
            borderRadius: 24,
            padding: 'clamp(32px, 5vw, 64px)',
            position: 'relative',
            zIndex: 1,
            minHeight: 'clamp(240px, 30vh, 340px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Opening mark */}
                <div style={{
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                  fontStyle: 'italic',
                  fontSize: 'clamp(48px, 10vw, 100px)',
                  lineHeight: 0.6,
                  marginBottom: 'clamp(10px, 2vw, 20px)',
                  color: 'rgba(160,130,80,0.35)',
                  display: 'block',
                }}>"</div>

                {/* Quote text */}
                <blockquote style={{
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                  fontStyle: 'italic',
                  fontWeight: 400,
                  fontSize: 'clamp(19px, 2.6vw, 32px)',
                  lineHeight: 1.55,
                  color: 'rgba(245,230,210,0.85)',
                  margin: '0 0 clamp(24px, 4vw, 40px)',
                  maxWidth: '88%',
                }}>
                  {r.quote}
                </blockquote>

                {/* Author row */}
                <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                    {/* Avatar */}
                    <div style={{
                      width: 44, height: 44, borderRadius: '50%',
                      border: '1px solid rgba(160,130,80,0.30)',
                      background: 'radial-gradient(circle at 40% 40%, rgba(160,130,80,0.15), rgba(160,130,80,0.04))',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontFamily: '"DM Sans", sans-serif',
                      fontSize: 12, fontWeight: 600,
                      color: 'rgba(208,178,124,0.85)',
                      letterSpacing: '0.05em',
                      flexShrink: 0,
                    }}>
                      {r.initials}
                    </div>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                        <Stars />
                        <span style={{
                          fontFamily: '"DM Sans", sans-serif', fontSize: 9,
                          letterSpacing: '0.25em', textTransform: 'uppercase',
                          color: 'rgba(216,189,138,0.5)',
                          border: '1px solid rgba(201,169,110,0.15)',
                          borderRadius: 4, padding: '2px 8px',
                        }}>{r.niche}</span>
                      </div>
                      <div style={{
                        fontFamily: '"DM Sans", sans-serif', fontSize: 11,
                        color: 'rgba(230,205,175,0.45)',
                        letterSpacing: '0.05em',
                      }}>{r.role}</div>
                    </div>
                  </div>

                  {/* Metric badge */}
                  <div style={{
                    textAlign: 'right',
                    borderLeft: '1px solid rgba(160,130,80,0.18)',
                    paddingLeft: 16,
                    flexShrink: 0,
                  }}>
                    <div style={{
                      fontFamily: '"DM Sans", sans-serif', fontWeight: 800,
                      fontSize: 'clamp(22px, 3.5vw, 38px)', lineHeight: 1,
                      background: 'linear-gradient(135deg, #A8895A, #C9A96E)',
                      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                    }}>{r.metric}</div>
                    <div style={{
                      fontFamily: '"DM Sans", sans-serif', fontSize: 9,
                      letterSpacing: '0.2em', textTransform: 'uppercase',
                      color: 'rgba(240,190,140,0.35)', marginTop: 2,
                    }}>{r.metricLabel}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Progress + dot selector */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: 12, marginTop: 28,
          }}>
            {reviews.map((rev, i) => (
              <button
                key={rev.initials}
                data-cursor="hover"
                onClick={() => { setActive(i); setPaused(true); setTimeout(() => setPaused(false), 8000) }}
                style={{
                  background: 'none', border: 'none', padding: 6,
                  display: 'flex', alignItems: 'center',
                }}
              >
                <motion.div
                  animate={{
                    width: i === active ? 28 : 7,
                    background: i === active
                      ? 'linear-gradient(90deg, #A8895A, #C9A96E)'
                      : 'rgba(255,255,255,0.15)',
                  }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  style={{ height: 3, borderRadius: 999 }}
                />
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
