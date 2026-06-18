import SEOMeta from '../components/SEOMeta'
import { useT } from '../i18n/locale'
import Navbar from '../components/Navbar'
import Services from '../components/Services'
import Booking from '../components/Booking'
import Footer from '../components/Footer'

export default function ServicesPage() {
  const [locale, t] = useT()
  return (
    <>
      <SEOMeta
        title={t('Digital Marketing Services Dubai | Ignite Scale', 'خدمات التسويق الرقمي في دبي | Ignite Scale')}
        description={t('Paid social on Meta, TikTok and Google, conversion websites, lead generation and creative production for Dubai brands. Book a free consultation.', 'إعلانات ممولة على ميتا وتيك توك وقوقل، مواقع تحويلية، توليد عملاء محتملين، وإنتاج إبداعي لعلامات دبي. احجز استشارة مجانية.')}
        canonical={locale === 'ar' ? 'https://ignite-scale.com/ar/services' : 'https://ignite-scale.com/services'}
        locale={locale}
        breadcrumbs={[{ name: 'Home', url: '/' }, { name: 'Services', url: '/services' }]}
      />
      <div style={{ background: '#03050F', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ paddingTop: 80 }}>
          <Services />
          <Booking />
        </main>
        <Footer />
      </div>
    </>
  )
}
