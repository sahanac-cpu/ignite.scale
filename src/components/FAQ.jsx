import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import AuroraLayer from './AuroraLayer'
import { useT } from '../i18n/locale'

function getFaqs(t) {
  return [
    {
      q: t('Do you work with specific UAE industries?', 'هل تعملون مع قطاعات محددة في الإمارات؟'),
      a: t('Yes. The core focus is high-value service businesses: aesthetic, dental and medical clinics, real estate, business setup, immigration consulting, private education, luxury services and B2B consultancies. Each industry gets a different journey, offer structure and follow-up path.', 'نعم. نركز على أنشطة الخدمات عالية القيمة: العيادات التجميلية والأسنان والطبية، العقارات، تأسيس الشركات، استشارات الهجرة، التعليم الخاص، الخدمات الفاخرة واستشارات B2B. لكل قطاع رحلة وعرض ومسار متابعة مختلف.'),
    },
    {
      q: t('Why do you not publish package prices?', 'لماذا لا تنشرون أسعار الباقات؟'),
      a: t('Because the right system depends on your industry, sales cycle, CRM maturity, response capacity and current demand. We scope after the Client Acquisition Audit, then explain the build stage by stage before you commit.', 'لأن النظام المناسب يعتمد على القطاع ودورة البيع ونضج CRM وقدرة الاستجابة وحجم الطلب الحالي. نحدد النطاق بعد تدقيق اكتساب العملاء ثم نشرح مراحل البناء قبل الالتزام.'),
    },
    {
      q: t('What happens in the Client Acquisition Audit?', 'ماذا يحدث في تدقيق اكتساب العملاء؟'),
      a: t('We map your current funnel, competitor visibility, website conversion path, CRM stages and follow-up gaps. You leave with a prioritised 90-day roadmap whether or not we work together.', 'نرسم خريطة القمع الحالي وحضور المنافسين ومسار تحويل الموقع ومراحل CRM وفجوات المتابعة. تحصل على خارطة ٩٠ يوماً سواء عملنا معاً أم لا.'),
    },
    {
      q: t('What are the engagement stages?', 'ما مراحل التعاون؟'),
      a: t('Most builds move through diagnostic map, foundation install, launch and validate, then optimise and scale. This keeps traffic, conversion, follow-up and reporting growing in the right order.', 'غالباً نبدأ بخريطة التشخيص ثم تركيب الأساس ثم الإطلاق والتحقق ثم التحسين والتوسع. هذا يجعل الزيارات والتحويل والمتابعة والتقارير تنمو بالترتيب الصحيح.'),
    },
    {
      q: t('Do we own the CRM, landing pages and data?', 'هل نملك CRM وصفحات الهبوط والبيانات؟'),
      a: t('Yes. Ad accounts, CRM, landing pages, automations and data stay in your ownership. We build the acquisition infrastructure in your accounts, not a black box you lose later.', 'نعم. حسابات الإعلانات وCRM وصفحات الهبوط والأتمتة والبيانات تبقى ملكاً لك. نبني البنية داخل حساباتك وليس صندوقاً مغلقاً تخسره لاحقاً.'),
    },
    {
      q: t('Can you support Arabic-speaking UAE audiences?', 'هل تدعمون الجمهور العربي في الإمارات؟'),
      a: t('Yes where the data and offer justify it. We usually start English-first for premium UAE commercial searches, then add Arabic pages, ads and follow-up where they improve qualified pipeline.', 'نعم عندما تبرر البيانات والعرض ذلك. غالباً نبدأ بالإنجليزية لعمليات البحث التجارية المميزة في الإمارات ثم نضيف العربية حيث تحسن جودة خط الأنابيب.'),
    },
  ]
}

function Item({ item, i }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: i * 0.05 }}
      className="border-b border-white/[0.06]"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-6 py-7 text-left group"
        data-cursor="hover"
      >
        <span
          className="text-white/80 group-hover:text-white transition-colors"
          style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(20px, 2.1vw, 28px)', letterSpacing: '-0.01em', lineHeight: 1.15 }}
        >
          {item.q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0 w-6 h-6 border border-white/[0.08] rounded-full flex items-center justify-center text-white/30 group-hover:border-accent/40 group-hover:text-accent transition-colors mt-0.5"
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="text-white/45 leading-relaxed pb-7" style={{ fontSize: 15, maxWidth: '62ch' }}>{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const headRef = useRef(null)
  const inView = useInView(headRef, { once: true, margin: '-60px' })
  const [locale, t] = useT()
  const faqs = getFaqs(t)

  useEffect(() => {
    const id = 'faq-jsonld'
    let el = document.head.querySelector(`script[data-schema="${id}"]`)
    if (!el) {
      el = document.createElement('script')
      el.setAttribute('type', 'application/ld+json')
      el.setAttribute('data-schema', id)
      document.head.appendChild(el)
    }
    el.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    })
    return () => {
      const e = document.head.querySelector(`script[data-schema="${id}"]`)
      if (e) e.remove()
    }
  }, [locale, faqs])

  return (
    <section id="faq" style={{ position: 'relative', overflow: 'hidden', background: '#03050F' }}>
      <AuroraLayer variant="faq" />
      <div className="section-pad max-w-7xl mx-auto" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <div className="flex items-center gap-4 mb-5">
            <span className="w-8 h-px bg-accent" />
            <span className="text-accent text-[10px] font-medium tracking-[0.4em] uppercase">{t('FAQ', 'الأسئلة الشائعة')}</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2
              className="font-display text-white leading-none tracking-tight"
              style={{ fontSize: 'clamp(44px, 7vw, 90px)' }}
            >
              {t('QUESTIONS', 'أسئلة')}
              <br />
              <span className="gradient-text">{t('BEFORE THE AUDIT?', 'قبل التدقيق؟')}</span>
            </h2>
            <p className="text-white/35 text-sm leading-relaxed max-w-sm md:text-right">
              {t(
                'Everything UAE businesses ask before building a client acquisition system: industries, stages, ownership, scope and follow-up.',
                'كل ما تسأل عنه الشركات في الإمارات قبل بناء نظام اكتساب عملاء: القطاعات والمراحل والملكية والنطاق والمتابعة.'
              )}
            </p>
          </div>
        </motion.div>

        <div className="max-w-4xl">
          {faqs.map((item, i) => (
            <Item key={item.q} item={item} i={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 glass gradient-border rounded-sm p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <div>
            <div className="text-white font-semibold mb-1">{t('Need a specific answer?', 'تحتاج إجابة محددة؟')}</div>
            <div className="text-white/35 text-sm">{t('Use the audit form and we will review your current acquisition journey before the call.', 'استخدم نموذج التدقيق وسنراجع رحلة اكتساب العملاء الحالية قبل المكالمة.')}</div>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="mailto:admin@ignite-scale.com" className="btn-ghost text-sm">
              {t('Email Us', 'راسلنا')} <span className="text-accent">→</span>
            </a>
            <a href="#booking" className="btn-primary">
              {t('Book an Audit', 'احجز تدقيقاً')}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
