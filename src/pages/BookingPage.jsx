import SEOMeta from '../components/SEOMeta'
import { useT } from '../i18n/locale'
import Navbar from '../components/Navbar'
import Booking from '../components/Booking'
import Footer from '../components/Footer'

export default function BookingPage() {
  const [locale, t] = useT()
  return (
    <>
      <SEOMeta
        title={t('Book a Free Strategy Call | Ignite Scale Dubai', 'احجز مكالمة استراتيجية مجانية | Ignite Scale دبي')}
        description={t('Book a free 45-minute strategy call with Ignite Scale. We audit your social presence, analyse competitors, and build a 90-day growth roadmap. No obligation.', 'احجز مكالمة استراتيجية مجانية مدتها ٤٥ دقيقة مع Ignite Scale. نراجع حضورك الاجتماعي، نحلّل المنافسين، ونبني خارطة نمو لـ٩٠ يوماً. دون التزام.')}
        canonical={locale === 'ar' ? 'https://ignite-scale.com/ar/book' : 'https://ignite-scale.com/book'}
        locale={locale}
        breadcrumbs={[{ name: 'Home', url: '/' }, { name: 'Book', url: '/book' }]}
      />
      <div style={{ background: '#03050F', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ paddingTop: 80 }}>
          <Booking />
        </main>
        <Footer />
      </div>
    </>
  )
}
