import SEOMeta from '../components/SEOMeta'
import Navbar from '../components/Navbar'
import Services from '../components/Services'
import Booking from '../components/Booking'
import Footer from '../components/Footer'

export default function ServicesPage() {
  return (
    <>
      <SEOMeta
        title="Social Media & Paid Advertising Services Dubai | ignite.scale"
        description="Full-funnel paid social campaigns, content creation, community management, and conversion-optimised landing pages for Dubai businesses. Meta, TikTok, Google Ads specialists."
        canonical="https://ignite-scale.com/services"
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
