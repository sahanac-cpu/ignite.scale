'use client'

import { motion } from 'framer-motion'

/* Word-by-word reveal for headings. Each word rises + fades into view,
   staggered, masked by an overflow-hidden box. Uses px + opacity (not %)
   so whileInView fires reliably. Word spacing via margin (the inter-word
   space can't live inside an overflow-hidden box). Accent words = gold italic. */
export default function SplitText({ text, as = 'h2', className, style, accent = [], delay = 0 }) {
  const M = motion[as] || motion.h2
  const words = text.split(' ')
  return (
    <M className={className} style={style} aria-label={text}>
      {words.map((w, i) => {
        const isAccent = accent.includes(w.replace(/[.,]/g, ''))
        return (
          <span
            key={i}
            aria-hidden="true"
            style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom', paddingBottom: '0.14em', marginBottom: '-0.14em', marginRight: i < words.length - 1 ? '0.26em' : 0 }}
          >
            <motion.span
              initial={{ y: 34, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1], delay: delay + i * 0.055 }}
              style={{ display: 'inline-block', color: isAccent ? 'var(--accent-soft)' : undefined, fontStyle: isAccent ? 'italic' : undefined }}
            >
              {w}
            </motion.span>
          </span>
        )
      })}
    </M>
  )
}
