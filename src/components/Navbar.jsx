import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Results', href: '#results' },
  { label: 'Process', href: '#process' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [hovered, setHovered] = useState(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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

        {/* Logo */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className="flex items-center select-none"
          style={{ height: 50, width: 100 }}
        >
          <img
            src="/logo.svg"
            alt="Ignite Scale"
            style={{ height: '100%', width: '100%', objectFit: 'contain' }}
          />
        </a>

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
        <div className="hidden md:flex items-center gap-6">
          <span className="label-sm">Dubai, UAE</span>
          <a href="#booking" className="btn-primary text-[10px] px-5 py-2.5">
            Book a Call
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
              <a href="#booking" className="btn-primary mt-2 text-center" onClick={() => setOpen(false)}>
                Book a Call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
