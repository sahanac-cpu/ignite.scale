import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import './index.css'
import Preloader from './components/Preloader'
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Chatbot from './components/Chatbot'
import ArBetaBanner from './components/ArBetaBanner'

/* Homepage stays eager: it's the LCP entry point for the most-visited route.
   Every other page is lazy-loaded — Vite will emit a separate chunk per file. */
import HomePage from './pages/HomePage'

const ServicesPage              = lazy(() => import('./pages/ServicesPage'))
const PaidSocialPage            = lazy(() => import('./pages/PaidSocialPage'))
const ContentCreativePage       = lazy(() => import('./pages/ContentCreativePage'))
const FunnelDesignPage          = lazy(() => import('./pages/FunnelDesignPage'))
const DubaiMarketingAgencyPage  = lazy(() => import('./pages/DubaiMarketingAgencyPage'))
const MetaAdsPage               = lazy(() => import('./pages/MetaAdsPage'))
const TikTokAdsPage             = lazy(() => import('./pages/TikTokAdsPage'))
const WebDesignPage             = lazy(() => import('./pages/WebDesignPage'))
const BlogMetaAdsMistakesPage   = lazy(() => import('./pages/BlogMetaAdsMistakesPage'))
const BlogTikTokVsInstagramPage = lazy(() => import('./pages/BlogTikTokVsInstagramPage'))
const BlogCPLReductionPage      = lazy(() => import('./pages/BlogCPLReductionPage'))
const CaseStudyRealEstateDAEPage = lazy(() => import('./pages/CaseStudyRealEstateDAEPage'))
const CaseStudyCosmeticsPage    = lazy(() => import('./pages/CaseStudyCosmeticsPage'))
const ResultsPage               = lazy(() => import('./pages/ResultsPage'))
const ProcessPage               = lazy(() => import('./pages/ProcessPage'))
const BookingPage               = lazy(() => import('./pages/BookingPage'))
const FAQPage                   = lazy(() => import('./pages/FAQPage'))
const NotFoundPage              = lazy(() => import('./pages/NotFoundPage'))

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

/* Minimal loading state matched to the brand. Avoids layout shift while a chunk loads. */
function RouteLoader() {
  return (
    <div
      style={{
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#03050F',
      }}
      aria-busy="true"
      aria-live="polite"
    >
      <div
        style={{
          width: 28,
          height: 28,
          borderRadius: '50%',
          border: '2px solid rgba(255,255,255,0.08)',
          borderTopColor: '#FF6B35',
          animation: 'spin 0.8s linear infinite',
        }}
      />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Preloader />
      <Cursor />
      <ArBetaBanner />

      <div className="min-h-screen" style={{ background: '#03050F' }}>
        <Suspense fallback={<RouteLoader />}>
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
        </Suspense>

        <Chatbot />
      </div>
      <Analytics />
    </BrowserRouter>
  )
}
