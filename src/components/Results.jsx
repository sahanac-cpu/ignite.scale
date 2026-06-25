import { useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import { useT } from '../i18n/locale'

function getResults(t) {
  return [
    {
      num: '01',
      headline: t('A launch that sold itself.', 'إطلاقٌ باع نفسه.'),
      metric: '+247%',
      label: t('Qualified leads', 'عملاء مؤهلون'),
      detail: t('2.8× lower cost per lead in 90 days.', '٢.٨× انخفاض في تكلفة العميل خلال ٩٠ يوماً.'),
    },
    {
      num: '02',
      headline: t('Tables booked weeks ahead.', 'طاولات محجوزة قبل أسابيع.'),
      metric: '4.2×',
      label: t('Lower cost / reservation', 'تكلفة أقل للحجز'),
      detail: t('185% more direct booking inquiries.', '١٨٥٪ زيادة في طلبات الحجز المباشر.'),
    },
    {
      num: '03',
      headline: t('Leads that actually convert.', 'عملاء يتحوّلون فعلاً.'),
      metric: '−61%',
      label: t('Cost per lead', 'تكلفة العميل'),
      detail: t('3.2× more qualified leads month-on-month.', '٣.٢× مزيد من العملاء المؤهلين شهرياً.'),
    },
    {
      num: '04',
      headline: t('Every pound working harder.', 'كل جنيه يعمل بجدّ أكبر.'),
      metric: '3.9×',
      label: t('Return on ad spend', 'العائد على الإنفاق'),
      detail: t('+220% engagement, 57% lower CPL.', '+٢٢٠٪ تفاعل، ٥٧٪ تكلفة أقل.'),
    },
    {
      num: '05',
      headline: t('A calendar full of bookings.', 'جدولٌ مليء بالحجوزات.'),
      metric: '−68%',
      label: t('Cost per booking', 'تكلفة الحجز'),
      detail: t('3.1× more bookings in 90 days.', '٣.١× مزيد من الحجوزات خلال ٩٠ يوماً.'),
    },
  ]
}

const ease = [0.25, 0.1, 0.25, 1]

export default function Results() {
  const [locale, t] = useT()
  const rows = getResults(t)

  /* drag-to-scroll gallery */
  const trackRef = useRef(null)
  const drag = useRef({ down: false, startX: 0, startLeft: 0 })
  const onDown = useCallback((e) => {
    const el = trackRef.current
    if (!el) return
    drag.current = { down: true, startX: e.clientX, startLeft: el.scrollLeft }
    el.setPointerCapture?.(e.pointerId)
    el.style.cursor = 'grabbing'
  }, [])
  const onMove = useCallback((e) => {
    const el = trackRef.current
    if (!el || !drag.current.down) return
    el.scrollLeft = drag.current.startLeft - (e.clientX - drag.current.startX)
  }, [])
  const onUp = useCallback((e) => {
    const el = trackRef.current
    drag.current.down = false
    if (el) el.style.cursor = 'grab'
    el?.releasePointerCapture?.(e.pointerId)
  }, [])

  return (
    <section
      id="results"
      style={{
        background: 'var(--sec-results)',
        padding: 'clamp(96px, 15vh, 200px) clamp(24px, 7vw, 110px)',
      }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        {/* header */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: 24,
            marginBottom: 'clamp(56px, 9vh, 110px)',
          }}
        >
          <div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease }}
              style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 'clamp(18px, 2.4vw, 28px)' }}
            >
              <span aria-hidden="true" style={{ width: 6, height: 6, background: 'var(--accent)', display: 'inline-block' }} />
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 10, letterSpacing: '0.4em', textTransform: 'uppercase', color: 'var(--ink-dim)', fontWeight: 500 }}>
                {t('Selected Work', 'أعمال مختارة')}
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.85, ease }}
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 400,
                fontSize: 'clamp(34px, 4.6vw, 66px)',
                lineHeight: 1.0,
                letterSpacing: '-0.015em',
                color: 'var(--ink)',
                margin: 0,
              }}
            >
              {t('Numbers that don’t ', 'أرقام لا ')}
              <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>{t('lie', 'تكذب')}</span>
              {t('.', '.')}
            </motion.h2>
          </div>

          <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--ink-mute)', lineHeight: 1.7, maxWidth: 260 }}>
            {t('No vanity metrics. Only CPL, ROAS and qualified leads.', 'لا مقاييس استعراضية. فقط تكلفة العميل والعائد والعملاء المؤهلون.')}
          </p>
        </div>

        {/* scrolling gallery — drag or scroll horizontally */}
        <div
          ref={trackRef}
          className="res-track"
          onPointerDown={onDown}
          onPointerMove={onMove}
          onPointerUp={onUp}
          onPointerCancel={onUp}
        >
          {rows.map((r, i) => (
            <motion.article
              key={r.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, ease, delay: i * 0.05 }}
              className="res-card"
            >
              <div className="res-card-top">
                <span className="res-num">({r.num})</span>
                <span className="res-label">{r.label}</span>
              </div>
              <span className="res-metric">{r.metric}</span>
              <h3 className="res-headline">{r.headline}</h3>
              <p className="res-detail">{r.detail}</p>
            </motion.article>
          ))}
        </div>

        {/* drag hint */}
        <div className="res-hint">
          <span aria-hidden="true">←</span>
          <span>{t('Drag to explore', 'اسحب للاستكشاف')}</span>
          <span aria-hidden="true">→</span>
        </div>
      </div>

      <style>{`
        .res-track {
          display: flex;
          gap: clamp(14px, 1.4vw, 22px);
          overflow-x: auto;
          cursor: grab;
          padding-bottom: 6px;
          scrollbar-width: none;
          -ms-overflow-style: none;
          scroll-snap-type: x proximity;
        }
        .res-track::-webkit-scrollbar { display: none; }
        .res-track a, .res-track button { -webkit-user-drag: none; }

        .res-card {
          flex: 0 0 auto;
          width: clamp(280px, 30vw, 380px);
          scroll-snap-align: start;
          user-select: none;
          display: flex;
          flex-direction: column;
          padding: clamp(24px, 2.4vw, 38px);
          border: 1px solid var(--line);
          border-radius: 14px;
          background: rgba(255,255,255,0.018);
          transition: border-color .4s var(--ease-out), background .4s var(--ease-out);
        }
        .res-card:hover {
          border-color: var(--line-strong);
          background: rgba(201,169,110,0.04);
        }

        .res-hint {
          display: flex; justify-content: flex-end; align-items: center; gap: 8px;
          margin-top: 18px;
          font-family: var(--font-body); font-size: 10px;
          letter-spacing: 0.28em; text-transform: uppercase; color: var(--ink-mute);
        }
        .res-card-top {
          display: flex; align-items: center; justify-content: space-between;
          margin-bottom: clamp(22px, 3vw, 36px);
        }
        .res-num {
          font-family: var(--font-body); font-size: 12px; font-weight: 500;
          color: var(--ink-mute); font-variant-numeric: tabular-nums;
        }
        .res-label {
          font-family: var(--font-body); font-size: 10px; letter-spacing: 0.16em;
          text-transform: uppercase; color: var(--ink-dim); text-align: right;
        }
        .res-metric {
          font-family: var(--font-body); font-weight: 500;
          font-size: clamp(30px, 3vw, 44px); letter-spacing: -0.02em;
          color: var(--accent); line-height: 1; margin-bottom: 16px;
        }
        .res-headline {
          font-family: var(--font-display); font-weight: 400;
          font-size: clamp(19px, 1.7vw, 25px); letter-spacing: -0.01em;
          color: var(--ink); margin: 0 0 10px; line-height: 1.08;
        }
        .res-detail {
          font-family: var(--font-body); font-size: 13px; line-height: 1.55;
          color: var(--ink-mute); margin: 0;
        }
      `}</style>
    </section>
  )
}
