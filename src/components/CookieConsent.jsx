import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useT } from '../i18n/locale'

const KEY = 'ig_cookie_consent' // 'accepted' | 'declined'

export default function CookieConsent() {
  const [show, setShow] = useState(false)
  const [locale, t] = useT()
  const base = locale === 'ar' ? '/ar' : ''

  useEffect(() => {
    if (!localStorage.getItem(KEY)) {
      const id = setTimeout(() => setShow(true), 1200)
      return () => clearTimeout(id)
    }
  }, [])

  const choose = (value) => {
    localStorage.setItem(KEY, value)
    // expose choice for any analytics gating
    window.__cookieConsent = value
    setShow(false)
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          dir={locale === 'ar' ? 'rtl' : 'ltr'}
          role="dialog"
          aria-label={t('Cookie notice', 'إشعار الكوكيز')}
          style={{
            position: 'fixed',
            bottom: 'clamp(16px, 3vw, 28px)',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 200,
            width: 'min(620px, calc(100% - 32px))',
            background: 'rgba(14,16,22,0.82)',
            backdropFilter: 'blur(22px) saturate(140%)',
            WebkitBackdropFilter: 'blur(22px) saturate(140%)',
            border: '1px solid var(--line-strong)',
            borderRadius: 16,
            padding: 'clamp(18px, 2.4vw, 24px)',
            boxShadow: '0 30px 80px rgba(0,0,0,0.55)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: 16,
          }}
        >
          <p style={{ flex: '1 1 280px', margin: 0, fontFamily: 'var(--font-body)', fontSize: 13.5, lineHeight: 1.6, color: 'var(--ink-dim)' }}>
            {t(
              'We use a couple of cookies to keep the site working and to measure anonymous traffic.',
              'نستخدم بعض الكوكيز لتشغيل الموقع وقياس الزيارات بشكل مجهول.'
            )}{' '}
            <Link to={`${base}/cookies`} style={{ color: 'var(--accent)' }} data-cursor="hover">
              {t('Learn more', 'اعرف المزيد')}
            </Link>
          </p>
          <div style={{ display: 'flex', gap: 10, flexShrink: 0 }}>
            <button
              onClick={() => choose('declined')}
              data-cursor="hover"
              style={{
                fontFamily: 'var(--font-body)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase',
                fontWeight: 500, color: 'var(--ink-mute)', background: 'transparent',
                border: '1px solid var(--line-strong)', borderRadius: 999, padding: '11px 20px', cursor: 'pointer',
              }}
            >
              {t('Decline', 'رفض')}
            </button>
            <button onClick={() => choose('accepted')} className="btn-primary" data-cursor="hover" style={{ fontSize: 11, padding: '11px 22px', border: 'none', cursor: 'pointer' }}>
              {t('Accept', 'قبول')}
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
