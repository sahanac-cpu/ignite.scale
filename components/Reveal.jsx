'use client'

import { motion } from 'framer-motion'

/* Blur fade-up reveal. Enhances an already-rendered default: animates from a
   small offset + blur + opacity, restored once in view (never re-hidden). */
export default function Reveal({ children, delay = 0, y = 26, as = 'div', className, style }) {
  const M = motion[as] || motion.div
  return (
    <M
      className={className}
      style={style}
      initial={{ opacity: 0, y, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.85, ease: [0.23, 1, 0.32, 1], delay }}
    >
      {children}
    </M>
  )
}
