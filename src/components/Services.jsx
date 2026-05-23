import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'

const services = [
  {
    num: '01',
    title: 'Paid Social & Performance Ads',
    tagline: 'Meta · TikTok · Snapchat · Google',
    body: 'Full-funnel paid campaigns engineered around your CPL and ROAS targets. We architect the audience, the creative, and the bidding strategy — then optimise daily until every dirham works harder.',
    metric: '2–5× avg ROAS',
    tags: ['Meta Ads', 'TikTok Ads', 'A/B Testing', 'Retargeting'],
  },
  {
    num: '02',
    title: 'Content Creation & Creative Strategy',
    tagline: 'Video · Photography · Copy',
    body: "Scroll-stopping content built for Dubai's high-intent audience. Our in-house creative team produces UGC-style video, luxury editorial photography, and data-backed copy that converts.",
    metric: '3–5× engagement lift',
    tags: ['UGC Video', 'Reels', 'Ad Creatives', 'Copywriting'],
  },
  {
    num: '03',
    title: 'Community Growth & Management',
    tagline: 'Instagram · LinkedIn · TikTok',
    body: "Daily channel management, proactive community building, and influencer co-ordination. We turn your brand's social presence into a trust-building engine that warms leads before they ever reach your inbox.",
    metric: '+180% qualified reach',
    tags: ['Channel Management', 'Influencer Outreach', 'Posting Strategy'],
  },
  {
    num: '04',
    title: 'Funnel Design & Landing Pages',
    tagline: 'Conversion-Optimised Web Experiences',
    body: "High-converting landing pages and lead funnels designed for Dubai's most competitive niches — real estate, hospitality, luxury retail, and professional services. CRO baked in from day one.",
    metric: '60%+ CPL reduction',
    tags: ['Landing Pages', 'CRO', 'Lead Funnels', 'Analytics'],
  },
]

function AccordionRow({ svc, index, isOpen, onToggle }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: index * 0.1 }}
      style={{
        borderBottom: '1px solid rgba(255,110,40,0.08)',
      }}
    >
      {/* Row header */}
      <button
        onClick={onToggle}
        data-cursor="hover"
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: 24,
          padding: '28px 0',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
        }}
      >
        {/* Number */}
        <span style={{
          fontSize: 11,
          letterSpacing: '0.2em',
          color: isOpen ? 'rgba(255,130,60,0.8)' : 'rgba(255,130,60,0.3)',
          fontFamily: '"DM Sans", sans-serif',
          fontWeight: 500,
          minWidth: 32,
          transition: 'color 0.3s',
        }}>
          {svc.num}
        </span>

        {/* Title */}
        <span style={{
          flex: 1,
          fontSize: 'clamp(18px, 2.2vw, 26px)',
          fontWeight: 600,
          fontFamily: '"DM Sans", sans-serif',
          color: isOpen ? 'rgba(255,255,255,0.92)' : 'rgba(255,255,255,0.55)',
          letterSpacing: '-0.01em',
          transition: 'color 0.3s',
        }}>
          {svc.title}
        </span>

        {/* Metric pill */}
        <span style={{
          fontSize: 11,
          letterSpacing: '0.15em',
          color: 'rgba(255,160,80,0.6)',
          fontFamily: '"DM Sans", sans-serif',
          border: '1px solid rgba(255,130,50,0.15)',
          borderRadius: 999,
          padding: '5px 14px',
          display: 'none',
          whiteSpace: 'nowrap',
        }}
          className="hidden sm:inline-block"
        >
          {svc.metric}
        </span>

        {/* Expand icon */}
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 32,
            height: 32,
            borderRadius: '50%',
            border: `1px solid ${isOpen ? 'rgba(255,120,50,0.4)' : 'rgba(255,255,255,0.1)'}`,
            color: isOpen ? 'rgba(255,120,50,0.9)' : 'rgba(255,255,255,0.35)',
            fontSize: 18,
            lineHeight: 1,
            fontWeight: 300,
            flexShrink: 0,
            transition: 'border-color 0.3s, color 0.3s',
          }}
        >
          +
        </motion.span>
      </button>

      {/* Expanded body */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{
              paddingLeft: 'clamp(0px, 3.5vw, 56px)',
              paddingBottom: 32,
              display: 'flex',
              gap: 48,
              flexWrap: 'wrap',
            }}>
              <div style={{ flex: 1, minWidth: 240 }}>
                <p style={{
                  fontSize: 15,
                  lineHeight: 1.8,
                  color: 'rgba(255,200,170,0.5)',
                  fontFamily: '"DM Sans", sans-serif',
                  marginBottom: 16,
                }}>
                  {svc.body}
                </p>
                <span style={{
                  fontSize: 11,
                  color: 'rgba(255,170,110,0.5)',
                  fontFamily: '"DM Sans", sans-serif',
                  letterSpacing: '0.1em',
                }}>
                  {svc.tagline}
                </span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignContent: 'flex-start', paddingTop: 2 }}>
                {svc.tags.map(tag => (
                  <span key={tag} style={{
                    fontSize: 11,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,160,90,0.55)',
                    border: '1px solid rgba(255,130,50,0.12)',
                    borderRadius: 6,
                    padding: '6px 12px',
                    fontFamily: '"DM Sans", sans-serif',
                    background: 'rgba(255,80,20,0.04)',
                    backdropFilter: 'blur(8px)',
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function Services() {
  const [open, setOpen] = useState(0)
  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true, margin: '-80px' })

  return (
    <section
      id="services"
      style={{
        padding: 'clamp(80px, 12vh, 140px) clamp(20px, 8vw, 120px)',
        background: '#080304',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient glow */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '-10%',
        width: '55%',
        height: '60%',
        background: 'radial-gradient(ellipse at center, rgba(140,20,0,0.10) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1040, margin: '0 auto' }}>
        {/* Section header */}
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 28 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ marginBottom: 64 }}
        >
          <div style={{
            fontSize: 11,
            letterSpacing: '0.4em',
            textTransform: 'uppercase',
            color: 'rgba(255,140,70,0.5)',
            fontFamily: '"DM Sans", sans-serif',
            marginBottom: 16,
          }}>
            What We Do
          </div>
          <h2 style={{
            fontSize: 'clamp(32px, 5vw, 58px)',
            fontWeight: 700,
            fontFamily: '"DM Sans", sans-serif',
            color: 'rgba(255,255,255,0.88)',
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            margin: 0,
          }}>
            Services built for<br />
            <span style={{
              background: 'linear-gradient(135deg, #E83000 0%, #FF8040 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>measurable growth</span>
          </h2>
        </motion.div>

        {/* Accordion */}
        <div style={{ borderTop: '1px solid rgba(255,110,40,0.08)' }}>
          {services.map((svc, i) => (
            <AccordionRow
              key={svc.num}
              svc={svc}
              index={i}
              isOpen={open === i}
              onToggle={() => setOpen(open === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
