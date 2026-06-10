import SEOMeta from '../components/SEOMeta'
import Navbar from '../components/Navbar'
import Services from '../components/Services'
import Booking from '../components/Booking'
import Footer from '../components/Footer'

export default function ServicesPage() {
  return (
    <>
      <SEOMeta
        title="Digital Marketing Services Dubai | Paid Ads, Web Design, Lead Generation"
        description="Complete digital marketing services in Dubai. Paid social advertising (Meta, TikTok, Google), website design, lead generation, and creative production. Trusted by 50+ Dubai brands. Book free consultation."
        canonical="https://ignite-scale.com/services"
        keywords="digital marketing services Dubai, paid ads agency, website design services, lead generation services, social media marketing, Meta ads management, TikTok marketing Dubai"
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
