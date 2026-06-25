import SEOMeta from './SEOMeta'
import Navbar from './Navbar'
import Footer from './Footer'
import { useT } from '../i18n/locale'

/* Shared layout for Privacy / Terms / Cookies. Pass title, updated date,
   intro paragraph, and an array of { h, body[] } sections. */
export default function LegalLayout({ slug, title, updated, intro, sections }) {
  const [locale] = useT()
  return (
    <>
      <SEOMeta
        title={`${title} | Ignite Scale`}
        description={intro}
        canonical={`https://ignite-scale.com${locale === 'ar' ? '/ar' : ''}/${slug}`}
        locale={locale}
        breadcrumbs={[{ name: 'Home', url: '/' }, { name: title, url: `/${slug}` }]}
      />
      <Navbar />
      <main style={{ background: 'var(--sec-hero)', minHeight: '100vh' }}>
        <section style={{ padding: 'clamp(130px, 20vh, 220px) clamp(24px, 7vw, 110px) clamp(70px, 11vh, 150px)' }}>
          <div style={{ maxWidth: 820, margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 22 }}>
              <span aria-hidden="true" style={{ width: 7, height: 7, background: 'var(--accent)', display: 'inline-block' }} />
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 10, letterSpacing: '0.4em', textTransform: 'uppercase', color: 'var(--ink-dim)', fontWeight: 500 }}>
                {updated}
              </span>
            </div>

            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(40px, 6vw, 80px)', letterSpacing: '-0.02em', lineHeight: 1.0, color: 'var(--ink)', margin: '0 0 28px' }}>
              {title}
            </h1>

            <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.8, color: 'var(--ink-dim)', margin: '0 0 12px' }}>
              {intro}
            </p>

            <div style={{ marginTop: 'clamp(36px, 5vw, 56px)' }}>
              {sections.map((s, i) => (
                <div key={i} style={{ marginBottom: 'clamp(32px, 4vw, 44px)' }}>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(22px, 2.4vw, 30px)', letterSpacing: '-0.01em', color: 'var(--ink)', margin: '0 0 14px' }}>
                    {i + 1}. {s.h}
                  </h2>
                  {s.body.map((p, j) => (
                    <p key={j} style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.8, color: 'var(--ink-dim)', margin: '0 0 12px' }}>
                      {p}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            <p style={{ marginTop: 48, fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--ink-mute)' }}>
              Questions? Email{' '}
              <a href="mailto:admin@ignite-scale.com" style={{ color: 'var(--accent)' }} data-cursor="hover">admin@ignite-scale.com</a>.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
