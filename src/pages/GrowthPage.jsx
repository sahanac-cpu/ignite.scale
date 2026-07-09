import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEOMeta from '../components/SEOMeta'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useT } from '../i18n/locale'
import { getGrowthPage, AUDIT_PATH } from '../lib/growthPages'

const ease = [0.22, 1, 0.36, 1]

const GROUP_CRUMB = {
  service: { name: 'Services', url: '/services' },
  keyword: { name: 'UAE Growth', url: '/client-acquisition-system-uae' },
  industry: { name: 'Industries', url: '/industries/aesthetic-clinics' },
}

export default function GrowthPage({ path }) {
  const [locale] = useT()
  const location = useLocation()
  const base = locale === 'ar' ? '/ar' : ''
  const pagePath = path || location.pathname.replace(/^\/ar(?=\/|$)/, '')
  const page = getGrowthPage(pagePath)
  if (!page) return null

  const cta = page.cta || 'Book a Client Acquisition Audit'

  return (
    <>
      <SEOMeta
        title={page.title}
        description={page.description}
        canonical={`https://ignite-scale.com${base}${page.path}`}
        locale={locale}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          GROUP_CRUMB[page.group],
          { name: page.h1, url: page.path },
        ]}
        service={page.service}
        faqs={page.faqs}
      />
      <Navbar />
      <main style={{ background: 'var(--sec-hero)' }}>
        {/* hero */}
        <section
          style={{
            position: 'relative', overflow: 'hidden',
            padding: 'clamp(130px, 18vh, 200px) clamp(22px, 7vw, 110px) clamp(50px, 7vh, 80px)',
            backgroundImage: 'linear-gradient(rgba(6,8,11,0.82), rgba(6,8,11,0.94)), url(/texture-dark.jpg)',
            backgroundSize: 'cover', backgroundPosition: 'center',
          }}
        >
          <div style={{ maxWidth: 1000, margin: '0 auto' }}>
            <motion.div
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }}
              style={{ display: 'flex', alignItems: 'center', gap: 11, marginBottom: 'clamp(18px, 2.6vw, 26px)' }}
            >
              <span aria-hidden="true" style={{ width: 7, height: 7, background: 'var(--accent)', display: 'inline-block' }} />
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 10, letterSpacing: '0.34em', textTransform: 'uppercase', color: 'var(--accent)' }}>
                {page.kicker}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, ease }}
              style={{
                fontFamily: 'var(--font-display)', fontWeight: 400,
                fontSize: 'clamp(34px, 5.6vw, 64px)', lineHeight: 1.06,
                letterSpacing: '-0.02em', color: 'var(--ink)', margin: 0, maxWidth: '22ch',
              }}
            >
              {page.h1}
            </motion.h1>

            {/* AEO answer block */}
            <motion.p
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, ease, delay: 0.12 }}
              style={{
                marginTop: 'clamp(24px, 3vw, 36px)', maxWidth: '62ch',
                fontFamily: 'var(--font-body)', fontSize: 'clamp(15px, 1.5vw, 18px)', lineHeight: 1.8,
                color: 'var(--ink-dim)', borderLeft: '2px solid var(--accent)', paddingLeft: 'clamp(16px, 2vw, 24px)',
              }}
            >
              {page.answer}
            </motion.p>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.25 }} style={{ marginTop: 'clamp(28px, 4vw, 40px)', display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link to={`${base}${AUDIT_PATH}`} className="btn-primary" data-cursor="hover" style={{ fontSize: 12, padding: '14px 32px', textDecoration: 'none', display: 'inline-block', fontWeight: 600, letterSpacing: '0.05em' }}>
                {cta}
              </Link>
            </motion.div>
          </div>
        </section>

        {/* sections */}
        {page.sections.map((s, si) => (
          <section key={s.h} style={{ borderTop: '1px solid var(--line)', padding: 'clamp(48px, 8vh, 100px) clamp(22px, 7vw, 110px)', background: si % 2 ? 'var(--sec-results)' : 'transparent' }}>
            <div style={{ maxWidth: 1000, margin: '0 auto' }}>
              <motion.h2
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.6, ease }}
                style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(26px, 3.4vw, 42px)', letterSpacing: '-0.02em', color: 'var(--ink)', margin: '0 0 clamp(20px,3vw,32px)' }}
              >
                {s.h}
              </motion.h2>
              {s.ps.map((p) => (
                <p key={p.slice(0, 40)} style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(14px, 1.35vw, 16.5px)', lineHeight: 1.85, color: 'var(--ink-dim)', maxWidth: '68ch', margin: '0 0 18px' }}>
                  {p}
                </p>
              ))}
              {s.bullets && (
                <ul style={{ listStyle: 'none', margin: '10px 0 0', padding: 0, borderTop: '1px solid var(--line)' }}>
                  {s.bullets.map((b, i) => (
                    <motion.li
                      key={b.slice(0, 40)}
                      initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-30px' }} transition={{ duration: 0.45, ease, delay: i * 0.04 }}
                      style={{ display: 'flex', alignItems: 'baseline', gap: 16, padding: 'clamp(14px,1.6vw,18px) 0', borderBottom: '1px solid var(--line)' }}
                    >
                      <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--accent)' }}>{String(i + 1).padStart(2, '0')}</span>
                      <span style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(14px, 1.4vw, 17px)', lineHeight: 1.6, color: 'var(--ink)' }}>{b}</span>
                    </motion.li>
                  ))}
                </ul>
              )}
            </div>
          </section>
        ))}

        {/* FAQs — visible copy backing the FAQPage schema */}
        <section style={{ borderTop: '1px solid var(--line)', padding: 'clamp(48px, 8vh, 100px) clamp(22px, 7vw, 110px)' }}>
          <div style={{ maxWidth: 1000, margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(26px, 3.4vw, 42px)', letterSpacing: '-0.02em', color: 'var(--ink)', margin: '0 0 clamp(24px,3vw,36px)' }}>
              Questions, <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>answered</span>
            </h2>
            <div style={{ borderTop: '1px solid var(--line)' }}>
              {page.faqs.map((f) => (
                <details key={f.q} className="gp-faq">
                  <summary data-cursor="hover">{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* related links */}
        <section style={{ borderTop: '1px solid var(--line)', padding: 'clamp(48px, 7vh, 90px) clamp(22px, 7vw, 110px)', background: 'var(--sec-results)' }}>
          <div style={{ maxWidth: 1000, margin: '0 auto' }}>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 10, letterSpacing: '0.4em', textTransform: 'uppercase', color: 'var(--ink-dim)', fontWeight: 500 }}>
              Related
            </span>
            <div style={{ marginTop: 'clamp(20px, 2.6vw, 30px)', borderTop: '1px solid var(--line)' }}>
              {page.related.map((r) => (
                <Link key={r.to} to={`${base}${r.to}`} className="gp-rel" data-cursor="hover">
                  <span className="gp-rel-title">{r.label}</span>
                  <span className="gp-rel-arrow" aria-hidden="true">→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* final CTA */}
        <section style={{ borderTop: '1px solid var(--line)', padding: 'clamp(64px, 10vh, 130px) clamp(22px, 7vw, 110px)', textAlign: 'center' }}>
          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(30px, 4.4vw, 54px)', letterSpacing: '-0.02em', color: 'var(--ink)', margin: 0 }}>
              Find out where your acquisition system is <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>leaking</span>.
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.8, color: 'var(--ink-dim)', margin: '22px auto 34px', maxWidth: '52ch' }}>
              In 45 minutes we map your current funnel, show you where leads are being lost, and give you a
              prioritised 90-day plan — whether or not we work together. Limited to six audits per month.
            </p>
            <Link to={`${base}${AUDIT_PATH}`} className="btn-primary" data-cursor="hover" style={{ fontSize: 12, padding: '16px 38px', textDecoration: 'none', display: 'inline-block', fontWeight: 600, letterSpacing: '0.05em' }}>
              {cta}
            </Link>
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        .gp-faq { border-bottom: 1px solid var(--line); }
        .gp-faq summary {
          cursor: pointer; list-style: none; display: flex; justify-content: space-between; align-items: center; gap: 20px;
          padding: clamp(18px, 2.2vw, 24px) 0;
          font-family: var(--font-body); font-size: clamp(15px, 1.5vw, 18px); font-weight: 500; color: var(--ink);
          transition: color .25s ease;
        }
        .gp-faq summary::-webkit-details-marker { display: none; }
        .gp-faq summary::after { content: '+'; color: var(--accent); font-size: 20px; flex-shrink: 0; }
        .gp-faq[open] summary::after { content: '–'; }
        .gp-faq summary:hover { color: var(--accent); }
        .gp-faq p {
          margin: 0; padding: 0 0 clamp(18px, 2.2vw, 24px);
          font-family: var(--font-body); font-size: 14.5px; line-height: 1.8; color: var(--ink-dim); max-width: 64ch;
        }
        .gp-rel {
          display: flex; justify-content: space-between; align-items: center; gap: 18px;
          padding: clamp(16px, 2vw, 22px) 0; border-bottom: 1px solid var(--line);
          text-decoration: none; transition: padding-left .4s var(--ease-out);
        }
        .gp-rel:hover { padding-left: 12px; }
        .gp-rel-title { font-family: var(--font-display); font-weight: 400; font-size: clamp(18px, 2.2vw, 26px); letter-spacing: -0.015em; color: var(--ink); }
        .gp-rel-arrow { color: var(--accent); font-size: 18px; transition: transform .4s var(--ease-out); }
        .gp-rel:hover .gp-rel-arrow { transform: translateX(6px); }
      `}</style>
    </>
  )
}
