import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { GROWTH_PAGES } from './lib/growthPages'
import { Analytics } from '@vercel/analytics/react'
import './index.css'
import Preloader from './components/Preloader'
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import LeftNav from './components/LeftNav'
import Chatbot from './components/Chatbot'
import CookieConsent from './components/CookieConsent'
import ScrollToTop from './components/ScrollToTop'

/* Homepage stays eager: it's the LCP entry point for the most-visited route.
   Every other page is lazy-loaded — Vite will emit a separate chunk per file. */
import HomePage from './pages/HomePage'

const GrowthPage                = lazy(() => import('./pages/GrowthPage'))
const InvestmentPage            = lazy(() => import('./pages/InvestmentPage'))
const AboutPage                 = lazy(() => import('./pages/AboutPage'))
const ServicesPage              = lazy(() => import('./pages/ServicesPage'))
const PaidSocialPage            = lazy(() => import('./pages/PaidSocialPage'))
const ContentCreativePage       = lazy(() => import('./pages/ContentCreativePage'))
const DubaiMarketingAgencyPage  = lazy(() => import('./pages/DubaiMarketingAgencyPage'))
const WebDesignPage             = lazy(() => import('./pages/WebDesignPage'))
const BlogMetaAdsMistakesPage   = lazy(() => import('./pages/BlogMetaAdsMistakesPage'))
const BlogTikTokVsInstagramPage = lazy(() => import('./pages/BlogTikTokVsInstagramPage'))
const BlogCPLReductionPage      = lazy(() => import('./pages/BlogCPLReductionPage'))
const BlogPostPage              = lazy(() => import('./pages/BlogPostPage'))
const CaseStudyRealEstateDAEPage = lazy(() => import('./pages/CaseStudyRealEstateDAEPage'))
const CaseStudyCosmeticsPage    = lazy(() => import('./pages/CaseStudyCosmeticsPage'))
const ResultsPage               = lazy(() => import('./pages/ResultsPage'))
const ProcessPage               = lazy(() => import('./pages/ProcessPage'))
const BookingPage               = lazy(() => import('./pages/BookingPage'))
const FAQPage                   = lazy(() => import('./pages/FAQPage'))
const NotFoundPage              = lazy(() => import('./pages/NotFoundPage'))
const PrivacyPage               = lazy(() => import('./pages/PrivacyPage'))
const TermsPage                 = lazy(() => import('./pages/TermsPage'))
const CookiesPage               = lazy(() => import('./pages/CookiesPage'))

const ROUTE_DEFS = [
  ['/privacy', PrivacyPage],
  ['/terms', TermsPage],
  ['/cookies', CookiesPage],
  ['/services', ServicesPage],
  ['/services/paid-social', PaidSocialPage],
  ['/services/creative', ContentCreativePage],
  ['/dubai-marketing-agency', DubaiMarketingAgencyPage],
  ['/web-design-dubai', WebDesignPage],
  ['/investment', InvestmentPage],
  ['/about', AboutPage],
  ['/blog/meta-ads-mistakes', BlogMetaAdsMistakesPage],
  ['/blog/tiktok-vs-instagram-ads', BlogTikTokVsInstagramPage],
  ['/blog/reduce-cost-per-lead', BlogCPLReductionPage],
  ['/case-study/dubai-real-estate-4-8x-roas', CaseStudyRealEstateDAEPage],
  ['/case-study/dubai-cosmetics-320-leads', CaseStudyCosmeticsPage],
  ['/results', ResultsPage],
  ['/process', ProcessPage],
  ['/audit', BookingPage],
  ['/faq', FAQPage],
]

/* Retired URLs → new canonical destinations (mirrors the 301s in vercel.json for client-side nav). */
const REDIRECTS = [
  ['/book', '/audit'],
  ['/services/funnels', '/services/crm-funnels'],
  ['/tiktok-ads-dubai', '/services/paid-social'],
  ['/meta-ads-dubai', '/meta-ads-agency-dubai'],
  ['/clinic-marketing-dubai', '/industries/medical-clinics'],
  ['/aesthetic-clinic-marketing-dubai', '/industries/aesthetic-clinics'],
  ['/dental-clinic-marketing-dubai', '/industries/dental-clinics'],
  ['/seo-for-clinics-dubai', '/industries/medical-clinics'],
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
          borderTopColor: '#D8BD8A',
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
      <ScrollToTop />
      <Preloader />
      <Cursor />
      <LeftNav />

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

            {/* UAE growth architecture: service hubs, Dubai keyword pages, industry pages (data-driven). */}
            {GROWTH_PAGES.map((p) => (
              <Route key={p.path} path={p.path} element={<GrowthPage path={p.path} />} />
            ))}
            {GROWTH_PAGES.map((p) => (
              <Route key={`ar${p.path}`} path={`/ar${p.path}`} element={<GrowthPage path={p.path} />} />
            ))}

            {/* Retired URLs */}
            {REDIRECTS.map(([from, to]) => (
              <Route key={from} path={from} element={<Navigate to={to} replace />} />
            ))}
            {REDIRECTS.map(([from, to]) => (
              <Route key={`ar${from}`} path={`/ar${from}`} element={<Navigate to={`/ar${to}`} replace />} />
            ))}

            {/* Dynamic markdown-driven blog posts: /blog/<slug> + /ar/blog/<slug>.
                Posts live as MD files in content/blog/ — just drop a file in to publish. */}
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/ar/blog/:slug" element={<BlogPostPage />} />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>

        <Chatbot />
        <CookieConsent />
      </div>
      <Analytics />
    </BrowserRouter>
  )
}
