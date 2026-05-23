import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Cursor() {
  const mx = useMotionValue(-200)
  const my = useMotionValue(-200)
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)

  const dotX = useSpring(mx, { stiffness: 900, damping: 40 })
  const dotY = useSpring(my, { stiffness: 900, damping: 40 })
  const ringX = useSpring(mx, { stiffness: 160, damping: 24 })
  const ringY = useSpring(my, { stiffness: 160, damping: 24 })

  useEffect(() => {
    const move = (e) => { mx.set(e.clientX); my.set(e.clientY) }

    const over = (e) => {
      if (e.target.closest('a, button, [data-cursor="hover"]')) setHovered(true)
    }
    const out = (e) => {
      if (e.target.closest('a, button, [data-cursor="hover"]')) setHovered(false)
    }
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
  }, [mx, my])

  return (
    <>
      {/* Outer ring — lags behind for trail feel */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full"
        style={{
          x: ringX, y: ringY,
          translateX: '-50%', translateY: '-50%',
          width: hovered ? 56 : 34,
          height: hovered ? 56 : 34,
          border: hovered
            ? '1px solid rgba(220,80,0,0.55)'
            : '1px solid rgba(255,255,255,0.2)',
          boxShadow: hovered ? '0 0 18px rgba(200,50,0,0.25)' : 'none',
          transition: 'width 0.25s, height 0.25s, border-color 0.25s, box-shadow 0.25s',
        }}
      />

      {/* Inner dot — snappy */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
        style={{
          x: dotX, y: dotY,
          translateX: '-50%', translateY: '-50%',
          width: hovered ? 6 : clicked ? 10 : 7,
          height: hovered ? 6 : clicked ? 10 : 7,
          background: hovered ? '#FF5500' : '#E83000',
          boxShadow: hovered
            ? '0 0 12px rgba(255,80,0,0.9), 0 0 24px rgba(200,40,0,0.4)'
            : '0 0 6px rgba(220,60,0,0.6)',
          transition: 'width 0.15s, height 0.15s, background 0.2s, box-shadow 0.2s',
        }}
      />
    </>
  )
}
