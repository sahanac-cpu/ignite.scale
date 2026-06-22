'use client'

import Link from 'next/link'
import { nav, site } from '@/lib/site'
import Logo from './Logo'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer>
      {/* CTA band — carbon recess for a quiet step-down on the canvas */}
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          background: 'var(--color-carbon)',
          paddingBlock: 'clamp(80px, 12vw, 160px)',
        }}
      >
        <div className="shell" style={{ position: 'relative', zIndex: 1 }}>
          <div className="footer-cta">
            <h2
              style={{
                fontSize: 'clamp(40px, 6.5vw, 104px)',
                fontWeight: 300,
                letterSpacing: '-0.03em',
                lineHeight: 0.94,
                color: 'var(--color-paper-white)',
                maxWidth: '16ch',
              }}
            >
              Let&apos;s make your brand{' '}
              <span style={{ fontWeight: 600 }}>impossible</span>{' '}
              to scroll past.
            </h2>
            <Link
              href="/contact"
              className="btn btn-primary-light"
              data-cursor="hover"
              style={{ alignSelf: 'start', justifySelf: 'start', width: 'fit-content' }}
            >
              <span className="btn-label">Book a strategy call</span>
              <span className="btn-ico" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* ink-black footer */}
      <div style={{ background: 'var(--color-ink-black)', borderTop: '1px solid var(--line-soft)' }}>
        <div className="shell" style={{ paddingBlock: 'clamp(40px, 6vw, 72px)' }}>
          <div className="footer-grid">
            {/* brand */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 300 }}>
              <Logo />
              <p
                style={{
                  fontSize: 14,
                  fontWeight: 400,
                  lineHeight: 1.7,
                  color: 'var(--color-ash)',
                }}
              >
                A growth studio for Dubai brands. Paid social, content and conversion funnels,
                built for measurable pipeline.
              </p>
            </div>

            {/* link columns */}
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

        {/* bottom bar */}
        <div
          className="shell"
          style={{
            paddingBlock: 20,
            borderTop: '1px solid var(--line-soft)',
            display: 'flex',
            flexWrap: 'wrap',
            gap: 12,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <span className="meta">© {year} {site.legalName}</span>
          <span className="meta">{site.city}, {site.region}</span>
        </div>
      </div>

      <style>{`
        .footer-cta {
          display: grid;
          gap: 32px;
          align-items: center;
        }
        @media (min-width: 760px) {
          .footer-cta { grid-template-columns: 1fr auto; align-items: end; gap: 48px; }
        }
        .footer-grid {
          display: grid;
          gap: 48px;
        }
        @media (min-width: 760px) {
          .footer-grid { grid-template-columns: 1fr auto; gap: 80px; }
        }
        .footer-cols {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
        }
        @media (min-width: 760px) {
          .footer-cols { gap: 64px; }
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
        <Link
          key={l.label}
          href={l.href}
          className="ulink"
          data-cursor="hover"
          style={{
            fontSize: 14,
            fontWeight: 400,
            color: 'var(--color-ash)',
            width: 'fit-content',
            transition: 'color 0.3s var(--ease-out)',
            textDecoration: 'none',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-bone-white)' }}
          onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--color-ash)' }}
        >
          {l.label}
        </Link>
      ))}
    </div>
  )
}
