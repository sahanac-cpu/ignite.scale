import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useT } from '../i18n/locale'
import { getServices } from '../lib/servicesData'

const ease = [0.25, 0.1, 0.25, 1]

export default function ServicesSummary() {
  const [locale, t] = useT()
  const base = locale === 'ar' ? '/ar' : ''
  const items = getServices(t)

  return (
    <section
      id="services"
      style={{
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: 'var(--sec-services)',
        backgroundImage: 'linear-gradient(rgba(6,8,11,0.72), rgba(6,8,11,0.86)), url(/texture-dark.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: 'clamp(72px, 11vh, 150px) clamp(22px, 7vw, 110px)',
      }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease }}
          style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 'clamp(16px, 2.4vw, 24px)' }}
        >
          <span aria-hidden="true" style={{ width: 6, height: 6, background: 'var(--accent)', display: 'inline-block' }} />
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 10, letterSpacing: '0.4em', textTransform: 'uppercase', color: 'var(--ink-dim)', fontWeight: 500 }}>
            {t('Build stages', 'مراحل البناء')}
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.85, ease }}
          style={{
            fontFamily: 'var(--font-display)', fontWeight: 400,
            fontSize: 'clamp(34px, 5vw, 72px)', lineHeight: 1.0,
            letterSpacing: '-0.02em', color: 'var(--ink)', margin: '0 0 clamp(40px, 6vh, 72px)',
            maxWidth: '16ch',
          }}
        >
          {t('A clearer journey from ', 'رحلة أوضح من ')}
          <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>{t('click', 'النقرة')}</span>
          {t(' to booked call.', ' إلى المكالمة المحجوزة.')}
        </motion.h2>

        {/* division rows — each links to its own learn-more page */}
        <div style={{ borderTop: '1px solid var(--line)' }}>
          {items.map((it, i) => (
            <motion.div
              key={it.slug}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.55, ease, delay: i * 0.05 }}
            >
              <Link to={`${base}${it.to}`} className="svc-row" data-cursor="hover">
                <span className="svc-num">{it.num}</span>
                <span className="svc-title">{it.title}</span>
                <span className="svc-body">{it.short}</span>
                <span className="svc-more">
                  {t('Learn more', 'اعرف المزيد')} <span aria-hidden="true">→</span>
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .svc-row {
          display: grid;
          grid-template-columns: 44px minmax(180px, 1fr) 1.6fr auto;
          align-items: center;
          gap: clamp(16px, 3vw, 52px);
          padding: clamp(20px, 2.4vw, 32px) 0;
          border-bottom: 1px solid var(--line);
          text-decoration: none;
          transition: padding-left .4s var(--ease-out), background .4s var(--ease-out);
        }
        .svc-row:hover { padding-left: 12px; background: linear-gradient(90deg, rgba(201,169,110,0.05), transparent 62%); }
        .svc-num { font-family: var(--font-body); font-size: 12px; color: var(--ink-mute); font-variant-numeric: tabular-nums; }
        .svc-title {
          font-family: var(--font-display); font-weight: 400;
          font-size: clamp(22px, 2.8vw, 38px); letter-spacing: -0.02em;
          color: var(--ink); line-height: 1.04;
        }
        .svc-body { font-family: var(--font-body); font-size: 14.5px; line-height: 1.6; color: var(--ink-dim); max-width: 46ch; }
        .svc-more {
          font-family: var(--font-body); font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase;
          font-weight: 500; color: var(--accent); white-space: nowrap; justify-self: end;
          opacity: 0.65; transition: opacity .3s ease;
        }
        .svc-row:hover .svc-more { opacity: 1; }

        @media (max-width: 860px) {
          .svc-row { grid-template-columns: 36px 1fr; gap: 6px 14px; }
          .svc-title { grid-column: 2; }
          .svc-body { grid-column: 2; margin-top: 6px; }
          .svc-more { grid-column: 2; justify-self: start; margin-top: 12px; opacity: 1; }
        }
      `}</style>
    </section>
  )
}
