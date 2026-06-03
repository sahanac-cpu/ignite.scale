'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'

/* Inertia smooth-scroll (the CRÉO / Awwwards weighted-scroll feel).
   Disabled for reduced-motion. Drives the native scroll position so
   framer-motion's useScroll keeps working for parallax + reveals. */
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.4,
    })

    let raf
    const loop = (time) => {
      lenis.raf(time)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    return () => { cancelAnimationFrame(raf); lenis.destroy() }
  }, [])

  return null
}
