import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Cursor() {
  const mx = useMotionValue(-100)
  const my = useMotionValue(-100)

  const dotX = useSpring(mx, { stiffness: 800, damping: 40 })
  const dotY = useSpring(my, { stiffness: 800, damping: 40 })
  const ringX = useSpring(mx, { stiffness: 150, damping: 22 })
  const ringY = useSpring(my, { stiffness: 150, damping: 22 })

  useEffect(() => {
    const move = (e) => { mx.set(e.clientX); my.set(e.clientY) }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [mx, my])

  return (
    <>
      {/* Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border border-white/25"
        style={{
          width: 36,
          height: 36,
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-accent"
        style={{
          width: 6,
          height: 6,
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </>
  )
}
