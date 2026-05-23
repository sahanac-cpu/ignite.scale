import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Preloader from './components/Preloader'
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Chatbot from './components/Chatbot'

import HomePage    from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
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
          <Route path="/results"  element={<ResultsPage />} />
          <Route path="/process"  element={<ProcessPage />} />
          <Route path="/book"     element={<BookingPage />} />
          <Route path="/faq"      element={<FAQPage />} />
        </Routes>

        <Chatbot />
      </div>
    </BrowserRouter>
  )
}
