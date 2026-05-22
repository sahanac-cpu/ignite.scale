import { motion } from 'framer-motion'

const footerLinks = {
  Services: ['Social Media', 'Paid Advertising', 'Content Production', 'Website Design'],
  Company: ['About Us', 'Case Studies', 'Process', 'Careers'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
}

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.05] overflow-hidden">
      {/* Bottom ambient */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(255,51,0,0.04) 0%, transparent 65%)' }}
      />

      {/* CTA band */}
      <div className="border-b border-white/[0.05] py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h3
              className="text-white font-body font-semibold leading-[0.95] tracking-tight"
              style={{ fontSize: 'clamp(36px, 5.5vw, 72px)' }}
            >
              Ready to{' '}
              <em
                style={{
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                  fontStyle: 'italic',
                  fontWeight: 300,
                  background: 'linear-gradient(135deg, #FF3300, #FF6B35)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Ignite?
              </em>
            </h3>
            <p className="text-white/25 text-sm mt-4 max-w-xs font-body font-light leading-relaxed">
              Your competitors are scaling. Every week you wait is revenue left on the table.
            </p>
          </div>
          <a href="#booking" className="btn-primary text-[11px] px-10 py-5 shrink-0">
            Book Free Strategy Call
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="px-6 md:px-12 lg:px-24 py-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-baseline gap-1 mb-5">
              <span className="text-white font-body font-light tracking-[0.12em] text-[14px] uppercase">ignite</span>
              <span className="text-accent font-body font-light text-[14px]">.</span>
              <span className="text-white/50 font-body font-light tracking-[0.12em] text-[14px] uppercase">scale</span>
            </div>
            <p className="text-white/25 text-sm leading-relaxed max-w-xs mb-6 font-body font-light">
              Dubai's most results-driven social media marketing agency. We build brands that dominate.
            </p>
            <div className="space-y-2">
              <div className="label-sm">Headquarters</div>
              <div className="text-white/35 text-sm font-body">DIFC, Dubai, UAE</div>
              <a href="mailto:admin@ignite-scale.com" className="text-white/35 text-sm hover:text-accent transition-colors block font-body">
                admin@ignite-scale.com
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <div className="label-sm mb-5">{section}</div>
              <ul className="space-y-3">
                {links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-white/30 text-sm hover:text-white/70 transition-colors font-body font-light">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.05] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="label-sm">© 2025 Ignite Scale. All rights reserved. Dubai, UAE.</div>
          <div className="flex items-center gap-5">
            {['Instagram', 'TikTok', 'LinkedIn', 'X'].map((s) => (
              <a key={s} href="#" className="label-sm hover:text-white/50 transition-colors">{s}</a>
            ))}
          </div>
        </div>
      </div>

      {/* Ghost wordmark */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none overflow-hidden select-none" aria-hidden>
        <div
          className="text-center font-body font-semibold leading-none tracking-tighter opacity-[0.018]"
          style={{ fontSize: 'clamp(80px, 18vw, 220px)', color: 'white', transform: 'translateY(22%)' }}
        >
          IGNITE.SCALE
        </div>
      </div>
    </footer>
  )
}
