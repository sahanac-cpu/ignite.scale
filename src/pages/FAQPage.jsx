import SEOMeta from '../components/SEOMeta'
import Navbar from '../components/Navbar'
import FAQ from '../components/FAQ'
import Booking from '../components/Booking'
import Footer from '../components/Footer'

export default function FAQPage() {
  return (
    <>
      <SEOMeta
        title="Social Media Marketing FAQ Dubai | ignite.scale"
        description="Answers to the most common questions Dubai businesses ask before working with ignite.scale — timelines, platforms, budgets, content creation, Arabic content, and ROI reporting."
        canonical="https://ignite-scale.com/faq"
      />
      <div style={{ background: '#03050F', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ paddingTop: 80 }}>
          <FAQ />
          <Booking />
        </main>
        <Footer />
      </div>
    </>
  )
}
