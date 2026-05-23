import SEOMeta from '../components/SEOMeta'
import Hero from '../components/Hero'
import Marquee from '../components/Marquee'
import Services from '../components/Services'
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
        title="ignite.scale — Dubai's Premier Social Media & Growth Agency"
        description="Dubai's leading social media marketing agency. We engineer paid social, content and funnels for real estate, hospitality, luxury and e-commerce brands. 2–5× average ROAS, 60%+ CPL reduction."
        canonical="https://ignite-scale.com/"
      />
      <main>
        <Hero />
        <Marquee />
        <Services />
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
