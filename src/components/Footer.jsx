import { Link } from 'react-router-dom'
import { useT } from '../i18n/locale'

export default function Footer() {
  const [locale, t] = useT()
  const base = locale === 'ar' ? '/ar' : ''

  const footerLinks = [
    {
      title: t('The System', 'النظام'),
      links: [
        { label: t('Client Acquisition Systems', 'أنظمة اكتساب العملاء'), href: `${base}/services/client-acquisition-systems` },
        { label: t('SEO for UAE Businesses', 'تحسين محركات البحث'), href: `${base}/services/seo-uae` },
        { label: t('CRM Funnels', 'قمعات CRM'), href: `${base}/services/crm-funnels` },
        { label: t('WhatsApp Automation', 'أتمتة واتساب'), href: `${base}/services/whatsapp-automation` },
        { label: t('Google Ads', 'إعلانات قوقل'), href: `${base}/services/google-ads` },
        { label: t('Paid Social', 'إعلانات ممولة'), href: `${base}/services/paid-social` },
      ],
    },
    {
      title: t('UAE Markets', 'أسواق الإمارات'),
      links: [
        { label: t('Clinic Marketing Dubai', 'تسويق العيادات دبي'), href: `${base}/clinic-marketing-dubai` },
        { label: t('SEO Agency Dubai', 'وكالة SEO دبي'), href: `${base}/seo-agency-dubai` },
        { label: t('Lead Generation Dubai', 'توليد العملاء دبي'), href: `${base}/lead-generation-agency-dubai` },
        { label: t('Real Estate Leads Dubai', 'عملاء العقارات دبي'), href: `${base}/real-estate-lead-generation-dubai` },
        { label: t('Business Setup Leads', 'عملاء تأسيس الشركات'), href: `${base}/business-setup-lead-generation-dubai` },
      ],
    },
    {
      title: t('Company', 'الشركة'),
      links: [
        { label: t('About', 'من نحن'), href: `${base}/about` },
        { label: t('Process', 'العملية'), href: `${base}/process` },
        { label: t('Results', 'النتائج'), href: `${base}/results` },
        { label: t('Build Stages', 'مراحل البناء'), href: `${base}/investment` },
        { label: t('FAQ', 'الأسئلة الشائعة'), href: `${base}/faq` },
        { label: t('Book an Audit', 'احجز تدقيقاً'), href: `${base}/audit` },
      ],
    },
    {
      title: t('Legal', 'قانوني'),
      links: [
        { label: t('Privacy Policy', 'سياسة الخصوصية'), href: `${base}/privacy` },
        { label: t('Terms of Service', 'شروط الخدمة'), href: `${base}/terms` },
        { label: t('Cookie Policy', 'سياسة الكوكيز'), href: `${base}/cookies` },
      ],
    },
  ]

  return (
    <footer className="relative border-t border-white/[0.05] overflow-hidden">
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(201,169,110,0.04) 0%, transparent 65%)' }}
      />

      {/* CTA band */}
      <div className="border-b border-white/[0.05] py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h3
              className="text-white font-body font-semibold leading-[0.95] tracking-tight"
              style={{ fontSize: 'clamp(36px, 5.5vw, 72px)' }}
            >
              {t('Ready to', 'هل أنت مستعد لِـ')}{' '}
              <em
                style={{
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                  fontStyle: 'italic',
                  fontWeight: 300,
                  background: 'linear-gradient(135deg, #C9A96E, #D8BD8A)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {t('Ignite?', 'الانطلاق؟')}
              </em>
            </h3>
            <p className="text-white/25 text-sm mt-4 max-w-xs font-body font-light leading-relaxed">
              {t(
                'You already know something in your funnel is leaking. Find out exactly where — and what it’s costing you.',
                'أنت تعلم أن شيئاً ما في قمعك يتسرّب. اكتشف أين بالضبط — وكم يكلّفك.'
              )}
            </p>
          </div>
          <Link to={`${base}/audit`} className="btn-primary text-[11px] px-10 py-5 shrink-0">
            {t('Book a Client Acquisition Audit', 'احجز تدقيق اكتساب العملاء')}
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="px-6 md:px-12 lg:px-24 py-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-baseline gap-1 mb-5" style={{ direction: 'ltr' }}>
              <span className="text-white font-body font-light tracking-[0.12em] text-[14px] uppercase">ignite</span>
              <span className="text-accent font-body font-light text-[14px]">.</span>
              <span className="text-white/50 font-body font-light tracking-[0.12em] text-[14px] uppercase">scale</span>
            </div>
            <p className="text-white/25 text-sm leading-relaxed max-w-xs mb-6 font-body font-light">
              {t(
                'A UK-founded client acquisition systems company serving high-value service businesses across the UAE — Dubai, Abu Dhabi and Sharjah. We build industry-specific SEO, advertising, landing page, CRM and follow-up infrastructure that turns demand into booked appointments and reportable revenue.',
                'شركة أنظمة اكتساب عملاء تأسست في المملكة المتحدة وتخدم الأنشطة الخدمية عالية القيمة في الإمارات — دبي وأبوظبي والشارقة. نبني بنية تحسين البحث والإعلانات وصفحات الهبوط وCRM والمتابعة التي تحوّل الطلب إلى مواعيد محجوزة وإيرادات قابلة للقياس.'
              )}
            </p>
            <div className="space-y-2">
              <div className="label-sm">{t('UK-founded · Serving the UAE', 'تأسست في المملكة المتحدة · تخدم الإمارات')}</div>
              <div className="text-white/35 text-sm font-body">{t('Registered in London, UK', 'مسجّلة في لندن، المملكة المتحدة')}</div>
              <a href="mailto:admin@ignite-scale.com" className="text-white/35 text-sm hover:text-accent transition-colors block font-body" style={{ direction: 'ltr' }}>
                admin@ignite-scale.com
              </a>
              <a href="tel:+442079460958" className="text-white/35 text-sm hover:text-accent transition-colors block font-body" style={{ direction: 'ltr' }}>
                +44 20 7946 0958
              </a>
            </div>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <div className="label-sm mb-5">{section.title}</div>
              <ul className="space-y-3">
                {section.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.href} className="text-white/30 text-sm hover:text-white/70 transition-colors font-body font-light">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/[0.05] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="label-sm">
            {t('© 2026 Ignite Scale. All rights reserved. UK-founded, serving the UAE.', '© ٢٠٢٦ Ignite Scale. جميع الحقوق محفوظة. تأسست في المملكة المتحدة وتخدم الإمارات.')}
          </div>
          <div className="flex items-center gap-5">
            {['Instagram', 'TikTok', 'LinkedIn', 'X'].map((s) => (
              <a key={s} href="#" className="label-sm hover:text-white/50 transition-colors">{s}</a>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 pointer-events-none overflow-hidden select-none" aria-hidden>
        <div
          className="text-center font-body font-semibold leading-none tracking-tighter opacity-[0.018]"
          style={{ fontSize: 'clamp(80px, 18vw, 220px)', color: 'white', transform: 'translateY(22%)' }}
        >
          IGNITE.SCALE
        </div>
      </div>
    </footer>
  )
}
