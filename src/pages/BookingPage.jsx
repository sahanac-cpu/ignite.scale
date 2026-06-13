import SEOMeta from '../components/SEOMeta'
import Navbar from '../components/Navbar'
import Booking from '../components/Booking'
import Footer from '../components/Footer'

export default function BookingPage() {
  return (
    <>
      <SEOMeta
        title="Book a Free Strategy Call | Ignite Scale Dubai"
        description="Book a free 45-minute strategy call with Ignite Scale. We audit your social presence, analyse competitors, and build a 90-day growth roadmap. No obligation."
        canonical="https://ignite-scale.com/book"
        breadcrumbs={[{ name: 'Home', url: '/' }, { name: 'Book', url: '/book' }]}
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
