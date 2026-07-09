import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const BOT_NAME = 'Zara'

const OPTIONS = [
  { label: 'How are engagements staged?', key: 'pricing' },
  { label: 'What do you actually build?', key: 'services' },
  { label: 'Book a Client Acquisition Audit', key: 'book' },
  { label: 'Where are you based?', key: 'location' },
  { label: 'Why GBP pricing?', key: 'gbp' },
]

const RESPONSES = {
  pricing: {
    text: "We scope after the Client Acquisition Audit rather than publishing fixed packages. Most builds move through four stages: diagnostic map, foundation install, launch and validate, then optimise and scale. Ad spend stays separate and is billed directly to your own accounts.",
    action: { label: 'View Build Stages', href: '/investment' },
    opts: ['Book a Client Acquisition Audit', 'What do you actually build?'],
  },
  services: {
    text: "We install client acquisition systems for UAE service businesses — five connected layers:\n\n🔍 SEO built for UAE commercial searches\n🎯 Paid acquisition (Google + Meta)\n📄 Landing pages engineered per offer\n📇 CRM funnels holding every lead\n💬 WhatsApp follow-up that answers in under 60 seconds\n\nEverything is measured in booked appointments and attributed revenue.",
    opts: ['How are engagements staged?', 'Book a Client Acquisition Audit'],
  },
  book: {
    text: "Good move. The Client Acquisition Audit is a 45-minute diagnostic: we map your funnel, show you where leads are being lost, and give you a prioritised 90-day roadmap — yours to keep whether or not we work together. Limited to six per month.",
    action: { label: 'Request an Audit', href: '/audit' },
    opts: [],
  },
  location: {
    text: "Ignite Scale is UK-founded and registered in London — and our market focus is entirely the UAE. We build acquisition systems for businesses in Dubai, Abu Dhabi and Sharjah, working remotely with structured onboarding and live reporting.",
    opts: ['Book a Client Acquisition Audit', 'Why GBP pricing?'],
  },
  gbp: {
    text: "We contract and invoice in pounds sterling because Ignite Scale is UK-founded, but the build is scoped only after the audit. Clients judge the engagement on booked appointments, pipeline visibility and revenue attribution, not a public package table.",
    opts: ['How are engagements staged?', 'Book a Client Acquisition Audit'],
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
              boxShadow: '0 25px 60px rgba(0,0,0,0.6), 0 0 40px rgba(201,169,110,0.06)',
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
              <span className="text-[10px] text-white/15 uppercase tracking-[0.2em]">ignite.scale · UK-founded · UAE-focused</span>
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
