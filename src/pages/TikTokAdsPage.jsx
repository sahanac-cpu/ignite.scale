import SEOMeta from '../components/SEOMeta'
import Navbar from '../components/Navbar'
import Booking from '../components/Booking'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

export default function TikTokAdsPage() {
  return (
    <>
      <SEOMeta
        title="TikTok Ads Agency Dubai | Ignite Scale"
        description="TikTok advertising in Dubai. High-performing campaigns targeting Gen Z and millennial audiences with lower CPMs than Meta. Free audit available."
        canonical="https://ignite-scale.com/tiktok-ads-dubai"
        breadcrumbs={[{ name: 'Home', url: '/' }, { name: 'TikTok Ads Dubai', url: '/tiktok-ads-dubai' }]}
      />
      <div style={{ background: '#03050F', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ paddingTop: 80 }}>
          <section style={{ padding: 'clamp(80px, 12vh, 140px) clamp(20px, 8vw, 120px)', background: '#03050F' }}>
            <div style={{ maxWidth: 900, margin: '0 auto' }}>
              <h1 style={{ fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: 800, color: 'rgba(255,255,255,0.95)', margin: '0 0 24px 0', lineHeight: 1.1 }}>
                TikTok Ads for Dubai Brands
              </h1>
              <p style={{ fontSize: '18px', lineHeight: 1.8, color: 'rgba(240,210,180,0.8)', fontFamily: '"DM Sans", sans-serif', margin: '0 0 48px 0' }}>
                TikTok is the fastest-growing ad platform with 1.5B+ users. Reach Gen Z and millennials in Dubai with highly targeted, low-cost campaigns. We manage TikTok ads with proven ROI for brands.
              </p>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 28, marginBottom: 64 }}>
                {[
                  { title: 'Lower CPM', desc: '50-70% lower cost per mille than Facebook/Instagram' },
                  { title: '1.5B Monthly Users', desc: 'Massive reach for lifestyle, fashion, beauty, F&B brands' },
                  { title: 'Creative Focus', desc: 'Authentic, organic-feeling content performs best' },
                  { title: 'High Engagement', desc: 'Average engagement rate 5-8% vs 1-3% on other platforms' },
                ].map((item, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} style={{ padding: 28, borderRadius: 12, border: '1px solid rgba(255,110,40,0.12)', background: 'rgba(255,110,40,0.04)' }}>
                    <h3 style={{ fontSize: 16, fontWeight: 600, color: 'rgba(255,200,150,0.9)', margin: '0 0 12px 0' }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: 14, lineHeight: 1.6, color: 'rgba(240,210,180,0.65)', margin: 0 }}>
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </motion.div>

              <div style={{ padding: 40, borderRadius: 12, border: '1px solid rgba(255,110,40,0.15)', background: 'rgba(255,110,40,0.05)', marginBottom: 48 }}>
                <h2 style={{ fontSize: '24px', fontWeight: 700, color: 'rgba(255,255,255,0.9)', margin: '0 0 20px 0' }}>
                  TikTok Ads Strategy for Dubai
                </h2>
                <ul style={{ fontSize: '15px', lineHeight: 1.8, color: 'rgba(240,210,180,0.75)', margin: 0, paddingLeft: 20 }}>
                  <li style={{ marginBottom: 12 }}>✓ <strong>Authentic Content First</strong> — We create native TikTok content that feels organic, not like ads</li>
                  <li style={{ marginBottom: 12 }}>✓ <strong>Influencer Partnerships</strong> — Leverage micro and macro TikTok creators in Dubai</li>
                  <li style={{ marginBottom: 12 }}>✓ <strong>Trend Riding</strong> — Jump on trending sounds and hashtags for viral potential</li>
                  <li style={{ marginBottom: 12 }}>✓ <strong>Hashtag Strategy</strong> — Target high-intent hashtags in Dubai market</li>
                  <li>✓ <strong>Conversion Tracking</strong> — Set up TikTok pixel for proper ROI measurement</li>
                </ul>
              </div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <h2 style={{ fontSize: '28px', fontWeight: 700, color: 'rgba(255,255,255,0.9)', margin: '0 0 32px 0' }}>
                  Best For (Dubai Verticals)
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
                  {['Fashion & Retail', 'Food & Beverage', 'Beauty & Cosmetics', 'Lifestyle Brands', 'E-commerce', 'Travel & Hospitality'].map((item) => (
                    <div key={item} style={{ padding: 20, borderRadius: 8, background: 'rgba(255,110,40,0.08)', borderLeft: '3px solid rgba(255,110,40,0.4)' }}>
                      <p style={{ fontSize: 14, fontWeight: 600, color: 'rgba(255,200,150,0.9)', margin: 0 }}>{item}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          <Booking />
          <FAQ />
        </main>
        <Footer />
      </div>
    </>
  )
}
