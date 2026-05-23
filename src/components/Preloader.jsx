import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const TARGET   = 'IGNITE.SCALE'
const CHARS    = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$'
const DURATION = 1200   // ms to finish scramble
const HOLD     = 400    // ms to hold revealed state before sliding out

function randomChar() {
  return CHARS[Math.floor(Math.random() * CHARS.length)]
}

export default function Preloader() {
  const [text,     setText]     = useState(() => TARGET.split('').map(randomChar).join(''))
  const [revealed, setRevealed] = useState(false)
  const [done,     setDone]     = useState(false)
  const startRef = useRef(null)
  const rafRef   = useRef(null)

  useEffect(() => {
    startRef.current = performance.now()

    const tick = (now) => {
      const elapsed = now - startRef.current
      const progress = Math.min(elapsed / DURATION, 1)

      // Reveal chars from left → right
      setText(
        TARGET.split('').map((char, i) => {
          const threshold = i / TARGET.length
          return progress > threshold ? char : randomChar()
        }).join('')
      )

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick)
      } else {
        // Scramble done — show gradient text, then slide out
        setText(TARGET)
        setTimeout(() => setRevealed(true), 80)
        setTimeout(() => setDone(true), 80 + HOLD)
      }
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center"
      style={{
        background:    '#080304',
        zIndex:        9999,
        pointerEvents: done ? 'none' : 'all',
      }}
      animate={{ y: done ? '-100%' : '0%' }}
      transition={{ duration: 0.72, ease: [0.76, 0, 0.24, 1] }}
    >
      {/* Pulsing ember sweep */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(180,30,0,0.12) 0%, transparent 70%)',
            'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(220,50,0,0.20) 0%, transparent 70%)',
            'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(180,30,0,0.12) 0%, transparent 70%)',
          ],
        }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="text-center" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            fontFamily:           '"DM Sans", system-ui, sans-serif',
            fontWeight:           700,
            fontSize:             'clamp(28px, 5vw, 54px)',
            letterSpacing:        '0.22em',
            fontVariantNumeric:   'tabular-nums',
            minWidth:             '14ch',
            color:                revealed ? 'transparent' : 'rgba(255,255,255,0.88)',
            background:           revealed ? 'linear-gradient(135deg, #E83000 0%, #FF6B35 55%, #FFAA60 100%)' : undefined,
            WebkitBackgroundClip: revealed ? 'text' : undefined,
            WebkitTextFillColor:  revealed ? 'transparent' : undefined,
            transition:           'color 0.25s',
          }}
        >
          {text}
        </div>

        {/* Progress line */}
        <motion.div
          className="mx-auto mt-5"
          style={{
            height:     1,
            background: 'linear-gradient(90deg, transparent, rgba(220,80,0,0.55), transparent)',
          }}
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: DURATION / 1000, ease: 'easeInOut' }}
        />
      </div>
    </motion.div>
  )
}
