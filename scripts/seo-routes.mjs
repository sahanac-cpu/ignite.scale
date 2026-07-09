/* Single source of truth for per-route SEO metadata.
   Used by build-sitemap.mjs and build-prerender.mjs.
   Every route has both English (root) and Arabic (/ar prefix) versions. */

export const SITE = 'https://ignite-scale.com'

export const ROUTES = [
  {
    path: '/',
    title: 'Client Acquisition Systems for UAE Businesses | Ignite Scale',
    description: 'Ignite Scale builds SEO, paid ads, CRM funnels and WhatsApp follow-up systems that turn UAE search demand into booked appointments and tracked revenue. UK-standard. GBP-priced.',
    title_ar: 'أنظمة اكتساب العملاء لأنشطة الإمارات | Ignite Scale',
    description_ar: 'تبني Ignite Scale أنظمة تحسين البحث والإعلانات وقمعات CRM ومتابعة واتساب التي تحوّل الطلب في الإمارات إلى مواعيد محجوزة وإيرادات قابلة للتتبّع. معايير بريطانية وتسعير بالجنيه الإسترليني.',
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
    path: '/audit',
    title: 'Book a Client Acquisition Audit | Ignite Scale',
    description: 'A 45-minute diagnostic of your UAE acquisition funnel: where leads come from, where they die, and the prioritised 90-day plan to fix it. Six audits per month.',
    title_ar: 'احجز تدقيق اكتساب العملاء | Ignite Scale',
    description_ar: 'تشخيص لمدة ٤٥ دقيقة لقمع اكتساب العملاء في نشاطك الإماراتي: من أين يأتي العملاء، وأين يضيعون، وخطة ٩٠ يوماً لإصلاح ذلك. ستة تدقيقات شهرياً.',
    changefreq: 'monthly', priority: 0.95,
    breadcrumbs: [
      { name: 'Home', name_ar: 'الرئيسية', url: '/' },
      { name: 'Client Acquisition Audit', name_ar: 'تدقيق اكتساب العملاء', url: '/audit' },
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

/* UAE growth architecture — service hubs, Dubai keyword pages and industry pages are
   data-driven from src/lib/growthPages.js (same data renders the React pages), plus
   the new static pages. Registered here so prerender + sitemap cover them. */
import { GROWTH_PAGES } from '../src/lib/growthPages.js'

const GROUP_CRUMB = {
  service: { name: 'Services', name_ar: 'الخدمات', url: '/services' },
  keyword: { name: 'UAE Growth', name_ar: 'النمو في الإمارات', url: '/client-acquisition-system-uae' },
  industry: { name: 'Industries', name_ar: 'القطاعات', url: '/industries/aesthetic-clinics' },
}

ROUTES.push(
  ...GROWTH_PAGES.map((p) => ({
    path: p.path,
    title: p.title,
    description: p.description,
    changefreq: 'monthly',
    priority: p.group === 'keyword' ? 0.9 : 0.85,
    breadcrumbs: [
      { name: 'Home', name_ar: 'الرئيسية', url: '/' },
      GROUP_CRUMB[p.group],
      { name: p.h1, name_ar: p.h1, url: p.path },
    ],
    service: p.service,
    faqs: p.faqs,
  })),
  {
    path: '/investment',
    title: 'Engagement Stages — How We Build Acquisition Systems | Ignite Scale',
    description: 'How Ignite Scale scopes UAE client acquisition systems by stage: diagnostic map, foundation install, launch and validate, optimise and scale. Every build is scoped after the audit.',
    changefreq: 'monthly', priority: 0.85,
    breadcrumbs: [
      { name: 'Home', name_ar: 'الرئيسية', url: '/' },
      { name: 'Engagement Stages', name_ar: 'مراحل العمل', url: '/investment' },
    ],
  },
  {
    path: '/about',
    title: 'About Ignite Scale — UK-Founded, Built for the UAE Market',
    description: 'Ignite Scale is a UK-founded client acquisition systems company serving UAE service businesses: clinics, real estate, consultants and premium services. UK standards, UAE focus, GBP pricing.',
    changefreq: 'monthly', priority: 0.7,
    breadcrumbs: [
      { name: 'Home', name_ar: 'الرئيسية', url: '/' },
      { name: 'About', name_ar: 'من نحن', url: '/about' },
    ],
  },
)

/* Auto-discover Markdown blog posts in content/blog/ — each one becomes a route at /blog/<slug>.
   This means publishing a new post = drop a .md file in content/blog/. No code touching. */
import { readdirSync, readFileSync, existsSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import matter from 'gray-matter'

function findBlogPosts() {
  const __dirname = dirname(fileURLToPath(import.meta.url))
  const blogDir = resolve(__dirname, '..', 'content', 'blog')
  if (!existsSync(blogDir)) return []
  return readdirSync(blogDir)
    .filter((f) => f.endsWith('.md'))
    .map((file) => {
      const raw = readFileSync(resolve(blogDir, file), 'utf8')
      const { data } = matter(raw)
      const slug = file.replace(/\.md$/, '')
      return {
        path: `/blog/${slug}`,
        title: `${data.title} | Ignite Scale`,
        description: data.description,
        title_ar: data.title_ar ? `${data.title_ar} | Ignite Scale` : null,
        description_ar: data.description_ar || null,
        changefreq: 'monthly',
        priority: 0.75,
        breadcrumbs: [
          { name: 'Home', name_ar: 'الرئيسية', url: '/' },
          { name: 'Blog', name_ar: 'المدونة', url: '/blog' },
          { name: data.title, name_ar: data.title_ar || data.title, url: `/blog/${slug}` },
        ],
        article: {
          datePublished: data.publishedAt,
          headline: data.title,
          headline_ar: data.title_ar || data.title,
        },
      }
    })
}

export function getAutoDiscoveredRoutes() {
  return findBlogPosts()
}

/* Builds a routes-by-locale matrix for prerender + sitemap. */
export function allLocaleRoutes() {
  const all = [...ROUTES, ...findBlogPosts()]
  const out = []
  for (const r of all) {
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
