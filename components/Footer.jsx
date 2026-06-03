import Link from 'next/link'
import { nav, site } from '@/lib/site'
import Logo from './Logo'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer style={{ borderTop: '1px solid var(--line)', background: 'var(--bg-1)' }}>
      {/* CTA band */}
      <div className="shell" style={{ paddingBlock: 'clamp(56px, 9vw, 110px)' }}>
        <div className="footer-cta">
          <h2 style={{ fontSize: 'clamp(34px, 5.5vw, 72px)', maxWidth: '16ch' }}>
            Let’s make your brand <span className="accent-word">impossible</span> to scroll past.
          </h2>
          <Link href="/contact" className="btn btn-primary" data-cursor="hover" style={{ alignSelf: 'start' }}>
            Book a strategy call →
          </Link>
        </div>
      </div>

      <hr className="rule" />

      {/* Link rows */}
      <div className="shell" style={{ paddingBlock: 'clamp(40px, 6vw, 64px)' }}>
        <div className="footer-grid">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 320 }}>
            <Logo />
            <p style={{ color: 'var(--ink-dim)', fontSize: 14, lineHeight: 1.7 }}>
              A growth studio for Dubai brands. Paid social, content and conversion funnels,
              built for measurable pipeline.
            </p>
          </div>

          <div className="footer-cols">
            <FooterCol title="Studio" links={nav} />
            <FooterCol
              title="Connect"
              links={[
                { label: 'Book a call', href: '/contact' },
                { label: site.email, href: `mailto:${site.email}` },
                { label: 'Instagram', href: '#' },
                { label: 'LinkedIn', href: '#' },
              ]}
            />
          </div>
        </div>
      </div>

      <hr className="rule" />
      <div className="shell" style={{
        paddingBlock: 22, display: 'flex', flexWrap: 'wrap', gap: 12,
        justifyContent: 'space-between', alignItems: 'center',
      }}>
        <span className="meta">© {year} {site.legalName}</span>
        <span className="meta">{site.city}, {site.region}</span>
      </div>

      <style>{`
        .footer-cta { display: grid; gap: 28px; align-items: end; }
        .footer-grid { display: grid; gap: 44px; }
        .footer-cols { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; }
        @media (min-width: 760px) {
          .footer-cta { grid-template-columns: 1fr auto; }
          .footer-grid { grid-template-columns: 1fr auto; gap: 80px; }
          .footer-cols { grid-template-columns: auto auto; gap: 80px; }
        }
      `}</style>
    </footer>
  )
}

function FooterCol({ title, links }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      <span className="meta">{title}</span>
      {links.map((l) => (
        <Link key={l.label} href={l.href} className="ulink" data-cursor="hover"
          style={{ fontSize: 14.5, color: 'var(--ink-dim)', width: 'fit-content' }}>
          {l.label}
        </Link>
      ))}
    </div>
  )
}
