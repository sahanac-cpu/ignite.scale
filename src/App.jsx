import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import './index.css'
import Preloader from './components/Preloader'
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Chatbot from './components/Chatbot'

import HomePage    from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import PaidSocialPage from './pages/PaidSocialPage'
import ContentCreativePage from './pages/ContentCreativePage'
import FunnelDesignPage from './pages/FunnelDesignPage'
import DubaiMarketingAgencyPage from './pages/DubaiMarketingAgencyPage'
import ResultsPage  from './pages/ResultsPage'
import ProcessPage  from './pages/ProcessPage'
import BookingPage  from './pages/BookingPage'
import FAQPage      from './pages/FAQPage'

export default function App() {
  return (
    <BrowserRouter>
      {/* Preloader + global UI always mounted */}
      <Preloader />
      <Cursor />

      <div className="min-h-screen" style={{ background: '#03050F' }}>
        {/* Navbar on homepage; individual pages render their own Navbar */}
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <HomePage />
            </>
          } />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/paid-social" element={<PaidSocialPage />} />
          <Route path="/services/creative" element={<ContentCreativePage />} />
          <Route path="/services/funnels" element={<FunnelDesignPage />} />
          <Route path="/dubai-marketing-agency" element={<DubaiMarketingAgencyPage />} />
          <Route path="/results"  element={<ResultsPage />} />
          <Route path="/process"  element={<ProcessPage />} />
          <Route path="/book"     element={<BookingPage />} />
          <Route path="/faq"      element={<FAQPage />} />
        </Routes>

        <Chatbot />
      </div>
      <Analytics />
    </BrowserRouter>
  )
}
