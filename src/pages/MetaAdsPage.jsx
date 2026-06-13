import SEOMeta from '../components/SEOMeta'
import Navbar from '../components/Navbar'
import Booking from '../components/Booking'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

function Section({ title, subtitle, children }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      style={{ marginBottom: 64 }}
    >
      <div style={{ fontSize: 11, letterSpacing: '0.4em', textTransform: 'uppercase', color: 'rgba(255,140,70,0.5)', fontFamily: '"DM Sans", sans-serif', marginBottom: 16 }}>
        {subtitle}
      </div>
      <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, fontFamily: '"DM Sans", sans-serif', color: 'rgba(255,255,255,0.88)', letterSpacing: '-0.02em', lineHeight: 1.1, margin: '0 0 32px 0' }}>
        {title}
      </h2>
      {children}
    </motion.div>
  )
}

export default function MetaAdsPage() {
  return (
    <>
      <SEOMeta
        title="Meta Ads Agency Dubai | Facebook & Instagram Experts"
        description="Meta Ads management in Dubai. We run Facebook and Instagram campaigns targeting 2–5× ROAS for real estate, cosmetics and B2B. Free ad audit."
        canonical="https://ignite-scale.com/meta-ads-dubai"
        breadcrumbs={[{ name: 'Home', url: '/' }, { name: 'Meta Ads Dubai', url: '/meta-ads-dubai' }]}
      />
      <div style={{ background: '#03050F', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ paddingTop: 80 }}>
          <section style={{ padding: 'clamp(80px, 12vh, 140px) clamp(20px, 8vw, 120px)', background: '#03050F' }}>
            <div style={{ maxWidth: 900, margin: '0 auto' }}>
              <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <h1 style={{ fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: 800, fontFamily: '"DM Sans", sans-serif', color: 'rgba(255,255,255,0.95)', letterSpacing: '-0.02em', lineHeight: 1.1, margin: '0 0 24px 0' }}>
                  Meta Ads Management Dubai
                </h1>
                <p style={{ fontSize: '18px', lineHeight: 1.8, color: 'rgba(240,210,180,0.8)', fontFamily: '"DM Sans", sans-serif', margin: 0 }}>
                  Expert Facebook and Instagram advertising for Dubai brands. We manage millions in ad spend with proven 2–5× ROAS. Stop wasting budget on ineffective campaigns.
                </p>
              </motion.div>

              <Section title="Why Meta Ads for Dubai Businesses?" subtitle="The Opportunity">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 28 }}>
                  {[
                    { title: '2.6B Users Worldwide', desc: 'Meta reaches 95% of Dubai internet users through Facebook and Instagram' },
                    { title: 'Precise Targeting', desc: 'Target by location, interests, behavior, income level, and purchase intent' },
                    { title: 'Lower CPC than Google', desc: 'Average CPC 30-50% cheaper than Google Ads while driving qualified leads' },
                    { title: 'Visual Selling', desc: 'Perfect for real estate, cosmetics, hospitality, and luxury brands' },
                  ].map((item, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} style={{ padding: 28, borderRadius: 12, border: '1px solid rgba(255,110,40,0.12)', background: 'rgba(255,110,40,0.04)' }}>
                      <h3 style={{ fontSize: 16, fontWeight: 600, color: 'rgba(255,200,150,0.9)', fontFamily: '"DM Sans", sans-serif', margin: '0 0 12px 0' }}>
                        {item.title}
                      </h3>
                      <p style={{ fontSize: 14, lineHeight: 1.6, color: 'rgba(240,210,180,0.65)', fontFamily: '"DM Sans", sans-serif', margin: 0 }}>
                        {item.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </Section>

              <Section title="Our Meta Ads Process" subtitle="How We Work">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 24 }}>
                  {[
                    { num: '1', title: 'Audit & Strategy', desc: 'Deep dive into your business, audience, and competitors. Build a custom Meta strategy aligned to your CPL and ROAS targets.' },
                    { num: '2', title: 'Creative Testing', desc: 'We produce 5-10 ad variations (images, videos, copy). Test to find your winning creative and messaging.' },
                    { num: '3', title: 'Campaign Launch', desc: 'Launch campaigns across Meta network (Facebook, Instagram, Audience Network). Start with lookalike audiences and pixel optimization.' },
                    { num: '4', title: 'Daily Optimization', desc: 'Monitor performance 24/7. Scale winning ads, pause losers, adjust bids and audiences in real-time.' },
                    { num: '5', title: 'Monthly Reporting', desc: 'Transparent dashboards showing ROAS, CPL, conversion rate, and revenue impact. Strategic recommendations each month.' },
                  ].map((item, i) => (
                    <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }} style={{ display: 'flex', gap: 24, padding: 28, borderRadius: 12, border: '1px solid rgba(255,110,40,0.08)', background: 'rgba(255,110,40,0.02)' }}>
                      <div style={{ fontSize: 28, fontWeight: 700, color: 'rgba(255,110,40,0.8)', minWidth: 40 }}>{item.num}</div>
                      <div style={{ flex: 1 }}>
                        <h3 style={{ fontSize: 16, fontWeight: 600, color: 'rgba(255,255,255,0.9)', fontFamily: '"DM Sans", sans-serif', margin: '0 0 8px 0' }}>
                          {item.title}
                        </h3>
                        <p style={{ fontSize: 14, lineHeight: 1.6, color: 'rgba(240,210,180,0.65)', fontFamily: '"DM Sans", sans-serif', margin: 0 }}>
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Section>

              <Section title="Meta Ads Results for Dubai Brands" subtitle="Proven Performance">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 28 }}>
                  {[
                    { metric: '3.2–4.8×', label: 'Average ROAS' },
                    { metric: '48%', label: 'Avg CPL Reduction' },
                    { metric: '2.1%', label: 'Avg Conversion Rate' },
                    { metric: '24h', label: 'Campaign Optimization' },
                  ].map((item, i) => (
                    <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.1 }} style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: 'clamp(32px, 6vw, 48px)', fontWeight: 800, background: 'linear-gradient(135deg, #FF8040, #FFBB80)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: 1, marginBottom: 12 }}>
                        {item.metric}
                      </div>
                      <div style={{ fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(240,200,160,0.55)', fontFamily: '"DM Sans", sans-serif' }}>
                        {item.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Section>
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
