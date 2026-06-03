'use client'

import { motion, useScroll, useSpring } from 'framer-motion'

/* A thin gold bar at the very top that fills with scroll progress. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 130, damping: 28, mass: 0.3 })
  return (
    <motion.div
      aria-hidden="true"
      style={{
        scaleX, transformOrigin: '0%',
        position: 'fixed', top: 0, left: 0, right: 0, height: 2,
        background: 'linear-gradient(90deg, var(--accent-deep), var(--accent-soft))',
        zIndex: 'var(--z-nav)',
      }}
    />
  )
}
