'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { process } from '@/lib/content'
import BlobBackground from '@/components/ui/blob-background'

const ease = [0.16, 1, 0.3, 1]

/* Vivid+Co process section.
   Centered display statement with mask-reveal + outlined "compounds."
   Four columns with giant ghost-stroke numerals — typography as structure. */
export default function ProcessTeaser() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const headY = useTransform(scrollYProgress, [0, 1], [32, -32])

  return (
    <section
      id="process"
      ref={ref}
      style={{
        background: 'rgba(0,0,0,0.15)',
        paddingBlock: 'clamp(108px, 14vw, 180px)',
        overflow: 'hidden',
      }}
    >
      <BlobBackground />
      <div className="shell" style={{ position: 'relative', zIndex: 1 }}>

        {/* ── centered display statement ── */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(88px, 13vw, 160px)' }}>
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
            How we work
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 1.0, ease }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(48px, 9vw, 128px)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              lineHeight: 0.95,
              color: '#fffdf9',
              margin: 0,
            }}
          >
            A loop that
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 1.0, ease, delay: 0.09 }}
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: 'clamp(48px, 9vw, 128px)',
              fontWeight: 600,
              letterSpacing: '-0.01em',
              lineHeight: 0.95,
              color: 'var(--color-gold)',
              margin: 0,
              marginBottom: 'clamp(24px, 3.5vw, 44px)',
            }}
          >
            compounds.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.28 }}
            style={{
              fontSize: 17,
              lineHeight: 1.55,
              color: 'var(--ink-dim)',
              maxWidth: '50ch',
              marginInline: 'auto',
            }}
          >
            Four steps on repeat. Each cycle lowers your cost per result.
          </motion.p>
        </div>

        {/* ── four-column editorial steps ── */}
        <div className="proc-cols">
          {process.map((p, i) => (
            <motion.div
              key={p.n}
              className="proc-col"
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.9, ease, delay: i * 0.11 }}
            >
              {/* giant ghost-stroke numeral */}
              <span className="proc-num">{p.n}</span>
              {/* short tick rule */}
              <div className="proc-tick" />
              <h3 className="proc-step-title">{p.title}</h3>
              <p className="proc-step-body">{p.body}</p>
            </motion.div>
          ))}
        </div>

        {/* ── Vivid+Co ghost CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease, delay: 0.18 }}
          style={{ marginTop: 'clamp(72px, 10vw, 120px)', display: 'flex', justifyContent: 'center' }}
        >
          <Link href="/process" data-cursor="hover" className="proc-cta">
            Full process <span className="proc-cta-arrow" aria-hidden="true">→</span>
          </Link>
        </motion.div>
      </div>

      <style>{`
        .proc-cols {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border-top: 1px solid var(--line);
        }
        @media (max-width: 900px)  { .proc-cols { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 520px)  { .proc-cols { grid-template-columns: 1fr; } }

        .proc-col {
          padding: clamp(36px, 4.5vw, 60px) clamp(20px, 2.5vw, 40px);
          border-right: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
          transition: background 0.45s var(--ease-out);
        }
        .proc-col:hover { background: rgba(201,169,110,0.03); }
        /* remove right border from last in each row */
        @media (min-width: 901px) { .proc-col:nth-child(4n) { border-right: none; } }
        @media (min-width: 521px) and (max-width: 900px) { .proc-col:nth-child(even) { border-right: none; } }
        @media (max-width: 520px) { .proc-col { border-right: none; } }

        /* giant ghost numeral — gold-tinted stroke */
        .proc-num {
          display: block;
          font-family: var(--font-display);
          font-size: clamp(60px, 7.5vw, 108px);
          font-weight: 700;
          letter-spacing: -0.04em;
          line-height: 1;
          color: transparent;
          -webkit-text-stroke: 1px rgba(201,169,110,0.20);
          margin-bottom: 36px;
          font-variant-numeric: tabular-nums;
          transition: -webkit-text-stroke-color 0.45s var(--ease-out);
        }
        .proc-col:hover .proc-num { -webkit-text-stroke-color: rgba(201,169,110,0.40); }

        /* tick mark — short horizontal rule under numeral */
        .proc-tick {
          width: 28px;
          height: 1px;
          background: var(--line-strong);
          margin-bottom: 24px;
        }

        .proc-step-title {
          font-family: var(--font-display);
          font-size: clamp(20px, 1.9vw, 28px);
          font-weight: 500;
          letter-spacing: -0.02em;
          color: var(--color-bone);
          margin-bottom: 14px;
          line-height: 1.15;
        }

        .proc-step-body {
          font-family: var(--font-sans);
          font-size: 15px;
          line-height: 1.65;
          color: var(--ink-dim);
        }

        /* Vivid+Co ghost CTA — 0px radius, gold border */
        .proc-cta {
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
        .proc-cta:hover { color: var(--color-bone); border-color: var(--color-gold); }
        .proc-cta-arrow {
          display: inline-block;
          transition: transform 0.45s var(--ease-drawer);
        }
        .proc-cta:hover .proc-cta-arrow { transform: translateX(6px); }
      `}</style>
    </section>
  )
}
