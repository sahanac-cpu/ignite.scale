'use client'

import { motion, useScroll, useSpring } from 'framer-motion'

/* Hairline progress bar — ink black on paper white, 1px height */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 130, damping: 28, mass: 0.3 })
  return (
    <motion.div
      aria-hidden="true"
      style={{
        scaleX,
        transformOrigin: '0%',
        position: 'fixed',
        top: 0, left: 0, right: 0,
        height: 1,
        background: 'var(--color-bone-white)',
        zIndex: 'var(--z-nav)',
      }}
    />
  )
}
