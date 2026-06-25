import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useT, swapLocale } from '../i18n/locale'
import Logo from './Logo'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [locale, t] = useT()
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const base = locale === 'ar' ? '/ar' : ''
  const isHome = pathname === '/' || pathname === '/ar' || pathname === '/ar/'

  // mobile menu items (desktop nav lives in the left rail)
  const links = [
    { label: t('Home', 'الرئيسية'), id: 'hero', kind: 'section' },
    { label: t('Services', 'الخدمات'), id: 'services', kind: 'section' },
    { label: t('Results', 'النتائج'), id: 'results', kind: 'section' },
    { label: t('FAQ', 'الأسئلة'), to: `${base}/faq`, kind: 'route' },
  ]

  const goItem = (l) => {
    setOpen(false)
    if (l.kind === 'route') { navigate(l.to); return }
    if (isHome) {
      document.getElementById(l.id)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      sessionStorage.setItem('ig_scroll', l.id)
      navigate(base + '/')
    }
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  const altHref = swapLocale(pathname, locale === 'ar' ? 'en' : 'ar')

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-2xl border-b ${
          scrolled ? 'py-3 bg-black/55 border-white/[0.06]' : 'py-5 bg-black/20 border-white/[0.02]'
        }`}
        style={{ WebkitBackdropFilter: 'blur(24px) saturate(140%)', backdropFilter: 'blur(24px) saturate(140%)' }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* logo */}
          <Link to={base + '/'} className="flex items-center select-none" style={{ direction: 'ltr' }}>
            <Logo height={34} />
          </Link>

          {/* right cluster */}
          <div className="flex items-center gap-4 md:gap-6">
            {/* EN / AR toggle */}
            <Link
              to={altHref}
              className="text-[11px] font-body font-medium tracking-[0.28em] uppercase text-white/45 hover:text-white/85 transition-colors px-2.5 py-1 border border-white/12 hover:border-accent/45 rounded-full"
              style={{ direction: 'ltr' }}
              aria-label={locale === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'}
            >
              {locale === 'ar' ? 'EN' : 'AR'}
            </Link>

            {/* Book a free consultation */}
            <Link to={`${base}/book`} className="hidden sm:inline-flex btn-primary text-[10px] px-6 py-3">
              {t('Book a Free Consultation', 'احجز استشارة مجانية')}
            </Link>

            {/* mobile menu trigger */}
            <button
              className="md:hidden p-2 flex flex-col gap-[5px]"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="block w-5 h-px bg-white/70"
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
        </div>
      </motion.header>

      {/* mobile full-screen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden flex flex-col justify-center px-8"
            style={{ background: 'rgba(5,6,9,0.97)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
          >
            <nav className="flex flex-col gap-1">
              {links.map((l, i) => (
                <div key={l.label} className="overflow-hidden">
                  <motion.div
                    initial={{ y: '110%' }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.05 + i * 0.05, duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
                  >
                    <button
                      onClick={() => goItem(l)}
                      className="block py-2.5 text-left w-full"
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(30px, 8vw, 46px)',
                        fontWeight: 500,
                        letterSpacing: '-0.02em',
                        color: 'rgba(237,224,204,0.55)',
                        background: 'none', border: 'none', cursor: 'pointer',
                      }}
                    >
                      {l.label}
                    </button>
                  </motion.div>
                </div>
              ))}
            </nav>
            <Link
              to={`${base}/book`}
              className="btn-primary text-[11px] px-8 py-4 mt-8 self-start"
            >
              {t('Book a Free Consultation', 'احجز استشارة مجانية')}
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
