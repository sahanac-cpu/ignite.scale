import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import AuroraLayer from './AuroraLayer'

const faqs = [
  {
    q: 'How long does it take to see results for a Dubai-based business?',
    a: 'Most clients see measurable growth within the first 30 days — follower growth, improved engagement, and early ad traction. Significant results (consistent qualified leads and attributable revenue) typically appear between 60–90 days as we refine campaigns based on real data. Long-term dominance takes 3–6 months of sustained scaling.',
  },
  {
    q: 'Which niches do you specialise in across the UAE?',
    a: 'Our core specialisms are luxury real estate, five-star hospitality, fine dining & F&B, fashion & e-commerce, luxury automotive, and professional services (legal, finance, healthcare). These are the highest-value niches in Dubai and where our results speak for themselves. We selectively take other niches too — contact us to discuss your specific industry.',
  },
  {
    q: 'What separates ignite.scale from other marketing agencies in Dubai?',
    a: 'Three things: we are performance-obsessed, we specialize in Dubai\'s unique market (local culture, Arabic content, GCC buying behaviour), and we tie everything to revenue — not vanity metrics. We also produce content in-house, so there\'s no quality loss from outsourced designers or videographers.',
  },
  {
    q: 'Which platforms do you manage and run ads on?',
    a: 'Instagram, TikTok, LinkedIn, Facebook, X (Twitter), YouTube Shorts, Snapchat (popular in UAE), and Google. We recommend platforms based on your niche and audience — a luxury real estate brand needs different channels than an e-commerce fashion label.',
  },
  {
    q: 'What is your minimum budget for social media management in Dubai?',
    a: 'Our management retainers start from AED 7,500/month. Paid advertising budgets are separate — we recommend a minimum of AED 5,000/month to see meaningful results from paid campaigns. We have packages from AED 12,500/month that include both management and ads.',
  },
  {
    q: 'Do you create all the content yourselves or do we need to provide assets?',
    a: 'We handle everything in-house: content strategy, copywriting, graphic design, video editing, reel production, and photography direction. For luxury brands we often coordinate on-location shoots in Dubai — all managed by our creative team. You simply approve and we execute.',
  },
  {
    q: 'Can you help businesses targeting Arabic-speaking audiences in Dubai and the GCC?',
    a: 'Absolutely. We produce bilingual content (English & Arabic) and our team includes native Arabic copywriters who understand local nuance, cultural sensitivities, and what resonates with Emirati, Saudi, and wider GCC audiences. Bilingual social strategies typically outperform English-only by 40–60% in the UAE market.',
  },
  {
    q: 'How do you measure ROI and what reporting do we receive?',
    a: 'We track what actually matters: qualified lead volume, cost per lead, revenue attribution (via UTM tracking and CRM integration), ROAS on paid campaigns, organic reach and follower quality, and engagement rates. You receive a detailed monthly report plus a live dashboard you can access anytime.',
  },
]

function Item({ item, i }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: i * 0.05 }}
      className="border-b border-white/[0.06]"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-6 text-left group"
      >
        <span className="text-white/75 group-hover:text-white text-sm md:text-base font-medium transition-colors leading-snug">
          {item.q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0 w-6 h-6 border border-white/[0.08] rounded-full flex items-center justify-center text-white/30 group-hover:border-accent/40 group-hover:text-accent transition-colors mt-0.5"
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="text-white/40 text-sm leading-relaxed pb-6">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const headRef = useRef(null)
  const inView = useInView(headRef, { once: true, margin: '-60px' })

  return (
    <section id="faq" style={{ position: 'relative', overflow: 'hidden', background: '#03050F' }}>
      <AuroraLayer variant="faq" />
      <div className="section-pad max-w-7xl mx-auto" style={{ position: 'relative', zIndex: 1 }}>
      <motion.div
        ref={headRef}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="mb-14"
      >
        <div className="flex items-center gap-4 mb-5">
          <span className="w-8 h-px bg-accent" />
          <span className="text-accent text-[10px] font-medium tracking-[0.4em] uppercase">FAQ</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h2
            className="font-display text-white leading-none tracking-tight"
            style={{ fontSize: 'clamp(44px, 7vw, 90px)' }}
          >
            GOT
            <br />
            <span className="gradient-text">QUESTIONS?</span>
          </h2>
          <p className="text-white/35 text-sm leading-relaxed max-w-sm md:text-right">
            Everything Dubai businesses ask us before signing. If your question isn't here, book a free call.
          </p>
        </div>
      </motion.div>

      <div className="max-w-4xl">
        {faqs.map((item, i) => (
          <Item key={item.q} item={item} i={i} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-12 glass gradient-border rounded-sm p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
      >
        <div>
          <div className="text-white font-semibold mb-1">Still have questions?</div>
          <div className="text-white/35 text-sm">Our team is available 9am–6pm, Monday to Saturday.</div>
        </div>
        <div className="flex flex-wrap gap-4">
          <a href="mailto:admin@ignite-scale.com" className="btn-ghost text-sm">
            Email Us <span className="text-accent">→</span>
          </a>
          <a href="#booking" className="btn-primary">
            Book a Call
          </a>
        </div>
      </motion.div>
      </div>
    </section>
  )
}
