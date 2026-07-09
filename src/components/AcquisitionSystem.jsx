import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useT } from '../i18n/locale'

const ease = [0.22, 1, 0.36, 1]

const LAYERS = [
  { n: '01', h: 'Diagnose', p: 'We map your industry, competitors, offer, lead sources, response gaps and current revenue leaks before touching traffic.', to: '/audit' },
  { n: '02', h: 'Capture demand', p: 'SEO, Google and paid social are matched to how your buyers actually search and compare in the UAE.', to: '/services/seo-uae' },
  { n: '03', h: 'Convert intent', p: 'Offer-specific landing pages turn high-intent visitors into calls, WhatsApp enquiries and booked appointments.', to: '/landing-pages-dubai' },
  { n: '04', h: 'Route follow-up', p: 'CRM and WhatsApp automation route every lead, protect response time and keep follow-up moving after the first message.', to: '/services/crm-funnels' },
  { n: '05', h: 'Measure and scale', p: 'Attribution shows which industry page, campaign and follow-up path produced appointments, pipeline and revenue.', to: '/services/reporting-attribution' },
]

const INDUSTRIES = [
  { h: 'Aesthetic Clinics', p: 'Consultations booked, not DMs ignored.', to: '/industries/aesthetic-clinics' },
  { h: 'Dental Clinics', p: 'High-value treatments, measured in booked chairs.', to: '/industries/dental-clinics' },
  { h: 'Medical Clinics', p: 'Self-pay service lines with department-level attribution.', to: '/industries/medical-clinics' },
  { h: 'Real Estate', p: 'Owned lead flow instead of portal dependence.', to: '/industries/real-estate' },
  { h: 'Business Setup', p: 'Win the five-quote comparison war.', to: '/industries/business-setup' },
  { h: 'Immigration', p: 'Serious applicants filtered from browsers.', to: '/industries/immigration-consultants' },
  { h: 'Private Education', p: 'Enrolment funnels timed to the academic calendar.', to: '/industries/private-education' },
  { h: 'B2B Consultants', p: 'Pipeline that outgrows the founder’s network.', to: '/industries/b2b-consultants' },
]

export default function AcquisitionSystem() {
  const [locale] = useT()
  const base = locale === 'ar' ? '/ar' : ''

  return (
    <>
      {/* The problem + system */}
      <section id="system" style={{ borderTop: '1px solid var(--line)', background: 'var(--sec-hero)', padding: 'clamp(64px, 10vh, 130px) clamp(22px, 7vw, 110px)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7, ease }}
          >
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 10, letterSpacing: '0.4em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 500 }}>
              The problem
            </span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(30px, 4.6vw, 58px)', lineHeight: 1.06, letterSpacing: '-0.02em', color: 'var(--ink)', margin: '18px 0 0', maxWidth: '20ch' }}>
              The problem isn’t leads. It’s everything <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>after</span> the lead.
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(14.5px, 1.4vw, 16.5px)', lineHeight: 1.85, color: 'var(--ink-dim)', margin: '24px 0 0', maxWidth: '64ch' }}>
              Most UAE service businesses already generate enquiries. Then the system fails: leads sit unanswered
              for hours, WhatsApp messages go to a personal phone, no-shows aren’t rescheduled, and nobody can say
              which dirham of ad spend produced which booked appointment. Agencies keep selling more traffic into a
              leaking bucket. We fix the bucket first.
            </p>
          </motion.div>

          <div style={{ marginTop: 'clamp(48px, 6vw, 72px)' }}>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 10, letterSpacing: '0.4em', textTransform: 'uppercase', color: 'var(--ink-dim)', fontWeight: 500 }}>
              Your journey · five build stages
            </span>
            <div style={{ marginTop: 22, borderTop: '1px solid var(--line)' }}>
              {LAYERS.map((l, i) => (
                <motion.div
                  key={l.n}
                  initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-30px' }} transition={{ duration: 0.5, ease, delay: i * 0.05 }}
                >
                  <Link to={`${base}${l.to}`} className="acq-layer" data-cursor="hover">
                    <span className="acq-num">{l.n}</span>
                    <span className="acq-h">{l.h}</span>
                    <span className="acq-p">{l.p}</span>
                    <span className="acq-arrow" aria-hidden="true">→</span>
                  </Link>
                </motion.div>
              ))}
            </div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 13.5, lineHeight: 1.8, color: 'var(--ink-mute)', margin: '20px 0 0', maxWidth: '58ch' }}>
              Every click takes prospects to the next decision, not a dead-end service page. That is why we build by stage and by industry.
            </p>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" style={{ borderTop: '1px solid var(--line)', background: 'var(--sec-results)', padding: 'clamp(64px, 10vh, 130px) clamp(22px, 7vw, 110px)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 10, letterSpacing: '0.4em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 500 }}>
            Who we help
          </span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(28px, 4vw, 50px)', letterSpacing: '-0.02em', color: 'var(--ink)', margin: '18px 0 clamp(28px,4vw,44px)' }}>
            Built for high-value <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>UAE service businesses</span>
          </h2>
          <div className="acq-ind-grid">
            {INDUSTRIES.map((ind, i) => (
              <motion.div
                key={ind.h}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-30px' }} transition={{ duration: 0.5, ease, delay: i * 0.04 }}
              >
                <Link to={`${base}${ind.to}`} className="acq-ind glass gradient-border rounded-sm" data-cursor="hover">
                  <span className="acq-ind-h">{ind.h}</span>
                  <span className="acq-ind-p">{ind.p}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement stages */}
      <section style={{ borderTop: '1px solid var(--line)', background: 'var(--sec-hero)', padding: 'clamp(64px, 10vh, 130px) clamp(22px, 7vw, 110px)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 10, letterSpacing: '0.4em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 500 }}>
            Engagement stages
          </span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(28px, 4.4vw, 54px)', letterSpacing: '-0.02em', color: 'var(--ink)', margin: '18px 0 0' }}>
            Scoped in stages. Judged in <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>booked appointments</span>.
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(14.5px, 1.4vw, 16px)', lineHeight: 1.85, color: 'var(--ink-dim)', margin: '24px auto 0', maxWidth: '58ch' }}>
            We do not publish package prices because the right build depends on your industry, sales cycle, CRM maturity
            and follow-up capacity. Every engagement starts with an audit, then moves through foundation, launch and
            optimisation stages so the system grows in the right order.
          </p>
          <div style={{ marginTop: 32, display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to={`${base}/investment`} className="btn-primary" data-cursor="hover" style={{ fontSize: 12, padding: '14px 32px', textDecoration: 'none', display: 'inline-block', fontWeight: 600, letterSpacing: '0.05em' }}>
              See Build Stages
            </Link>
            <Link to={`${base}/audit`} data-cursor="hover" style={{ fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', padding: '14px 26px', borderRadius: 999, border: '1px solid var(--line-strong)', color: 'var(--ink-dim)', fontFamily: 'var(--font-body)', fontWeight: 500, textDecoration: 'none', display: 'inline-block' }}>
              Book an Audit →
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .acq-layer {
          display: grid; grid-template-columns: 44px 180px 1fr auto; align-items: baseline; gap: 18px;
          padding: clamp(18px, 2.4vw, 26px) 0; border-bottom: 1px solid var(--line);
          text-decoration: none; transition: padding-left .4s var(--ease-out), background .4s var(--ease-out);
        }
        .acq-layer:hover { padding-left: 12px; background: linear-gradient(90deg, rgba(201,169,110,0.05), transparent 60%); }
        .acq-num { font-family: var(--font-body); font-size: 12px; color: var(--ink-mute); }
        .acq-h { font-family: var(--font-display); font-weight: 400; font-size: clamp(20px, 2.4vw, 30px); letter-spacing: -0.02em; color: var(--ink); }
        .acq-p { font-family: var(--font-body); font-size: 13.5px; line-height: 1.7; color: var(--ink-dim); max-width: 52ch; }
        .acq-arrow { color: var(--accent); font-size: 16px; justify-self: end; transition: transform .4s var(--ease-out); }
        .acq-layer:hover .acq-arrow { transform: translateX(6px); }
        @media (max-width: 860px) {
          .acq-layer { grid-template-columns: 34px 1fr auto; }
          .acq-p { grid-column: 2 / 3; }
        }
        .acq-ind-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; }
        @media (max-width: 1020px) { .acq-ind-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 560px) { .acq-ind-grid { grid-template-columns: 1fr; } }
        .acq-ind { display: flex; flex-direction: column; gap: 8px; padding: 22px; text-decoration: none; transition: transform .3s var(--ease-out); }
        .acq-ind:hover { transform: translateY(-3px); }
        .acq-ind-h { font-family: var(--font-display); font-weight: 400; font-size: 19px; letter-spacing: -0.01em; color: var(--ink); }
        .acq-ind-p { font-family: var(--font-body); font-size: 12.5px; line-height: 1.6; color: var(--ink-dim); }
      `}</style>
    </>
  )
}
