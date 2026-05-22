import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const services = [
  {
    num: '01',
    title: 'Social Media\nManagement',
    desc: 'We take over your social presence end-to-end. Content, scheduling, community management, analytics — every platform engineered for your specific Dubai audience.',
    tags: ['Instagram', 'TikTok', 'LinkedIn', 'X', 'Facebook'],
    metric: '300–1,000%',
    metricLabel: 'Average Follower Growth',
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <circle cx="13" cy="13" r="4.5" stroke="rgba(255,51,0,0.6)" strokeWidth="1.3"/>
        <path d="M13 3.5v2.5M13 20v2.5M3.5 13H6M20 13h2.5M6.3 6.3l1.8 1.8M18 18l1.7 1.7M6.3 19.7l1.8-1.7M18 8l1.7-1.7" stroke="rgba(255,51,0,0.4)" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Paid Advertising\n& Performance',
    desc: 'Meta, TikTok, Google, Snapchat — we build campaigns that generate qualified leads and real sales. Every dirham tracked, justified, and scaled.',
    tags: ['Meta Ads', 'TikTok Ads', 'Google Ads', 'Snapchat'],
    metric: '4.2–8.7×',
    metricLabel: 'Average Return on Ad Spend',
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path d="M4 19l5.5-7.5 4.5 3.5 4-5.5 5 9.5" stroke="rgba(255,51,0,0.6)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="21" cy="6" r="2.5" stroke="rgba(255,107,53,0.5)" strokeWidth="1.3"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Content\nProduction',
    desc: 'Cinematic reels, luxury photography direction, viral short-form, branded graphics — content that makes Dubai audiences stop scrolling.',
    tags: ['Video Reels', 'Photography', 'Copywriting', 'AI Visuals'],
    metric: '10×',
    metricLabel: 'Higher Organic Reach',
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <rect x="3" y="7" width="16" height="12" rx="1.5" stroke="rgba(255,51,0,0.6)" strokeWidth="1.3"/>
        <path d="M19 11l4-3v10l-4-3" stroke="rgba(255,51,0,0.4)" strokeWidth="1.3" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Website Design\n& Funnels',
    desc: 'High-converting landing pages, full brand websites, e-commerce stores — built to dominate Dubai search results and turn visitors into clients.',
    tags: ['Landing Pages', 'E-commerce', 'SEO Dubai', 'Funnels'],
    metric: '68%',
    metricLabel: 'Average Reduction in Cost per Lead',
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <rect x="3" y="5" width="20" height="16" rx="1.5" stroke="rgba(255,51,0,0.6)" strokeWidth="1.3"/>
        <path d="M3 10h20M7.5 5v5" stroke="rgba(255,51,0,0.4)" strokeWidth="1.3" strokeLinecap="round"/>
        <path d="M9 16h8M9 19h5" stroke="rgba(255,107,53,0.4)" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
  },
]

function ServiceCard({ s, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      className="glass gradient-border p-8 flex flex-col gap-6 group"
    >
      <div className="flex items-start justify-between">
        <div className="w-11 h-11 flex items-center justify-center border border-white/[0.07] bg-white/[0.02] group-hover:border-accent/20 group-hover:bg-accent/[0.04] transition-all duration-300">
          {s.icon}
        </div>
        <span
          className="font-display italic font-light text-white/[0.05] group-hover:text-white/[0.08] transition-colors"
          style={{ fontSize: 52 }}
        >
          {s.num}
        </span>
      </div>

      <div>
        <h3
          className="text-white font-body font-semibold leading-tight whitespace-pre-line mb-3"
          style={{ fontSize: 19 }}
        >
          {s.title}
        </h3>
        <p className="text-white/35 text-[13px] leading-relaxed font-body font-light">{s.desc}</p>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {s.tags.map((t) => (
          <span key={t} className="label-sm border border-white/[0.06] px-2.5 py-1">
            {t}
          </span>
        ))}
      </div>

      <div className="mt-auto pt-5 border-t border-white/[0.05]">
        <div
          className="font-display italic font-light leading-none"
          style={{
            fontSize: 32,
            background: 'linear-gradient(135deg, #FF3300, #FF6B35)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {s.metric}
        </div>
        <div className="label-sm mt-1.5">{s.metricLabel}</div>
      </div>
    </motion.div>
  )
}

export default function Services() {
  const headRef = useRef(null)
  const inView = useInView(headRef, { once: true, margin: '-60px' })

  return (
    <section id="services" className="section-pad max-w-7xl mx-auto">
      <motion.div
        ref={headRef}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="mb-16"
      >
        <div className="flex items-center gap-4 mb-6">
          <span className="w-8 h-px bg-accent" />
          <span className="label-sm text-accent/70">What We Do</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h2
            className="text-white font-body font-semibold leading-[0.95] tracking-tight"
            style={{ fontSize: 'clamp(40px, 6.5vw, 82px)' }}
          >
            Services That{' '}
            <em
              style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontStyle: 'italic',
                fontWeight: 300,
                background: 'linear-gradient(135deg, #FF3300, #FF6B35)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Actually Scale.
            </em>
          </h2>
          <p className="text-white/30 text-sm leading-relaxed max-w-sm md:text-right font-body font-light">
            Every service is engineered for one outcome — measurable growth for your Dubai business.
          </p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {services.map((s, i) => (
          <ServiceCard key={s.num} s={s} index={i} />
        ))}
      </div>
    </section>
  )
}
