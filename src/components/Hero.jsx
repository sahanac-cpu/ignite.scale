import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

/* ─────────────────────────────────────────────
   ATMOSPHERIC BACKGROUND
   Layered aurora mesh — warm ember/burgundy
───────────────────────────────────────────── */
function AuroraBG() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {/* Base aurora gradient — CSS only, no JS */}
      <div className="absolute inset-0 aurora-bg" />

      {/* Animated slow-drifting warm sweep — TRNSPR inspired */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(ellipse 70% 50% at 15% 30%, rgba(160,30,0,0.20) 0%, transparent 60%)',
            'radial-gradient(ellipse 70% 50% at 85% 65%, rgba(160,30,0,0.18) 0%, transparent 60%)',
            'radial-gradient(ellipse 70% 50% at 45% 15%, rgba(160,30,0,0.22) 0%, transparent 60%)',
            'radial-gradient(ellipse 70% 50% at 15% 30%, rgba(160,30,0,0.20) 0%, transparent 60%)',
          ],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Dot grid — subtle depth */}
      <div className="absolute inset-0 dot-grid opacity-40" />

      {/* Grain texture */}
      <div className="absolute inset-0 grain" />

      {/* Two dashed circles — TRNSPR/design-depth element */}
      <div
        className="absolute rounded-full border border-dashed pointer-events-none"
        style={{
          width: 680, height: 680,
          top: '50%', left: '50%',
          transform: 'translate(-50%, -52%)',
          borderColor: 'rgba(255,140,70,0.05)',
        }}
      />
      <div
        className="absolute rounded-full border border-dashed pointer-events-none"
        style={{
          width: 420, height: 420,
          top: '50%', left: '50%',
          transform: 'translate(-50%, -54%)',
          borderColor: 'rgba(255,140,70,0.04)',
        }}
      />

      {/* Thin horizontal rule — editorial detail */}
      <div
        className="absolute left-0 right-0 pointer-events-none"
        style={{
          top: '62%',
          height: 1,
          background: 'linear-gradient(90deg, transparent 0%, rgba(255,120,50,0.06) 30%, rgba(255,120,50,0.06) 70%, transparent 100%)',
        }}
      />
    </div>
  )
}

/* ─────────────────────────────────────────────
   LARGE FROSTED PLATES (behind headline text)
   Purely atmospheric — no content, just depth
───────────────────────────────────────────── */
function BackPlate({ style, initial, animate, transition, mouseX, mouseY, parallaxFactor = 1 }) {
  const px = useSpring(
    useTransform(mouseX, [-1, 1], [-10 * parallaxFactor, 10 * parallaxFactor]),
    { stiffness: 50, damping: 18 }
  )
  const py = useSpring(
    useTransform(mouseY, [-1, 1], [-6 * parallaxFactor, 6 * parallaxFactor]),
    { stiffness: 50, damping: 18 }
  )

  return (
    <motion.div
      className="absolute glass-plate grain"
      initial={initial}
      animate={animate}
      transition={transition}
      style={{ ...style, x: px, y: py }}
    >
      {/* Inner highlight streak */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(255,120,50,0.06) 0%, transparent 40%, transparent 60%, rgba(255,80,20,0.03) 100%)',
          borderRadius: 'inherit',
        }}
      />
      {/* Subtle inner grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,140,60,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,140,60,0.08) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          borderRadius: 'inherit',
        }}
      />
    </motion.div>
  )
}

/* ─────────────────────────────────────────────
   VOYAGER2-STYLE 3D DATA CARDS (bottom row)
───────────────────────────────────────────── */
const dataCards = [
  {
    label: 'Leads',
    value: '+247%',
    sub: 'Qualified leads / 90 days',
    rotateY: -16,
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 22l7-9 4.5 3.5 4.5-7 6 12.5" stroke="url(#dc1)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="25" cy="6" r="3" stroke="rgba(255,140,70,0.5)" strokeWidth="1.2"/>
        <defs>
          <linearGradient id="dc1" x1="4" y1="22" x2="25" y2="6" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E83000" stopOpacity="0.7"/>
            <stop offset="1" stopColor="#FF8C35" stopOpacity="0.4"/>
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    label: 'ROAS',
    value: '2 – 5×',
    sub: 'Return on ad spend',
    rotateY: 0,
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4v20M8 10l6-6 6 6" stroke="url(#dc2)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 19h16" stroke="rgba(255,140,70,0.35)" strokeWidth="1.2" strokeLinecap="round"/>
        <defs>
          <linearGradient id="dc2" x1="8" y1="24" x2="20" y2="4" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF6B35" stopOpacity="0.5"/>
            <stop offset="1" stopColor="#E83000" stopOpacity="0.8"/>
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    label: 'CPL',
    value: '2 – 5×',
    sub: 'Lower cost per lead',
    rotateY: 16,
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="12" width="8" height="12" rx="1" stroke="rgba(220,70,20,0.6)" strokeWidth="1.2"/>
        <rect x="16" y="5" width="8" height="19" rx="1" stroke="rgba(255,140,70,0.65)" strokeWidth="1.2"/>
        <path d="M12 17h4" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeLinecap="round"/>
      </svg>
    ),
  },
]

function DataCard({ card, delay, mouseX, mouseY }) {
  const px = useSpring(
    useTransform(mouseX, [-1, 1], [-6, 6]),
    { stiffness: 80, damping: 20 }
  )
  const py = useSpring(
    useTransform(mouseY, [-1, 1], [-4, 4]),
    { stiffness: 80, damping: 20 }
  )

  const isCenter = card.rotateY === 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateY: card.rotateY * 2 }}
      animate={{ opacity: 1, y: 0, rotateY: card.rotateY }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay }}
      style={{ x: px, y: py, transformPerspective: 900, zIndex: isCenter ? 3 : 1 }}
      whileHover={{
        rotateY: card.rotateY * 0.4,
        scale: 1.05,
        zIndex: 10,
        transition: { duration: 0.35 },
      }}
    >
      <div
        className="glass-warm gradient-border grain"
        style={{
          width: isCenter ? 210 : 190,
          height: isCenter ? 270 : 245,
          borderRadius: 3,
          padding: '24px 20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          boxShadow: isCenter
            ? '0 30px 80px rgba(0,0,0,0.55), 0 0 50px rgba(200,50,0,0.07)'
            : '0 20px 60px rgba(0,0,0,0.45)',
        }}
      >
        {/* Top */}
        <div className="flex items-center justify-between">
          <span className="label-sm">{card.label}</span>
          <span
            style={{
              width: 6, height: 6, borderRadius: '50%',
              background: 'rgba(220,80,0,0.7)',
              boxShadow: '0 0 8px rgba(220,80,0,0.9)',
            }}
          />
        </div>

        {/* Icon */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>{card.icon}</div>

        {/* Value */}
        <div>
          <div
            className="serif-display gradient-text-warm"
            style={{ fontSize: isCenter ? 36 : 32 }}
          >
            {card.value}
          </div>
          <div className="label-sm mt-1.5 leading-snug">{card.sub}</div>
        </div>
      </div>
    </motion.div>
  )
}

/* ─────────────────────────────────────────────
   HERO — MAIN
───────────────────────────────────────────── */
export default function Hero() {
  const ref = useRef(null)
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)

  const handleMouseMove = (e) => {
    if (!ref.current) return
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    rawX.set(((e.clientX - left) / width - 0.5) * 2)
    rawY.set(((e.clientY - top) / height - 0.5) * 2)
  }

  const lines = [
    { text: 'Turn Dubai\'s', serif: false, size: 'clamp(44px, 7vw, 96px)', weight: 300, color: 'rgba(255,240,230,0.45)', italic: false, delay: 0.25 },
    { text: 'Attention',    serif: true,  size: 'clamp(68px, 11.5vw, 158px)', weight: 300, color: 'rgba(255,240,230,0.92)', italic: true,  delay: 0.35 },
    { text: 'Into Revenue.',serif: true,  size: 'clamp(44px, 7vw, 96px)', weight: 300, gradient: true, italic: true,  delay: 0.45 },
  ]

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      id="home"
      className="relative min-h-screen flex flex-col overflow-hidden"
    >
      {/* ── Layer 0: Atmospheric background ── */}
      <AuroraBG />

      {/* ── Layer 1: Large back-plates (behind headline) ── */}
      {/* Left plate */}
      <BackPlate
        mouseX={rawX} mouseY={rawY} parallaxFactor={1.2}
        initial={{ opacity: 0, x: -60, rotate: -8, scale: 0.92 }}
        animate={{ opacity: 1, x: 0,   rotate: -8, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        style={{
          top: '10%', left: '-4%',
          width: 340, height: 520,
          borderRadius: 4,
          zIndex: 2,
        }}
      />
      {/* Right plate */}
      <BackPlate
        mouseX={rawX} mouseY={rawY} parallaxFactor={0.8}
        initial={{ opacity: 0, x: 60, rotate: 10, scale: 0.92 }}
        animate={{ opacity: 1, x: 0,  rotate: 10, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
        style={{
          top: '8%', right: '-3%',
          width: 280, height: 430,
          borderRadius: 4,
          zIndex: 2,
        }}
      />
      {/* Small accent plate — lower right */}
      <BackPlate
        mouseX={rawX} mouseY={rawY} parallaxFactor={1.5}
        initial={{ opacity: 0, y: 40, rotate: -4 }}
        animate={{ opacity: 0.6, y: 0, rotate: -4 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.28 }}
        style={{
          bottom: '22%', right: '8%',
          width: 160, height: 200,
          borderRadius: 4,
          zIndex: 2,
        }}
      />

      {/* Scroll whisker */}
      <motion.div
        className="absolute right-9 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 1 }}
      >
        <motion.div
          className="w-px"
          style={{ background: 'linear-gradient(to bottom, rgba(200,70,0,0.5), transparent)', height: 0 }}
          animate={{ height: 80 }}
          transition={{ delay: 2.6, duration: 1.4 }}
        />
        <span
          className="label-sm"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', letterSpacing: '0.4em' }}
        >
          Scroll
        </span>
      </motion.div>

      {/* ── Layer 3: Headline (IN FRONT of plates) ── */}
      <div
        className="relative flex flex-col flex-1 px-6 md:px-12 lg:px-24 pt-36 pb-0"
        style={{ zIndex: 10 }}
      >
        <div className="max-w-7xl mx-auto w-full flex flex-col flex-1">

          {/* Eyebrow */}
          <motion.div
            className="flex items-center gap-4 mb-10"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.span
              className="block h-px bg-gradient-to-r from-transparent via-orange-600 to-transparent"
              style={{ width: 0 }}
              animate={{ width: 40 }}
              transition={{ duration: 0.9, delay: 0.1 }}
            />
            <span className="label-sm" style={{ color: 'rgba(255,160,80,0.65)' }}>
              Dubai · Social Media Marketing Agency
            </span>
          </motion.div>

          {/* Headline — three lines, each animated up */}
          <div style={{ marginBottom: 'clamp(28px, 4vw, 48px)' }}>
            {lines.map(({ text, serif, size, weight, color, italic, delay, gradient }) => (
              <div key={text} style={{ overflow: 'hidden' }}>
                <motion.div
                  initial={{ y: '115%', skewY: 1.5 }}
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
                      lineHeight: 0.91,
                      letterSpacing: '-0.02em',
                      color: gradient ? undefined : color,
                      background: gradient ? 'linear-gradient(135deg, #E83000 0%, #FF6B35 60%, #FF9550 100%)' : undefined,
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
          </div>

          {/* Tagline + CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85 }}
          >
            <p style={{ color: 'rgba(255,210,180,0.3)', fontSize: 13, lineHeight: 1.75, maxWidth: 300, fontWeight: 300 }}>
              We build social ecosystems that generate real, measurable results for Dubai's most ambitious brands.
            </p>
            <div className="flex items-center gap-6 shrink-0">
              <a href="#booking" className="btn-primary">Free Strategy Call</a>
              <a href="#results" className="btn-ghost">
                Our Work
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </motion.div>

          {/* ── Layer 2: Voyager2-style 3D data cards (bottom, perspective row) ── */}
          <div className="mt-auto pt-14 pb-0 flex justify-center" style={{ zIndex: 8, perspective: 1000 }}>
            <div className="flex items-end justify-center" style={{ gap: 0 }}>
              {dataCards.map((card, i) => (
                <div
                  key={card.label}
                  style={{
                    marginLeft: i === 0 ? 0 : -28,
                    zIndex: card.rotateY === 0 ? 3 : 1,
                    marginBottom: card.rotateY === 0 ? 0 : -18,
                  }}
                >
                  <DataCard
                    card={card}
                    mouseX={rawX}
                    mouseY={rawY}
                    delay={0.65 + i * 0.1}
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom fade into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-44 pointer-events-none"
        style={{ background: 'linear-gradient(to top, #080304 0%, transparent 100%)', zIndex: 12 }}
      />
    </section>
  )
}
