'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

/* Scroll-linked parallax. Translates the child on the Y axis as the element
   passes through the viewport. `amount` = px of total travel. */
export default function Parallax({ children, amount = 80, className, style }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [amount, -amount])
  return (
    <div ref={ref} className={className} style={{ position: 'relative', overflow: 'hidden', ...style }}>
      <motion.div style={{ y, position: 'absolute', inset: '-12% 0', willChange: 'transform' }}>
        {children}
      </motion.div>
    </div>
  )
}
