'use client'

import { useEffect, useRef, useState } from 'react'

/* A soft warm glow ring that trails the pointer and expands over interactive
   elements. Disabled entirely on touch / coarse pointers and for reduced motion. */
export default function Cursor() {
  const dot = useRef(null)
  const ring = useRef(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
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
      if (ring.current) ring.current.style.setProperty('--s', t ? '1.9' : '1')
    }
    const loop = () => {
      rx += (dx - rx) * 0.18
      ry += (dy - ry) * 0.18
      if (ring.current) ring.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%) scale(var(--s, 1))`
      raf = requestAnimationFrame(loop)
    }
    window.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(loop)
    return () => { window.removeEventListener('mousemove', onMove); cancelAnimationFrame(raf) }
  }, [])

  if (!enabled) return null

  return (
    <>
      <div ref={dot} aria-hidden="true" style={{
        position: 'fixed', top: 0, left: 0, width: 5, height: 5, marginTop: -2.5, marginLeft: -2.5,
        borderRadius: '50%', background: 'var(--accent)', pointerEvents: 'none',
        zIndex: 'var(--z-cursor)', mixBlendMode: 'screen',
      }} />
      <div ref={ring} aria-hidden="true" style={{
        position: 'fixed', top: 0, left: 0, width: 34, height: 34,
        borderRadius: '50%', border: '1px solid var(--accent-glow)',
        boxShadow: '0 0 24px var(--accent-glow)',
        pointerEvents: 'none', zIndex: 'var(--z-cursor)',
        transition: 'border-color .3s ease',
      }} />
    </>
  )
}
