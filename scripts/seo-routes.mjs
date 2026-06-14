/* Single source of truth for per-route SEO metadata.
   Used by build-sitemap.mjs and build-prerender.mjs.
   Every route has both English (root) and Arabic (/ar prefix) versions. */

export const SITE = 'https://ignite-scale.com'

export const ROUTES = [
  {
    path: '/',
    title: 'Ignite Scale | Dubai Paid Social, Web & Lead Funnels',
    description: "Dubai growth agency engineering paid social, content and funnels for luxury real estate, cosmetic clinics and B2B brands. Targeting 2–5× ROAS. Book a free strategy call.",
    title_ar: 'Ignite Scale | إعلانات ممولة ومواقع وقمعات في دبي',
    description_ar: 'وكالة نموّ في دبي تهندس الإعلانات الممولة والمحتوى وقمعات التحويل للعقارات الفاخرة وعيادات التجميل والشركات. نستهدف عائداً ٢–٥× على الإنفاق الإعلاني. احجز مكالمة استراتيجية مجانية.',
    changefreq: 'weekly', priority: 1.0,
    breadcrumbs: [{ name: 'Home', name_ar: 'الرئيسية', url: '/' }],
  },
  {
    path: '/services',
    title: 'Digital Marketing Services Dubai | Ignite Scale',
    description: 'Paid social on Meta, TikTok and Google, conversion websites, lead generation and creative production for Dubai brands. Book a free consultation.',
    title_ar: 'خدمات التسويق الرقمي في دبي | Ignite Scale',
    description_ar: 'إعلانات ممولة على ميتا وتيك توك وقوقل، مواقع تحويلية، توليد عملاء محتملين، وإنتاج إبداعي لعلامات دبي. احجز استشارة مجانية.',
    changefreq: 'monthly', priority: 0.9,
    breadcrumbs: [
      { name: 'Home', name_ar: 'الرئيسية', url: '/' },
      { name: 'Services', name_ar: 'الخدمات', url: '/services' },
    ],
  },
  {
    path: '/services/paid-social',
    title: 'Paid Social Agency Dubai | Meta, TikTok & Google',
    description: 'Paid social advertising in Dubai across Meta, TikTok, Snapchat and Google. Targeting 2–5× ROAS and meaningful CPL reduction. Free campaign audit.',
    title_ar: 'وكالة إعلانات ممولة في دبي | ميتا، تيك توك، قوقل',
    description_ar: 'إعلانات ممولة في دبي عبر ميتا وتيك توك وسناب شات وقوقل. نستهدف عائداً ٢–٥× على الإنفاق وخفضاً ملموساً في تكلفة العميل. مراجعة حملة مجانية.',
    changefreq: 'monthly', priority: 0.85,
    breadcrumbs: [
      { name: 'Home', name_ar: 'الرئيسية', url: '/' },
      { name: 'Services', name_ar: 'الخدمات', url: '/services' },
      { name: 'Paid Social', name_ar: 'الإعلانات الممولة', url: '/services/paid-social' },
    ],
    service: {
      name: 'Paid Social Advertising',
      name_ar: 'إعلانات التواصل الاجتماعي المدفوعة',
      serviceType: 'Social Media Advertising',
      description: 'Full-funnel paid campaigns on Meta, TikTok, Snapchat and Google for Dubai brands.',
    },
  },
  {
    path: '/services/creative',
    title: 'UGC Video & Creative Ads Dubai | Ignite Scale',
    description: 'UGC video, ad creative and copywriting for Dubai brands. In-house production, 48-hour turnaround, conversion-focused. Typical 3–5× engagement lift.',
    title_ar: 'فيديو المستخدم وإعلانات إبداعية في دبي | Ignite Scale',
    description_ar: 'فيديو المستخدم والمحتوى الإبداعي للإعلانات وكتابة النصوص لعلامات دبي. إنتاج داخلي، تسليم خلال ٤٨ ساعة، تركيز على التحويل. ارتفاع تفاعل ٣–٥× في المعتاد.',
    changefreq: 'monthly', priority: 0.85,
    breadcrumbs: [
      { name: 'Home', name_ar: 'الرئيسية', url: '/' },
      { name: 'Services', name_ar: 'الخدمات', url: '/services' },
      { name: 'Content & Creative', name_ar: 'المحتوى الإبداعي', url: '/services/creative' },
    ],
    service: {
      name: 'Content Production & Creative Strategy',
      name_ar: 'إنتاج المحتوى والاستراتيجية الإبداعية',
      serviceType: 'Content Production',
      description: 'UGC video, photography, ad creative and copywriting from an in-house team.',
    },
  },
  {
    path: '/services/funnels',
    title: 'Landing Pages & Lead Funnels Dubai | Ignite Scale',
    description: 'Conversion-optimised landing pages and lead funnels for Dubai brands. Real estate, cosmetics, hospitality. CRO built in. Free funnel audit.',
    title_ar: 'صفحات الهبوط وقمعات التحويل في دبي | Ignite Scale',
    description_ar: 'صفحات هبوط وقمعات تحويل مُحسَّنة للعلامات في دبي. عقارات، تجميل، ضيافة. تحسين التحويل مدمج. مراجعة قمع مجانية.',
    changefreq: 'monthly', priority: 0.85,
    breadcrumbs: [
      { name: 'Home', name_ar: 'الرئيسية', url: '/' },
      { name: 'Services', name_ar: 'الخدمات', url: '/services' },
      { name: 'Funnels', name_ar: 'القمعات', url: '/services/funnels' },
    ],
    service: {
      name: 'Landing Page & Funnel Design',
      name_ar: 'تصميم صفحات الهبوط والقمعات',
      serviceType: 'Web Design',
      description: 'Conversion-optimised landing pages and multi-step lead funnels.',
    },
  },
  {
    path: '/dubai-marketing-agency',
    title: 'Best Marketing Agency in Dubai | Ignite Scale',
    description: 'Looking for a Dubai marketing agency? Ignite Scale builds paid social, websites and lead funnels for ambitious UAE brands. Book a free strategy session.',
    title_ar: 'أفضل وكالة تسويق في دبي | Ignite Scale',
    description_ar: 'تبحث عن وكالة تسويق في دبي؟ Ignite Scale تبني الإعلانات الممولة والمواقع وقمعات التحويل للعلامات الإماراتية الطموحة. احجز جلسة استراتيجية مجانية.',
    changefreq: 'monthly', priority: 0.9,
    breadcrumbs: [
      { name: 'Home', name_ar: 'الرئيسية', url: '/' },
      { name: 'Dubai Marketing Agency', name_ar: 'وكالة تسويق دبي', url: '/dubai-marketing-agency' },
    ],
  },
  {
    path: '/meta-ads-dubai',
    title: 'Meta Ads Agency Dubai | Facebook & Instagram Experts',
    description: 'Meta Ads management in Dubai. We run Facebook and Instagram campaigns targeting 2–5× ROAS for real estate, cosmetics and B2B. Free ad audit.',
    title_ar: 'وكالة إعلانات ميتا في دبي | خبراء فيسبوك وإنستغرام',
    description_ar: 'إدارة إعلانات ميتا في دبي. ندير حملات فيسبوك وإنستغرام نستهدف فيها عائداً ٢–٥× على الإنفاق للعقارات والتجميل والشركات. مراجعة إعلانية مجانية.',
    changefreq: 'monthly', priority: 0.85,
    breadcrumbs: [
      { name: 'Home', name_ar: 'الرئيسية', url: '/' },
      { name: 'Meta Ads Dubai', name_ar: 'إعلانات ميتا دبي', url: '/meta-ads-dubai' },
    ],
    service: {
      name: 'Meta Ads Management',
      name_ar: 'إدارة إعلانات ميتا',
      serviceType: 'Facebook and Instagram Advertising',
      description: 'Full Facebook and Instagram campaign setup, creative, and ongoing optimisation.',
    },
  },
  {
    path: '/tiktok-ads-dubai',
    title: 'TikTok Ads Agency Dubai | Ignite Scale',
    description: 'TikTok advertising in Dubai. High-performing campaigns targeting Gen Z and millennial audiences with lower CPMs than Meta. Free audit available.',
    title_ar: 'وكالة إعلانات تيك توك في دبي | Ignite Scale',
    description_ar: 'إعلانات تيك توك في دبي. حملات عالية الأداء تستهدف جيل Z والألفية بتكلفة عرض أقل من ميتا. مراجعة مجانية متاحة.',
    changefreq: 'monthly', priority: 0.85,
    breadcrumbs: [
      { name: 'Home', name_ar: 'الرئيسية', url: '/' },
      { name: 'TikTok Ads Dubai', name_ar: 'إعلانات تيك توك دبي', url: '/tiktok-ads-dubai' },
    ],
    service: {
      name: 'TikTok Ads Management',
      name_ar: 'إدارة إعلانات تيك توك',
      serviceType: 'TikTok Advertising',
      description: 'TikTok ad strategy, creative, and ongoing campaign optimisation.',
    },
  },
  {
    path: '/web-design-dubai',
    title: 'Web Design Dubai | Conversion-Optimised Websites',
    description: 'Professional website design in Dubai. Conversion-optimised landing pages for real estate, cosmetics, hospitality and B2B. Mobile-first, fast-loading, SEO-ready.',
    title_ar: 'تصميم المواقع في دبي | مواقع مُحسَّنة للتحويل',
    description_ar: 'تصميم احترافي للمواقع في دبي. صفحات هبوط مُحسَّنة للتحويل للعقارات والتجميل والضيافة والشركات. تصميم متجاوب مع الجوال، سريع التحميل، جاهز لتحسين البحث.',
    changefreq: 'monthly', priority: 0.85,
    breadcrumbs: [
      { name: 'Home', name_ar: 'الرئيسية', url: '/' },
      { name: 'Web Design Dubai', name_ar: 'تصميم مواقع دبي', url: '/web-design-dubai' },
    ],
    service: {
      name: 'Website Design & Build',
      name_ar: 'تصميم وبناء المواقع',
      serviceType: 'Web Design',
      description: 'Custom conversion-optimised websites built mobile-first with SEO best practices.',
    },
  },
  {
    path: '/results',
    title: 'Client Results & Case Studies | Ignite Scale Dubai',
    description: 'Real results from Dubai brands: +247% qualified leads in 90 days, 4.2× lower cost per reservation, 61% CPL reduction in luxury auto. No vanity metrics.',
    title_ar: 'نتائج العملاء ودراسات الحالة | Ignite Scale دبي',
    description_ar: 'نتائج حقيقية من علامات دبي: +٢٤٧٪ عملاء مؤهلون في ٩٠ يوماً، ٤٫٢× خفض في تكلفة الحجز، ٦١٪ خفض في تكلفة العميل في السيارات الفاخرة. لا مقاييس مظهرية.',
    changefreq: 'monthly', priority: 0.8,
    breadcrumbs: [
      { name: 'Home', name_ar: 'الرئيسية', url: '/' },
      { name: 'Results', name_ar: 'النتائج', url: '/results' },
    ],
  },
  {
    path: '/process',
    title: 'Our Growth Process for Dubai Brands | Ignite Scale',
    description: 'Our 4-step growth process: strategy discovery, content and campaign build, launch and optimise, then scale. Transparent and data-driven.',
    title_ar: 'عمليتنا للنمو في علامات دبي | Ignite Scale',
    description_ar: 'عمليتنا للنمو في ٤ خطوات: استكشاف الاستراتيجية، بناء المحتوى والحملات، الإطلاق والتحسين، ثم التوسّع. شفّافة ومدفوعة بالبيانات.',
    changefreq: 'monthly', priority: 0.7,
    breadcrumbs: [
      { name: 'Home', name_ar: 'الرئيسية', url: '/' },
      { name: 'Process', name_ar: 'العملية', url: '/process' },
    ],
  },
  {
    path: '/book',
    title: 'Book a Free Strategy Call | Ignite Scale Dubai',
    description: 'Book a free 45-minute strategy call with Ignite Scale. We audit your social presence, analyse competitors, and build a 90-day growth roadmap. No obligation.',
    title_ar: 'احجز مكالمة استراتيجية مجانية | Ignite Scale دبي',
    description_ar: 'احجز مكالمة استراتيجية مجانية مدتها ٤٥ دقيقة مع Ignite Scale. نراجع حضورك الاجتماعي، نحلّل المنافسين، ونبني خارطة نمو لـ٩٠ يوماً. دون التزام.',
    changefreq: 'monthly', priority: 0.9,
    breadcrumbs: [
      { name: 'Home', name_ar: 'الرئيسية', url: '/' },
      { name: 'Book', name_ar: 'احجز', url: '/book' },
    ],
  },
  {
    path: '/faq',
    title: 'Social Media Marketing FAQ | Ignite Scale Dubai',
    description: 'Answers to the most common questions Dubai businesses ask before working with Ignite Scale: timelines, platforms, budgets, content creation, Arabic content, ROI.',
    title_ar: 'أسئلة شائعة حول التسويق على وسائل التواصل | Ignite Scale دبي',
    description_ar: 'إجابات لأكثر الأسئلة التي تطرحها شركات دبي قبل التعاون مع Ignite Scale: الجداول الزمنية، المنصّات، الميزانيات، إنتاج المحتوى، المحتوى العربي، العائد على الاستثمار.',
    changefreq: 'monthly', priority: 0.6,
    breadcrumbs: [
      { name: 'Home', name_ar: 'الرئيسية', url: '/' },
      { name: 'FAQ', name_ar: 'الأسئلة الشائعة', url: '/faq' },
    ],
  },
  {
    path: '/blog/meta-ads-mistakes',
    title: '5 Meta Ads Mistakes Costing You Money | Dubai Guide',
    description: 'The 5 biggest Meta Ads mistakes Dubai businesses make, with actionable fixes that typically lift ROAS 50–100%.',
    title_ar: '٥ أخطاء في إعلانات ميتا تكلّفك المال | دليل دبي',
    description_ar: 'أكبر ٥ أخطاء في إعلانات ميتا ترتكبها شركات دبي، مع حلول عملية ترفع العائد على الإنفاق ٥٠–١٠٠٪ في المعتاد.',
    changefreq: 'monthly', priority: 0.7,
    breadcrumbs: [
      { name: 'Home', name_ar: 'الرئيسية', url: '/' },
      { name: 'Blog', name_ar: 'المدونة', url: '/blog' },
      { name: '5 Meta Ads Mistakes', name_ar: '٥ أخطاء في إعلانات ميتا', url: '/blog/meta-ads-mistakes' },
    ],
    article: {
      datePublished: '2026-03-20',
      headline: '5 Meta Ads Mistakes Costing You Money',
      headline_ar: '٥ أخطاء في إعلانات ميتا تكلّفك المال',
    },
  },
  {
    path: '/blog/tiktok-vs-instagram-ads',
    title: 'TikTok vs Instagram Ads 2026 | Dubai Comparison',
    description: 'TikTok vs Instagram Ads 2026: cost, audience demographics, conversion rates and best industries for each. When to use which platform in Dubai.',
    title_ar: 'إعلانات تيك توك مقابل إنستغرام ٢٠٢٦ | مقارنة دبي',
    description_ar: 'إعلانات تيك توك مقابل إنستغرام ٢٠٢٦: التكلفة، التركيبة السكانية، معدلات التحويل، وأفضل القطاعات لكل منهما. متى تستخدم أي منصّة في دبي.',
    changefreq: 'monthly', priority: 0.7,
    breadcrumbs: [
      { name: 'Home', name_ar: 'الرئيسية', url: '/' },
      { name: 'Blog', name_ar: 'المدونة', url: '/blog' },
      { name: 'TikTok vs Instagram', name_ar: 'تيك توك مقابل إنستغرام', url: '/blog/tiktok-vs-instagram-ads' },
    ],
    article: {
      datePublished: '2026-05-04',
      headline: 'TikTok vs Instagram Ads 2026: Which Platform to Choose for Dubai',
      headline_ar: 'إعلانات تيك توك مقابل إنستغرام ٢٠٢٦: أي منصّة تختار في دبي',
    },
  },
  {
    path: '/blog/reduce-cost-per-lead',
    title: 'How to Cut Ad Cost Per Lead by 60% | Ignite Scale',
    description: 'Step-by-step framework for reducing CPL 60–80%: landing page optimisation, audience targeting, funnel design, copywriting. Tested on 50+ Dubai campaigns.',
    title_ar: 'كيف تخفض تكلفة العميل المحتمل بنسبة ٦٠٪ | Ignite Scale',
    description_ar: 'إطار خطوة بخطوة لخفض تكلفة العميل المحتمل بنسبة ٦٠–٨٠٪: تحسين صفحات الهبوط، استهداف الجمهور، تصميم القمعات، كتابة النصوص. مُختبَر على أكثر من ٥٠ حملة في دبي.',
    changefreq: 'monthly', priority: 0.7,
    breadcrumbs: [
      { name: 'Home', name_ar: 'الرئيسية', url: '/' },
      { name: 'Blog', name_ar: 'المدونة', url: '/blog' },
      { name: 'Cut CPL by 60%', name_ar: 'خفض تكلفة العميل ٦٠٪', url: '/blog/reduce-cost-per-lead' },
    ],
    article: {
      datePublished: '2026-04-12',
      headline: 'How to Cut Your Ad Cost Per Lead by 60%',
      headline_ar: 'كيف تخفض تكلفة العميل المحتمل بنسبة ٦٠٪',
    },
    howTo: {
      name: 'How to reduce ad cost per lead by 60%',
      totalTime: 'P30D',
      steps: [
        { name: 'Audit Your Landing Page', text: 'Strip your landing page down to one offer and one CTA. Remove navigation menus that pull attention away. Get page speed below 2 seconds.' },
        { name: 'Improve Your Offer', text: 'Replace generic lead forms with a free audit, time-bound offer, or lead magnet that provides immediate value. Soft guarantees reduce friction.' },
        { name: 'Tighten Your Targeting', text: 'Layer interests, behaviours and demographics. Exclude competitor audiences. Use lookalike audiences built from your existing high-value customers.' },
        { name: 'Rewrite Your Ad Creative', text: 'Lead with the offer in the first 2 seconds of video. Show a real person speaking. Address the single biggest objection in the copy.' },
        { name: 'Set Up Conversion Tracking', text: 'Install the Meta Pixel and Google Tag Manager. Verify offline conversion tracking. Without accurate data, no optimisation works.' },
      ],
    },
  },
  {
    path: '/case-study/dubai-real-estate-4-8x-roas',
    title: 'Real Estate: 4.8× ROAS in 90 Days | Case Study',
    description: "How we lifted a Dubai property developer's ROAS from 1.2× to 4.8× in 90 days, with CPL down 68%. Complete strategy breakdown.",
    title_ar: 'عقارات: عائد ٤٫٨× على الإنفاق في ٩٠ يوماً | دراسة حالة',
    description_ar: 'كيف رفعنا العائد على الإنفاق لمطوّر عقاري في دبي من ١٫٢× إلى ٤٫٨× في ٩٠ يوماً، مع خفض تكلفة العميل ٦٨٪. تفصيل كامل للاستراتيجية.',
    changefreq: 'yearly', priority: 0.75,
    breadcrumbs: [
      { name: 'Home', name_ar: 'الرئيسية', url: '/' },
      { name: 'Case Studies', name_ar: 'دراسات الحالة', url: '/results' },
      { name: 'Real Estate', name_ar: 'العقارات', url: '/case-study/dubai-real-estate-4-8x-roas' },
    ],
    article: {
      datePublished: '2026-01-28',
      headline: 'Real Estate Case Study: 4.8× ROAS in 90 Days',
      headline_ar: 'دراسة حالة عقارية: عائد ٤٫٨× على الإنفاق في ٩٠ يوماً',
    },
  },
  {
    path: '/case-study/dubai-cosmetics-320-leads',
    title: 'Cosmetic Clinic: 320 Leads in 60 Days | Case Study',
    description: 'How a Dubai cosmetic clinic went from 0 to 320 qualified leads in 60 days. Lead generation strategy, conversion optimisation, ads management.',
    title_ar: 'عيادة تجميل: ٣٢٠ عميلاً محتملاً في ٦٠ يوماً | دراسة حالة',
    description_ar: 'كيف انتقلت عيادة تجميل في دبي من صفر إلى ٣٢٠ عميلاً محتملاً مؤهلاً في ٦٠ يوماً. استراتيجية توليد العملاء، تحسين التحويل، إدارة الإعلانات.',
    changefreq: 'yearly', priority: 0.75,
    breadcrumbs: [
      { name: 'Home', name_ar: 'الرئيسية', url: '/' },
      { name: 'Case Studies', name_ar: 'دراسات الحالة', url: '/results' },
      { name: 'Cosmetics', name_ar: 'التجميل', url: '/case-study/dubai-cosmetics-320-leads' },
    ],
    article: {
      datePublished: '2026-02-15',
      headline: 'Cosmetic Clinic Case Study: 320 Qualified Leads in 60 Days',
      headline_ar: 'دراسة حالة عيادة تجميل: ٣٢٠ عميلاً محتملاً مؤهلاً في ٦٠ يوماً',
    },
  },
]

/* Builds a routes-by-locale matrix for prerender + sitemap. */
export function allLocaleRoutes() {
  const out = []
  for (const r of ROUTES) {
    out.push({ ...r, locale: 'en', urlPath: r.path })
    out.push({
      ...r,
      locale: 'ar',
      urlPath: r.path === '/' ? '/ar' : `/ar${r.path}`,
      title: r.title_ar || r.title,
      description: r.description_ar || r.description,
      breadcrumbs: (r.breadcrumbs || []).map((b) => ({
        ...b,
        name: b.name_ar || b.name,
        url: b.url === '/' ? '/ar' : `/ar${b.url}`,
      })),
      article: r.article ? {
        ...r.article,
        headline: r.article.headline_ar || r.article.headline,
      } : undefined,
    })
  }
  return out
}
