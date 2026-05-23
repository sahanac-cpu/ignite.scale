import { useEffect, useRef } from 'react'

export default function ParticleCanvas() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    let animId

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    class Ember {
      constructor(scatter = false) { this.init(scatter) }

      init(scatter = false) {
        this.x = Math.random() * canvas.width
        this.y = scatter ? Math.random() * canvas.height : canvas.height + Math.random() * 60
        this.r = Math.random() * 1.8 + 0.4
        this.vx = (Math.random() - 0.5) * 0.35
        this.vy = -(Math.random() * 0.7 + 0.25)
        this.life = scatter ? Math.random() : 1
        this.decay = Math.random() * 0.0035 + 0.0015
        // warm ember palette: deep red → orange → amber
        const hue = 8 + Math.random() * 28
        const light = 45 + Math.random() * 25
        this.hsl = `hsl(${hue}, 90%, ${light}%)`
      }

      update() {
        this.x += this.vx + Math.sin(performance.now() * 0.0008 + this.x * 0.01) * 0.12
        this.y += this.vy
        this.life -= this.decay
        if (this.life <= 0 || this.y < -20) this.init()
      }

      draw() {
        ctx.save()
        ctx.globalAlpha = Math.max(0, this.life) * 0.55
        ctx.shadowColor = this.hsl
        ctx.shadowBlur = 8
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2)
        ctx.fillStyle = this.hsl
        ctx.fill()
        ctx.restore()
      }
    }

    // Larger slow-moving glow blobs
    class GlowBlob {
      constructor() { this.init() }
      init() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.r = 80 + Math.random() * 120
        this.vx = (Math.random() - 0.5) * 0.15
        this.vy = (Math.random() - 0.5) * 0.08
        this.life = Math.random()
        this.decay = Math.random() * 0.001 + 0.0005
        this.grow = true
      }
      update() {
        this.x += this.vx
        this.y += this.vy
        if (this.grow) { this.life += 0.002; if (this.life >= 0.6) this.grow = false }
        else { this.life -= this.decay; if (this.life <= 0) this.init() }
        if (this.x < -200 || this.x > canvas.width + 200) this.vx *= -1
        if (this.y < -200 || this.y > canvas.height + 200) this.vy *= -1
      }
      draw() {
        const grad = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.r)
        grad.addColorStop(0, `rgba(180, 40, 0, ${this.life * 0.08})`)
        grad.addColorStop(1, 'rgba(0,0,0,0)')
        ctx.save()
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2)
        ctx.fillStyle = grad
        ctx.fill()
        ctx.restore()
      }
    }

    const embers = Array.from({ length: 70 }, (_, i) => new Ember(i < 40))
    const blobs = Array.from({ length: 5 }, () => new GlowBlob())

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      blobs.forEach(b => { b.update(); b.draw() })
      embers.forEach(e => { e.update(); e.draw() })
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
