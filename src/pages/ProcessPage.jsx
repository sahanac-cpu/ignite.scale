import SEOMeta from '../components/SEOMeta'
import Navbar from '../components/Navbar'
import Process from '../components/Process'
import Booking from '../components/Booking'
import Footer from '../components/Footer'

export default function ProcessPage() {
  return (
    <>
      <SEOMeta
        title="Our Growth Process for Dubai Brands | Ignite Scale"
        description="Our 4-step growth process: strategy discovery, content and campaign build, launch and optimise, then scale. Transparent and data-driven."
        canonical="https://ignite-scale.com/process"
        breadcrumbs={[{ name: 'Home', url: '/' }, { name: 'Process', url: '/process' }]}
      />
      <div style={{ background: '#03050F', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ paddingTop: 80 }}>
          <Process />
          <Booking />
        </main>
        <Footer />
      </div>
    </>
  )
}
