import SEOMeta from '../components/SEOMeta'
import { useT } from '../i18n/locale'
import Navbar from '../components/Navbar'
import Booking from '../components/Booking'
import Footer from '../components/Footer'

const FAQS = [
  { q: 'What happens in a Client Acquisition Audit?', a: 'A 45-minute diagnostic mapping your current funnel, identifying where leads are lost, benchmarking competitor visibility, and delivering a prioritised 90-day roadmap — provided whether or not you engage Ignite Scale.' },
  { q: 'Is the audit really free?', a: 'Yes — and deliberately limited to six per month so each one gets senior attention. The roadmap is yours to keep either way.' },
  { q: 'Who qualifies for an audit?', a: 'Established UAE service businesses with an offer that already sells, a team ready to follow up enquiries, and a genuine reason to build owned pipeline. If that is not you yet, our articles are the better starting point.' },
  { q: 'Why do you charge in GBP?', a: 'Ignite Scale is a UK-founded company delivering UK-standard strategy, contracts and reporting to UAE businesses. GBP pricing reflects that standard — clients evaluate the investment on cost per booked appointment, not currency.' },
]

export default function BookingPage() {
  const [locale] = useT()
  const base = locale === 'ar' ? '/ar' : ''
  return (
    <>
      <SEOMeta
        title="Book a Client Acquisition Audit | Ignite Scale"
        description="A 45-minute diagnostic of your UAE acquisition funnel: where leads come from, where they die, and the prioritised 90-day plan to fix it. Six audits per month."
        canonical={`https://ignite-scale.com${base}/audit`}
        locale={locale}
        breadcrumbs={[{ name: 'Home', url: '/' }, { name: 'Client Acquisition Audit', url: '/audit' }]}
        faqs={FAQS}
        service={{
          name: 'Client Acquisition Audit',
          serviceType: 'Marketing Audit',
          description: 'A 45-minute diagnostic of a UAE business’s acquisition funnel with a prioritised 90-day roadmap.',
        }}
      />
      <div style={{ background: '#03050F', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ paddingTop: 80 }}>
          <Booking />
        </main>
        <Footer />
      </div>
    </>
  )
}
