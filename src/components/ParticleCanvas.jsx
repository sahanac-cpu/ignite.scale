import { useEffect, useRef } from 'react'

export default function ParticleCanvas() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    let animId

    const resize = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    /* ── Ember (warm) ───────────────────────── */
    class Ember {
      constructor(scatter) { this.init(scatter) }
      init(scatter = false) {
        this.x     = Math.random() * canvas.width
        this.y     = scatter ? Math.random() * canvas.height : canvas.height + Math.random() * 60
        this.r     = Math.random() * 1.6 + 0.3
        this.vx    = (Math.random() - 0.5) * 0.3
        this.vy    = -(Math.random() * 0.65 + 0.2)
        this.life  = scatter ? Math.random() : 1
        this.decay = Math.random() * 0.0035 + 0.0015
        const hue  = 8 + Math.random() * 26
        const lit  = 48 + Math.random() * 22
        this.hsl   = `hsl(${hue},88%,${lit}%)`
      }
      update() {
        this.x    += this.vx + Math.sin(performance.now() * 0.0008 + this.x * 0.01) * 0.1
        this.y    += this.vy
        this.life -= this.decay
        if (this.life <= 0 || this.y < -20) this.init()
      }
      draw() {
        ctx.save()
        ctx.globalAlpha = Math.max(0, this.life) * 0.5
        ctx.shadowColor = this.hsl
        ctx.shadowBlur  = 7
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2)
        ctx.fillStyle = this.hsl
        ctx.fill()
        ctx.restore()
      }
    }

    /* ── Star / cool dust ───────────────────── */
    class Star {
      constructor(scatter) { this.init(scatter) }
      init(scatter = false) {
        this.x     = Math.random() * canvas.width
        this.y     = scatter ? Math.random() * canvas.height : Math.random() * canvas.height
        this.r     = Math.random() * 1.0 + 0.15
        this.vx    = (Math.random() - 0.5) * 0.08
        this.vy    = (Math.random() - 0.5) * 0.06
        this.life  = scatter ? Math.random() : Math.random() * 0.5 + 0.5
        this.decay = Math.random() * 0.0018 + 0.0005
        this.grow  = Math.random() > 0.5
        // cool palette: indigo → cobalt → ice blue → soft violet
        const pick = Math.floor(Math.random() * 4)
        const palettes = [
          [210 + Math.random() * 20, 70 + Math.random() * 20, 65 + Math.random() * 20], // icy blue
          [240 + Math.random() * 20, 60 + Math.random() * 20, 60 + Math.random() * 15], // indigo
          [190 + Math.random() * 20, 50 + Math.random() * 30, 70 + Math.random() * 15], // cyan-teal
          [270 + Math.random() * 20, 50 + Math.random() * 25, 65 + Math.random() * 15], // soft violet
        ]
        const [h, s, l] = palettes[pick]
        this.hsl = `hsl(${h},${s}%,${l}%)`
      }
      update() {
        this.x += this.vx
        this.y += this.vy
        if (this.grow) {
          this.life += 0.003
          if (this.life >= 0.85) this.grow = false
        } else {
          this.life -= this.decay
          if (this.life <= 0) this.init(true)
        }
        if (this.x < 0) this.x = canvas.width
        if (this.x > canvas.width) this.x = 0
        if (this.y < 0) this.y = canvas.height
        if (this.y > canvas.height) this.y = 0
      }
      draw() {
        ctx.save()
        ctx.globalAlpha = Math.max(0, this.life) * 0.65
        ctx.shadowColor = this.hsl
        ctx.shadowBlur  = 10
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2)
        ctx.fillStyle = this.hsl
        ctx.fill()
        ctx.restore()
      }
    }

    /* ── Glow blob ──────────────────────────── */
    class GlowBlob {
      constructor(cool) { this.cool = cool; this.init() }
      init() {
        this.x    = Math.random() * canvas.width
        this.y    = Math.random() * canvas.height
        this.r    = 100 + Math.random() * 180
        this.vx   = (Math.random() - 0.5) * 0.12
        this.vy   = (Math.random() - 0.5) * 0.07
        this.life = Math.random() * 0.4
        this.grow = true
      }
      update() {
        this.x += this.vx
        this.y += this.vy
        if (this.grow) {
          this.life += 0.0015
          if (this.life >= 0.5) this.grow = false
        } else {
          this.life -= 0.0006
          if (this.life <= 0) this.init()
        }
        if (this.x < -300 || this.x > canvas.width  + 300) this.vx *= -1
        if (this.y < -300 || this.y > canvas.height + 300) this.vy *= -1
      }
      draw() {
        const alpha = this.life * (this.cool ? 0.09 : 0.07)
        const color = this.cool
          ? `rgba(30,60,200,${alpha})`
          : `rgba(180,40,0,${alpha})`
        const grad = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.r)
        grad.addColorStop(0, color)
        grad.addColorStop(1, 'rgba(0,0,0,0)')
        ctx.save()
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2)
        ctx.fillStyle = grad
        ctx.fill()
        ctx.restore()
      }
    }

    const embers = Array.from({ length: 45 }, (_, i) => new Ember(i < 25))
    const stars  = Array.from({ length: 55 }, (_, i) => new Star(i < 40))
    const blobs  = [
      new GlowBlob(true),
      new GlowBlob(true),
      new GlowBlob(true),
      new GlowBlob(false),
      new GlowBlob(false),
    ]

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      blobs.forEach(b  => { b.update();  b.draw()  })
      stars.forEach(s  => { s.update();  s.draw()  })
      embers.forEach(e => { e.update();  e.draw()  })
      animId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={ref}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  )
}
