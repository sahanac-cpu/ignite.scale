import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import AuroraLayer from './AuroraLayer'
import { useT } from '../i18n/locale'

function getFaqs(t) {
  return [
    {
      q: t(
        'How long does it take to see results for a London-based business?',
        'متى تظهر النتائج لعميل في لندن؟'
      ),
      a: t(
        'Most clients see measurable growth within the first 30 days: follower growth, improved engagement, and early ad traction. Significant results, consistent qualified leads and attributable revenue, typically appear between 60 and 90 days as we refine campaigns based on real data. Long-term dominance takes 3 to 6 months of sustained scaling.',
        'يلاحظ معظم العملاء نموّاً قابلاً للقياس خلال أول ٣٠ يوماً: زيادة في المتابعين، وتفاعل أفضل، وبدء أداء الإعلانات. أمّا النتائج الجوهرية، من عملاء محتملين مؤهلين وإيرادات قابلة للنسب، فتظهر عادةً بين ٦٠ و٩٠ يوماً مع تحسين الحملات استناداً إلى بيانات حقيقية. أمّا الهيمنة طويلة الأمد فتتطلب من ٣ إلى ٦ أشهر من التوسّع المستمر.'
      ),
    },
    {
      q: t(
        'Which niches do you specialise in across the UK?',
        'في أي قطاعات تتخصصون داخل المملكة المتحدة؟'
      ),
      a: t(
        'Our core specialisms are luxury real estate, five-star hospitality, fine dining and F&B, fashion and e-commerce, luxury automotive, and professional services (legal, finance, healthcare). These are the highest-value niches in London and where our results speak for themselves. We selectively take other niches too. Contact us to discuss your specific industry.',
        'تتمحور تخصصاتنا حول العقارات الفاخرة، والضيافة الخمس نجوم، والمطاعم الراقية والأغذية والمشروبات، والأزياء والتجارة الإلكترونية، والسيارات الفاخرة، والخدمات المهنية (قانون، مالية، رعاية صحية). هذه أعلى القطاعات قيمةً في لندن، وهي التي تتحدث نتائجنا فيها عن نفسها. ندرس أيضاً قطاعات أخرى بانتقائية. تواصل معنا لمناقشة قطاعك تحديداً.'
      ),
    },
    {
      q: t(
        'What separates Ignite Scale from other marketing agencies in London?',
        'ما الذي يميّز Ignite Scale عن باقي وكالات التسويق في لندن؟'
      ),
      a: t(
        "Three things: we are performance-obsessed, we specialise in London's unique market (local culture, Arabic content, UK buying behaviour), and we tie everything to revenue, not vanity metrics. We also produce content in-house, so there's no quality loss from outsourced designers or videographers.",
        'ثلاثة أمور: نحن مهووسون بالأداء، ومتخصصون في سوق لندن الفريد (الثقافة المحلية، المحتوى العربي، سلوك الشراء البريطاني)، ونربط كل شيء بالإيرادات لا بمقاييس المظهر. كما ننتج المحتوى داخلياً، فلا فقدان في الجودة بسبب مصممين أو مصوّرين خارجيين.'
      ),
    },
    {
      q: t(
        'Which platforms do you manage and run ads on?',
        'ما المنصّات التي تديرونها وتديرون عليها الإعلانات؟'
      ),
      a: t(
        'Instagram, TikTok, LinkedIn, Facebook, X (Twitter), YouTube Shorts, Snapchat (popular in the UK), and Google. We recommend platforms based on your niche and audience. A luxury real estate brand needs different channels than an e-commerce fashion label.',
        'إنستغرام، تيك توك، لينكدإن، فيسبوك، إكس (تويتر)، يوتيوب شورتس، سناب شات (المنتشر في المملكة المتحدة)، وجوجل. نوصي بالمنصّات وفق قطاعك وجمهورك. علامة عقارية فاخرة تحتاج قنوات مختلفة عن متجر إلكتروني للأزياء.'
      ),
    },
    {
      q: t(
        'What is your minimum budget for social media management in London?',
        'ما الحد الأدنى للميزانية لإدارة وسائل التواصل في لندن؟'
      ),
      a: t(
        'Our management retainers start from £1,500 per month. Paid advertising budgets are separate. We recommend a minimum of £1,000 per month to see meaningful results from paid campaigns. We have packages from £2,500 per month that include both management and ads.',
        'تبدأ اشتراكات الإدارة لدينا من ١٬٥٠٠ جنيه إسترليني شهرياً، وميزانيات الإعلانات المدفوعة منفصلة عنها. ونوصي بحدٍّ أدنى قدره ١٬٠٠٠ جنيه إسترليني شهرياً للحصول على نتائج ملموسة من الحملات المدفوعة. ولدينا باقات تبدأ من ٢٬٥٠٠ جنيه إسترليني شهرياً تشمل الإدارة والإعلانات معاً.'
      ),
    },
    {
      q: t(
        'Do you create all the content yourselves or do we need to provide assets?',
        'هل تنتجون المحتوى بالكامل أم نحتاج توفير المواد؟'
      ),
      a: t(
        'We handle everything in-house: content strategy, copywriting, graphic design, video editing, reel production, and photography direction. For luxury brands we often coordinate on-location shoots in London, all managed by our creative team. You simply approve and we execute.',
        'نُدير كل شيء داخلياً: استراتيجية المحتوى، النصوص، التصميم الجرافيكي، المونتاج، إنتاج الريلز، وإخراج التصوير. للعلامات الفاخرة، ننسّق في الغالب جلسات تصوير ميدانية في لندن يديرها فريقنا الإبداعي بالكامل. كلّ ما عليك هو الاعتماد، وننفّذ.'
      ),
    },
    {
      q: t(
        'Can you help businesses targeting Arabic-speaking audiences in London and the UK?',
        'هل تخدمون الشركات التي تستهدف الجمهور الناطق بالعربية في لندن وبريطانيا؟'
      ),
      a: t(
        'Absolutely. We produce bilingual content (English and Arabic) and our team includes native Arabic copywriters who understand local nuance, cultural sensitivities, and what resonates with British and wider UK audiences. Bilingual social strategies typically outperform English-only by 40 to 60% in the UK market.',
        'بالتأكيد. ننتج محتوى ثنائي اللغة (عربي وإنجليزي)، ويضم فريقنا كتّاب نصوص عرب يفهمون الفروقات الدقيقة المحلية والحساسيات الثقافية وما يتفاعل معه الجمهور البريطاني والمتعدّد الثقافات. الاستراتيجيات الثنائية اللغة تتفوّق عادةً على الإنجليزية فقط بنسبة ٤٠ إلى ٦٠٪ في السوق البريطاني.'
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
    {
      q: t('Do you lock clients into long contracts?', 'هل تربطون العملاء بعقود طويلة؟'),
      a: t(
        'No long lock-ins. We work on rolling monthly retainers with a short initial ramp (usually 90 days) so the system has time to prove itself. After that you can stay month-to-month. We’d rather earn your renewal with results than trap you in a 12-month contract.',
        'لا عقود طويلة. نعمل باشتراكات شهرية متجددة مع فترة انطلاق قصيرة (عادةً ٩٠ يوماً) ليثبت النظام نفسه. بعدها يمكنك الاستمرار شهرياً. نفضّل أن نكسب تجديدك بالنتائج لا أن نحبسك في عقد سنوي.'
      ),
    },
    {
      q: t('What happens after I book a call?', 'ماذا يحدث بعد حجز المكالمة؟'),
      a: t(
        'Within 48 hours we confirm a 30–45 minute call at your chosen slot. Before it, we audit your current presence so the conversation is specific, not generic. On the call we map where spend is leaking and the fastest path to pipeline. If we’re a fit, you get a tailored proposal — no pressure, no upsell theatre.',
        'خلال ٤٨ ساعة نؤكّد مكالمة من ٣٠ إلى ٤٥ دقيقة في الموعد الذي تختاره. قبلها نراجع حضورك الحالي لتكون المكالمة محددة لا عامة. خلالها نحدّد أين تتسرّب الميزانية وأسرع طريق إلى خط الأنابيب. وإن كنّا مناسبين، تحصل على عرض مخصّص — دون ضغط أو مبالغات.'
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
  // reduced set — timeline, budget, Arabic, contracts, next step
  const all = getFaqs(t)
  const faqs = [all[0], all[4], all[6], all[8], all[9]].filter(Boolean)

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
              "Everything London businesses ask us before signing. If your question isn't here, book a free call.",
              'كل ما تسألنا عنه الشركات في لندن قبل التعاقد. إن لم تجد سؤالك هنا، احجز مكالمة مجانية.'
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
