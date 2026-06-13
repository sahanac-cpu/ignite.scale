import SEOMeta from '../components/SEOMeta'
import Hero from '../components/Hero'
import Marquee from '../components/Marquee'
import Services from '../components/Services'
import Results from '../components/Results'
import Process from '../components/Process'
import Booking from '../components/Booking'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <>
      <SEOMeta
        title="Ignite Scale | Dubai Paid Social, Web & Lead Funnels"
        description="Dubai growth agency engineering paid social, content and funnels for luxury real estate, cosmetic clinics and B2B brands. Targeting 2–5× ROAS. Book a free strategy call."
        canonical="https://ignite-scale.com/"
        breadcrumbs={[{ name: 'Home', url: '/' }]}
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
