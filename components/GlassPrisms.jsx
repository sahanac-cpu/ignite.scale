'use client'

import { useEffect, useRef } from 'react'

/* Vivid+Co glass-prism refraction — the only decorative visual. CSS-rendered
   crystal shards drifting behind the type with chromatic-aberration edge leaks
   (red / green / blue) bleeding from otherwise-clear glass. Soft-vignetted into
   the Slate Veil canvas. Pointer parallax adds living light-play; pure
   transform/opacity animation, reduced-motion safe. */
export default function GlassPrisms() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    if (reduce || !fine) return

    let tx = 0, ty = 0, cx = 0, cy = 0, raf
    const onMove = (e) => {
      tx = (e.clientX / window.innerWidth - 0.5)
      ty = (e.clientY / window.innerHeight - 0.5)
    }
    const loop = () => {
      cx += (tx - cx) * 0.05
      cy += (ty - cy) * 0.05
      el.style.setProperty('--px', (cx * 28).toFixed(2) + 'px')
      el.style.setProperty('--py', (cy * 28).toFixed(2) + 'px')
      raf = requestAnimationFrame(loop)
    }
    window.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(loop)
    return () => { window.removeEventListener('mousemove', onMove); cancelAnimationFrame(raf) }
  }, [])

  return (
    <div className="prisms" aria-hidden="true" ref={ref}>
      <span className="prism prism-1" />
      <span className="prism prism-2" />
      <span className="prism prism-3" />
      {/* refraction light streaks */}
      <span className="streak streak-1" />
      <span className="streak streak-2" />

      <style>{`
        .prisms {
          position: absolute; inset: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: 0;
          --px: 0px; --py: 0px;
        }

        /* a glass shard: translucent crystal body + chromatic edge leaks via
           layered colored shadows (red/green/blue), heavily blurred, screen-blended */
        .prism {
          position: absolute;
          background:
            linear-gradient(135deg,
              rgba(255,253,249,0.22) 0%,
              rgba(111,135,156,0.14) 38%,
              rgba(16,16,16,0.05) 70%,
              rgba(255,253,249,0.16) 100%);
          backdrop-filter: blur(3px) brightness(1.12);
          -webkit-backdrop-filter: blur(3px) brightness(1.12);
          mix-blend-mode: screen;
          will-change: transform, filter;
          /* drop-shadow follows the clipped shape → chromatic edges bleed OUTSIDE
             the prism (box-shadow would be clipped by clip-path and vanish).
             Crisp, saturated, offset fringes = chromatic-aberration light-play. */
          filter:
            drop-shadow(22px 2px 10px rgba(255, 38, 88, 0.95))    /* red leak   */
            drop-shadow(-22px 2px 10px rgba(40, 120, 255, 0.95))  /* blue leak  */
            drop-shadow(0 -20px 12px rgba(60, 255, 160, 0.8))     /* green leak */
            drop-shadow(0 22px 14px rgba(180, 70, 255, 0.7));     /* violet leak*/
        }

        /* tall elongated prism — upper right, behind the headline */
        .prism-1 {
          width: clamp(180px, 22vw, 360px);
          height: clamp(320px, 42vw, 620px);
          top: 2%; right: 8%;
          clip-path: polygon(50% 0%, 100% 22%, 88% 100%, 12% 100%, 0% 22%);
          transform: translate(var(--px), var(--py)) rotate(14deg);
          animation: prism-float-a 22s var(--ease-io) infinite;
          opacity: 0.9;
        }
        /* shard — lower left */
        .prism-2 {
          width: clamp(160px, 20vw, 300px);
          height: clamp(220px, 28vw, 420px);
          bottom: 4%; left: 6%;
          clip-path: polygon(20% 0%, 100% 12%, 80% 100%, 0% 78%);
          transform: translate(calc(var(--px) * -1), var(--py)) rotate(-18deg);
          animation: prism-float-b 28s var(--ease-io) infinite;
          opacity: 0.72;
        }
        /* small splinter — center, deep behind */
        .prism-3 {
          width: clamp(120px, 14vw, 220px);
          height: clamp(180px, 22vw, 340px);
          top: 30%; left: 44%;
          clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
          transform: translate(var(--px), calc(var(--py) * -1)) rotate(8deg);
          animation: prism-float-c 25s var(--ease-io) infinite;
          opacity: 0.55;
        }

        /* thin refraction light streaks crossing the canvas */
        .streak {
          position: absolute;
          height: 1px;
          width: 60vw;
          background: linear-gradient(90deg,
            transparent,
            rgba(255,40,90,0.0) 15%,
            rgba(255,253,249,0.35) 50%,
            rgba(40,120,255,0.0) 85%,
            transparent);
          mix-blend-mode: screen;
          filter: blur(0.5px);
          will-change: transform, opacity;
        }
        .streak-1 { top: 38%; left: 10%; transform: rotate(-8deg); animation: streak-pan 16s ease-in-out infinite; }
        .streak-2 { top: 64%; left: 20%; width: 48vw; transform: rotate(6deg); animation: streak-pan 21s ease-in-out infinite reverse; }

        /* soft vignette masks the prisms into the canvas (kept light so the
           chromatic light-play stays visible) */
        .prisms::after {
          content: '';
          position: absolute; inset: 0;
          background: radial-gradient(ellipse 92% 82% at 50% 48%,
            transparent 45%, rgba(73,87,100,0.45) 100%);
        }

        @keyframes prism-float-a {
          0%, 100% { transform: translate(var(--px), var(--py)) rotate(14deg) scale(1); }
          50%      { transform: translate(calc(var(--px) - 2vw), calc(var(--py) + 3vh)) rotate(18deg) scale(1.06); }
        }
        @keyframes prism-float-b {
          0%, 100% { transform: translate(calc(var(--px) * -1), var(--py)) rotate(-18deg) scale(1); }
          50%      { transform: translate(calc(var(--px) * -1 + 2.5vw), calc(var(--py) - 2vh)) rotate(-13deg) scale(1.08); }
        }
        @keyframes prism-float-c {
          0%, 100% { transform: translate(var(--px), calc(var(--py) * -1)) rotate(8deg) scale(0.96); }
          50%      { transform: translate(calc(var(--px) + 1.5vw), calc(var(--py) * -1 - 3vh)) rotate(2deg) scale(1.1); }
        }
        @keyframes streak-pan {
          0%, 100% { transform: translateX(-6%) rotate(-8deg); opacity: 0.2; }
          50%      { transform: translateX(8%) rotate(-8deg);  opacity: 0.55; }
        }

        @media (prefers-reduced-motion: reduce) {
          .prism, .streak { animation: none !important; }
        }
      `}</style>
    </div>
  )
}
