import SEOMeta from '../components/SEOMeta'
import Navbar from '../components/Navbar'
import FAQ from '../components/FAQ'
import Booking from '../components/Booking'
import Footer from '../components/Footer'

export default function FAQPage() {
  return (
    <>
      <SEOMeta
        title="Social Media Marketing FAQ | Ignite Scale Dubai"
        description="Answers to the most common questions Dubai businesses ask before working with Ignite Scale: timelines, platforms, budgets, content creation, Arabic content, ROI."
        canonical="https://ignite-scale.com/faq"
        breadcrumbs={[{ name: 'Home', url: '/' }, { name: 'FAQ', url: '/faq' }]}
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
