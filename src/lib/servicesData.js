/* Single source of truth for the four service divisions. Each opens its own
   "learn more" page via ServiceLayout. No pricing anywhere. */
export function getServices(t) {
  return [
    {
      slug: 'paid-social',
      to: '/services/paid-social',
      num: '01',
      kicker: t('Demand', 'الطلب'),
      title: t('Paid Social', 'الإعلانات الممولة'),
      short: t('Meta, TikTok, Snap & Google campaigns built around your CPL and ROAS.', 'حملات ميتا وتيك توك وسناب وجوجل مبنية حول تكلفة العميل والعائد.'),
      lede: t(
        'Full-funnel paid campaigns on Meta, TikTok, Snap and Google — architected around your cost per lead and return on ad spend, then optimised every single day until every pound works harder.',
        'حملات شاملة على ميتا وتيك توك وسناب وجوجل — مبنية حول تكلفة العميل والعائد على الإنفاق، وتُحسَّن كل يوم حتى يعمل كل جنيه بكفاءة أكبر.'
      ),
      points: [
        t('Account architecture & audience strategy', 'بنية الحساب واستراتيجية الجمهور'),
        t('Daily bid & budget reallocation', 'إعادة توزيع المزايدة والميزانية يومياً'),
        t('Creative testing systems', 'أنظمة اختبار المحتوى'),
        t('Transparent performance reporting', 'تقارير أداء شفافة'),
      ],
      metric: '2–5×',
      metricLabel: t('Average ROAS', 'متوسط العائد'),
    },
    {
      slug: 'content-creative',
      to: '/services/creative',
      num: '02',
      kicker: t('Attention', 'الانتباه'),
      title: t('Content & Creative', 'المحتوى والإبداع'),
      short: t('Scroll-stopping UGC video, editorial photography and copy — made in-house.', 'فيديو يوقف التمرير وتصوير تحريري ونصوص — تُنتج داخلياً.'),
      lede: t(
        'Scroll-stopping content built for London’s high-intent audience — UGC-style video, luxury editorial photography and data-backed copy, produced in-house on a schedule your competitors can’t match.',
        'محتوى يوقف التمرير، مصمَّم لجمهور لندن عالي النية — فيديو على نمط المستخدم، وتصوير تحريري فاخر، ونصوص مدعومة بالبيانات، يُنتج داخلياً وبجدول يصعب على منافسيك مجاراته.'
      ),
      points: [
        t('UGC & in-studio production', 'إنتاج محتوى المستخدم والاستوديو'),
        t('Hook-led short-form editing', 'مونتاج قصير يقوده الخطّاف'),
        t('Arabic + English versions', 'نسخ عربية وإنجليزية'),
        t('Monthly content calendars', 'تقاويم محتوى شهرية'),
      ],
      metric: '3–5×',
      metricLabel: t('Engagement lift', 'ارتفاع التفاعل'),
    },
    {
      slug: 'funnels',
      to: '/services/funnels',
      num: '03',
      kicker: t('Conversion', 'التحويل'),
      title: t('Funnels', 'القمعات'),
      short: t('Landing pages and lead flows wired into your CRM, then A/B tested.', 'صفحات هبوط ومسارات عملاء مربوطة بنظامك، ثم تُختبر.'),
      lede: t(
        'Conversion-first landing pages and lead flows wired straight into your CRM — then A/B tested relentlessly until the numbers move in the right direction.',
        'صفحات هبوط ومسارات عملاء تركّز على التحويل ومربوطة مباشرة بنظامك — ثم تُختبر بلا هوادة حتى تتحرك الأرقام في الاتجاه الصحيح.'
      ),
      points: [
        t('Landing page design & build', 'تصميم وبناء صفحات الهبوط'),
        t('Lead routing into your CRM', 'توجيه العملاء إلى نظامك'),
        t('A/B testing roadmap', 'خارطة اختبار أ/ب'),
        t('Form & checkout optimisation', 'تحسين النماذج والدفع'),
      ],
      metric: '−60%',
      metricLabel: t('Cost per lead', 'تكلفة العميل'),
    },
    {
      slug: 'web-design',
      to: '/web-design-dubai',
      num: '04',
      kicker: t('Foundation', 'الأساس'),
      title: t('Web Design', 'تصميم المواقع'),
      short: t('Mobile-first, fast, SEO-ready websites engineered to convert.', 'مواقع متجاوبة وسريعة وجاهزة للبحث ومصمّمة للتحويل.'),
      lede: t(
        'Beautiful is the baseline. We design mobile-first, fast-loading, SEO-ready websites for London brands — every element engineered to turn a visitor into a booked call.',
        'الجمال هو الحد الأدنى. نصمّم مواقع متجاوبة مع الجوال، سريعة التحميل، جاهزة للبحث، لعلامات لندن — كل عنصر مُهندَس لتحويل الزائر إلى مكالمة محجوزة.'
      ),
      points: [
        t('Mobile-first, sub-2s load times', 'تصميم للجوال أولاً وتحميل أقل من ثانيتين'),
        t('Conversion-focused layouts', 'تخطيطات تركّز على التحويل'),
        t('SEO built in from day one', 'تحسين بحث مدمج من اليوم الأول'),
        t('Easy-to-update content system', 'نظام محتوى سهل التحديث'),
      ],
      metric: '2–3×',
      metricLabel: t('Conversion lift', 'ارتفاع التحويل'),
    },
  ]
}
