import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const BOT_NAME = 'Zara'

const OPTIONS = [
  { label: 'How much does it cost?', key: 'pricing' },
  { label: 'What services do you offer?', key: 'services' },
  { label: 'Book a strategy call', key: 'book' },
  { label: 'Where are you based?', key: 'location' },
  { label: 'See your results', key: 'results' },
]

const RESPONSES = {
  pricing: {
    text: "Our retainers start from AED 7,500/month for social media management. Ad budgets are separate — we recommend AED 5,000+ minimum for paid campaigns. Full packages (management + ads + content) start from AED 12,500/month. Every package is custom-scoped to your business.",
    opts: ['Book a strategy call', 'What services do you offer?'],
  },
  services: {
    text: "We offer four core services:\n\n📱 Social Media Management (Instagram, TikTok, LinkedIn, X)\n🎯 Paid Advertising (Meta, TikTok, Google, Snapchat)\n🎬 Content Production (video, photography, copywriting)\n💻 Website Design & Funnels\n\nWe also offer bilingual (English/Arabic) content for the GCC market. Which interests you most?",
    opts: ['How much does it cost?', 'Book a strategy call'],
  },
  book: {
    text: "Perfect — book your free 45-minute strategy call using the form on this page. We'll audit your current presence, analyse your competitors, and give you a custom growth roadmap. No obligation, no hard sell.",
    action: { label: 'Open Booking Form', href: '#booking' },
    opts: [],
  },
  location: {
    text: "We're headquartered in DIFC, Dubai. We work with businesses across Dubai, Abu Dhabi, Sharjah, and the wider GCC (Saudi Arabia, Kuwait, Qatar). We offer both in-person meetings in Dubai and virtual calls for clients across the region.",
    opts: ['Book a strategy call', 'See your results'],
  },
  results: {
    text: "Some highlights:\n\n🏢 Dubai Marina Properties: AED 12.4M in 90 days, +1,863% followers\n🍽️ SALT & EMBER DIFC: +280% reservations, 8.4% engagement rate\n🚗 Premier Auto Dubai: 12 → 147 leads/month, 68% cheaper\n👗 Maison Blanc: AED 180K → AED 1.4M revenue, 8.45x ROAS\n\nTotal: AED 50M+ in client revenue attributed to our work.",
    action: { label: 'View All Case Studies', href: '#results' },
    opts: ['Book a strategy call', 'How much does it cost?'],
  },
}

let msgId = 0
const mkMsg = (from, text, opts, action) => ({ id: ++msgId, from, text, opts, action })

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    mkMsg('bot', `Hi there 👋 I'm ${BOT_NAME}, your ignite.scale assistant. How can I help you today?`, OPTIONS.map((o) => o.label)),
  ])
  const [typing, setTyping] = useState(false)
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing])

  const handleOption = (label) => {
    const found = OPTIONS.find((o) => o.label === label)
    if (!found) return

    setMessages((prev) => [...prev, mkMsg('user', label)])
    setTyping(true)

    setTimeout(() => {
      const r = RESPONSES[found.key]
      setTyping(false)
      setMessages((prev) => [...prev, mkMsg('bot', r.text, r.opts?.map((o) => o), r.action)])
    }, 900)
  }

  return (
    <>
      {/* Toggle button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: 'spring', stiffness: 300, damping: 25 }}
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-[100] w-14 h-14 bg-accent rounded-full flex items-center justify-center glow-accent shadow-2xl"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.svg key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }} width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M2 2l14 14M16 2L2 16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </motion.svg>
          ) : (
            <motion.svg key="open" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }} transition={{ duration: 0.2 }} width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M3 6h16M3 11h10M3 16h7" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </motion.svg>
          )}
        </AnimatePresence>

        {/* Pulse ring */}
        {!open && (
          <span className="absolute inset-0 rounded-full border border-accent/40 animate-ping" style={{ animationDuration: '2s' }} />
        )}
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-24 right-6 z-[99] w-[340px] max-w-[calc(100vw-24px)] rounded-sm overflow-hidden"
            style={{
              background: '#0d0d0d',
              border: '1px solid rgba(255,255,255,0.07)',
              boxShadow: '0 25px 60px rgba(0,0,0,0.6), 0 0 40px rgba(255,51,0,0.06)',
            }}
          >
            {/* Header */}
            <div className="px-5 py-4 border-b border-white/[0.06] flex items-center gap-3 bg-black/40">
              <div className="w-8 h-8 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center text-accent text-xs font-bold">
                Z
              </div>
              <div>
                <div className="text-white text-sm font-medium">{BOT_NAME}</div>
                <div className="text-[10px] text-white/30 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  Online · ignite.scale
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="h-72 overflow-y-auto p-4 space-y-4" style={{ scrollbarWidth: 'none' }}>
              {messages.map((m) => (
                <div key={m.id} className={`flex flex-col gap-2 ${m.from === 'user' ? 'items-end' : 'items-start'}`}>
                  <div
                    className={`max-w-[85%] text-xs leading-relaxed rounded-sm px-4 py-3 whitespace-pre-line ${
                      m.from === 'user'
                        ? 'bg-accent text-white'
                        : 'bg-white/[0.05] text-white/70 border border-white/[0.06]'
                    }`}
                  >
                    {m.text}
                  </div>

                  {m.action && (
                    <a
                      href={m.action.href}
                      onClick={() => setOpen(false)}
                      className="text-[11px] text-accent border border-accent/30 px-4 py-2 hover:bg-accent/10 transition-colors tracking-[0.15em] uppercase"
                    >
                      {m.action.label} →
                    </a>
                  )}

                  {m.from === 'bot' && m.opts && m.opts.length > 0 && (
                    <div className="flex flex-wrap gap-2 max-w-full">
                      {m.opts.map((o) => (
                        <button
                          key={o}
                          onClick={() => handleOption(o)}
                          className="text-[10px] tracking-[0.1em] uppercase text-white/40 border border-white/[0.08] px-3 py-1.5 hover:border-accent/40 hover:text-white/70 transition-all"
                        >
                          {o}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {typing && (
                <div className="flex items-start gap-2">
                  <div className="bg-white/[0.05] border border-white/[0.06] rounded-sm px-4 py-3 flex gap-1.5">
                    {[0, 0.2, 0.4].map((d) => (
                      <motion.span
                        key={d}
                        className="w-1.5 h-1.5 bg-white/30 rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: d }}
                      />
                    ))}
                  </div>
                </div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Footer */}
            <div className="px-4 py-3 border-t border-white/[0.05] flex items-center justify-between">
              <span className="text-[10px] text-white/15 uppercase tracking-[0.2em]">ignite.scale · Dubai</span>
              <a
                href="#booking"
                onClick={() => setOpen(false)}
                className="text-[10px] tracking-[0.2em] uppercase text-accent hover:text-accent/70 transition-colors"
              >
                Book a call →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
