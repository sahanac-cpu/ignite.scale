import SEOMeta from '../components/SEOMeta'
import Hero from '../components/Hero'
import AcquisitionSystem from '../components/AcquisitionSystem'
import ServicesSummary from '../components/ServicesSummary'
import Results from '../components/Results'
import Booking from '../components/Booking'
import Footer from '../components/Footer'
import BookingPopup from '../components/BookingPopup'
import { useEffect } from 'react'
import { useT } from '../i18n/locale'

export default function HomePage() {
  const [locale, t] = useT()
  const canonical = locale === 'ar' ? 'https://ignite-scale.com/ar' : 'https://ignite-scale.com/'

  // if we arrived here from another page asking to scroll to a section
  useEffect(() => {
    const target = sessionStorage.getItem('ig_scroll')
    if (!target) return
    sessionStorage.removeItem('ig_scroll')
    const tryScroll = (attempt = 0) => {
      const el = document.getElementById(target)
      if (el) {
        const top = el.getBoundingClientRect().top + (document.documentElement.scrollTop || window.scrollY || 0)
        document.documentElement.scrollTop = top
        window.scrollTo(0, top)
      } else if (attempt < 20) {
        setTimeout(() => tryScroll(attempt + 1), 100)
      }
    }
    setTimeout(() => tryScroll(), 400)
  }, [])

  return (
    <>
      <SEOMeta
        title={t(
          'Client Acquisition Systems for UAE Businesses | Ignite Scale',
          'أنظمة اكتساب العملاء لأنشطة الإمارات | Ignite Scale'
        )}
        description={t(
          'Ignite Scale builds industry-specific SEO, paid acquisition, landing pages, CRM funnels and WhatsApp follow-up systems that turn UAE demand into booked appointments and tracked revenue.',
          'تبني Ignite Scale أنظمة تحسين البحث والإعلانات وقمعات CRM ومتابعة واتساب التي تحوّل الطلب في الإمارات إلى مواعيد محجوزة وإيرادات قابلة للتتبّع. معايير بريطانية وتسعير بالجنيه الإسترليني.'
        )}
        canonical={canonical}
        locale={locale}
        breadcrumbs={[{ name: t('Home', 'الرئيسية'), url: locale === 'ar' ? '/ar' : '/' }]}
      />
      <main>
        <Hero />
        <AcquisitionSystem />
        <ServicesSummary />
        <Results />
        <Booking />
      </main>
      <Footer />
      <BookingPopup />
    </>
  )
}
