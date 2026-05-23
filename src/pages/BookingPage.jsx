import SEOMeta from '../components/SEOMeta'
import Navbar from '../components/Navbar'
import Booking from '../components/Booking'
import Footer from '../components/Footer'

export default function BookingPage() {
  return (
    <>
      <SEOMeta
        title="Book a Free Strategy Call | ignite.scale Dubai"
        description="Book your free 45-minute strategy call with ignite.scale. We'll audit your social media presence, analyse competitors, and build a custom 90-day growth roadmap — no obligation."
        canonical="https://ignite-scale.com/book"
      />
      <div style={{ background: '#03050F', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ paddingTop: 80 }}>
          <Booking />
        </main>
        <Footer />
      </div>
    </>
  )
}
