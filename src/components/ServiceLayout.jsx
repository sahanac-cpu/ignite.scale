import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEOMeta from './SEOMeta'
import Navbar from './Navbar'
import Booking from './Booking'
import Footer from './Footer'
import { useT } from '../i18n/locale'
import { getServices } from '../lib/servicesData'

const ease = [0.22, 1, 0.36, 1]

export default function ServiceLayout({ slug, seoTitle, seoDescription }) {
  const [locale, t] = useT()
  const base = locale === 'ar' ? '/ar' : ''
  const all = getServices(t)
  const svc = all.find((s) => s.slug === slug) || all[0]
  const others = all.filter((s) => s.slug !== slug)

  return (
    <>
      <SEOMeta
        title={seoTitle}
        description={seoDescription || svc.lede}
        canonical={`https://ignite-scale.com${base}${svc.to}`}
        locale={locale}
        breadcrumbs={[{ name: 'Home', url: '/' }, { name: 'Services', url: '/#services' }, { name: svc.title, url: svc.to }]}
      />
      <Navbar />
      <main style={{ background: 'var(--sec-hero)' }}>
        {/* hero */}
        <section
          style={{
            position: 'relative', overflow: 'hidden',
            padding: 'clamp(130px, 20vh, 220px) clamp(22px, 7vw, 110px) clamp(50px, 8vh, 90px)',
            backgroundImage: 'linear-gradient(rgba(6,8,11,0.80), rgba(6,8,11,0.93)), url(/texture-dark.jpg)',
            backgroundSize: 'cover', backgroundPosition: 'center',
          }}
        >
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <motion.div
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }}
              style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 'clamp(18px, 2.6vw, 28px)' }}
            >
              <Link to={`${base}/#services`} className="svc-back" data-cursor="hover">{t('Services', 'الخدمات')}</Link>
              <span style={{ color: 'var(--ink-mute)' }}>/</span>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 10, letterSpacing: '0.34em', textTransform: 'uppercase', color: 'var(--accent)' }}>{svc.kicker}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, ease }}
              style={{
                fontFamily: 'var(--font-display)', fontWeight: 400,
                fontSize: 'clamp(40px, 9vw, 104px)', lineHeight: 1.0,
                letterSpacing: '-0.02em', color: 'var(--ink)', margin: 0,
              }}
            >
              {svc.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, ease, delay: 0.12 }}
              style={{ marginTop: 'clamp(22px, 3vw, 34px)', maxWidth: '52ch', fontFamily: 'var(--font-body)', fontSize: 'clamp(15px, 1.4vw, 17px)', lineHeight: 1.75, color: 'var(--ink-dim)' }}
            >
              {svc.lede}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.25 }}
              style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginTop: 'clamp(28px, 4vw, 44px)' }}
            >
              <span style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 'clamp(32px, 5vw, 52px)', letterSpacing: '-0.03em', color: 'var(--accent)' }}>{svc.metric}</span>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--ink-mute)' }}>{svc.metricLabel}</span>
            </motion.div>
          </div>
        </section>

        {/* what's included */}
        <section style={{ borderTop: '1px solid var(--line)', padding: 'clamp(56px, 9vh, 120px) clamp(22px, 7vw, 110px)' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(28px, 4vw, 52px)', letterSpacing: '-0.02em', color: 'var(--ink)', margin: '0 0 clamp(28px,4vw,44px)' }}>
              {t('What’s ', 'ما ')}<span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>{t('included', 'يشمله')}</span>
            </h2>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, borderTop: '1px solid var(--line)' }}>
              {svc.points.map((p, i) => (
                <motion.li
                  key={p}
                  initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.5, ease, delay: i * 0.05 }}
                  style={{ display: 'flex', alignItems: 'baseline', gap: 16, padding: 'clamp(16px,2vw,22px) 0', borderBottom: '1px solid var(--line)' }}
                >
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--ink-mute)' }}>{String(i + 1).padStart(2, '0')}</span>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(18px, 2vw, 26px)', letterSpacing: '-0.01em', color: 'var(--ink)' }}>{p}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </section>

        {/* other services */}
        <section style={{ borderTop: '1px solid var(--line)', padding: 'clamp(56px, 9vh, 110px) clamp(22px, 7vw, 110px)', background: 'var(--sec-results)' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 10, letterSpacing: '0.4em', textTransform: 'uppercase', color: 'var(--ink-dim)', fontWeight: 500 }}>{t('More services', 'خدمات أخرى')}</span>
            <div className="svc-others">
              {others.map((o) => (
                <Link key={o.slug} to={`${base}${o.to}`} className="svc-other" data-cursor="hover">
                  <span className="svc-other-num">{o.num}</span>
                  <span className="svc-other-title">{o.title}</span>
                  <span className="svc-other-arrow" aria-hidden="true">→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <Booking />
      </main>
      <Footer />

      <style>{`
        .svc-back {
          font-family: var(--font-body); font-size: 10px; letter-spacing: 0.34em;
          text-transform: uppercase; color: var(--ink-dim); text-decoration: none;
          transition: color .25s ease;
        }
        .svc-back:hover { color: var(--ink); }
        .svc-others { margin-top: clamp(24px, 3vw, 36px); border-top: 1px solid var(--line); }
        .svc-other {
          display: grid; grid-template-columns: 48px 1fr auto; align-items: center; gap: 18px;
          padding: clamp(20px, 2.6vw, 30px) 0; border-bottom: 1px solid var(--line);
          text-decoration: none; transition: padding-left .4s var(--ease-out), background .4s var(--ease-out);
        }
        .svc-other:hover { padding-left: 12px; background: linear-gradient(90deg, rgba(201,169,110,0.05), transparent 60%); }
        .svc-other-num { font-family: var(--font-body); font-size: 12px; color: var(--ink-mute); }
        .svc-other-title { font-family: var(--font-display); font-weight: 400; font-size: clamp(22px, 2.6vw, 34px); letter-spacing: -0.02em; color: var(--ink); }
        .svc-other-arrow { color: var(--accent); font-size: 18px; justify-self: end; transition: transform .4s var(--ease-out); }
        .svc-other:hover .svc-other-arrow { transform: translateX(6px); }
      `}</style>
    </>
  )
}
