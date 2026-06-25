import SEOMeta from '../components/SEOMeta'
import { useT } from '../i18n/locale'
import Navbar from '../components/Navbar'
import Booking from '../components/Booking'
import Footer from '../components/Footer'

export default function BlogCPLReductionPage() {
  const [locale, t] = useT()
  return (
    <>
      <SEOMeta
        title={t('How to Cut Ad Cost Per Lead by 60% | Ignite Scale', 'كيف تخفض تكلفة العميل المحتمل بنسبة ٦٠٪ | Ignite Scale')}
        description={t('Step-by-step framework for reducing CPL 60–80%: landing page optimisation, audience targeting, funnel design, copywriting. Tested on 50+ London campaigns.', 'إطار خطوة بخطوة لخفض تكلفة العميل المحتمل بنسبة ٦٠–٨٠٪: تحسين صفحات الهبوط، استهداف الجمهور، تصميم القمعات، كتابة النصوص. مُختبَر على أكثر من ٥٠ حملة في لندن.')}
        canonical={locale === 'ar' ? 'https://ignite-scale.com/ar/blog/reduce-cost-per-lead' : 'https://ignite-scale.com/blog/reduce-cost-per-lead'}
        locale={locale}
        breadcrumbs={[{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Cut CPL by 60%', url: '/blog/reduce-cost-per-lead' }]}
        article={{ datePublished: '2026-04-12', headline: 'How to Cut Your Ad Cost Per Lead by 60%' }}
      />
      <div style={{ background: '#03050F', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ paddingTop: 80 }}>
          <article style={{ padding: 'clamp(80px, 12vh, 140px) clamp(20px, 8vw, 120px)' }}>
            <div style={{ maxWidth: 800, margin: '0 auto' }}>
              <h1 style={{ fontSize: 'clamp(36px, 6vw, 58px)', fontWeight: 800, color: 'rgba(255,255,255,0.95)', margin: '0 0 24px 0' }}>
                How to Reduce Your Cost Per Lead by 60-80%
              </h1>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(240,210,180,0.75)', margin: '0 0 48px 0' }}>
                Most London brands overpay for leads because they don't optimize the complete funnel. Here's the exact framework we use to cut CPL by 60-80% within 30 days.
              </p>

              {[
                { title: '1. Fix Your Landing Page (Impact: 30-40% CPL reduction)', items: [
                  '• Load time under 2 seconds (test with PageSpeed Insights)',
                  '• Single, focused CTA above the fold',
                  '• Match ad copy exactly to landing page headline',
                  '• Remove navigation menu (distraction)',
                  '• Add social proof (testimonials, numbers)',
                ] },
                { title: '2. Improve Your Offer (Impact: 20-30% reduction)', items: [
                  '• Free audit/consultation > generic lead form',
                  '• Time-bound offer: "Free audit for next 10 clients"',
                  '• Lead magnet: "Download our guide to..."',
                  '• Guarantee: Money-back or risk-free trial',
                ] },
                { title: '3. Tighter Targeting (Impact: 15-25% reduction)', items: [
                  '• Layer audiences: interests + behaviors + demographics',
                  '• Exclude competitors\' audiences',
                  '• Use lookalike audiences (from existing customers)',
                  '• Geographic + language targeting',
                ] },
                { title: '4. Better Copy (Impact: 10-20% reduction)', items: [
                  '• Ad copy should address a specific pain point',
                  '• Include a clear CTA: "Get free audit," "Book now"',
                  '• Use numbers: "60% CPL reduction," "48h turnaround"',
                  '• Test 3-5 variations and scale the winner',
                ] },
              ].map((section, i) => (
                <div key={i} style={{ marginBottom: 48, paddingBottom: 48, borderBottom: i < 3 ? '1px solid rgba(201,169,110,0.08)' : 'none' }}>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: 'rgba(255,200,150,0.95)', margin: '0 0 16px 0' }}>
                    {section.title}
                  </h3>
                  {section.items.map((item, j) => (
                    <p key={j} style={{ fontSize: 15, lineHeight: 1.8, color: 'rgba(240,210,180,0.7)', margin: '8px 0' }}>
                      {item}
                    </p>
                  ))}
                </div>
              ))}

              <div style={{ padding: 32, borderRadius: 12, background: 'rgba(201,169,110,0.08)', border: '1px solid rgba(201,169,110,0.15)' }}>
                <p style={{ fontSize: 15, lineHeight: 1.8, color: 'rgba(240,210,180,0.75)', margin: 0 }}>
                  <strong>Expected timeline:</strong> Implement all 4 steps → 30 days optimization → 60-80% CPL reduction. Most brands see improvements in week 2.
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
