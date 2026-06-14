import SEOMeta from '../components/SEOMeta'
import { useT } from '../i18n/locale'
import Navbar from '../components/Navbar'
import Booking from '../components/Booking'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

export default function WebDesignPage() {
  const [locale, t] = useT()
  return (
    <>
      <SEOMeta
        title={t('Web Design Dubai | Conversion-Optimised Websites', 'تصميم المواقع في دبي | مواقع مُحسَّنة للتحويل')}
        description={t('Professional website design in Dubai. Conversion-optimised landing pages for real estate, cosmetics, hospitality and B2B. Mobile-first, fast-loading, SEO-ready.', 'تصميم احترافي للمواقع في دبي. صفحات هبوط مُحسَّنة للتحويل للعقارات والتجميل والضيافة والشركات. تصميم متجاوب مع الجوال، سريع التحميل، جاهز لتحسين البحث.')}
        canonical={locale === 'ar' ? 'https://ignite-scale.com/ar/web-design-dubai' : 'https://ignite-scale.com/web-design-dubai'}
        locale={locale}
        breadcrumbs={[{ name: 'Home', url: '/' }, { name: 'Web Design Dubai', url: '/web-design-dubai' }]}
      />
      <div style={{ background: '#03050F', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ paddingTop: 80 }}>
          <section style={{ padding: 'clamp(80px, 12vh, 140px) clamp(20px, 8vw, 120px)' }}>
            <div style={{ maxWidth: 900, margin: '0 auto' }}>
              <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <h1 style={{ fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: 800, color: 'rgba(255,255,255,0.95)', margin: '0 0 24px 0', lineHeight: 1.1 }}>
                  Website Design in Dubai
                </h1>
                <p style={{ fontSize: 18, lineHeight: 1.8, color: 'rgba(240,210,180,0.8)', margin: 0 }}>
                  Beautiful websites are great. Websites that convert are better. We design high-converting sites for Dubai's real estate, hospitality, cosmetics, and B2B brands.
                </p>
              </motion.div>

              <div style={{ marginTop: 64, marginBottom: 64, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 28 }}>
                {[
                  { title: 'High Conversion Design', desc: 'Every element optimized to convert visitors into leads or customers' },
                  { title: 'Mobile-First Approach', desc: '70% of Dubai traffic is mobile. We design for phones first' },
                  { title: 'Lightning Fast', desc: 'Sub-2 second load times. Faster websites convert better' },
                  { title: 'SEO Built-In', desc: 'Optimized for Google. Ranks organically from day one' },
                  { title: 'Easy to Update', desc: 'Admin dashboard for managing content without coding' },
                  { title: 'Responsive Support', desc: 'We maintain and improve your site continuously' },
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    style={{ padding: 28, borderRadius: 12, border: '1px solid rgba(255,110,40,0.12)', background: 'rgba(255,110,40,0.04)' }}
                  >
                    <h3 style={{ fontSize: 16, fontWeight: 600, color: 'rgba(255,200,150,0.9)', margin: '0 0 12px 0' }}>
                      {feature.title}
                    </h3>
                    <p style={{ fontSize: 14, lineHeight: 1.6, color: 'rgba(240,210,180,0.65)', margin: 0 }}>
                      {feature.desc}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div style={{ padding: 40, borderRadius: 12, border: '1px solid rgba(255,110,40,0.15)', background: 'rgba(255,110,40,0.05)', marginBottom: 48 }}>
                <h2 style={{ fontSize: 20, fontWeight: 700, color: 'rgba(255,255,255,0.9)', margin: '0 0 20px 0' }}>
                  Website Packages
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 28 }}>
                  {[
                    { name: 'Funnel Website', price: '5,000 AED', includes: ['Single-purpose funnel', '1 conversion goal', '48h turnaround', 'Basic SEO'] },
                    { name: 'Business Site', price: '9,000 AED', includes: ['5-10 pages', 'Services showcase', 'Blog section', 'Full SEO'] },
                    { name: 'Premium Package', price: '15,000+ AED', includes: ['Custom design', 'Advanced features', 'CRM integration', 'Ongoing support'] },
                  ].map((pkg, i) => (
                    <div key={i} style={{ padding: 24, borderRadius: 8, border: '1px solid rgba(255,110,40,0.15)', background: 'rgba(255,110,40,0.02)' }}>
                      <h3 style={{ fontSize: 16, fontWeight: 700, color: 'rgba(255,255,255,0.9)', margin: '0 0 8px 0' }}>
                        {pkg.name}
                      </h3>
                      <div style={{ fontSize: 20, fontWeight: 700, color: 'rgba(255,160,90,0.8)', margin: '0 0 16px 0' }}>
                        {pkg.price}
                      </div>
                      <ul style={{ fontSize: 12, lineHeight: 1.8, color: 'rgba(240,210,180,0.7)', margin: 0, paddingLeft: 16 }}>
                        {pkg.includes.map((item, j) => <li key={j}>✓ {item}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ padding: 40, borderRadius: 12, background: 'rgba(255,110,40,0.08)', border: '1px solid rgba(255,110,40,0.15)' }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: 'rgba(255,255,255,0.9)', margin: '0 0 16px 0' }}>
                  Why Website Design Matters for Dubai Businesses
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.8, color: 'rgba(240,210,180,0.75)', margin: 0 }}>
                  Your website is your #1 salesman. It works 24/7 turning visitors into leads. A poorly designed website loses money daily. Our clients see 2-3x improvement in conversion rates within 30 days.
                </p>
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
