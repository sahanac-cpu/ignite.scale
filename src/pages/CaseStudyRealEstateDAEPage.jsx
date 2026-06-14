import SEOMeta from '../components/SEOMeta'
import { useT } from '../i18n/locale'
import Navbar from '../components/Navbar'
import Booking from '../components/Booking'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

export default function CaseStudyRealEstateDAEPage() {
  const [locale, t] = useT()
  return (
    <>
      <SEOMeta
        title={t('Real Estate: 4.8× ROAS in 90 Days | Case Study', 'عقارات: عائد ٤٫٨× على الإنفاق في ٩٠ يوماً | دراسة حالة')}
        description={t('How we lifted a Dubai property developer\'s ROAS from 1.2× to 4.8× in 90 days, with CPL down 68%. Complete strategy breakdown.', 'كيف رفعنا العائد على الإنفاق لمطوّر عقاري في دبي من ١٫٢× إلى ٤٫٨× في ٩٠ يوماً، مع خفض تكلفة العميل ٦٨٪. تفصيل كامل للاستراتيجية.')}
        canonical={locale === 'ar' ? 'https://ignite-scale.com/ar/case-study/dubai-real-estate-4-8x-roas' : 'https://ignite-scale.com/case-study/dubai-real-estate-4-8x-roas'}
        locale={locale}
        breadcrumbs={[{ name: 'Home', url: '/' }, { name: 'Case Studies', url: '/results' }, { name: 'Real Estate', url: '/case-study/dubai-real-estate-4-8x-roas' }]}
        article={{ datePublished: '2026-01-28', headline: 'Real Estate Case Study: 4.8× ROAS in 90 Days' }}
      />
      <div style={{ background: '#03050F', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ paddingTop: 80 }}>
          <article style={{ padding: 'clamp(80px, 12vh, 140px) clamp(20px, 8vw, 120px)' }}>
            <div style={{ maxWidth: 800, margin: '0 auto' }}>
              <div style={{ fontSize: 12, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(255,140,70,0.6)', marginBottom: 16 }}>
                Case Study • Real Estate
              </div>
              <h1 style={{ fontSize: 'clamp(36px, 6vw, 58px)', fontWeight: 800, color: 'rgba(255,255,255,0.95)', margin: '0 0 24px 0' }}>
                Dubai Real Estate: 4.8× ROAS in 90 Days
              </h1>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 24, marginBottom: 48 }}>
                {[
                  { label: 'ROAS Improvement', value: '1.2× → 4.8×' },
                  { label: 'CPL Reduction', value: '68% decrease' },
                  { label: 'Timeline', value: '90 days' },
                  { label: 'Lead Volume', value: '+240%' },
                ].map((metric, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} style={{ padding: 24, borderRadius: 12, border: '1px solid rgba(255,110,40,0.12)', background: 'rgba(255,110,40,0.04)' }}>
                    <div style={{ fontSize: 12, color: 'rgba(240,200,160,0.5)', marginBottom: 8 }}>{metric.label}</div>
                    <div style={{ fontSize: 24, fontWeight: 700, background: 'linear-gradient(135deg, #FF8040, #FFBB80)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                      {metric.value}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div style={{ marginBottom: 48 }}>
                <h2 style={{ fontSize: 22, fontWeight: 700, color: 'rgba(255,255,255,0.9)', margin: '0 0 16px 0' }}>
                  The Challenge
                </h2>
                <p style={{ fontSize: 15, lineHeight: 1.8, color: 'rgba(240,210,180,0.75)', margin: 0 }}>
                  A 10-year-old Dubai real estate developer was spending 150k AED/month on ads but getting weak returns (1.2× ROAS). Their landing pages weren't optimized, audiences were too broad, and they weren't retargeting warm leads. They needed immediate improvement.
                </p>
              </div>

              <div style={{ marginBottom: 48 }}>
                <h2 style={{ fontSize: 22, fontWeight: 700, color: 'rgba(255,255,255,0.9)', margin: '0 0 16px 0' }}>
                  Our Strategy
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 20 }}>
                  {[
                    { title: 'Audience Segmentation', desc: 'Split into 5 custom audiences: High-income earners, property investors, first-time buyers, previous visitors, competitor audience.' },
                    { title: 'Landing Page Redesign', desc: 'Rebuilt pages with property images, virtual tours, social proof, and 1-click booking. Conversion rate increased from 2% to 5.2%.' },
                    { title: 'Aggressive Retargeting', desc: 'Implemented 7-touch retargeting sequence for warm leads. 34% of sales came from retargeted users.' },
                    { title: 'Video Ads', desc: 'Created property walkthroughs and testimonial videos. Video ads had 6.2× ROAS vs static (2.1×).' },
                  ].map((item, i) => (
                    <div key={i} style={{ paddingLeft: 24, borderLeft: '3px solid rgba(255,110,40,0.3)' }}>
                      <h3 style={{ fontSize: 16, fontWeight: 600, color: 'rgba(255,200,150,0.9)', margin: '0 0 8px 0' }}>
                        {item.title}
                      </h3>
                      <p style={{ fontSize: 14, lineHeight: 1.7, color: 'rgba(240,210,180,0.7)', margin: 0 }}>
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: 48 }}>
                <h2 style={{ fontSize: 22, fontWeight: 700, color: 'rgba(255,255,255,0.9)', margin: '0 0 16px 0' }}>
                  Results (90 Days)
                </h2>
                <ul style={{ fontSize: 15, lineHeight: 1.8, color: 'rgba(240,210,180,0.75)', margin: 0, paddingLeft: 20 }}>
                  <li style={{ marginBottom: 12 }}>✓ ROAS: 1.2× → 4.8× (+300% improvement)</li>
                  <li style={{ marginBottom: 12 }}>✓ CPL: 485 AED → 155 AED (68% reduction)</li>
                  <li style={{ marginBottom: 12 }}>✓ Lead Volume: 120/month → 408/month</li>
                  <li style={{ marginBottom: 12 }}>✓ Monthly Ad Spend: 150k maintained, but 4× more leads</li>
                  <li>✓ Conversion Rate: 2% → 5.2% (landing page optimization)</li>
                </ul>
              </div>

              <div style={{ padding: 32, borderRadius: 12, background: 'rgba(255,110,40,0.08)', border: '1px solid rgba(255,110,40,0.15)' }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: 'rgba(255,255,255,0.9)', margin: '0 0 12px 0' }}>
                  Key Takeaway
                </h3>
                <p style={{ fontSize: 15, lineHeight: 1.8, color: 'rgba(240,210,180,0.75)', margin: 0 }}>
                  You don't need bigger budgets; you need smarter strategies. This client got 4× better results on the same budget by optimizing audience targeting, landing pages, and creative. Most real estate companies leave 70% of their ROI on the table.
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
