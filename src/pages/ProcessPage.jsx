import SEOMeta from '../components/SEOMeta'
import Navbar from '../components/Navbar'
import Process from '../components/Process'
import Booking from '../components/Booking'
import Footer from '../components/Footer'

export default function ProcessPage() {
  return (
    <>
      <SEOMeta
        title="How We Work — Growth Process for Dubai Brands | ignite.scale"
        description="Our 4-step growth process: strategy discovery, content and campaign build, launch and optimise, then scale. Transparent, data-driven, and engineered for Dubai's competitive market."
        canonical="https://ignite-scale.com/process"
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
