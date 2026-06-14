import SEOMeta from '../components/SEOMeta'
import Hero from '../components/Hero'
import Marquee from '../components/Marquee'
import Services from '../components/Services'
import Results from '../components/Results'
import Process from '../components/Process'
import Booking from '../components/Booking'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import { useT } from '../i18n/locale'

export default function HomePage() {
  const [locale, t] = useT()
  const canonical = locale === 'ar' ? 'https://ignite-scale.com/ar' : 'https://ignite-scale.com/'

  return (
    <>
      <SEOMeta
        title={t(
          'Ignite Scale | Dubai Paid Social, Web & Lead Funnels',
          'Ignite Scale | إعلانات ممولة ومواقع وقمعات في دبي'
        )}
        description={t(
          'Dubai growth agency engineering paid social, content and funnels for luxury real estate, cosmetic clinics and B2B brands. Targeting 2–5× ROAS. Book a free strategy call.',
          'وكالة نموّ في دبي تهندس الإعلانات الممولة والمحتوى وقمعات التحويل للعقارات الفاخرة وعيادات التجميل والشركات. نستهدف عائداً ٢–٥× على الإنفاق الإعلاني. احجز مكالمة استراتيجية مجانية.'
        )}
        canonical={canonical}
        locale={locale}
        breadcrumbs={[{ name: t('Home', 'الرئيسية'), url: locale === 'ar' ? '/ar' : '/' }]}
      />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Results />
        <Process />
        <Booking />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
