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
        title={t('Social Media Marketing FAQ | Ignite Scale London', 'أسئلة شائعة حول التسويق على وسائل التواصل | Ignite Scale لندن')}
        description={t('Answers to the most common questions London businesses ask before working with Ignite Scale: timelines, platforms, budgets, content creation, Arabic content, ROI.', 'إجابات لأكثر الأسئلة التي تطرحها شركات لندن قبل التعاون مع Ignite Scale: الجداول الزمنية، المنصّات، الميزانيات، إنتاج المحتوى، المحتوى العربي، العائد على الاستثمار.')}
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
