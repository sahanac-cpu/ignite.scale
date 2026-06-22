'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { services } from '@/lib/content'
import BlobBackground from '@/components/ui/blob-background'

const ease = [0.16, 1, 0.3, 1]

/* Vivid+Co editorial row list.
   Monumental centered headline (136px range) + hairline-divided service rows.
   No image cards. Typography IS the design. */
export default function ServicesTeaser() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const headY = useTransform(scrollYProgress, [0, 1], [40, -40])

  return (
    <section
      id="services"
      ref={ref}
      style={{
        background: 'rgba(0,0,0,0.15)',
        paddingBlock: 'clamp(108px, 14vw, 180px)',
        overflow: 'hidden',
      }}
    >
      <BlobBackground />
      <div className="shell" style={{ position: 'relative', zIndex: 1 }}>

        {/* ── monumental centered headline ── */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(80px, 12vw, 140px)' }}>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.8, ease }}
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 11,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--ink-mute)',
              marginBottom: 40,
            }}
          >
            What we do
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 1.0, ease }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(56px, 10.4vw, 148px)',
              fontWeight: 700,
              letterSpacing: '-0.025em',
              lineHeight: 0.96,
              color: 'var(--color-bone)',
              margin: 0,
            }}
          >
            Four disciplines.
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 1.0, ease, delay: 0.09 }}
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: 'clamp(56px, 10.4vw, 148px)',
              fontWeight: 600,
              letterSpacing: '-0.01em',
              lineHeight: 0.96,
              color: 'var(--color-gold)',
              margin: 0,
            }}
          >
            One system.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.28 }}
            style={{
              marginTop: 'clamp(28px, 4vw, 48px)',
              fontSize: 17,
              lineHeight: 1.55,
              color: 'var(--ink-dim)',
              maxWidth: '50ch',
              marginInline: 'auto',
            }}
          >
            Media, creative, funnels and brand. One system, measured against pipeline.
          </motion.p>
        </div>

        {/* ── editorial service rows ── */}
        <div style={{ borderTop: '1px solid var(--line)' }}>
          {services.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.75, ease, delay: i * 0.07 }}
            >
              <Link href="/services" data-cursor="hover" className="svc-row">
                <span className="svc-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="svc-title">{s.title}</span>
                <span className="svc-body">{s.summary}</span>
                <span className="svc-arrow" aria-hidden="true">→</span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* ── Vivid+Co ghost button — 0px radius, stonewash border ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease, delay: 0.2 }}
          style={{ marginTop: 'clamp(64px, 9vw, 108px)', display: 'flex', justifyContent: 'center' }}
          viewport={{ once: true, amount: 0 }}
        >
          <Link href="/services" data-cursor="hover" className="svc-cta">
            All services <span className="svc-cta-arrow" aria-hidden="true">→</span>
          </Link>
        </motion.div>
      </div>

      <style>{`
        .svc-row {
          display: grid;
          grid-template-columns: 56px 1fr 1fr 48px;
          align-items: center;
          gap: clamp(16px, 3vw, 52px);
          padding-block: clamp(28px, 3.5vw, 48px);
          border-bottom: 1px solid var(--line);
          text-decoration: none;
          transition: background 0.45s var(--ease-out);
        }
        .svc-row:hover { background: rgba(201,169,110,0.04); }

        .svc-num {
          font-family: var(--font-sans);
          font-size: 13px;
          letter-spacing: 0.08em;
          color: var(--ink-mute);
          font-variant-numeric: tabular-nums;
          flex-shrink: 0;
        }

        .svc-title {
          font-family: var(--font-display);
          font-size: clamp(24px, 3vw, 44px);
          font-weight: 500;
          letter-spacing: -0.025em;
          color: var(--color-bone);
          line-height: 1.08;
          transition: opacity 0.35s var(--ease-out);
        }
        .svc-row:hover .svc-title { opacity: 0.75; }

        .svc-body {
          font-family: var(--font-sans);
          font-size: 15px;
          line-height: 1.6;
          color: var(--ink-mute);
          max-width: 46ch;
          transition: color 0.35s var(--ease-out);
        }
        .svc-row:hover .svc-body { color: var(--ink-dim); }

        .svc-arrow {
          font-size: 22px;
          color: var(--line-strong);
          justify-self: end;
          transition: transform 0.45s var(--ease-drawer), color 0.35s var(--ease-out);
        }
        .svc-row:hover .svc-arrow { transform: translate(8px, -3px); color: var(--color-bone); }

        /* Vivid+Co CTA: 0px radius, gold border, no fill */
        .svc-cta {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          font-family: var(--font-sans);
          font-size: 12px;
          font-weight: 400;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          text-decoration: none;
          color: var(--color-gold-dim);
          border: 1px solid rgba(201,169,110,0.35);
          padding: 20px 42px;
          border-radius: 0;
          transition: color 0.4s var(--ease-out), border-color 0.4s var(--ease-out);
        }
        .svc-cta:hover { color: var(--color-bone); border-color: var(--color-gold); }
        .svc-cta-arrow {
          transition: transform 0.45s var(--ease-drawer);
          display: inline-block;
        }
        .svc-cta:hover .svc-cta-arrow { transform: translateX(6px); }

        @media (max-width: 720px) {
          .svc-row { grid-template-columns: 44px 1fr 36px; }
          .svc-body { display: none; }
        }
        @media (max-width: 480px) {
          .svc-row { grid-template-columns: 36px 1fr 28px; gap: 12px; }
        }
      `}</style>
    </section>
  )
}
