import { useRef, useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

/* ─── Animated ambient orbs ─── */
function Orb({ style, className }) {
  return (
    <div
      className={`absolute rounded-full pointer-events-none ${className}`}
      style={style}
    />
  )
}

/* ─── Floating frosted panel ─── */
function FrostedCard({ card, mouseX, mouseY, delay, index }) {
  const totalCards = 3
  const spread = 220
  const xBase = (index - 1) * spread

  const rotFactor = card.rotation / 7
  const parallaxX = useTransform(mouseX, [-1, 1], [-14 * rotFactor, 14 * rotFactor])
  const parallaxY = useTransform(mouseY, [-1, 1], [-8, 8])

  const springX = useSpring(parallaxX, { stiffness: 60, damping: 18 })
  const springY = useSpring(parallaxY, { stiffness: 60, damping: 18 })

  return (
    <motion.div
      initial={{ opacity: 0, y: 90, rotate: card.rotation * 0.3, scale: 0.88 }}
      animate={{ opacity: 1, y: 0, rotate: card.rotation, scale: 1 }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay }}
      style={{ x: springX, y: springY, zIndex: card.zIndex }}
      className="relative shrink-0"
    >
      <motion.div
        whileHover={{
          scale: 1.04,
          rotate: card.rotation * 0.4,
          zIndex: 20,
          transition: { duration: 0.4, ease: 'easeOut' },
        }}
        className="glass-card gradient-border noise"
        style={{
          width: 230,
          height: 340,
          borderRadius: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '28px 24px',
          boxShadow: '0 30px 80px rgba(0,0,0,0.5), 0 0 40px rgba(255,51,0,0.04)',
        }}
      >
        {/* Top label */}
        <div className="flex items-center justify-between">
          <span className="label-sm">{card.label}</span>
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: 'rgba(255,51,0,0.6)', boxShadow: '0 0 8px rgba(255,51,0,0.8)' }}
          />
        </div>

        {/* Icon */}
        <div className="flex items-center justify-center py-4">{card.icon}</div>

        {/* Bottom */}
        <div>
          <div
            className="font-display italic font-light text-white/90 leading-none mb-2"
            style={{ fontSize: 38 }}
          >
            {card.value}
          </div>
          <div className="text-[11px] tracking-[0.2em] uppercase text-white/35 leading-snug">
            {card.category}
          </div>
          <div className="text-[11px] text-white/20 mt-1 leading-snug">{card.sub}</div>
        </div>
      </motion.div>
    </motion.div>
  )
}

/* ─── Card data ─── */
const cards = [
  {
    label: 'Growth',
    category: 'Social Media',
    value: '+1,863%',
    sub: 'Avg. follower growth',
    rotation: -9,
    zIndex: 1,
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <path d="M6 34l10-14 7 5 7-11 8 20" stroke="url(#g1)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="38" cy="9" r="4" stroke="rgba(255,107,53,0.5)" strokeWidth="1.2"/>
        <defs>
          <linearGradient id="g1" x1="6" y1="34" x2="38" y2="9" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF3300" stopOpacity="0.7"/>
            <stop offset="1" stopColor="#FF6B35" stopOpacity="0.4"/>
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    label: 'Revenue',
    category: 'Paid Advertising',
    value: 'AED 50M+',
    sub: 'Client revenue generated',
    rotation: 0,
    zIndex: 3,
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <path d="M22 6v32M12 16l10-10 10 10" stroke="url(#g2)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 30h24" stroke="rgba(255,107,53,0.35)" strokeWidth="1.2" strokeLinecap="round"/>
        <defs>
          <linearGradient id="g2" x1="12" y1="38" x2="32" y2="6" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF6B35" stopOpacity="0.5"/>
            <stop offset="1" stopColor="#FF3300" stopOpacity="0.8"/>
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    label: 'Scale',
    category: 'Web & Funnels',
    value: '8.45×',
    sub: 'Avg. return on ad spend',
    rotation: 9,
    zIndex: 1,
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <rect x="6" y="18" width="12" height="20" rx="1" stroke="rgba(255,51,0,0.6)" strokeWidth="1.2"/>
        <rect x="26" y="8" width="12" height="30" rx="1" stroke="rgba(255,107,53,0.7)" strokeWidth="1.2"/>
        <path d="M18 26h8" stroke="rgba(255,255,255,0.12)" strokeWidth="1" strokeLinecap="round"/>
      </svg>
    ),
  },
]

/* ─── Main hero ─── */
export default function Hero() {
  const containerRef = useRef(null)

  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)

  const handleMouseMove = (e) => {
    const { left, top, width, height } = containerRef.current.getBoundingClientRect()
    rawX.set(((e.clientX - left) / width - 0.5) * 2)
    rawY.set(((e.clientY - top) / height - 0.5) * 2)
  }

  /* Heading words */
  const line1 = 'Turn Dubai\'s'
  const line2 = 'Attention'
  const line3 = 'Into Revenue.'

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      id="home"
      className="relative min-h-screen flex flex-col overflow-hidden noise"
      style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, #130800 0%, #050505 55%)' }}
    >
      {/* Grid */}
      <div className="absolute inset-0 grid-bg opacity-35" />

      {/* Animated glow orbs */}
      <Orb
        className="animate-drift animate-glow-pulse"
        style={{
          top: '-15%', left: '-8%',
          width: 700, height: 700,
          background: 'radial-gradient(circle, rgba(255,51,0,0.11) 0%, transparent 60%)',
          filter: 'blur(1px)',
        }}
      />
      <Orb
        className="animate-float-b"
        style={{
          top: '20%', right: '-12%',
          width: 550, height: 550,
          background: 'radial-gradient(circle, rgba(255,107,53,0.07) 0%, transparent 65%)',
        }}
      />
      <Orb
        style={{
          bottom: '5%', left: '30%',
          width: 400, height: 300,
          background: 'radial-gradient(ellipse, rgba(255,51,0,0.05) 0%, transparent 70%)',
        }}
      />

      {/* Scroll indicator */}
      <motion.div
        className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
      >
        <motion.div
          className="h-20 w-px"
          style={{ background: 'linear-gradient(to bottom, rgba(255,51,0,0.5), transparent)' }}
          initial={{ scaleY: 0, originY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 2.4, duration: 1.2, ease: 'easeOut' }}
        />
        <span
          className="label-sm"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', letterSpacing: '0.35em' }}
        >
          Scroll
        </span>
      </motion.div>

      {/* ─── Main content ─── */}
      <div className="relative z-10 flex flex-col flex-1 px-6 md:px-12 lg:px-24 pt-36 pb-0">
        <div className="max-w-7xl mx-auto w-full flex flex-col flex-1">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex items-center gap-4 mb-10"
          >
            <motion.span
              className="block w-10 h-px bg-accent"
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            />
            <span className="label-sm text-accent/70">
              Dubai · Social Media Marketing Agency · Est. 2022
            </span>
          </motion.div>

          {/* ─── Headline ─── */}
          <div className="overflow-hidden mb-2">
            <motion.p
              className="font-body font-light text-white/30 tracking-[0.25em] uppercase text-xs mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              We Are A
            </motion.p>
          </div>

          {[
            { text: line1, delay: 0.25, serif: false, size: 'clamp(52px, 8.5vw, 118px)', weight: 300, italic: false, color: 'rgba(255,255,255,0.55)' },
            { text: line2, delay: 0.35, serif: true, size: 'clamp(72px, 12vw, 164px)', weight: 300, italic: true, color: '#ffffff' },
            { text: line3, delay: 0.45, serif: true, size: 'clamp(52px, 8.5vw, 118px)', weight: 300, italic: true, color: null, gradient: true },
          ].map(({ text, delay, serif, size, weight, italic, color, gradient }) => (
            <div key={text} className="overflow-hidden">
              <motion.div
                initial={{ y: '110%', skewY: 2 }}
                animate={{ y: 0, skewY: 0 }}
                transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1], delay }}
              >
                <span
                  style={{
                    display: 'block',
                    fontFamily: serif ? '"Cormorant Garamond", Georgia, serif' : '"DM Sans", system-ui, sans-serif',
                    fontStyle: italic ? 'italic' : 'normal',
                    fontWeight: weight,
                    fontSize: size,
                    lineHeight: 0.92,
                    letterSpacing: '-0.02em',
                    color: gradient ? undefined : color,
                    background: gradient ? 'linear-gradient(135deg, #FF3300 0%, #FF6B35 100%)' : undefined,
                    WebkitBackgroundClip: gradient ? 'text' : undefined,
                    WebkitTextFillColor: gradient ? 'transparent' : undefined,
                    backgroundClip: gradient ? 'text' : undefined,
                  }}
                >
                  {text}
                </span>
              </motion.div>
            </div>
          ))}

          {/* Body + CTA row */}
          <motion.div
            className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85 }}
          >
            <p className="text-white/35 text-sm leading-relaxed max-w-xs font-body font-light">
              We build social ecosystems that generate real, measurable revenue for Dubai's most ambitious brands.
            </p>
            <div className="flex items-center gap-6 shrink-0">
              <a href="#booking" className="btn-primary">
                Free Strategy Call
              </a>
              <a href="#results" className="btn-ghost">
                Our Work
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M1 6.5h11M7.5 2l4.5 4.5L7.5 11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </motion.div>

          {/* ─── Frosted cards ─── */}
          <div className="mt-auto pt-16 pb-0 flex justify-center">
            <motion.div
              className="relative flex items-end justify-center"
              style={{ gap: 0, paddingBottom: 0 }}
            >
              {/* Background glow behind cards */}
              <div
                className="absolute inset-x-0 bottom-0 h-48 pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse 70% 100% at 50% 100%, rgba(255,51,0,0.06) 0%, transparent 70%)',
                }}
              />

              {cards.map((card, i) => (
                <div
                  key={card.label}
                  style={{
                    marginLeft: i === 0 ? 0 : -40,
                    zIndex: card.zIndex,
                    marginBottom: i === 1 ? 0 : -20,
                  }}
                >
                  <FrostedCard
                    card={card}
                    mouseX={rawX}
                    mouseY={rawY}
                    delay={0.6 + i * 0.12}
                    index={i}
                  />
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>

      {/* Bottom gradient fade into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: 'linear-gradient(to top, #050505 0%, transparent 100%)' }}
      />
    </section>
  )
}
