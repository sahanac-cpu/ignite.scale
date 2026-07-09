import SEOMeta from '../components/SEOMeta'
import { useT } from '../i18n/locale'
import Navbar from '../components/Navbar'
import Results from '../components/Results'
import Testimonials from '../components/Testimonials'
import Booking from '../components/Booking'
import Footer from '../components/Footer'

export default function ResultsPage() {
  const [locale, t] = useT()
  return (
    <>
      <SEOMeta
        title={t('Client Results & Case Studies | Ignite Scale', 'نتائج العملاء ودراسات الحالة | Ignite Scale')}
        description={t('Real results from UAE businesses: +247% qualified leads in 90 days, 4.2× lower cost per reservation, 61% CPL reduction in luxury auto. No vanity metrics.', 'نتائج حقيقية من علامات الإمارات: +٢٤٧٪ عملاء مؤهلون في ٩٠ يوماً، ٤٫٢× خفض في تكلفة الحجز، ٦١٪ خفض في تكلفة العميل في السيارات الفاخرة. لا مقاييس مظهرية.')}
        canonical={locale === 'ar' ? 'https://ignite-scale.com/ar/results' : 'https://ignite-scale.com/results'}
        locale={locale}
        breadcrumbs={[{ name: 'Home', url: '/' }, { name: 'Results', url: '/results' }]}
      />
      <div style={{ background: '#03050F', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ paddingTop: 80 }}>
          <Results />
          <Testimonials />
          <Booking />
        </main>
        <Footer />
      </div>
    </>
  )
}
