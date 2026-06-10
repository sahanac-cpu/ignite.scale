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
        title="Dubai Marketing Agency | Paid Social Ads, Web Design & Lead Generation"
        description="Top digital marketing agency in Dubai. Expert in paid social advertising, website design, and lead generation for real estate, cosmetic clinics, and B2B. 2–5× ROAS guaranteed. Free consultation."
        canonical="https://ignite-scale.com/"
        keywords="digital marketing agency Dubai, paid social ads Dubai, website design Dubai, lead generation Dubai, Meta ads Dubai, marketing agency UAE, TikTok ads specialist, ads agency Dubai, Dubai website builder"
        author="Ignite Scale"
        ogImage="https://ignite-scale.com/og-home.jpg"
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
