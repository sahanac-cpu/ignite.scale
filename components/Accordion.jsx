'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Accordion({ items }) {
  const [open, setOpen] = useState(0)
  return (
    <div style={{ borderTop: '1px solid var(--line)' }}>
      {items.map((it, i) => {
        const isOpen = open === i
        return (
          <div key={i} style={{ borderBottom: '1px solid var(--line)' }}>
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              data-cursor="hover"
              style={{
                width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                gap: 24, padding: 'clamp(20px, 2.6vw, 28px) 0', background: 'none', border: 'none',
                cursor: 'pointer', textAlign: 'left',
              }}
            >
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(17px, 2.2vw, 23px)', color: isOpen ? 'var(--ink)' : 'var(--ink-dim)', letterSpacing: '-0.01em', transition: 'color .3s ease' }}>
                {it.q}
              </span>
              <motion.span animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                style={{ flexShrink: 0, color: 'var(--accent)', fontSize: 24, lineHeight: 1 }} aria-hidden="true">+</motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.36, ease: [0.16, 1, 0.3, 1] }}
                  style={{ overflow: 'hidden' }}
                >
                  <p style={{ paddingBottom: 'clamp(20px, 2.6vw, 28px)', color: 'var(--ink-dim)', fontSize: 16, lineHeight: 1.75, maxWidth: '64ch' }}>
                    {it.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
