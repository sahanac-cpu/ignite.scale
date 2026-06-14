import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { useT, swapLocale } from '../i18n/locale'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [hovered, setHovered] = useState(null)
  const [locale, t] = useT()
  const { pathname } = useLocation()

  const links = [
    { label: t('Services', 'الخدمات'), href: '#services' },
    { label: t('Results', 'النتائج'), href: '#results' },
    { label: t('Process', 'العملية'), href: '#process' },
    { label: t('FAQ', 'الأسئلة الشائعة'), href: '#faq' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const altHref = swapLocale(pathname, locale === 'ar' ? 'en' : 'ar')

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'py-3 bg-black/80 backdrop-blur-2xl border-b border-white/[0.04]'
          : 'py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">

        {/* Logo (stays LTR even in RTL) */}
        <Link
          to={locale === 'ar' ? '/ar' : '/'}
          className="flex items-baseline gap-1 select-none"
          style={{ direction: 'ltr' }}
        >
          <span className="text-white font-body font-light tracking-[0.12em] text-[15px] uppercase">
            ignite
          </span>
          <span className="text-accent font-body font-light text-[15px]">.</span>
          <span className="text-white/60 font-body font-light tracking-[0.12em] text-[15px] uppercase">
            scale
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onMouseEnter={() => setHovered(l.label)}
              onMouseLeave={() => setHovered(null)}
              className="relative text-[11px] font-body font-medium tracking-[0.3em] uppercase text-white/35 hover:text-white/80 transition-colors duration-200"
            >
              {l.label}
              <motion.span
                className="absolute -bottom-1 left-0 h-px bg-accent"
                animate={{ width: hovered === l.label ? '100%' : '0%' }}
                transition={{ duration: 0.2 }}
              />
            </a>
          ))}
        </nav>

        {/* Right */}
        <div className="hidden md:flex items-center gap-5">
          <Link
            to={altHref}
            className="text-[11px] font-body font-medium tracking-[0.3em] uppercase text-white/40 hover:text-white/80 transition-colors px-2 py-1 border border-white/10 hover:border-accent/40 rounded-sm"
            style={{ direction: 'ltr' }}
            aria-label={locale === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'}
          >
            {locale === 'ar' ? 'EN' : 'AR'}
          </Link>
          <span className="label-sm">{t('Dubai, UAE', 'دبي، الإمارات')}</span>
          <a href="#booking" className="btn-primary text-[10px] px-5 py-2.5">
            {t('Book a Call', 'احجز مكالمة')}
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden p-2 flex flex-col gap-[5px]"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="block w-5 h-px bg-white/60"
              animate={
                i === 0 ? { rotate: open ? 45 : 0, y: open ? 6 : 0 }
                : i === 1 ? { opacity: open ? 0 : 1 }
                : { rotate: open ? -45 : 0, y: open ? -6 : 0 }
              }
              transition={{ duration: 0.22 }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-black/95 backdrop-blur-2xl border-t border-white/[0.04] px-6"
          >
            <div className="py-6 flex flex-col gap-5">
              {links.map((l, i) => (
                <motion.a
                  key={l.label}
                  href={l.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="text-[11px] tracking-[0.3em] uppercase text-white/40 hover:text-white transition-colors font-body"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </motion.a>
              ))}
              <Link
                to={altHref}
                onClick={() => setOpen(false)}
                className="text-[11px] tracking-[0.3em] uppercase text-white/40 font-body"
                style={{ direction: 'ltr' }}
              >
                {locale === 'ar' ? 'English' : 'العربية'}
              </Link>
              <a href="#booking" className="btn-primary mt-2 text-center" onClick={() => setOpen(false)}>
                {t('Book a Call', 'احجز مكالمة')}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
