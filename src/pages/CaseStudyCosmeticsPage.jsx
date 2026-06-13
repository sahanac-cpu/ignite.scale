import SEOMeta from '../components/SEOMeta'
import Navbar from '../components/Navbar'
import Booking from '../components/Booking'
import Footer from '../components/Footer'

export default function CaseStudyCosmeticsPage() {
  return (
    <>
      <SEOMeta
        title="Cosmetic Clinic: 320 Leads in 60 Days | Case Study"
        description="How a Dubai cosmetic clinic went from 0 to 320 qualified leads in 60 days. Lead generation strategy, conversion optimisation, ads management."
        canonical="https://ignite-scale.com/case-study/dubai-cosmetics-320-leads"
        breadcrumbs={[{ name: 'Home', url: '/' }, { name: 'Case Studies', url: '/results' }, { name: 'Cosmetics', url: '/case-study/dubai-cosmetics-320-leads' }]}
        article={{ datePublished: '2026-02-15', headline: 'Cosmetic Clinic Case Study: 320 Qualified Leads in 60 Days' }}
      />
      <div style={{ background: '#03050F', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ paddingTop: 80 }}>
          <article style={{ padding: 'clamp(80px, 12vh, 140px) clamp(20px, 8vw, 120px)' }}>
            <div style={{ maxWidth: 800, margin: '0 auto' }}>
              <h1 style={{ fontSize: 'clamp(36px, 6vw, 58px)', fontWeight: 800, color: 'rgba(255,255,255,0.95)', margin: '0 0 48px 0' }}>
                Cosmetic Clinic: 320 Leads in 60 Days (Cost: 3,200 AED)
              </h1>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 24, marginBottom: 48 }}>
                {[
                  { label: 'Leads Generated', value: '320' },
                  { label: 'Cost Per Lead', value: '10 AED' },
                  { label: 'Consultation Booked', value: '185' },
                  { label: 'Conversion to Treatment', value: '62%' },
                ].map((metric, i) => (
                  <div key={i} style={{ padding: 24, borderRadius: 12, border: '1px solid rgba(255,110,40,0.12)', background: 'rgba(255,110,40,0.04)' }}>
                    <div style={{ fontSize: 12, color: 'rgba(240,200,160,0.5)', marginBottom: 8 }}>{metric.label}</div>
                    <div style={{ fontSize: 20, fontWeight: 700, color: 'rgba(255,200,150,0.95)' }}>
                      {metric.value}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginBottom: 48 }}>
                <h2 style={{ fontSize: 20, fontWeight: 700, color: 'rgba(255,255,255,0.9)', margin: '0 0 16px 0' }}>
                  The Situation
                </h2>
                <p style={{ fontSize: 15, lineHeight: 1.8, color: 'rgba(240,210,180,0.75)', margin: 0 }}>
                  New cosmetic clinic in Dubai Marina with no patient leads. They needed qualified leads fast to fill schedules and prove the concept. We built a complete lead generation system from scratch.
                </p>
              </div>

              <div style={{ marginBottom: 48 }}>
                <h2 style={{ fontSize: 20, fontWeight: 700, color: 'rgba(255,255,255,0.9)', margin: '0 0 16px 0' }}>
                  Strategy
                </h2>
                <ul style={{ fontSize: 14, lineHeight: 1.8, color: 'rgba(240,210,180,0.75)', margin: 0, paddingLeft: 20 }}>
                  <li style={{ marginBottom: 12 }}>✓ Instagram + TikTok ads targeting women 25-45 in Dubai</li>
                  <li style={{ marginBottom: 12 }}>✓ Before/after content showing real results</li>
                  <li style={{ marginBottom: 12 }}>✓ Lead magnet: "Free consultation + skin analysis"</li>
                  <li style={{ marginBottom: 12 }}>✓ Landing page with booking calendar + testimonials</li>
                  <li>✓ Retargeting warm leads with treatment info</li>
                </ul>
              </div>

              <div style={{ padding: 32, borderRadius: 12, background: 'rgba(255,110,40,0.08)', border: '1px solid rgba(255,110,40,0.15)' }}>
                <p style={{ fontSize: 15, lineHeight: 1.8, color: 'rgba(240,210,180,0.75)', margin: 0 }}>
                  <strong>Cost per lead: 10 AED</strong> (vs industry standard 80-150 AED). By month 3, they went from 0 to selling 250+ treatments monthly at 2,000-8,000 AED per treatment.
                </p>
              </div>
            </div>
          </article>

          <Booking />
        </main>
        <Footer />
      </div>
    </>
  )
}
