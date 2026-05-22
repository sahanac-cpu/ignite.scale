import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const reviews = [
  {
    quote: "ignite.scale transformed our brand's online presence. We went from 3–4 leads a month to consistently 40+ qualified inquiries. The ROI is undeniable — this is the only agency I'll recommend in Dubai.",
    role: 'CEO · Luxury Real Estate · Dubai Marina',
    initials: 'A.R.',
    rating: 5,
    niche: 'Real Estate',
  },
  {
    quote: "Our reservations increased 280% in six months. The content they produce is world-class and perfectly captures the fine dining experience we offer. Our TikTok grew from nothing to 180K followers.",
    role: 'F&B Director · Fine Dining · DIFC',
    initials: 'S.M.',
    rating: 5,
    niche: 'Hospitality',
  },
  {
    quote: "We were spending AED 50K per month on ads with minimal return. ignite.scale restructured our entire paid strategy from scratch. Now we're generating 8× returns. Game-changing.",
    role: 'Founder · Fashion E-Commerce · UAE',
    initials: 'M.C.',
    rating: 5,
    niche: 'E-Commerce',
  },
]

const Stars = () => (
  <div className="flex gap-1">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} width="11" height="11" viewBox="0 0 11 11" fill="#FF3300">
        <path d="M5.5 1l1.3 2.6 2.9.4-2.1 2.1.5 2.9-2.6-1.4-2.6 1.4.5-2.9L1.3 4l2.9-.4L5.5 1z"/>
      </svg>
    ))}
  </div>
)

export default function Testimonials() {
  const headRef = useRef(null)
  const inView = useInView(headRef, { once: true, margin: '-60px' })

  return (
    <section className="section-pad max-w-7xl mx-auto">
      <motion.div
        ref={headRef}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="mb-16 text-center"
      >
        <div className="flex items-center justify-center gap-4 mb-6">
          <span className="w-8 h-px bg-accent" />
          <span className="label-sm text-accent/70">Client Voices</span>
          <span className="w-8 h-px bg-accent" />
        </div>
        <h2
          className="text-white font-body font-semibold leading-[0.95] tracking-tight"
          style={{ fontSize: 'clamp(40px, 6.5vw, 82px)' }}
        >
          What Dubai's&nbsp;
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
            Elite Say.
          </em>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {reviews.map((r, i) => (
          <motion.div
            key={r.initials}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
            className="glass gradient-border p-8 flex flex-col gap-6"
          >
            <div className="flex items-center justify-between">
              <Stars />
              <span className="label-sm text-accent/50 border border-accent/15 px-2 py-1">
                {r.niche}
              </span>
            </div>

            <blockquote
              className="flex-1 leading-relaxed text-white/50 text-sm font-body font-light"
              style={{ fontStyle: 'normal' }}
            >
              <span
                className="font-display"
                style={{
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                  fontStyle: 'italic',
                  fontWeight: 300,
                  fontSize: 48,
                  lineHeight: 0.5,
                  display: 'block',
                  marginBottom: 12,
                  color: 'rgba(255,51,0,0.3)',
                }}
              >
                "
              </span>
              {r.quote}
            </blockquote>

            <div className="flex items-center gap-3 pt-4 border-t border-white/[0.05]">
              <div className="w-9 h-9 rounded-full border border-accent/20 bg-accent/[0.06] flex items-center justify-center text-accent text-[11px] font-medium tracking-wider">
                {r.initials}
              </div>
              <div className="label-sm leading-relaxed">{r.role}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
