import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEOMeta from '../components/SEOMeta'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useT } from '../i18n/locale'

const ease = [0.22, 1, 0.36, 1]

const STAGES = [
  {
    name: 'Diagnostic map',
    label: 'Stage 01',
    who: 'For businesses that need clarity before spend: what industry demand exists, what competitors own, where the funnel leaks and what should be built first.',
    includes: ['Competitor and search-demand snapshot', 'Current funnel, CRM and follow-up review', 'Industry-specific 90-day acquisition roadmap'],
    metrics: 'Clarity on channel priority, funnel leaks, first build order and the appointment metric to manage.',
  },
  {
    name: 'Foundation install',
    label: 'Stage 02',
    who: 'For teams that need the acquisition base installed before scaling traffic: tracking, CRM stages, landing paths and follow-up infrastructure.',
    includes: ['Tracking and source attribution', 'CRM pipeline stages and lead routing', 'First conversion page and WhatsApp follow-up path'],
    metrics: 'Speed-to-lead, lead capture rate, show-rate protection and source-level visibility.',
  },
  {
    name: 'Launch and validate',
    label: 'Stage 03',
    who: 'For businesses ready to put controlled demand through the system and validate which offers, pages and channels produce qualified appointments.',
    featured: true,
    includes: ['SEO and paid acquisition launch plan', 'Offer-specific landing page tests', 'Follow-up and booking-path optimisation'],
    metrics: 'Cost per booked appointment, enquiry quality, booking rate and first pipeline value.',
  },
  {
    name: 'Optimise and scale',
    label: 'Stage 04',
    who: 'For established systems that need stronger economics, new service lines, multi-location routing or deeper reporting.',
    includes: ['Channel expansion and content compounding', 'Advanced reporting by service line or location', 'Sales enablement and pipeline accountability'],
    metrics: 'Attributed revenue, CAC trend, pipeline coverage, per-location or per-service-line performance.',
  },
]

const FAQS = [
  { q: 'Why do you show stages instead of public prices?', a: 'Because two UAE businesses can need completely different builds. A clinic with no CRM, a brokerage with ten agents, and a consultancy with a long sales cycle should not be sold the same package. We scope after the audit and explain the stage order before any engagement starts.' },
  { q: 'Do you still charge in GBP?', a: 'Yes. Ignite Scale is UK-founded, so contracts and invoicing are handled in pounds sterling. The site does not publish package prices because scope depends on the acquisition system required.' },
  { q: 'Can we start with one stage only?', a: 'Yes. Some clients start with the diagnostic and foundation install, then launch demand once the follow-up layer is ready. The point is to build in the order that protects results.' },
  { q: 'Who owns the assets?', a: 'You do. Ad accounts, CRM, landing pages, automations and data remain your property throughout and after the engagement.' },
]

export default function InvestmentPage() {
  const [locale] = useT()
  const base = locale === 'ar' ? '/ar' : ''

  return (
    <>
      <SEOMeta
        title="Engagement Stages — How We Build Acquisition Systems | Ignite Scale"
        description="See how Ignite Scale scopes UAE client acquisition systems by stage: diagnostic map, foundation install, launch and validate, optimise and scale. No public package prices; every build is scoped after audit."
        canonical={`https://ignite-scale.com${base}/investment`}
        locale={locale}
        breadcrumbs={[{ name: 'Home', url: '/' }, { name: 'Engagement Stages', url: '/investment' }]}
        faqs={FAQS}
      />
      <Navbar />
      <main style={{ background: 'var(--sec-hero)' }}>
        <section style={{ padding: 'clamp(130px, 18vh, 200px) clamp(22px, 7vw, 110px) clamp(50px, 7vh, 80px)' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }} style={{ display: 'flex', alignItems: 'center', gap: 11, marginBottom: 24 }}>
              <span aria-hidden="true" style={{ width: 7, height: 7, background: 'var(--accent)', display: 'inline-block' }} />
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 10, letterSpacing: '0.34em', textTransform: 'uppercase', color: 'var(--accent)' }}>Engagement stages</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, ease }}
              style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(36px, 6vw, 72px)', lineHeight: 1.04, letterSpacing: '-0.02em', color: 'var(--ink)', margin: 0, maxWidth: '19ch' }}
            >
              The build order matters more than the package name.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, ease, delay: 0.12 }}
              style={{ marginTop: 28, maxWidth: '66ch', fontFamily: 'var(--font-body)', fontSize: 'clamp(15px, 1.5vw, 17px)', lineHeight: 1.85, color: 'var(--ink-dim)' }}
            >
              We do not publish prices because the right scope depends on your industry, sales cycle, existing CRM,
              follow-up capacity and how much demand already exists. We scope after the Client Acquisition Audit, then
              build in stages so traffic, conversion, follow-up and reporting mature together.
            </motion.p>
          </div>
        </section>

        <section style={{ borderTop: '1px solid var(--line)', padding: 'clamp(48px, 8vh, 100px) clamp(22px, 7vw, 110px)' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }} className="inv-grid">
            {STAGES.map((stage, i) => (
              <motion.div
                key={stage.name}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.6, ease, delay: i * 0.08 }}
                className="glass gradient-border rounded-sm"
                style={{ padding: 'clamp(26px, 3vw, 38px)', border: stage.featured ? '1px solid rgba(201,169,110,0.45)' : undefined, position: 'relative' }}
              >
                <span style={{ fontFamily: 'var(--font-body)', fontSize: 9.5, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--accent)' }}>{stage.label}</span>
                {stage.featured && (
                  <span style={{ position: 'absolute', top: 18, right: 18, fontFamily: 'var(--font-body)', fontSize: 9, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--accent)' }}>Common entry</span>
                )}
                <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(24px, 2.6vw, 32px)', color: 'var(--ink)', margin: '14px 0 0' }}>{stage.name}</h2>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 13.5, lineHeight: 1.7, color: 'var(--ink-dim)', margin: '18px 0 0' }}>{stage.who}</p>
                <ul style={{ listStyle: 'none', margin: '20px 0 0', padding: 0 }}>
                  {stage.includes.map((inc) => (
                    <li key={inc} style={{ display: 'flex', gap: 10, alignItems: 'baseline', padding: '7px 0', fontFamily: 'var(--font-body)', fontSize: 13.5, lineHeight: 1.55, color: 'var(--ink)' }}>
                      <span style={{ color: 'var(--accent)', flexShrink: 0 }}>→</span>{inc}
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: 20, paddingTop: 16, borderTop: '1px solid var(--line)', fontFamily: 'var(--font-body)', fontSize: 11.5, lineHeight: 1.7, color: 'var(--ink-mute)' }}>
                  <span style={{ letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: 9.5, color: 'var(--ink-dim)', display: 'block', marginBottom: 6 }}>Measured by</span>
                  {stage.metrics}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section style={{ borderTop: '1px solid var(--line)', padding: 'clamp(48px, 8vh, 100px) clamp(22px, 7vw, 110px)' }}>
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(26px, 3.4vw, 42px)', letterSpacing: '-0.02em', color: 'var(--ink)', margin: '0 0 24px' }}>
              Stage questions, <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>answered</span>
            </h2>
            <div style={{ borderTop: '1px solid var(--line)' }}>
              {FAQS.map((f) => (
                <details key={f.q} className="inv-faq">
                  <summary data-cursor="hover">{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
            <div style={{ marginTop: 44, textAlign: 'center' }}>
              <Link to={`${base}/audit`} className="btn-primary" data-cursor="hover" style={{ fontSize: 12, padding: '16px 38px', textDecoration: 'none', display: 'inline-block', fontWeight: 600, letterSpacing: '0.05em' }}>
                Book a Client Acquisition Audit
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        .inv-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
        @media (max-width: 1180px) { .inv-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 680px) { .inv-grid { grid-template-columns: 1fr; } }
        .inv-faq { border-bottom: 1px solid var(--line); }
        .inv-faq summary {
          cursor: pointer; list-style: none; display: flex; justify-content: space-between; align-items: center; gap: 20px;
          padding: 20px 0; font-family: var(--font-body); font-size: 16px; font-weight: 500; color: var(--ink);
        }
        .inv-faq summary::-webkit-details-marker { display: none; }
        .inv-faq summary::after { content: '+'; color: var(--accent); font-size: 20px; flex-shrink: 0; }
        .inv-faq[open] summary::after { content: '–'; }
        .inv-faq p { margin: 0; padding: 0 0 20px; font-family: var(--font-body); font-size: 14px; line-height: 1.8; color: var(--ink-dim); max-width: 64ch; }
      `}</style>
    </>
  )
}
