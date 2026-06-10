import SEOMeta from '../components/SEOMeta'
import Navbar from '../components/Navbar'
import Booking from '../components/Booking'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

export default function BlogMetaAdsMistakesPage() {
  const mistakes = [
    { num: '1', title: 'Not Using Custom Audiences', desc: 'Most brands waste 60% of their budget on cold audiences. Build custom audiences from your website visitors, email list, and past customers first. These convert 3-5× better.' },
    { num: '2', title: 'Changing Campaigns Too Frequently', desc: 'Meta\'s AI needs 2-4 weeks to optimize. Changing audiences, budgets, or creatives weekly breaks the algorithm. Set it, wait 21 days minimum, then optimize based on data.' },
    { num: '3', title: 'Ignoring Retargeting', desc: '95% of first-time visitors don\'t convert. Retargeting costs 70% less than cold traffic and converts 5-10× better. Always implement pixel + retargeting audiences.' },
    { num: '4', title: 'Poor Landing Page Experience', desc: 'A great ad with a slow, confusing landing page kills ROI. Ensure pages load under 3 seconds, have clear CTAs, and match ad messaging exactly.' },
    { num: '5', title: 'Setting Wrong Campaign Objective', desc: 'Using "Reach" when you want "Conversions" leaves money on the table. Choose objectives that match your actual goal: Conversions for leads, Sales for e-commerce.' },
  ]

  return (
    <>
      <SEOMeta
        title="5 Meta Ads Mistakes Costing You Money (Dubai Guide)"
        description="Discover the 5 biggest Meta Ads mistakes Dubai businesses make. Learn how to fix them and improve ROAS by 50-100%. Expert guide with actionable fixes."
        canonical="https://ignite-scale.com/blog/meta-ads-mistakes"
        keywords="Meta Ads mistakes, Facebook Ads errors, ad optimization, ROAS improvement, Dubai marketing"
      />
      <div style={{ background: '#03050F', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ paddingTop: 80 }}>
          <article style={{ padding: 'clamp(80px, 12vh, 140px) clamp(20px, 8vw, 120px)', background: '#03050F' }}>
            <div style={{ maxWidth: 800, margin: '0 auto' }}>
              <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <div style={{ fontSize: 12, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(255,140,70,0.6)', marginBottom: 16, fontWeight: 500 }}>
                  Guide • 8 min read
                </div>
                <h1 style={{ fontSize: 'clamp(36px, 6vw, 58px)', fontWeight: 800, color: 'rgba(255,255,255,0.95)', margin: '0 0 24px 0', lineHeight: 1.1 }}>
                  5 Meta Ads Mistakes Costing Dubai Businesses $50K+ Annually
                </h1>
                <p style={{ fontSize: '18px', lineHeight: 1.8, color: 'rgba(240,210,180,0.8)', margin: 0 }}>
                  Most Dubai brands are throwing money away on Meta Ads without realizing it. These 5 mistakes alone can reduce your ROAS by 50-70%. Here's how to fix them.
                </p>
              </motion.div>

              <div style={{ marginTop: 48, marginBottom: 48, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,110,40,0.3), transparent)' }} />

              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 48 }}>
                {mistakes.map((mistake, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.08 }}
                    style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: 28, alignItems: 'flex-start' }}
                  >
                    <div style={{
                      fontSize: 48,
                      fontWeight: 700,
                      background: 'linear-gradient(135deg, #FF8040, #FFBB80)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      lineHeight: 1,
                      opacity: 0.4,
                    }}>
                      {mistake.num}
                    </div>
                    <div>
                      <h2 style={{ fontSize: 20, fontWeight: 700, color: 'rgba(255,200,150,0.95)', margin: '0 0 12px 0', fontFamily: '"DM Sans", sans-serif' }}>
                        {mistake.title}
                      </h2>
                      <p style={{ fontSize: 15, lineHeight: 1.8, color: 'rgba(240,210,180,0.75)', margin: 0, fontFamily: '"DM Sans", sans-serif' }}>
                        {mistake.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div style={{ marginTop: 64, padding: 40, borderRadius: 12, border: '1px solid rgba(255,110,40,0.15)', background: 'rgba(255,110,40,0.05)' }}>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: 'rgba(255,255,255,0.9)', margin: '0 0 16px 0' }}>
                  The Bottom Line
                </h3>
                <p style={{ fontSize: 15, lineHeight: 1.8, color: 'rgba(240,210,180,0.75)', margin: 0 }}>
                  Most Meta Ads campaigns fail because of these 5 fixable mistakes. Fix them, and you'll see 50-100% improvement in ROAS within 30 days. Need help? Our team audits campaigns for free.
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
