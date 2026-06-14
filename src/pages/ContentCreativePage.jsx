import SEOMeta from '../components/SEOMeta'
import { useT } from '../i18n/locale'
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

export default function ContentCreativePage() {
  const [locale, t] = useT()
  return (
    <>
      <SEOMeta
        title={t('UGC Video & Creative Ads Dubai | ignite-scale', 'فيديو المستخدم وإعلانات إبداعية في دبي | ignite-scale')}
        description={t('UGC video, ad creative and copywriting for Dubai brands. In-house production, 48-hour turnaround, conversion-focused. Typical 3–5× engagement lift.', 'فيديو المستخدم والمحتوى الإبداعي للإعلانات وكتابة النصوص لعلامات دبي. إنتاج داخلي، تسليم خلال ٤٨ ساعة، تركيز على التحويل. ارتفاع تفاعل ٣–٥× في المعتاد.')}
        canonical={locale === 'ar' ? 'https://ignite-scale.com/ar/services/creative' : 'https://ignite-scale.com/services/creative'}
        locale={locale}
        breadcrumbs={[{ name: 'Home', url: '/' }, { name: 'Services', url: '/services' }, { name: 'Content & Creative', url: '/services/creative' }]}
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
                title="Content Creation & Creative Strategy"
                subtitle="What We Do"
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
                Scroll-stopping content built for Dubai's high-intent audience. Our in-house creative team produces UGC-style video, luxury editorial photography, and data-backed copy that converts.
              </motion.p>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: 32,
                marginTop: 48,
              }}>
                {[
                  { title: 'UGC Video Production', desc: 'In-house studio producing authentic, conversion-focused video content' },
                  { title: 'Ad Creatives', desc: 'Static, carousel, and video creatives optimized for Facebook, Instagram, TikTok' },
                  { title: 'Copywriting', desc: 'High-converting headlines, body copy, and CTAs that sell' },
                  { title: 'Photography', desc: 'Luxury product and lifestyle photography aligned with brand aesthetic' },
                  { title: 'Reels Strategy', desc: 'Short-form content strategy for Instagram, TikTok, and YouTube Shorts' },
                  { title: 'Content Calendar', desc: 'Planned, consistent content pipeline with weekly content drops' },
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
                title="Creative Impact"
                subtitle="Results"
              />

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: 28,
              }}>
                {[
                  { metric: '3–5×', label: 'Engagement Lift' },
                  { metric: '48h', label: 'Video Production Turnaround' },
                  { metric: '10+', label: 'Monthly Content Pieces' },
                  { metric: '87%', label: 'Higher Click-Through Rate' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 + i * 0.1 }}
                    style={{ textAlign: 'center' }}
                  >
                    <div style={{
                      fontSize: 'clamp(32px, 6vw, 48px)',
                      fontWeight: 800,
                      background: 'linear-gradient(135deg, #FF8040, #FFBB80)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      lineHeight: 1,
                      marginBottom: 12,
                    }}>
                      {item.metric}
                    </div>
                    <div style={{
                      fontSize: 13,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'rgba(240,200,160,0.55)',
                      fontFamily: '"DM Sans", sans-serif',
                    }}>
                      {item.label}
                    </div>
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
