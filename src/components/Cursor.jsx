import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

/* Cursor v2 — a precise center dot + a soft bronze "spotlight" disc that
   expands and glows when hovering interactive elements. The dot uses
   mix-blend-mode so it stays visible on light or dark surfaces. */
export default function Cursor() {
  // touch / no-hover devices get the native cursor — no custom one
  const [touch] = useState(
    () => typeof window !== 'undefined' &&
      window.matchMedia('(hover: none), (pointer: coarse)').matches
  )

  const mx = useMotionValue(-200)
  const my = useMotionValue(-200)
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)

  const dotX = useSpring(mx, { stiffness: 1100, damping: 45 })
  const dotY = useSpring(my, { stiffness: 1100, damping: 45 })
  const discX = useSpring(mx, { stiffness: 140, damping: 18, mass: 0.6 })
  const discY = useSpring(my, { stiffness: 140, damping: 18, mass: 0.6 })

  useEffect(() => {
    if (touch) return
    const move = (e) => { mx.set(e.clientX); my.set(e.clientY) }
    const over = (e) => { if (e.target.closest('a, button, [data-cursor="hover"], input, textarea, select')) setHovered(true) }
    const out  = (e) => { if (e.target.closest('a, button, [data-cursor="hover"], input, textarea, select')) setHovered(false) }
    const down = () => setClicked(true)
    const up   = () => setClicked(false)
    window.addEventListener('mousemove', move)
    document.addEventListener('mouseover', over)
    document.addEventListener('mouseout', out)
    window.addEventListener('mousedown', down)
    window.addEventListener('mouseup', up)
    return () => {
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', over)
      document.removeEventListener('mouseout', out)
      window.removeEventListener('mousedown', down)
      window.removeEventListener('mouseup', up)
    }
  }, [mx, my, touch])

  if (touch) return null

  return (
    <>
      {/* soft spotlight disc — expands + glows on hover */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full"
        style={{ x: discX, y: discY, translateX: '-50%', translateY: '-50%', border: '1px solid' }}
        animate={{
          width: hovered ? 78 : 30,
          height: hovered ? 78 : 30,
          backgroundColor: hovered ? 'rgba(201,169,110,0.10)' : 'rgba(201,169,110,0)',
          borderColor: hovered ? 'rgba(201,169,110,0.55)' : 'rgba(201,169,110,0.30)',
          boxShadow: hovered ? '0 0 34px rgba(201,169,110,0.22)' : '0 0 0 rgba(201,169,110,0)',
        }}
        transition={{ type: 'spring', stiffness: 260, damping: 24 }}
      />

      {/* crisp center dot — inverts against any background */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
        style={{
          x: dotX, y: dotY,
          translateX: '-50%', translateY: '-50%',
          background: '#EDE0CC',
          mixBlendMode: 'difference',
        }}
        animate={{
          width: hovered ? 0 : clicked ? 11 : 6,
          height: hovered ? 0 : clicked ? 11 : 6,
          opacity: hovered ? 0 : 1,
        }}
        transition={{ type: 'spring', stiffness: 700, damping: 35 }}
      />
    </>
  )
}
