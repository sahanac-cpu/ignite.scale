'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useMotionValue, useSpring } from 'framer-motion'

/* Magnetic pull toward the pointer. No-op on touch (no mousemove). */
export default function MagneticButton({ href, children, className, style, strength = 0.3 }) {
  const ref = useRef(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const x = useSpring(mx, { stiffness: 240, damping: 18 })
  const y = useSpring(my, { stiffness: 240, damping: 18 })

  const onMove = (e) => {
    const r = ref.current?.getBoundingClientRect()
    if (!r) return
    mx.set((e.clientX - r.left - r.width / 2) * strength)
    my.set((e.clientY - r.top - r.height / 2) * strength)
  }
  const reset = () => { mx.set(0); my.set(0) }

  const inner = (
    <motion.span ref={ref} onMouseMove={onMove} onMouseLeave={reset}
      style={{ x, y, display: 'inline-flex' }}>
      <span className={className} style={style} data-cursor="hover">{children}</span>
    </motion.span>
  )

  return href ? <Link href={href}>{inner}</Link> : inner
}
