import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import AuroraLayer from './AuroraLayer'
import { useT } from '../i18n/locale'

function getFaqs(t) {
  return [
    {
      q: t(
        'How long does it take to see results for a Dubai-based business?',
        'متى تظهر النتائج لعميل في دبي؟'
      ),
      a: t(
        'Most clients see measurable growth within the first 30 days: follower growth, improved engagement, and early ad traction. Significant results, consistent qualified leads and attributable revenue, typically appear between 60 and 90 days as we refine campaigns based on real data. Long-term dominance takes 3 to 6 months of sustained scaling.',
        'يلاحظ معظم العملاء نموّاً قابلاً للقياس خلال أول ٣٠ يوماً: زيادة في المتابعين، وتفاعل أفضل، وبدء أداء الإعلانات. أمّا النتائج الجوهرية، من عملاء محتملين مؤهلين وإيرادات قابلة للنسب، فتظهر عادةً بين ٦٠ و٩٠ يوماً مع تحسين الحملات استناداً إلى بيانات حقيقية. أمّا الهيمنة طويلة الأمد فتتطلب من ٣ إلى ٦ أشهر من التوسّع المستمر.'
      ),
    },
    {
      q: t(
        'Which niches do you specialise in across the UAE?',
        'في أي قطاعات تتخصصون داخل الإمارات؟'
      ),
      a: t(
        'Our core specialisms are luxury real estate, five-star hospitality, fine dining and F&B, fashion and e-commerce, luxury automotive, and professional services (legal, finance, healthcare). These are the highest-value niches in Dubai and where our results speak for themselves. We selectively take other niches too. Contact us to discuss your specific industry.',
        'تتمحور تخصصاتنا حول العقارات الفاخرة، والضيافة الخمس نجوم، والمطاعم الراقية والأغذية والمشروبات، والأزياء والتجارة الإلكترونية، والسيارات الفاخرة، والخدمات المهنية (قانون، مالية، رعاية صحية). هذه أعلى القطاعات قيمةً في دبي، وهي التي تتحدث نتائجنا فيها عن نفسها. ندرس أيضاً قطاعات أخرى بانتقائية. تواصل معنا لمناقشة قطاعك تحديداً.'
      ),
    },
    {
      q: t(
        'What separates Ignite Scale from other marketing agencies in Dubai?',
        'ما الذي يميّز Ignite Scale عن باقي وكالات التسويق في دبي؟'
      ),
      a: t(
        "Three things: we are performance-obsessed, we specialise in Dubai's unique market (local culture, Arabic content, GCC buying behaviour), and we tie everything to revenue, not vanity metrics. We also produce content in-house, so there's no quality loss from outsourced designers or videographers.",
        'ثلاثة أمور: نحن مهووسون بالأداء، ومتخصصون في سوق دبي الفريد (الثقافة المحلية، المحتوى العربي، سلوك الشراء الخليجي)، ونربط كل شيء بالإيرادات لا بمقاييس المظهر. كما ننتج المحتوى داخلياً، فلا فقدان في الجودة بسبب مصممين أو مصوّرين خارجيين.'
      ),
    },
    {
      q: t(
        'Which platforms do you manage and run ads on?',
        'ما المنصّات التي تديرونها وتديرون عليها الإعلانات؟'
      ),
      a: t(
        'Instagram, TikTok, LinkedIn, Facebook, X (Twitter), YouTube Shorts, Snapchat (popular in the UAE), and Google. We recommend platforms based on your niche and audience. A luxury real estate brand needs different channels than an e-commerce fashion label.',
        'إنستغرام، تيك توك، لينكدإن، فيسبوك، إكس (تويتر)، يوتيوب شورتس، سناب شات (المنتشر في الإمارات)، وقوقل. نوصي بالمنصّات وفق قطاعك وجمهورك. علامة عقارية فاخرة تحتاج قنوات مختلفة عن متجر إلكتروني للأزياء.'
      ),
    },
    {
      q: t(
        'What is your minimum budget for social media management in Dubai?',
        'ما الحد الأدنى للميزانية لإدارة وسائل التواصل في دبي؟'
      ),
      a: t(
        'Our management retainers start from AED 7,500 per month. Paid advertising budgets are separate. We recommend a minimum of AED 5,000 per month to see meaningful results from paid campaigns. We have packages from AED 12,500 per month that include both management and ads.',
        'تبدأ اشتراكات الإدارة لدينا من ٧٬٥٠٠ درهم شهرياً. وميزانيات الإعلانات المدفوعة منفصلة، ونوصي بحدّ أدنى ٥٬٠٠٠ درهم شهرياً للحصول على نتائج معتبرة. لدينا باقات تبدأ من ١٢٬٥٠٠ درهم شهرياً تشمل الإدارة والإعلانات معاً.'
      ),
    },
    {
      q: t(
        'Do you create all the content yourselves or do we need to provide assets?',
        'هل تنتجون المحتوى بالكامل أم نحتاج توفير المواد؟'
      ),
      a: t(
        'We handle everything in-house: content strategy, copywriting, graphic design, video editing, reel production, and photography direction. For luxury brands we often coordinate on-location shoots in Dubai, all managed by our creative team. You simply approve and we execute.',
        'نُدير كل شيء داخلياً: استراتيجية المحتوى، النصوص، التصميم الجرافيكي، المونتاج، إنتاج الريلز، وإخراج التصوير. للعلامات الفاخرة، ننسّق في الغالب جلسات تصوير ميدانية في دبي يديرها فريقنا الإبداعي بالكامل. كلّ ما عليك هو الاعتماد، وننفّذ.'
      ),
    },
    {
      q: t(
        'Can you help businesses targeting Arabic-speaking audiences in Dubai and the GCC?',
        'هل تخدمون الشركات التي تستهدف الجمهور الناطق بالعربية في دبي والخليج؟'
      ),
      a: t(
        'Absolutely. We produce bilingual content (English and Arabic) and our team includes native Arabic copywriters who understand local nuance, cultural sensitivities, and what resonates with Emirati, Saudi and wider GCC audiences. Bilingual social strategies typically outperform English-only by 40 to 60% in the UAE market.',
        'بالتأكيد. ننتج محتوى ثنائي اللغة (عربي وإنجليزي)، ويضم فريقنا كتّاب نصوص عرب يفهمون الفروقات الدقيقة المحلية والحساسيات الثقافية وما يتفاعل معه الجمهور الإماراتي والسعودي والخليجي. الاستراتيجيات الثنائية اللغة تتفوّق عادةً على الإنجليزية فقط بنسبة ٤٠ إلى ٦٠٪ في السوق الإماراتي.'
      ),
    },
    {
      q: t(
        'How do you measure ROI and what reporting do we receive?',
        'كيف تقيسون العائد على الاستثمار وما نوع التقارير التي نتلقّاها؟'
      ),
      a: t(
        'We track what actually matters: qualified lead volume, cost per lead, revenue attribution (via UTM tracking and CRM integration), ROAS on paid campaigns, organic reach and follower quality, and engagement rates. You receive a detailed monthly report plus a live dashboard you can access anytime.',
        'نتتبّع ما يهم فعلاً: حجم العملاء المحتملين المؤهلين، وتكلفة العميل المحتمل، ونسب الإيرادات (عبر روابط UTM والتكامل مع نظام إدارة العملاء)، والعائد على الإنفاق في الحملات المدفوعة، والوصول العضوي وجودة المتابعين، ومعدّلات التفاعل. تحصل على تقرير شهري مفصّل وعلى لوحة بيانات حيّة يمكنك الوصول إليها في أي وقت.'
      ),
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
        className="w-full flex items-start justify-between gap-4 py-6 text-left group"
      >
        <span className="text-white/75 group-hover:text-white text-sm md:text-base font-medium transition-colors leading-snug">
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
            <p className="text-white/40 text-sm leading-relaxed pb-6">{item.a}</p>
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

  /* Output FAQPage JSON-LD so Google can show People-Also-Ask rich results.
     We inject directly into <head> since this component is the source of the data. */
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
  }, [locale])

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
            {t('GOT', 'لديك')}
            <br />
            <span className="gradient-text">{t('QUESTIONS?', 'أسئلة؟')}</span>
          </h2>
          <p className="text-white/35 text-sm leading-relaxed max-w-sm md:text-right">
            {t(
              "Everything Dubai businesses ask us before signing. If your question isn't here, book a free call.",
              'كل ما تسألنا عنه الشركات في دبي قبل التعاقد. إن لم تجد سؤالك هنا، احجز مكالمة مجانية.'
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
          <div className="text-white font-semibold mb-1">{t('Still have questions?', 'ما زال لديك أسئلة؟')}</div>
          <div className="text-white/35 text-sm">{t('Our team is available 9am to 6pm, Monday to Saturday.', 'فريقنا متاح من ٩ صباحاً إلى ٦ مساءً، الإثنين إلى السبت.')}</div>
        </div>
        <div className="flex flex-wrap gap-4">
          <a href="mailto:admin@ignite-scale.com" className="btn-ghost text-sm">
            {t('Email Us', 'راسلنا')} <span className="text-accent">→</span>
          </a>
          <a href="#booking" className="btn-primary">
            {t('Book a Call', 'احجز مكالمة')}
          </a>
        </div>
      </motion.div>
      </div>
    </section>
  )
}
