import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const cases = [
  {
    client: 'Real Estate Client',
    segment: 'Luxury Real Estate · Dubai Marina',
    duration: '90 Days',
    badge: 'Real Estate',
    metrics: [
      { val: '+1,863%', label: 'Instagram Follower Growth', sub: '2,400 → 47,200 followers' },
      { val: '340%', label: 'More Qualified Leads', sub: 'vs. pre-campaign baseline' },
      { val: 'AED 12.4M', label: 'Revenue Attributed to Social', sub: 'Tracked via CRM integration' },
    ],
    tags: ['Instagram', 'Meta Ads', 'Content'],
  },
  {
    client: 'F&B Group',
    segment: 'Fine Dining · DIFC',
    duration: '6 Months',
    badge: 'Hospitality',
    metrics: [
      { val: '+950%', label: 'Engagement Rate', sub: '0.8% → 8.4%' },
      { val: '280%', label: 'Increase in Reservations', sub: '38 → 144 bookings/week' },
      { val: 'AED 2.1M', label: 'Additional Revenue', sub: 'Attributed to social media' },
    ],
    tags: ['TikTok', 'Instagram Reels', 'Content'],
  },
  {
    client: 'Automotive Dealer',
    segment: 'Luxury Automotive · Sheikh Zayed Rd',
    duration: '4 Months',
    badge: 'Automotive',
    metrics: [
      { val: '+1,125%', label: 'Monthly Social Leads', sub: '12 → 147 leads per month' },
      { val: '68%', label: 'Reduction in Cost Per Lead', sub: 'AED 820 → AED 262' },
      { val: '340%', label: 'More Showroom Visits', sub: 'Tracked via booking links' },
    ],
    tags: ['Google Ads', 'Meta Ads', 'SEO'],
  },
  {
    client: 'Fashion Brand',
    segment: 'E-Commerce · Fashion & Lifestyle',
    duration: '5 Months',
    badge: 'E-Commerce',
    metrics: [
      { val: '8.45×', label: 'Return on Ad Spend', sub: 'Up from 1.2×' },
      { val: '677%', label: 'Revenue Growth', sub: 'AED 180K → AED 1.4M/month' },
      { val: '367%', label: 'Click-Through Rate Lift', sub: '0.9% → 4.2% CTR' },
    ],
    tags: ['TikTok Ads', 'Meta Ads', 'Funnels'],
  },
]

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

  const prefix = target.match(/^[^\d]*/)?.[0] ?? ''
  const suffix = target.match(/[^\d.]+$/)?.[0] ?? ''
  const display = Number.isInteger(val) ? val.toLocaleString() : val.toFixed(1)
  return <>{prefix}{display}{suffix}</>
}

function CaseCard({ c, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: index * 0.09 }}
      className="glass gradient-border overflow-hidden group"
      whileHover={{ y: -4, transition: { duration: 0.3 } }}
    >
      {/* Header */}
      <div className="p-8 pb-6 border-b border-white/[0.05]">
        <div className="flex items-start justify-between mb-6">
          <span className="label-sm text-accent/70 border border-accent/25 px-3 py-1 bg-accent/[0.04]">
            {c.badge}
          </span>
          <span className="label-sm">{c.duration}</span>
        </div>
        <h3
          className="text-white font-body font-semibold leading-tight mb-2"
          style={{ fontSize: 22 }}
        >
          {c.client}
        </h3>
        <p className="label-sm">{c.segment}</p>
      </div>

      {/* Metrics */}
      <div className="p-8 space-y-5">
        {c.metrics.map((m, i) => (
          <div key={i} className="flex items-start gap-4">
            <div
              className="font-display italic font-light leading-none shrink-0"
              style={{
                fontSize: 30,
                background: 'linear-gradient(135deg, #FF3300, #FF6B35)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              <CountUp target={m.val} inView={inView} />
            </div>
            <div>
              <div className="text-white/65 text-sm font-body font-medium">{m.label}</div>
              <div className="text-white/25 text-[11px] mt-0.5 font-body">{m.sub}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Tags */}
      <div className="px-8 pb-8 flex flex-wrap gap-2">
        {c.tags.map((t) => (
          <span key={t} className="label-sm border border-white/[0.06] px-3 py-1">
            {t}
          </span>
        ))}
      </div>
    </motion.article>
  )
}

export default function Results() {
  const headRef = useRef(null)
  const inView = useInView(headRef, { once: true, margin: '-60px' })

  return (
    <section id="results" className="section-pad max-w-7xl mx-auto">
      <motion.div
        ref={headRef}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="mb-16"
      >
        <div className="flex items-center gap-4 mb-6">
          <span className="w-8 h-px bg-accent" />
          <span className="label-sm text-accent/70">Proven Results</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h2
            className="text-white font-body font-semibold leading-[0.95] tracking-tight"
            style={{ fontSize: 'clamp(40px, 6.5vw, 82px)' }}
          >
            Numbers That<br />
            <em
              className="font-display font-light not-italic"
              style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontStyle: 'italic',
                fontWeight: 300,
                background: 'linear-gradient(135deg, #FF3300, #FF6B35)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Don't Lie.
            </em>
          </h2>
          <p className="text-white/30 text-sm leading-relaxed max-w-xs font-body font-light md:text-right">
            Real clients. Real data. No vanity metrics — only revenue, leads, and growth that moves the needle.
          </p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {cases.map((c, i) => <CaseCard key={c.badge} c={c} index={i} />)}
      </div>

      {/* Aggregate strip */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mt-8 glass gradient-border p-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
      >
        {[
          { val: 'AED 50M+', label: 'Total Client Revenue' },
          { val: '180+', label: 'Campaigns Launched' },
          { val: '2.4B+', label: 'Total Impressions' },
          { val: '4.9 / 5', label: 'Client Satisfaction' },
        ].map((s) => (
          <div key={s.label}>
            <div
              className="font-display italic font-light leading-none"
              style={{
                fontSize: 'clamp(26px, 3.5vw, 42px)',
                background: 'linear-gradient(135deg, #FF3300, #FF6B35)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {s.val}
            </div>
            <div className="label-sm mt-2">{s.label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
