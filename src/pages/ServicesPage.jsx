import SEOMeta from '../components/SEOMeta'
import Navbar from '../components/Navbar'
import Services from '../components/Services'
import Booking from '../components/Booking'
import Footer from '../components/Footer'

export default function ServicesPage() {
  return (
    <>
      <SEOMeta
        title="Digital Marketing Services Dubai | Ignite Scale"
        description="Paid social on Meta, TikTok and Google, conversion websites, lead generation and creative production for Dubai brands. Book a free consultation."
        canonical="https://ignite-scale.com/services"
        breadcrumbs={[{ name: 'Home', url: '/' }, { name: 'Services', url: '/services' }]}
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
