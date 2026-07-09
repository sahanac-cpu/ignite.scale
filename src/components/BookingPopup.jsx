import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useT } from '../i18n/locale'

const ease = [0.22, 1, 0.36, 1]
const DELAY_MS = 4000 // ~3–7s after opening the site

export default function BookingPopup() {
  const [open, setOpen] = useState(false)
  const [locale, t] = useT()

  useEffect(() => {
    // show once per browser session
    if (sessionStorage.getItem('ig_booking_popup_seen')) return
    const id = setTimeout(() => {
      setOpen(true)
      sessionStorage.setItem('ig_booking_popup_seen', '1')
    }, DELAY_MS)
    return () => clearTimeout(id)
  }, [])

  // close on Esc
  useEffect(() => {
    if (!open) return
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const goBook = () => {
    setOpen(false)
    const el = document.getElementById('booking')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    else window.location.hash = '#booking'
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => setOpen(false)}
          dir={locale === 'ar' ? 'rtl' : 'ltr'}
          style={{
            position: 'fixed', inset: 0, zIndex: 1000,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: 20,
            background: 'rgba(3,5,11,0.62)',
            backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.5, ease }}
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              width: '100%', maxWidth: 460,
              background: 'rgba(16,18,24,0.72)',
              backdropFilter: 'blur(28px) saturate(140%)', WebkitBackdropFilter: 'blur(28px) saturate(140%)',
              border: '1px solid var(--line-strong)',
              borderRadius: 18,
              padding: 'clamp(28px, 5vw, 44px)',
              boxShadow: '0 40px 100px rgba(0,0,0,0.6), 0 0 50px rgba(201,169,110,0.06)',
            }}
          >
            {/* close */}
            <button
              onClick={() => setOpen(false)}
              aria-label={t('Close', 'إغلاق')}
              style={{
                position: 'absolute', top: 16, insetInlineEnd: 16,
                width: 32, height: 32, borderRadius: 999,
                border: '1px solid var(--line)', background: 'transparent',
                color: 'var(--ink-dim)', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 14, lineHeight: 1,
              }}
            >
              ✕
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 20 }}>
              <span aria-hidden="true" style={{ width: 7, height: 7, background: 'var(--accent)', display: 'inline-block' }} />
              <span style={{
                fontFamily: 'var(--font-body)', fontSize: 10, letterSpacing: '0.34em',
                textTransform: 'uppercase', color: 'var(--ink-dim)', fontWeight: 500,
              }}>
                {t('Client Acquisition Audit · 6 per month', 'تدقيق اكتساب العملاء · ٦ شهرياً')}
              </span>
            </div>

            <h3 style={{
              fontFamily: 'var(--font-display)', fontWeight: 600,
              fontSize: 'clamp(30px, 5vw, 44px)', letterSpacing: '-0.02em',
              lineHeight: 1.0, color: 'var(--ink)', margin: '0 0 14px',
            }}>
              {t('Find your ', 'اكتشف ')}
              <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 500, color: 'var(--accent)' }}>
                {t('revenue leak', 'تسرّب إيراداتك')}
              </span>
              .
            </h3>

            <p style={{
              fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.7,
              color: 'var(--ink-dim)', margin: '0 0 26px', maxWidth: '40ch',
            }}>
              {t(
                'A 45-minute diagnostic of your acquisition funnel: where leads are lost, what it costs you, and the 90-day plan to fix it — yours to keep either way.',
                'تشخيص لمدة ٤٥ دقيقة لقمع اكتساب العملاء لديك: أين يضيع العملاء، وكم يكلّفك ذلك، وخطة ٩٠ يوماً للإصلاح — تحتفظ بها في كل الأحوال.'
              )}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              <button onClick={goBook} className="btn-primary" style={{ fontSize: 12, padding: '13px 28px', border: 'none', cursor: 'pointer' }}>
                {t('Book my audit', 'احجز تدقيقي')}
              </button>
              <button
                onClick={() => setOpen(false)}
                style={{
                  fontFamily: 'var(--font-body)', fontSize: 11, letterSpacing: '0.16em',
                  textTransform: 'uppercase', fontWeight: 500,
                  color: 'var(--ink-mute)', background: 'transparent', border: 'none',
                  cursor: 'pointer', padding: '13px 8px',
                }}
              >
                {t('Maybe later', 'لاحقاً')}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
