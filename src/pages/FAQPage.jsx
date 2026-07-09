import SEOMeta from '../components/SEOMeta'
import { useT } from '../i18n/locale'
import Navbar from '../components/Navbar'
import FAQ from '../components/FAQ'
import Booking from '../components/Booking'
import Footer from '../components/Footer'

export default function FAQPage() {
  const [locale, t] = useT()
  return (
    <>
      <SEOMeta
        title={t('Client Acquisition FAQ | Ignite Scale', 'أسئلة شائعة حول اكتساب العملاء | Ignite Scale')}
        description={t('Answers to the most common questions UAE businesses ask before building a client acquisition system with Ignite Scale: industries, stages, ownership, scope, CRM and follow-up.', 'إجابات لأكثر الأسئلة التي تطرحها شركات الإمارات قبل بناء نظام اكتساب عملاء مع Ignite Scale: القطاعات والمراحل والملكية والنطاق وCRM والمتابعة.')}
        canonical={locale === 'ar' ? 'https://ignite-scale.com/ar/faq' : 'https://ignite-scale.com/faq'}
        locale={locale}
        breadcrumbs={[{ name: 'Home', url: '/' }, { name: 'FAQ', url: '/faq' }]}
      />
      <div style={{ background: '#03050F', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ paddingTop: 80 }}>
          <FAQ />
          <Booking />
        </main>
        <Footer />
      </div>
    </>
  )
}
