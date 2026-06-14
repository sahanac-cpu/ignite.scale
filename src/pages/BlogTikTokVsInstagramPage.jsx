import SEOMeta from '../components/SEOMeta'
import { useT } from '../i18n/locale'
import Navbar from '../components/Navbar'
import Booking from '../components/Booking'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

export default function BlogTikTokVsInstagramPage() {
  const [locale, t] = useT()
  return (
    <>
      <SEOMeta
        title={t('TikTok vs Instagram Ads 2026 | Dubai Comparison', 'إعلانات تيك توك مقابل إنستغرام ٢٠٢٦ | مقارنة دبي')}
        description={t('TikTok vs Instagram Ads 2026: cost, audience demographics, conversion rates and best industries for each. When to use which platform in Dubai.', 'إعلانات تيك توك مقابل إنستغرام ٢٠٢٦: التكلفة، التركيبة السكانية، معدلات التحويل، وأفضل القطاعات لكل منهما. متى تستخدم أي منصّة في دبي.')}
        canonical={locale === 'ar' ? 'https://ignite-scale.com/ar/blog/tiktok-vs-instagram-ads' : 'https://ignite-scale.com/blog/tiktok-vs-instagram-ads'}
        locale={locale}
        breadcrumbs={[{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'TikTok vs Instagram', url: '/blog/tiktok-vs-instagram-ads' }]}
        article={{ datePublished: '2026-05-04', headline: 'TikTok vs Instagram Ads 2026: Which Platform to Choose for Dubai' }}
      />
      <div style={{ background: '#03050F', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ paddingTop: 80 }}>
          <article style={{ padding: 'clamp(80px, 12vh, 140px) clamp(20px, 8vw, 120px)' }}>
            <div style={{ maxWidth: 800, margin: '0 auto' }}>
              <h1 style={{ fontSize: 'clamp(36px, 6vw, 58px)', fontWeight: 800, color: 'rgba(255,255,255,0.95)', margin: '0 0 24px 0', lineHeight: 1.1 }}>
                TikTok vs Instagram Ads: Which Platform for Dubai Brands?
              </h1>
              <p style={{ fontSize: '18px', lineHeight: 1.8, color: 'rgba(240,210,180,0.8)', margin: '0 0 48px 0' }}>
                Should you advertise on TikTok or Instagram? Here's a detailed breakdown to help you decide where to invest your ad budget in 2026.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28, marginBottom: 48 }}>
                {[
                  { metric: 'Avg CPM', tiktok: '$2-8', instagram: '$5-12', winner: 'TikTok (40% cheaper)' },
                  { metric: 'Audience Age', tiktok: '13-35 (Gen Z)', instagram: '18-45 (broad)', winner: 'Instagram (broader)' },
                  { metric: 'Engagement Rate', tiktok: '5-8%', instagram: '1-3%', winner: 'TikTok (5x higher)' },
                  { metric: 'Best For', tiktok: 'Viral content, awareness', instagram: 'Conversions, sales', winner: 'Depends on goal' },
                ].map((item, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} style={{ padding: 24, borderRadius: 12, border: '1px solid rgba(255,110,40,0.12)', background: 'rgba(255,110,40,0.04)' }}>
                    <div style={{ fontSize: 12, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,140,70,0.6)', marginBottom: 8, fontWeight: 600 }}>
                      {item.metric}
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
                      <div>
                        <div style={{ fontSize: 11, color: 'rgba(240,200,160,0.5)', marginBottom: 4 }}>TikTok</div>
                        <div style={{ fontSize: 14, fontWeight: 600, color: 'rgba(255,255,255,0.9)' }}>{item.tiktok}</div>
                      </div>
                      <div>
                        <div style={{ fontSize: 11, color: 'rgba(240,200,160,0.5)', marginBottom: 4 }}>Instagram</div>
                        <div style={{ fontSize: 14, fontWeight: 600, color: 'rgba(255,255,255,0.9)' }}>{item.instagram}</div>
                      </div>
                    </div>
                    <div style={{ padding: 8, borderTop: '1px solid rgba(255,110,40,0.1)', fontSize: 12, color: 'rgba(255,160,90,0.7)' }}>
                      ✓ {item.winner}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div style={{ padding: 32, borderRadius: 12, background: 'rgba(255,110,40,0.08)', border: '1px solid rgba(255,110,40,0.15)' }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: 'rgba(255,255,255,0.9)', margin: '0 0 16px 0' }}>
                  The Verdict
                </h3>
                <p style={{ fontSize: 15, lineHeight: 1.8, color: 'rgba(240,210,180,0.75)', margin: 0 }}>
                  <strong>Use both.</strong> TikTok for brand awareness and viral growth (cheap reach). Instagram for conversions and sales (proven targeting). Split budget 40/60 TikTok/Instagram, then adjust based on results.
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
