import SEOMeta from '../components/SEOMeta'
import Navbar from '../components/Navbar'
import Results from '../components/Results'
import Testimonials from '../components/Testimonials'
import Booking from '../components/Booking'
import Footer from '../components/Footer'

export default function ResultsPage() {
  return (
    <>
      <SEOMeta
        title="Client Results & Case Studies | Ignite Scale Dubai"
        description="Real results from Dubai brands: +247% qualified leads in 90 days, 4.2× lower cost per reservation, 61% CPL reduction in luxury auto. No vanity metrics."
        canonical="https://ignite-scale.com/results"
        breadcrumbs={[{ name: 'Home', url: '/' }, { name: 'Results', url: '/results' }]}
      />
      <div style={{ background: '#03050F', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ paddingTop: 80 }}>
          <Results />
          <Testimonials />
          <Booking />
        </main>
        <Footer />
      </div>
    </>
  )
}
