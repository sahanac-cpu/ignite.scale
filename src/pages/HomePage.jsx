import SEOMeta from '../components/SEOMeta'
import Hero from '../components/Hero'
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
          'Ignite Scale | London Paid Social, Web & Lead Funnels',
          'Ignite Scale | إعلانات ممولة ومواقع وقمعات في لندن'
        )}
        description={t(
          'London growth agency engineering paid social, content and funnels for luxury real estate, cosmetic clinics and B2B brands. Targeting 2–5× ROAS. Book a free strategy call.',
          'وكالة نموّ في لندن تهندس الإعلانات الممولة والمحتوى وقمعات التحويل للعقارات الفاخرة وعيادات التجميل والشركات. نستهدف عائداً ٢–٥× على الإنفاق الإعلاني. احجز مكالمة استراتيجية مجانية.'
        )}
        canonical={canonical}
        locale={locale}
        breadcrumbs={[{ name: t('Home', 'الرئيسية'), url: locale === 'ar' ? '/ar' : '/' }]}
      />
      <main>
        <Hero />
        <ServicesSummary />
        <Results />
        <Booking />
      </main>
      <Footer />
      <BookingPopup />
    </>
  )
}
