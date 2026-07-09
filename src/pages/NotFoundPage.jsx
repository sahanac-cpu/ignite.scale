import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import SEOMeta from '../components/SEOMeta'
import { useT } from '../i18n/locale'

export default function NotFoundPage() {
  const [locale, t] = useT()
  const home = locale === 'ar' ? '/ar' : '/'

  return (
    <>
      <SEOMeta
        title={t('Page not found | Ignite Scale', 'الصفحة غير موجودة | Ignite Scale')}
        description={t(
          "We couldn't find that page. Head back to the homepage or get in touch.",
          'لم نتمكن من العثور على هذه الصفحة. عُد إلى الصفحة الرئيسية أو تواصل معنا.'
        )}
        canonical={`https://ignite-scale.com${home === '/' ? '/' : home}`}
        locale={locale}
      />
      <Navbar />
      <main
        className="min-h-screen flex items-center justify-center px-6"
        style={{ direction: locale === 'ar' ? 'rtl' : 'ltr' }}
      >
        <div className="max-w-xl text-center">
          <div className="text-accent font-display text-[120px] leading-none">404</div>
          <h1 className="text-white text-3xl md:text-4xl font-display mt-2 mb-4">
            {t('Page not found', 'الصفحة غير موجودة')}
          </h1>
          <p className="text-white/55 text-[15px] leading-relaxed mb-8">
            {t(
              "The page you're looking for doesn't exist or has moved. From here you can go home, browse services, or book a free strategy call.",
              'الصفحة التي تبحث عنها غير موجودة أو تم نقلها. من هنا يمكنك العودة إلى الصفحة الرئيسية، أو تصفح الخدمات، أو حجز مكالمة استراتيجية مجانية.'
            )}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link to={home} className="btn-primary text-[11px] px-5 py-3">
              {t('Back to home', 'العودة إلى الرئيسية')}
            </Link>
            <Link
              to={`${locale === 'ar' ? '/ar' : ''}/services`}
              className="text-[11px] uppercase tracking-[0.3em] text-white/55 hover:text-white px-5 py-3 border border-white/15 hover:border-accent/40 rounded-sm transition-colors"
            >
              {t('Services', 'الخدمات')}
            </Link>
            <Link
              to={`${locale === 'ar' ? '/ar' : ''}/audit`}
              className="text-[11px] uppercase tracking-[0.3em] text-white/55 hover:text-white px-5 py-3 border border-white/15 hover:border-accent/40 rounded-sm transition-colors"
            >
              {t('Book a Call', 'احجز مكالمة')}
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
