import './index.css'
import Preloader from './components/Preloader'
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Services from './components/Services'
import Results from './components/Results'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import Booking from './components/Booking'
import FAQ from './components/FAQ'
import Chatbot from './components/Chatbot'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      {/* Preloader overlays everything — slides off after ~1.6s */}
      <Preloader />

      <div className="min-h-screen" style={{ background: '#03050F' }}>
        <Cursor />
        <Navbar />

        <main>
          <Hero />
          <Marquee />
          <Services />
          <Results />
          <Process />
          <Testimonials />
          <Booking />
          <FAQ />
        </main>

        <Footer />
        <Chatbot />
      </div>
    </>
  )
}
