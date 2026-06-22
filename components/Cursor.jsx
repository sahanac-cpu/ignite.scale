'use client'

import { useEffect, useRef, useState } from 'react'

/* Monochrome cursor: white dot with difference blend — appears black on white, white on black. */
export default function Cursor() {
  const dot  = useRef(null)
  const ring = useRef(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const fine   = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduce) return
    setEnabled(true)

    let rx = window.innerWidth / 2, ry = window.innerHeight / 2
    let dx = rx, dy = ry
    let raf

    const onMove = (e) => {
      dx = e.clientX; dy = e.clientY
      if (dot.current) dot.current.style.transform = `translate(${dx}px, ${dy}px)`
      const t = e.target.closest('[data-cursor="hover"], a, button')
      if (ring.current) ring.current.style.setProperty('--s', t ? '2.2' : '1')
    }
    const loop = () => {
      rx += (dx - rx) * 0.18
      ry += (dy - ry) * 0.18
      if (ring.current) {
        ring.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%) scale(var(--s, 1))`
      }
      raf = requestAnimationFrame(loop)
    }

    window.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(loop)
    return () => { window.removeEventListener('mousemove', onMove); cancelAnimationFrame(raf) }
  }, [])

  if (!enabled) return null

  return (
    <>
      {/* center dot — mix-blend-mode difference inverts against any background */}
      <div
        ref={dot}
        aria-hidden="true"
        style={{
          position: 'fixed', top: 0, left: 0,
          width: 5, height: 5,
          marginTop: -2.5, marginLeft: -2.5,
          borderRadius: '50%',
          background: '#ffffff',
          mixBlendMode: 'difference',
          pointerEvents: 'none',
          zIndex: 'var(--z-cursor)',
        }}
      />
      {/* trailing ring */}
      <div
        ref={ring}
        aria-hidden="true"
        style={{
          position: 'fixed', top: 0, left: 0,
          width: 32, height: 32,
          borderRadius: '50%',
          border: '1px solid rgba(111,135,156,0.6)',
          pointerEvents: 'none',
          zIndex: 'var(--z-cursor)',
          transition: 'border-color 0.3s ease, transform 0.12s linear',
        }}
      />
    </>
  )
}
