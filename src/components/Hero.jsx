import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useT } from '../i18n/locale'
import AnimatedTextCycle from './ui/AnimatedTextCycle'

function MagneticBtn({ children, className, style, href }) {
  const ref = useRef(null)
  return (
    <motion.a
      ref={ref}
      href={href}
      className={className}
      style={style}
      data-cursor="hover"
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      {children}
    </motion.a>
  )
}

const wipe = (delay = 0, duration = 1.0) => ({
  initial: { clipPath: 'inset(0 100% 0 0)' },
  animate: { clipPath: 'inset(0 0% 0 0)' },
  transition: { duration, ease: [0.76, 0, 0.24, 1], delay },
})

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.85, ease: [0.25, 0.1, 0.25, 1], delay },
})

function StatPill({ val, label }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 16 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 5,
        borderLeft: '1px solid var(--line-strong)',
        paddingLeft: 18,
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-grotesk)',
          fontWeight: 600,
          fontSize: 'clamp(22px, 2.4vw, 30px)',
          letterSpacing: '-0.02em',
          color: 'var(--accent)',
          lineHeight: 1,
        }}
      >
        {val}
      </span>
      <span
        style={{
          fontFamily: '"DM Sans", sans-serif',
          fontSize: 10,
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: 'var(--ink-mute)',
        }}
      >
        {label}
      </span>
    </motion.div>
  )
}

export default function Hero() {
  const [ready, setReady] = useState(false)
  const [locale, t] = useT()

  useEffect(() => {
    const id = setTimeout(() => setReady(true), 80)
    return () => clearTimeout(id)
  }, [])

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh',
        background: 'var(--sec-hero)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* ── full-bleed cinematic video ── */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/hero-poster.png"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
          filter: 'brightness(0.62) saturate(0.85) contrast(1.02)',
        }}
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* ── scrims: darken left for text legibility, deepen bottom ── */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background:
            'linear-gradient(100deg, rgba(3,5,15,0.92) 0%, rgba(3,5,15,0.70) 34%, rgba(3,5,15,0.18) 62%, rgba(3,5,15,0.45) 100%)',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background:
            'linear-gradient(to bottom, rgba(3,5,15,0.30) 0%, transparent 28%, transparent 60%, rgba(3,5,15,0.85) 100%)',
        }}
      />

      {/* ── content ── */}
      <motion.div
        style={{
          position: 'relative',
          zIndex: 10,
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}
      >
        <div
          style={{
            padding: 'clamp(120px, 18vh, 220px) clamp(20px, 7vw, 100px) 0',
          }}
        >
          {/* micro-label with square tick */}
          <motion.div
            {...fadeUp(0.1)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 11,
              marginBottom: 'clamp(22px, 3vw, 34px)',
            }}
          >
            <span
              aria-hidden="true"
              style={{ width: 7, height: 7, background: 'var(--accent)', display: 'inline-block' }}
            />
            <span
              style={{
                fontFamily: '"DM Sans", sans-serif',
                fontSize: 11,
                letterSpacing: '0.32em',
                textTransform: 'uppercase',
                color: 'var(--ink-dim)',
                fontWeight: 500,
              }}
            >
              {t('UK-founded · UAE-focused · Built by industry', 'تأسست في المملكة المتحدة · تخدم الإمارات')}
            </span>
          </motion.div>

          {/* editorial serif headline with italic accent */}
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 300,
              lineHeight: 0.98,
              letterSpacing: '-0.015em',
              fontSize: 'clamp(44px, 7vw, 100px)',
              color: 'var(--ink)',
              margin: 0,
              marginBottom: 'clamp(28px, 4vw, 40px)',
              maxWidth: '15ch',
            }}
          >
            <motion.span {...wipe(0.25)} style={{ display: 'block', overflow: 'hidden' }}>
              <span style={{ display: 'block' }}>{t('We turn', 'نحوّل')}</span>
            </motion.span>
            <motion.span {...wipe(0.45)} style={{ display: 'block', overflow: 'visible' }}>
              <AnimatedTextCycle
                words={
                  locale === 'ar'
                    ? ['نتائج البحث', 'الإعلانات', 'الاستفسارات', 'واتساب', 'الاهتمام']
                    : ['search demand', 'ad spend', 'enquiries', 'WhatsApp leads', 'attention']
                }
                interval={2200}
                className="hero-cycle-word"
              />
            </motion.span>
            <motion.span {...wipe(0.65)} style={{ display: 'block', overflow: 'hidden' }}>
              <span style={{ display: 'block' }}>{t('into booked revenue.', 'إلى إيرادات محجوزة.')}</span>
            </motion.span>
          </h1>

          {/* subcopy + CTAs row */}
          <div className="hero-foot">
            <motion.p
              {...fadeUp(0.85)}
              style={{
                fontFamily: '"DM Sans", sans-serif',
                fontSize: 15,
                lineHeight: 1.75,
                color: 'var(--ink-dim)',
                fontWeight: 400,
                maxWidth: 440,
                margin: 0,
              }}
            >
              {t(
                'Client acquisition systems for UAE businesses that need booked appointments — not just leads. SEO, paid ads, landing pages, CRM funnels and WhatsApp follow-up, engineered as one measurable machine.',
                'أنظمة اكتساب عملاء لأنشطة الإمارات التي تريد مواعيد محجوزة — لا مجرد عملاء محتملين. تحسين محركات البحث والإعلانات وصفحات الهبوط وقمعات CRM ومتابعة واتساب، كمنظومة واحدة قابلة للقياس.'
              )}
            </motion.p>

            <motion.div {...fadeUp(1.0)} style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <MagneticBtn
                href="/audit"
                className="btn-primary"
                style={{
                  fontSize: 12,
                  padding: '14px 32px',
                  textDecoration: 'none',
                  display: 'inline-block',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                }}
              >
                {t('Book a Client Acquisition Audit', 'احجز تدقيق اكتساب العملاء')}
              </MagneticBtn>
              <MagneticBtn
                href="#results"
                style={{
                  fontSize: 12,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  padding: '14px 26px',
                  borderRadius: 999,
                  border: '1px solid var(--line-strong)',
                  color: 'var(--ink-dim)',
                  fontFamily: '"DM Sans", sans-serif',
                  fontWeight: 500,
                  textDecoration: 'none',
                  display: 'inline-block',
                  backdropFilter: 'blur(8px)',
                }}
              >
                {t('See the work →', 'أعمالنا ←')}
              </MagneticBtn>
            </motion.div>
          </div>
        </div>

        {/* ── bottom stats row ── */}
        <div
          style={{
            position: 'relative',
            zIndex: 10,
            padding: 'clamp(32px, 5vh, 56px) clamp(24px, 7vw, 100px) clamp(28px, 4vh, 44px)',
          }}
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={ready ? { scaleX: 1 } : {}}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 1.0 }}
            style={{
              height: 1,
              marginBottom: 26,
              originX: 0,
              background:
                'linear-gradient(90deg, var(--line-strong), var(--line) 55%, transparent)',
            }}
          />

          <motion.div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'clamp(22px, 4vw, 52px)',
              flexWrap: 'wrap',
            }}
            initial="hidden"
            animate={ready ? 'visible' : 'hidden'}
            variants={{
              visible: { transition: { staggerChildren: 0.08, delayChildren: 1.2 } },
            }}
          >
            <StatPill val="<60s" label={t('First Response to Every Lead', 'أول استجابة لكل عميل')} />
            <StatPill val="90 days" label={t('Full System Install', 'تركيب النظام الكامل')} />
            <StatPill val="100%" label={t('Client-Owned Accounts & Data', 'حسابات وبيانات مملوكة للعميل')} />
            <StatPill val="CPBA" label={t('The Metric We Report On', 'المقياس الذي نُقاس به')} />

            <div style={{ flex: 1 }} />

            <motion.div
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              transition={{ delay: 0.4, duration: 1 }}
              style={{ display: 'flex', alignItems: 'center', gap: 10 }}
              className="hidden lg:flex"
            >
              <span
                style={{
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: 9,
                  letterSpacing: '0.35em',
                  textTransform: 'uppercase',
                  color: 'var(--ink-mute)',
                }}
              >
                {t('Scroll', 'مرّر')}
              </span>
              <motion.div
                style={{ width: 28, height: 1, background: 'var(--line-strong)', originX: 0 }}
                animate={{ scaleX: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 1.6 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <style>{`
        .hero-cycle-word {
          font-family: var(--font-serif);
          font-style: italic;
          font-weight: 300;
          letter-spacing: -0.01em;
          color: var(--accent);
        }
        .hero-foot {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 36px;
          flex-wrap: wrap;
        }
        @media (max-width: 760px) {
          .hero-foot { flex-direction: column; align-items: flex-start; gap: 24px; }
        }
      `}</style>
    </section>
  )
}
