import SEOMeta from '../components/SEOMeta'
import { useT } from '../i18n/locale'
import Navbar from '../components/Navbar'
import Process from '../components/Process'
import Booking from '../components/Booking'
import Footer from '../components/Footer'

export default function ProcessPage() {
  const [locale, t] = useT()
  return (
    <>
      <SEOMeta
        title={t('Our Growth Process for London Brands | Ignite Scale', 'عمليتنا للنمو في علامات لندن | Ignite Scale')}
        description={t('Our 4-step growth process: strategy discovery, content and campaign build, launch and optimise, then scale. Transparent and data-driven.', 'عمليتنا للنمو في ٤ خطوات: استكشاف الاستراتيجية، بناء المحتوى والحملات، الإطلاق والتحسين، ثم التوسّع. شفّافة ومدفوعة بالبيانات.')}
        canonical={locale === 'ar' ? 'https://ignite-scale.com/ar/process' : 'https://ignite-scale.com/process'}
        locale={locale}
        breadcrumbs={[{ name: 'Home', url: '/' }, { name: 'Process', url: '/process' }]}
      />
      <div style={{ background: '#03050F', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ paddingTop: 80 }}>
          <Process />
          <Booking />
        </main>
        <Footer />
      </div>
    </>
  )
}
