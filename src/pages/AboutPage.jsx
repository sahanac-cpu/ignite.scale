import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEOMeta from '../components/SEOMeta'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useT } from '../i18n/locale'

const ease = [0.22, 1, 0.36, 1]

const PRINCIPLES = [
  { h: 'Systems over campaigns', p: 'A campaign expires; infrastructure compounds. Everything we build — pipelines, automations, pages, tracking — keeps working and belongs to the client.' },
  { h: 'Booked appointments, not vanity metrics', p: 'We do not report reach. The chain we manage and measure is source → lead → appointment → show → revenue, and clients see the same live dashboard we do.' },
  { h: 'Honesty as a feature', p: 'If a channel underperforms, clients hear it from us first, with the fix or the recommendation to switch it off. Honest reporting is cheaper than a wasted quarter.' },
  { h: 'You own everything', p: 'Ad accounts stay in the client’s name. Media spend bills to the client’s card. CRM, data and assets are client property — during the engagement and after it.' },
]

export default function AboutPage() {
  const [locale] = useT()
  const base = locale === 'ar' ? '/ar' : ''

  return (
    <>
      <SEOMeta
        title="About Ignite Scale — UK-Founded, Built for the UAE Market"
        description="Ignite Scale is a UK-founded client acquisition systems company serving UAE service businesses: clinics, real estate, consultants and premium services. UK standards, UAE focus, GBP pricing."
        canonical={`https://ignite-scale.com${base}/about`}
        locale={locale}
        breadcrumbs={[{ name: 'Home', url: '/' }, { name: 'About', url: '/about' }]}
      />
      <Navbar />
      <main style={{ background: 'var(--sec-hero)' }}>
        <section style={{ padding: 'clamp(130px, 18vh, 200px) clamp(22px, 7vw, 110px) clamp(50px, 7vh, 80px)' }}>
          <div style={{ maxWidth: 1000, margin: '0 auto' }}>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }} style={{ display: 'flex', alignItems: 'center', gap: 11, marginBottom: 24 }}>
              <span aria-hidden="true" style={{ width: 7, height: 7, background: 'var(--accent)', display: 'inline-block' }} />
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 10, letterSpacing: '0.34em', textTransform: 'uppercase', color: 'var(--accent)' }}>About</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, ease }}
              style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(34px, 5.6vw, 66px)', lineHeight: 1.05, letterSpacing: '-0.02em', color: 'var(--ink)', margin: 0, maxWidth: '20ch' }}
            >
              A UK-founded acquisition systems company, built for the <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>UAE market</span>.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, ease, delay: 0.12 }}
              style={{ marginTop: 28, maxWidth: '64ch', fontFamily: 'var(--font-body)', fontSize: 'clamp(15px, 1.5vw, 17px)', lineHeight: 1.85, color: 'var(--ink-dim)' }}
            >
              Ignite Scale builds client acquisition systems for UAE clinics and service businesses. We are not a
              social media agency: we do not sell posts, reach or brand awareness. We design, install and run the
              infrastructure — SEO, paid acquisition, landing pages, CRM funnels and WhatsApp follow-up — that
              turns demand into booked appointments and reportable revenue.
            </motion.p>
          </div>
        </section>

        <section style={{ borderTop: '1px solid var(--line)', padding: 'clamp(48px, 8vh, 100px) clamp(22px, 7vw, 110px)', background: 'var(--sec-results)' }}>
          <div style={{ maxWidth: 1000, margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(26px, 3.4vw, 42px)', letterSpacing: '-0.02em', color: 'var(--ink)', margin: '0 0 18px' }}>
              Why a UK company serving the UAE
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.85, color: 'var(--ink-dim)', maxWidth: '68ch', margin: 0 }}>
              We are UK-registered and we price in pounds sterling, because that is what UK-grade senior work costs
              — and because our clients are buying a revenue system, not a content calendar. Sophisticated UAE
              businesses already pay international rates for their lawyers, architects and consultants; they work
              with us for the same reason: UK-standard strategy and contracts, transparent reporting, and no
              inflated promises. Our market focus, however, is entirely the UAE — Dubai, Abu Dhabi and Sharjah —
              where our clients operate and where the systems we build are engineered to win.
            </p>
          </div>
        </section>

        <section style={{ borderTop: '1px solid var(--line)', padding: 'clamp(48px, 8vh, 100px) clamp(22px, 7vw, 110px)' }}>
          <div style={{ maxWidth: 1000, margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(26px, 3.4vw, 42px)', letterSpacing: '-0.02em', color: 'var(--ink)', margin: '0 0 clamp(24px,3vw,36px)' }}>
              How we <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>operate</span>
            </h2>
            <div className="about-grid">
              {PRINCIPLES.map((pr, i) => (
                <motion.div
                  key={pr.h}
                  initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.55, ease, delay: i * 0.06 }}
                  className="glass gradient-border rounded-sm"
                  style={{ padding: 'clamp(22px, 2.6vw, 32px)' }}
                >
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--accent)' }}>{String(i + 1).padStart(2, '0')}</span>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(19px, 2vw, 24px)', color: 'var(--ink)', margin: '10px 0 10px' }}>{pr.h}</h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.75, color: 'var(--ink-dim)', margin: 0 }}>{pr.p}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ borderTop: '1px solid var(--line)', padding: 'clamp(64px, 10vh, 120px) clamp(22px, 7vw, 110px)', textAlign: 'center' }}>
          <div style={{ maxWidth: 720, margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '-0.02em', color: 'var(--ink)', margin: 0 }}>
              See what the system would look like in <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>your business</span>.
            </h2>
            <div style={{ marginTop: 32 }}>
              <Link to={`${base}/audit`} className="btn-primary" data-cursor="hover" style={{ fontSize: 12, padding: '16px 38px', textDecoration: 'none', display: 'inline-block', fontWeight: 600, letterSpacing: '0.05em' }}>
                Book a Client Acquisition Audit
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        .about-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; }
        @media (max-width: 760px) { .about-grid { grid-template-columns: 1fr; } }
      `}</style>
    </>
  )
}
