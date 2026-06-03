'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { nav } from '@/lib/site'
import Logo from './Logo'

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  const isActive = (href) => pathname === href || (href !== '/' && pathname.startsWith(href))

  return (
    <header
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 'var(--z-nav)',
        transition: 'background-color .4s ease, border-color .4s ease, backdrop-filter .4s ease, box-shadow .4s ease',
        backgroundColor: scrolled ? 'rgba(27,15,18,0.86)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px) saturate(150%)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(150%)' : 'none',
        borderBottom: `1px solid ${scrolled ? 'var(--line-strong)' : 'transparent'}`,
        boxShadow: scrolled ? '0 10px 40px rgba(0,0,0,0.45)' : 'none',
      }}
    >
      <div
        className="shell"
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          height: scrolled ? 64 : 84, transition: 'height .4s ease',
        }}
      >
        <Link href="/" aria-label="Ignite Scale home" data-cursor="hover">
          <Logo />
        </Link>

        {/* Desktop tabs */}
        <nav style={{ display: 'none', gap: 'clamp(20px, 2.4vw, 38px)' }} className="nav-tabs">
          {nav.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              data-cursor="hover"
              data-active={isActive(l.href)}
              className="ulink"
              style={{
                fontSize: 13, fontWeight: 500, letterSpacing: '0.01em',
                color: isActive(l.href) ? 'var(--ink)' : 'var(--ink-dim)',
                transition: 'color .25s ease',
              }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div style={{ display: 'none', alignItems: 'center', gap: 18 }} className="nav-cta">
          <span className="meta">Dubai, UAE</span>
          <Link href="/contact" className="btn btn-primary" data-cursor="hover" style={{ padding: '0.7rem 1.3rem', fontSize: 12.5 }}>
            Let’s talk
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="nav-burger"
          style={{
            display: 'flex', flexDirection: 'column', gap: 5, padding: 10,
            background: 'none', border: 'none', cursor: 'pointer',
          }}
        >
          {[0, 1].map((i) => (
            <motion.span
              key={i}
              animate={open ? (i === 0 ? { rotate: 45, y: 3.5 } : { rotate: -45, y: -3.5 }) : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: 'block', width: 24, height: 1.5, background: 'var(--ink)', borderRadius: 2 }}
            />
          ))}
        </button>
      </div>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.36, ease: [0.16, 1, 0.3, 1] }}
            className="nav-mobile"
            style={{
              overflow: 'hidden',
              background: 'rgba(6,17,14,0.96)',
              backdropFilter: 'blur(22px)',
              WebkitBackdropFilter: 'blur(22px)',
              borderTop: '1px solid var(--line)',
            }}
          >
            <div className="shell" style={{ display: 'flex', flexDirection: 'column', gap: 4, paddingBlock: 22 }}>
              {nav.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={l.href}
                    style={{
                      display: 'block', paddingBlock: 12,
                      fontFamily: 'var(--font-display)', fontSize: 30, fontWeight: 500,
                      letterSpacing: '-0.02em',
                      color: isActive(l.href) ? 'var(--accent)' : 'var(--ink)',
                    }}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <Link href="/contact" className="btn btn-primary" style={{ marginTop: 16, justifyContent: 'center' }}>
                Let’s talk
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 900px) {
          .nav-tabs { display: flex !important; }
          .nav-cta { display: flex !important; }
          .nav-burger { display: none !important; }
          .nav-mobile { display: none !important; }
        }
      `}</style>
    </header>
  )
}
