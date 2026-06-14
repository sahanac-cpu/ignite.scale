import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import AuroraLayer from './AuroraLayer'
import { useT } from '../i18n/locale'

function getSteps(t) {
  return [
    {
      num: '01',
      title: t('Free Strategy Discovery', 'استكشاف استراتيجي مجاني'),
      desc: t(
        'A 45-minute deep-dive into your brand, audience, and goals. We audit your current social presence, analyse your top competitors, and map a custom growth strategy. No obligation.',
        'جلسة معمَّقة مدتها ٤٥ دقيقة في علامتك التجارية وجمهورك وأهدافك. نراجع حضورك الحالي على المنصات الاجتماعية، ونحلّل أقوى منافسيك، ونرسم استراتيجية نمو مخصَّصة. دون أي التزام.'
      ),
      detail: t('Competitor audit · Brand analysis · Growth roadmap', 'مراجعة المنافسين · تحليل العلامة · خارطة طريق النمو'),
      icon: (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <circle cx="9" cy="9" r="6" stroke="#FF3300" strokeWidth="1.5"/>
          <path d="M13.5 13.5L19 19" stroke="#FF3300" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      num: '02',
      title: t('Content & Campaign Build', 'بناء المحتوى والحملات'),
      desc: t(
        'We build your full content calendar, design creatives, set up ad campaigns, and optimise your profile for Dubai search discovery, all before we go live.',
        'نضع خارطة المحتوى الشاملة، ونصمّم المواد الإبداعية، ونجهّز الحملات الإعلانية، ونحسّن ملفاتك لاكتشاف البحث في دبي، كل ذلك قبل الإطلاق.'
      ),
      detail: t('Content calendar · Ad setup · Profile optimisation', 'تقويم المحتوى · إعداد الإعلانات · تحسين الملفات'),
      icon: (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <rect x="3" y="3" width="16" height="16" rx="2" stroke="#FF3300" strokeWidth="1.5"/>
          <path d="M7 11h8M7 7h4M7 15h6" stroke="#FF3300" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      num: '03',
      title: t('Launch & Optimise', 'الإطلاق والتحسين'),
      desc: t(
        "We go live and immediately begin split-testing creatives, audiences, and copy. Every week we optimise what's working and cut what isn't. Pure data, no guesswork.",
        'ننطلق فوراً ونبدأ باختبار المحتوى الإبداعي والجماهير والنصوص. كل أسبوع نعزّز ما ينجح ونوقف ما لا يجدي. قرارات قائمة على البيانات لا على التخمين.'
      ),
      detail: t('A/B testing · Weekly optimisation · Real-time reporting', 'اختبار أ/ب · تحسين أسبوعي · تقارير فورية'),
      icon: (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path d="M3 17l5-7 4 3 3-5 4 9" stroke="#FF3300" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="18" cy="5" r="2.5" stroke="#FF6B35" strokeWidth="1.5"/>
        </svg>
      ),
    },
    {
      num: '04',
      title: t('Scale & Report', 'التوسّع والتقارير'),
      desc: t(
        'Monthly performance reviews with full ROI breakdowns, attributed revenue, and a clear plan for the next 30 days. We scale winning campaigns and reinvest into growth.',
        'مراجعات شهرية للأداء، مع تفصيل كامل للعائد على الاستثمار، والإيرادات المنسوبة، وخطة واضحة لـ ٣٠ يوماً قادمة. نوسّع الحملات الناجحة ونعيد الاستثمار في النمو.'
      ),
      detail: t('Monthly reports · ROI tracking · Scale strategy', 'تقارير شهرية · تتبّع العائد · استراتيجية التوسّع'),
      icon: (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path d="M11 3v4M11 15v4M3 11h4M15 11h4" stroke="#FF3300" strokeWidth="1.5" strokeLinecap="round"/>
          <circle cx="11" cy="11" r="4" stroke="#FF6B35" strokeWidth="1.5"/>
        </svg>
      ),
    },
  ]
}

export default function Process() {
  const headRef = useRef(null)
  const inView  = useInView(headRef, { once: true, margin: '-60px' })
  const lineRef = useRef(null)
  const lineInView = useInView(lineRef, { once: true, margin: '-80px' })
  const [locale, t] = useT()
  const steps = getSteps(t)

  return (
    <section id="process" style={{ position: 'relative', overflow: 'hidden', background: '#03050F' }}>
      <AuroraLayer variant="process" />
      <div className="section-pad max-w-7xl mx-auto" style={{ position: 'relative', zIndex: 1 }}>
      <motion.div
        ref={headRef}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="mb-16"
      >
        <div className="flex items-center gap-4 mb-5">
          <span className="w-8 h-px bg-accent" />
          <span className="text-accent text-[10px] font-medium tracking-[0.4em] uppercase">{t('How We Work', 'كيف نعمل')}</span>
        </div>
        <h2
          className="font-display text-white leading-none tracking-tight"
          style={{ fontSize: 'clamp(44px, 7vw, 90px)' }}
        >
          {t('FROM ZERO TO', 'من الصفر إلى')}
          <br />
          <span className="gradient-text">{t('DOMINANT', 'الهيمنة')}</span>
        </h2>
      </motion.div>

      {/* Steps */}
      <div className="relative" ref={lineRef}>
        {/* Animated connecting line */}
        <motion.div
          className="absolute left-[23px] top-8 bottom-8 w-px hidden md:block"
          style={{
            background: 'linear-gradient(to bottom, rgba(232,69,0,0.7) 0%, rgba(232,69,0,0.2) 70%, transparent 100%)',
            transformOrigin: 'top',
          }}
          initial={{ scaleY: 0 }}
          animate={lineInView ? { scaleY: 1 } : {}}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
        />

        <div className="space-y-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
              className="flex gap-6 md:gap-10 items-start"
            >
              {/* Step indicator */}
              <div className="relative shrink-0">
                <div className="w-12 h-12 rounded-full border border-accent/30 bg-accent/5 flex items-center justify-center z-10 relative">
                  {s.icon}
                </div>
              </div>

              {/* Content */}
              <motion.div
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
                className="glass gradient-border rounded-sm p-7 flex-1 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-[10px] text-accent tracking-[0.3em] uppercase font-medium">{s.num}</span>
                    <h3 className="text-lg font-semibold text-white mt-1">{s.title}</h3>
                  </div>
                  <span className="font-display text-5xl text-white/[0.04] tracking-widest group-hover:text-white/[0.07] transition-colors hidden md:block">
                    {s.num}
                  </span>
                </div>
                <p className="text-white/40 text-sm leading-relaxed mb-4">{s.desc}</p>
                <div className="text-[10px] tracking-[0.2em] uppercase text-accent/60">{s.detail}</div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-16 text-center"
      >
        <a href="#booking" className="btn-primary inline-block">
          {t("Start Your Strategy Call · It's Free", 'ابدأ مكالمتك الاستراتيجية · مجاناً')}
        </a>
      </motion.div>
      </div>
    </section>
  )
}
