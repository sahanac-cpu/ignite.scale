import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import './index.css'
import Preloader from './components/Preloader'
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Chatbot from './components/Chatbot'
import ArBetaBanner from './components/ArBetaBanner'

import HomePage    from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import PaidSocialPage from './pages/PaidSocialPage'
import ContentCreativePage from './pages/ContentCreativePage'
import FunnelDesignPage from './pages/FunnelDesignPage'
import DubaiMarketingAgencyPage from './pages/DubaiMarketingAgencyPage'
import MetaAdsPage from './pages/MetaAdsPage'
import TikTokAdsPage from './pages/TikTokAdsPage'
import WebDesignPage from './pages/WebDesignPage'
import BlogMetaAdsMistakesPage from './pages/BlogMetaAdsMistakesPage'
import BlogTikTokVsInstagramPage from './pages/BlogTikTokVsInstagramPage'
import BlogCPLReductionPage from './pages/BlogCPLReductionPage'
import CaseStudyRealEstateDAEPage from './pages/CaseStudyRealEstateDAEPage'
import CaseStudyCosmeticsPage from './pages/CaseStudyCosmeticsPage'
import ResultsPage  from './pages/ResultsPage'
import ProcessPage  from './pages/ProcessPage'
import BookingPage  from './pages/BookingPage'
import FAQPage      from './pages/FAQPage'
import NotFoundPage from './pages/NotFoundPage'

/* Page-to-route map — generates BOTH /<route> and /ar/<route> entries. */
const ROUTE_DEFS = [
  ['/services', ServicesPage],
  ['/services/paid-social', PaidSocialPage],
  ['/services/creative', ContentCreativePage],
  ['/services/funnels', FunnelDesignPage],
  ['/dubai-marketing-agency', DubaiMarketingAgencyPage],
  ['/meta-ads-dubai', MetaAdsPage],
  ['/tiktok-ads-dubai', TikTokAdsPage],
  ['/web-design-dubai', WebDesignPage],
  ['/blog/meta-ads-mistakes', BlogMetaAdsMistakesPage],
  ['/blog/tiktok-vs-instagram-ads', BlogTikTokVsInstagramPage],
  ['/blog/reduce-cost-per-lead', BlogCPLReductionPage],
  ['/case-study/dubai-real-estate-4-8x-roas', CaseStudyRealEstateDAEPage],
  ['/case-study/dubai-cosmetics-320-leads', CaseStudyCosmeticsPage],
  ['/results', ResultsPage],
  ['/process', ProcessPage],
  ['/book', BookingPage],
  ['/faq', FAQPage],
]

export default function App() {
  return (
    <BrowserRouter>
      <Preloader />
      <Cursor />
      <ArBetaBanner />

      <div className="min-h-screen" style={{ background: '#03050F' }}>
        <Routes>
          <Route path="/" element={<><Navbar /><HomePage /></>} />
          <Route path="/ar" element={<><Navbar /><HomePage /></>} />

          {ROUTE_DEFS.map(([path, Comp]) => (
            <Route key={path} path={path} element={<Comp />} />
          ))}
          {ROUTE_DEFS.map(([path, Comp]) => (
            <Route key={`ar${path}`} path={`/ar${path}`} element={<Comp />} />
          ))}

          <Route path="*" element={<NotFoundPage />} />
        </Routes>

        <Chatbot />
      </div>
      <Analytics />
    </BrowserRouter>
  )
}
