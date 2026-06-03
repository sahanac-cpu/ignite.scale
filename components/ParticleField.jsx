'use client'

import { useEffect, useRef } from 'react'

/* A slow drift of luminous motes — a bioluminescent night meadow.
   Cool cyan-white sparks with a few warm peach ones for depth.
   Canvas-based, DPR-aware, pauses when the tab is hidden, and falls back
   to a static field for reduced-motion users. */
export default function ParticleField({ density = 0.00009 }) {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let w = 0, h = 0, dpr = Math.min(window.devicePixelRatio || 1, 2)
    let motes = []
    let raf = null
    let running = true

    const COOL = [157, 233, 201]   // mint-cyan
    const WARM = [244, 203, 163]   // peach

    const build = () => {
      const rect = canvas.getBoundingClientRect()
      w = rect.width; h = rect.height
      canvas.width = w * dpr; canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.max(40, Math.min(140, Math.floor(w * h * density)))
      motes = Array.from({ length: count }, () => {
        const warm = Math.random() < 0.18
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          r: Math.random() * 1.7 + 0.4,
          a: Math.random() * 0.5 + 0.15,
          tw: Math.random() * Math.PI * 2,
          tws: Math.random() * 0.018 + 0.004,
          vx: (Math.random() - 0.5) * 0.12,
          vy: -(Math.random() * 0.18 + 0.04),
          c: warm ? WARM : COOL,
        }
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      for (const m of motes) {
        if (!reduce) {
          m.x += m.vx; m.y += m.vy; m.tw += m.tws
          if (m.y < -10) { m.y = h + 10; m.x = Math.random() * w }
          if (m.x < -10) m.x = w + 10
          if (m.x > w + 10) m.x = -10
        }
        const flicker = reduce ? 1 : 0.55 + Math.sin(m.tw) * 0.45
        const [r, g, b] = m.c
        const alpha = m.a * flicker
        const glow = m.r * 5
        const grad = ctx.createRadialGradient(m.x, m.y, 0, m.x, m.y, glow)
        grad.addColorStop(0, `rgba(${r},${g},${b},${alpha})`)
        grad.addColorStop(1, `rgba(${r},${g},${b},0)`)
        ctx.fillStyle = grad
        ctx.beginPath(); ctx.arc(m.x, m.y, glow, 0, Math.PI * 2); ctx.fill()
        ctx.fillStyle = `rgba(${r},${g},${b},${Math.min(1, alpha * 1.8)})`
        ctx.beginPath(); ctx.arc(m.x, m.y, m.r, 0, Math.PI * 2); ctx.fill()
      }
      if (running && !reduce) raf = requestAnimationFrame(draw)
    }

    build()
    draw()

    const onResize = () => { build(); if (reduce) draw() }
    const onVis = () => {
      running = !document.hidden
      if (running && !reduce) { cancelAnimationFrame(raf); raf = requestAnimationFrame(draw) }
      else cancelAnimationFrame(raf)
    }
    window.addEventListener('resize', onResize)
    document.addEventListener('visibilitychange', onVis)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
      document.removeEventListener('visibilitychange', onVis)
    }
  }, [density])

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
    />
  )
}
