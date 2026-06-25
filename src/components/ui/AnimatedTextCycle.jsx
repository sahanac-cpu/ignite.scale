import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * AnimatedTextCycle
 * Cycles through a list of words in place, animating each in/out while the
 * container width springs to fit the current word (no layout jump).
 *
 * Props:
 *  - words: string[]            words to cycle through
 *  - interval: number = 5000    ms between switches
 *  - className: string          classes applied to the animated word
 */
export default function AnimatedTextCycle({ words, interval = 5000, className = '' }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [width, setWidth] = useState('auto')
  const measureRef = useRef(null)

  // `words.length` is a stable number; depend on it rather than the `words`
  // array reference — callers often pass a fresh array literal each render,
  // which would otherwise tear down and reset the timer before it can fire.
  const count = words ? words.length : 0

  // measure the width of the current word from the hidden measuring layer
  useEffect(() => {
    if (measureRef.current) {
      const elements = measureRef.current.children
      if (elements.length > currentIndex) {
        const newWidth = elements[currentIndex].getBoundingClientRect().width
        // +6px so italic serif tails (e.g. "curiosity") never clip
        setWidth(`${Math.ceil(newWidth) + 6}px`)
      }
    }
  }, [currentIndex, count])

  // advance the index on an interval
  useEffect(() => {
    if (count === 0) return
    const id = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % count)
    }, interval)
    return () => clearInterval(id)
  }, [interval, count])

  const containerVariants = {
    hidden: { y: -16, opacity: 0, filter: 'blur(6px)' },
    visible: {
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
    },
    exit: {
      y: 16,
      opacity: 0,
      filter: 'blur(6px)',
      transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
    },
  }

  return (
    <>
      {/* hidden measuring layer — one node per word, never visible */}
      <div
        ref={measureRef}
        aria-hidden="true"
        style={{
          position: 'absolute',
          visibility: 'hidden',
          height: 0,
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
        }}
      >
        {words.map((word, i) => (
          <span key={i} className={className} style={{ whiteSpace: 'nowrap' }}>
            {word}
          </span>
        ))}
      </div>

      {/* animated, width-springing slot */}
      <motion.span
        className="relative inline-flex items-center"
        animate={{ width }}
        transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
        style={{
          display: 'inline-flex',
          whiteSpace: 'nowrap',
          overflow: 'visible',
          verticalAlign: 'baseline',
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={currentIndex}
            className={className}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{ display: 'inline-block', whiteSpace: 'nowrap' }}
          >
            {words[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </motion.span>
    </>
  )
}
