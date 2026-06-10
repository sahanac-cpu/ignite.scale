import SEOMeta from '../components/SEOMeta'
import Navbar from '../components/Navbar'
import Booking from '../components/Booking'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

function SectionHeading({ title, subtitle }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      style={{ marginBottom: 64 }}
    >
      <div style={{
        fontSize: 11,
        letterSpacing: '0.4em',
        textTransform: 'uppercase',
        color: 'rgba(255,140,70,0.5)',
        fontFamily: '"DM Sans", sans-serif',
        marginBottom: 16,
      }}>
        {subtitle}
      </div>
      <h1 style={{
        fontSize: 'clamp(32px, 5vw, 58px)',
        fontWeight: 700,
        fontFamily: '"DM Sans", sans-serif',
        color: 'rgba(255,255,255,0.88)',
        letterSpacing: '-0.02em',
        lineHeight: 1.1,
        margin: 0,
      }}>
        {title}
      </h1>
    </motion.div>
  )
}

export default function DubaiMarketingAgencyPage() {
  return (
    <>
      <SEOMeta
        title="Best Marketing Agency in Dubai | Paid Ads & Web Design | Ignite Scale"
        description="Looking for a digital marketing agency in Dubai? Ignite Scale specializes in paid social advertising, website design, and lead generation. 50+ clients. Free strategy session."
        canonical="https://ignite-scale.com/dubai-marketing-agency"
        keywords="marketing agency Dubai, best marketing agency Dubai, digital marketing Dubai, marketing company Dubai, advertising agency Dubai"
      />
      <div style={{ background: '#03050F', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ paddingTop: 80 }}>
          <section style={{
            padding: 'clamp(80px, 12vh, 140px) clamp(20px, 8vw, 120px)',
            background: '#03050F',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{ maxWidth: 1000, margin: '0 auto', position: 'relative', zIndex: 1 }}>
              <SectionHeading
                title="Dubai's Top-Rated Marketing Agency"
                subtitle="Why Choose Ignite Scale"
              />

              <motion.p
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
                style={{
                  fontSize: 'clamp(16px, 2vw, 20px)',
                  lineHeight: 1.8,
                  color: 'rgba(240,210,180,0.75)',
                  fontFamily: '"DM Sans", sans-serif',
                  marginBottom: 40,
                  maxWidth: 700,
                }}
              >
                We're not just another marketing agency in Dubai. We're growth partners obsessed with one thing: turning your ad spend into qualified leads and revenue. No fluff, no vanity metrics — just results.
              </motion.p>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: 32,
                marginTop: 48,
              }}>
                {[
                  {
                    title: '50+ Active Clients',
                    desc: 'Trusted by Dubai\'s leading real estate, hospitality, and B2B brands'
                  },
                  {
                    title: '$2.4M+ Managed',
                    desc: 'Proven track record managing large-scale ad budgets with measurable ROI'
                  },
                  {
                    title: '2–5× Average ROAS',
                    desc: 'Our clients see consistent 2-5x return on ad spend across all channels'
                  },
                  {
                    title: '60%+ CPL Reduction',
                    desc: 'Optimized funnels and targeting reduce cost per lead by 60% on average'
                  },
                  {
                    title: 'Full-Service',
                    desc: 'Paid social, creative production, web design, and lead generation — all in-house'
                  },
                  {
                    title: 'Dubai-Based',
                    desc: 'Local expertise with global best practices. We understand the UAE market.'
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 + i * 0.08 }}
                    style={{
                      padding: 28,
                      borderRadius: 12,
                      border: '1px solid rgba(255,110,40,0.12)',
                      background: 'rgba(255,110,40,0.04)',
                      backdropFilter: 'blur(12px)',
                    }}
                  >
                    <h3 style={{
                      fontSize: 18,
                      fontWeight: 600,
                      color: 'rgba(255,200,150,0.9)',
                      fontFamily: '"DM Sans", sans-serif',
                      margin: '0 0 12px 0',
                    }}>
                      {item.title}
                    </h3>
                    <p style={{
                      fontSize: 14,
                      lineHeight: 1.6,
                      color: 'rgba(240,210,180,0.65)',
                      fontFamily: '"DM Sans", sans-serif',
                      margin: 0,
                    }}>
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section style={{
            padding: 'clamp(80px, 12vh, 140px) clamp(20px, 8vw, 120px)',
            background: 'linear-gradient(180deg, #03050F 0%, #0a0d18 100%)',
            borderTop: '1px solid rgba(255,110,40,0.08)',
          }}>
            <div style={{ maxWidth: 1000, margin: '0 auto' }}>
              <SectionHeading
                title="How We Help Dubai Businesses"
                subtitle="Our Approach"
              />

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: 32,
              }}>
                {[
                  {
                    title: 'Paid Social Advertising',
                    desc: 'Meta Ads, TikTok, Snapchat, and Google Ads expertly managed for maximum ROAS. We handle audience research, creative testing, and daily optimization.',
                  },
                  {
                    title: 'Website Design & Development',
                    desc: 'High-converting landing pages and websites built for Dubai\'s competitive markets. SEO-optimized, mobile-first, and designed to turn visitors into leads.',
                  },
                  {
                    title: 'Lead Generation & Funnels',
                    desc: 'Complete funnel design from ad click to qualified lead. We build the systems that work around the clock to fill your pipeline.',
                  },
                  {
                    title: 'Creative Production',
                    desc: 'In-house video, photography, and copywriting. We create scroll-stopping content that converts on every platform.',
                  },
                  {
                    title: 'Analytics & Reporting',
                    desc: 'Weekly dashboards showing what actually matters: ROAS, CPL, conversion rate, and revenue impact. Full transparency, always.',
                  },
                  {
                    title: 'Strategy & Consulting',
                    desc: 'Before we build, we plan. Deep-dive strategy sessions ensure every tactic aligns with your business goals.',
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 + i * 0.08 }}
                    style={{
                      padding: 32,
                      borderRadius: 12,
                      border: '1px solid rgba(255,110,40,0.12)',
                      background: 'rgba(255,110,40,0.02)',
                      backdropFilter: 'blur(8px)',
                    }}
                  >
                    <h3 style={{
                      fontSize: 18,
                      fontWeight: 600,
                      color: 'rgba(255,200,150,0.9)',
                      fontFamily: '"DM Sans", sans-serif',
                      margin: '0 0 12px 0',
                    }}>
                      {item.title}
                    </h3>
                    <p style={{
                      fontSize: 15,
                      lineHeight: 1.7,
                      color: 'rgba(240,210,180,0.7)',
                      fontFamily: '"DM Sans", sans-serif',
                      margin: 0,
                    }}>
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
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
