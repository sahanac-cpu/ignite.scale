'use client'

import { useRef, useState, useLayoutEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { work } from '@/lib/content'

/* Horizontal pinned gallery — vertical scroll drives the work row sideways.
   The section pins for exactly the horizontal travel distance, so the scrub
   feels 1:1 and locked. */
export default function WorkTeaser() {
  const pinRef = useRef(null)
  const trackRef = useRef(null)
  const [maxX, setMaxX] = useState(0)

  useLayoutEffect(() => {
    const measure = () => {
      const track = trackRef.current
      if (!track) return
      // distance the track must travel to reveal its right edge
      setMaxX(Math.max(0, track.scrollWidth - window.innerWidth))
    }
    measure()
    window.addEventListener('resize', measure)
    // re-measure once images/fonts settle
    const t = setTimeout(measure, 600)
    return () => { window.removeEventListener('resize', measure); clearTimeout(t) }
  }, [])

  const { scrollYProgress } = useScroll({
    target: pinRef,
    offset: ['start start', 'end end'],
  })
  const x = useTransform(scrollYProgress, [0, 1], [0, -maxX])
  // progress bar fill
  const fill = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section
      id="work"
      ref={pinRef}
      style={{
        position: 'relative',
        height: `calc(100svh + ${maxX}px)`,
        background: 'var(--color-carbon)',
      }}
    >
      {/* pinned stage */}
      <div
        style={{
          position: 'sticky', top: 0,
          height: '100svh',
          overflow: 'hidden',
          display: 'flex', flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <motion.div
          ref={trackRef}
          style={{
            x,
            display: 'flex',
            alignItems: 'stretch',
            gap: 'clamp(16px, 2vw, 28px)',
            paddingInline: 'clamp(24px, 5vw, 72px)',
            width: 'max-content',
          }}
        >
          {/* intro panel */}
          <div className="wg-intro">
            <span className="byline" style={{ display: 'block', marginBottom: 24 }}>
              ❶ — Selected Work
            </span>
            <h2 style={{ fontSize: 'clamp(40px, 5.2vw, 86px)', lineHeight: 0.94, margin: 0 }}>
              The kind of<br />growth we<br />build.
            </h2>
            <p style={{ marginTop: 28, maxWidth: '34ch', fontSize: 15, lineHeight: 1.6, color: 'var(--color-ash)' }}>
              Anonymised engagements across the Emirates. Names held under NDA — these
              reflect the outcomes our systems are built to reach.
            </p>
            <div className="byline" style={{ marginTop: 36, display: 'flex', alignItems: 'center', gap: 12 }}>
              Scroll <span aria-hidden="true" style={{ fontSize: 18 }}>→</span>
            </div>
          </div>

          {/* gallery frames */}
          {work.map((w, i) => (
            <Link
              key={w.slug}
              href="/work"
              data-cursor="hover"
              className="wg-card"
            >
              <div className="wg-frame">
                <Image
                  src={w.image}
                  alt={w.alt}
                  fill
                  sizes="540px"
                  className="wg-img"
                  style={{ objectFit: 'cover' }}
                />
                <div className="wg-scrim" />
                <span className="wg-index">{String(i + 1).padStart(2, '0')}</span>
                <span className="wg-result">{w.result}</span>
                <div className="wg-meta">
                  <span className="byline" style={{ color: 'rgba(255,255,255,0.6)' }}>{w.sector}</span>
                  <h3 style={{ fontSize: 'clamp(22px, 2vw, 30px)', margin: '8px 0 8px' }}>{w.client}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.55, color: 'rgba(255,255,255,0.55)', maxWidth: '34ch' }}>{w.blurb}</p>
                </div>
              </div>
            </Link>
          ))}

          {/* end panel */}
          <Link href="/work" data-cursor="hover" className="wg-end">
            <span className="byline" style={{ color: 'var(--ink-mute)' }}>The full archive</span>
            <span style={{ fontSize: 'clamp(32px, 3.4vw, 56px)', lineHeight: 1.04 }}>
              All<br />case<br />studies
            </span>
            <span className="wg-end-arrow" aria-hidden="true">→</span>
          </Link>
        </motion.div>

        {/* progress rail */}
        <div className="wg-rail">
          <motion.div className="wg-rail-fill" style={{ width: fill }} />
        </div>
      </div>

      <style>{`
        .wg-intro {
          flex: 0 0 auto;
          width: clamp(300px, 36vw, 480px);
          display: flex; flex-direction: column; justify-content: center;
          padding-right: clamp(16px, 3vw, 48px);
        }
        .wg-card { flex: 0 0 auto; display: block; text-decoration: none; }
        .wg-frame {
          position: relative;
          width: clamp(280px, 40vw, 520px);
          height: clamp(380px, 72svh, 640px);
          overflow: hidden;
          background: #0a0a0a;
        }
        .wg-img {
          transition: transform 1.1s var(--ease-drawer), filter 0.6s var(--ease-out) !important;
          filter: grayscale(1) contrast(1.05) brightness(0.92);
        }
        .wg-card:hover .wg-img { transform: scale(1.06); filter: grayscale(0) contrast(1) brightness(1); }
        .wg-scrim {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.15) 52%, rgba(0,0,0,0.25) 100%);
        }
        .wg-index {
          position: absolute; top: 18px; left: 20px; z-index: 2;
          font-family: var(--font-display); font-weight: 400; font-size: 13px;
          letter-spacing: 0.04em; color: rgba(255,255,255,0.7);
          font-variant-numeric: tabular-nums;
        }
        .wg-result {
          position: absolute; top: 16px; right: 18px; z-index: 2;
          padding: 6px 16px; border-radius: 9999px;
          border: 1px solid var(--line-strong);
          background: rgba(0,0,0,0.45); backdrop-filter: blur(8px);
          font-family: var(--font-sans); font-size: 12px; color: #fff; letter-spacing: 0.02em;
        }
        .wg-meta { position: absolute; left: 0; right: 0; bottom: 0; z-index: 2; padding: clamp(20px, 2vw, 30px); }

        .wg-end {
          flex: 0 0 auto;
          width: clamp(240px, 26vw, 360px);
          height: clamp(380px, 72svh, 640px);
          border: 1px solid var(--line);
          display: flex; flex-direction: column; justify-content: space-between;
          padding: clamp(24px, 2.4vw, 36px);
          text-decoration: none;
          transition: background 0.5s var(--ease-out), border-color 0.5s var(--ease-out);
        }
        .wg-end:hover { background: rgba(255,255,255,0.03); border-color: var(--line-strong); }
        .wg-end-arrow { font-size: 40px; transition: transform 0.5s var(--ease-drawer); }
        .wg-end:hover .wg-end-arrow { transform: translateX(10px); }

        .wg-rail {
          position: absolute; left: clamp(24px, 5vw, 72px); right: clamp(24px, 5vw, 72px);
          bottom: clamp(24px, 4vh, 40px); height: 1px; background: var(--line);
        }
        .wg-rail-fill { height: 1px; background: var(--color-paper-white); }

        @media (max-width: 720px) {
          .wg-intro { width: 78vw; }
        }
      `}</style>
    </section>
  )
}
