'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { nav } from '@/lib/site'
import Logo from './Logo'

export default function Navbar() {
  const pathname = usePathname()
  const [overWhite, setOverWhite] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setOverWhite(window.scrollY > 60)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  const isActive = (href) => pathname === href || (href !== '/' && pathname.startsWith(href))

  const fg = 'var(--color-bone)'
  const fgMuted = 'var(--ink-mute)'
  const border = overWhite ? 'rgba(201,169,110,0.12)' : 'transparent'
  const bg = overWhite ? 'rgba(4,4,4,0.75)' : 'transparent'

  return (
    <header
      style={{
        position: 'fixed', top: 0, left: 0, right: 0,
        zIndex: 'var(--z-nav)',
        transition: 'background-color 0.5s var(--ease-out), border-color 0.5s var(--ease-out)',
        background: bg,
        borderBottom: `1px solid ${border}`,
      }}
    >
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
        style={{
          maxWidth: 1440,
          margin: '0 auto',
          padding: 'clamp(16px, 2.2vw, 24px) clamp(20px, 5vw, 64px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 24,
          color: fg,
          transition: 'color 0.5s var(--ease-out)',
        }}
      >
        {/* logo */}
        <Link href="/" aria-label="Ignite Scale home" data-cursor="hover">
          <Logo />
        </Link>

        {/* desktop nav */}
        <nav className="nav-tabs" style={{ display: 'none', alignItems: 'center', gap: 28 }}>
          {nav.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              data-cursor="hover"
              data-active={isActive(l.href)}
              style={{
                fontSize: 12,
                fontWeight: 400,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: isActive(l.href) ? fg : fgMuted,
                transition: 'color 0.3s var(--ease-out)',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = fg }}
              onMouseLeave={(e) => { e.currentTarget.style.color = isActive(l.href) ? fg : fgMuted }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* desktop CTA */}
        <Link
          href="/contact"
          className="nav-cta"
          data-cursor="hover"
          style={{
            display: 'none',
            padding: '10px 22px',
            borderRadius: 'var(--radius-full)',
            border: '1px solid rgba(201,169,110,0.35)',
            background: 'transparent',
            fontSize: 12,
            fontWeight: 400,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: fg,
            transition: 'background-color 0.35s var(--ease-out), color 0.35s var(--ease-out), border-color 0.35s var(--ease-out)',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--color-gold)'; e.currentTarget.style.color = 'var(--color-ink-black)'; e.currentTarget.style.borderColor = 'var(--color-gold)' }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = fg; e.currentTarget.style.borderColor = 'rgba(201,169,110,0.35)' }}
        >
          Contact
        </Link>

        {/* mobile hamburger */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="nav-burger"
          style={{
            display: 'flex', flexDirection: 'column', gap: 5,
            padding: 8, background: 'none', border: 'none', cursor: 'pointer',
          }}
        >
          {[0, 1].map((i) => (
            <motion.span
              key={i}
              animate={
                open
                  ? i === 0 ? { rotate: 45, y: 3.5 } : { rotate: -45, y: -3.5 }
                  : { rotate: 0, y: 0 }
              }
              transition={{ duration: 0.32, ease: [0.32, 0.72, 0, 1] }}
              style={{
                display: 'block',
                width: 22,
                height: 1.5,
                background: fg,
                borderRadius: 2,
                transition: 'background 0.4s var(--ease-out)',
              }}
            />
          ))}
        </button>
      </motion.div>

      {/* mobile full-screen overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
            style={{
              position: 'fixed', inset: 0, zIndex: -1,
              background: 'var(--color-ink-black)',
              display: 'flex', flexDirection: 'column', justifyContent: 'center',
              padding: 'clamp(32px, 10vw, 80px)',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {nav.map((l, i) => (
                <div key={l.href} style={{ overflow: 'hidden' }}>
                  <motion.div
                    initial={{ y: '110%', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: '110%', opacity: 0 }}
                    transition={{ delay: 0.05 + i * 0.055, duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
                  >
                    <Link
                      href={l.href}
                      style={{
                        display: 'block',
                        paddingBlock: 10,
                        fontFamily: 'var(--font-roobert, Inter, ui-sans-serif)',
                        fontSize: 'clamp(36px, 9vw, 60px)',
                        fontWeight: 300,
                        letterSpacing: '-0.02em',
                        color: isActive(l.href) ? 'var(--color-paper-white)' : 'rgba(255,255,255,0.45)',
                        transition: 'color 0.3s var(--ease-out)',
                        textDecoration: 'none',
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = '#ffffff' }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = isActive(l.href) ? '#ffffff' : 'rgba(255,255,255,0.45)' }}
                    >
                      {l.label}
                    </Link>
                  </motion.div>
                </div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.38, duration: 0.5 }}
                style={{ marginTop: 32 }}
              >
                <Link
                  href="/contact"
                  style={{
                    display: 'inline-flex',
                    padding: '12px 28px',
                    borderRadius: 'var(--radius-full)',
                    border: '1px solid rgba(255,255,255,0.30)',
                    fontSize: 12,
                    fontWeight: 400,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#ffffff',
                    textDecoration: 'none',
                  }}
                >
                  Let&apos;s talk
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 900px) {
          .nav-tabs  { display: flex !important; }
          .nav-cta   { display: inline-flex !important; }
          .nav-burger { display: none !important; }
        }
      `}</style>
    </header>
  )
}
