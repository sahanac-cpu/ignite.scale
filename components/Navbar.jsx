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
    <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 'var(--z-nav)', padding: 'clamp(12px, 2vw, 20px) clamp(12px, 4vw, 28px)' }}>
      <motion.div
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
        className="navshell"
        style={{
          maxWidth: 1240, margin: '0 auto',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: 20, paddingLeft: 'clamp(16px,2vw,24px)', paddingRight: 'clamp(8px,1.4vw,12px)',
          height: scrolled ? 60 : 70,
          borderRadius: 999,
          transition: 'height .5s var(--ease-drawer), background-color .5s var(--ease-out), border-color .5s var(--ease-out), box-shadow .5s var(--ease-out)',
          background: scrolled ? 'rgba(21,12,14,0.78)' : 'rgba(21,12,14,0.32)',
          backdropFilter: 'blur(20px) saturate(150%)',
          WebkitBackdropFilter: 'blur(20px) saturate(150%)',
          border: `1px solid ${scrolled ? 'var(--line-strong)' : 'rgba(241,234,223,0.08)'}`,
          boxShadow: scrolled ? '0 16px 50px -20px rgba(0,0,0,0.8)' : '0 10px 40px -28px rgba(0,0,0,0.7)',
        }}
      >
        <Link href="/" aria-label="Ignite Scale home" data-cursor="hover"><Logo /></Link>

        <nav style={{ display: 'none', gap: 'clamp(18px, 2vw, 32px)' }} className="nav-tabs">
          {nav.map((l) => (
            <Link key={l.href} href={l.href} data-cursor="hover" data-active={isActive(l.href)} className="ulink"
              style={{ fontSize: 13.5, fontWeight: 500, color: isActive(l.href) ? 'var(--ink)' : 'var(--ink-dim)', transition: 'color .3s var(--ease-out)' }}>
              {l.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="btn btn-primary nav-cta" data-cursor="hover"
          style={{ display: 'none', padding: '0.45rem 0.45rem 0.45rem 1.1rem', fontSize: 12.5 }}>
          <span className="btn-label">Let’s talk</span>
          <span className="btn-ico" aria-hidden="true">→</span>
        </Link>

        <button onClick={() => setOpen((v) => !v)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}
          className="nav-burger"
          style={{ display: 'flex', flexDirection: 'column', gap: 5, padding: 10, background: 'none', border: 'none', cursor: 'pointer' }}>
          {[0, 1].map((i) => (
            <motion.span key={i}
              animate={open ? (i === 0 ? { rotate: 45, y: 3.5 } : { rotate: -45, y: -3.5 }) : { rotate: 0, y: 0 }}
              transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
              style={{ display: 'block', width: 24, height: 1.5, background: 'var(--ink)', borderRadius: 2 }} />
          ))}
        </button>
      </motion.div>

      {/* Mobile full overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
            className="nav-mobile"
            style={{
              position: 'fixed', inset: 0, zIndex: -1,
              background: 'rgba(10,5,6,0.86)', backdropFilter: 'blur(28px)', WebkitBackdropFilter: 'blur(28px)',
              display: 'flex', flexDirection: 'column', justifyContent: 'center',
              padding: 'clamp(24px,8vw,64px)',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {nav.map((l, i) => (
                <div key={l.href} style={{ overflow: 'hidden' }}>
                  <motion.div
                    initial={{ y: '110%', opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: '110%', opacity: 0 }}
                    transition={{ delay: 0.06 + i * 0.06, duration: 0.6, ease: [0.32, 0.72, 0, 1] }}>
                    <Link href={l.href} style={{ display: 'block', paddingBlock: 8,
                      fontFamily: 'var(--font-display)', fontSize: 'clamp(34px,9vw,56px)', fontWeight: 500,
                      letterSpacing: '-0.01em', color: isActive(l.href) ? 'var(--accent)' : 'var(--ink)' }}>
                      {l.label}
                    </Link>
                  </motion.div>
                </div>
              ))}
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.5 }}>
                <Link href="/contact" className="btn btn-primary" style={{ marginTop: 24, padding: '0.9rem 0.6rem 0.9rem 1.4rem' }}>
                  <span className="btn-label">Let’s talk</span><span className="btn-ico" aria-hidden="true">→</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 940px) {
          .nav-tabs { display: flex !important; }
          .nav-cta { display: inline-flex !important; }
          .nav-burger { display: none !important; }
          .nav-mobile { display: none !important; }
        }
      `}</style>
    </header>
  )
}
