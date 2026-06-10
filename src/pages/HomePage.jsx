import SEOMeta from '../components/SEOMeta'
import Hero from '../components/Hero'
import Marquee from '../components/Marquee'
import Services from '../components/Services'
import SocialProof from '../components/SocialProof'
import Results from '../components/Results'
import Process from '../components/Process'
import Testimonials from '../components/Testimonials'
import Booking from '../components/Booking'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <>
      <SEOMeta
        title="Ignite Scale — Dubai's Premier Digital Agency | Paid Social, Lead Gen, Web Design"
        description="Dubai's top digital agency for high-ticket brands. We deliver 2–5× ROAS & 60%+ CPL reduction through paid social, creative ads, funnel design & lead generation. Real estate, hospitality, luxury."
        canonical="https://ignite-scale.com/"
        keywords="digital agency Dubai, paid social ads, lead generation, paid ads management, creative agency, funnel design, real estate marketing, Dubai marketing agency, growth marketing, Meta ads expert"
        author="Ignite Scale"
        ogImage="https://ignite-scale.com/og-home.jpg"
      />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <SocialProof />
        <Results />
        <Process />
        <Testimonials />
        <Booking />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
