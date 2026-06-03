'use client'

import { motion } from 'framer-motion'

/* Reveal enhances an already-visible default: the initial state is a small
   offset + opacity, but whileInView restores it, and once:true means it never
   re-hides. If JS/motion never runs, framer renders the animate state. */
export default function Reveal({ children, delay = 0, y = 22, as = 'div', className, style }) {
  const M = motion[as] || motion.div
  return (
    <M
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </M>
  )
}
