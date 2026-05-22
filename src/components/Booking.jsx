import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import emailjs from '@emailjs/browser'

const INDUSTRIES = [
  'Luxury Real Estate', 'Hospitality & Hotels', 'Restaurants & F&B',
  'Fashion & Retail', 'Luxury Automotive', 'Financial Services',
  'Healthcare & Wellness', 'E-Commerce', 'Legal & Consulting', 'Other',
]

const BUDGETS = [
  'Under AED 5,000/month', 'AED 5,000 – 10,000/month',
  'AED 10,000 – 25,000/month', 'AED 25,000 – 50,000/month', 'AED 50,000+/month',
]

const SERVICES = [
  'Social Media Management', 'Paid Advertising (Meta/TikTok/Google)',
  'Content Production', 'Website Design & Funnels', 'Full Package',
]

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const TIMES = ['9:00 AM', '11:00 AM', '1:00 PM', '3:00 PM', '5:00 PM']

const STEP_LABELS = ['Your Details', 'Your Business', 'Schedule']

const initial = {
  name: '', company: '', email: '', phone: '',
  industry: '', budget: '', services: [], challenge: '',
  day: '', time: '', notes: '',
}

function Field({ label, children, required }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[11px] tracking-[0.25em] uppercase text-white/40">
        {label}{required && <span className="text-accent ml-1">*</span>}
      </label>
      {children}
    </div>
  )
}

const inputCls =
  'bg-white/[0.03] border border-white/[0.08] text-white text-sm px-4 py-3 outline-none focus:border-accent/50 transition-colors placeholder:text-white/20 w-full'

export default function Booking() {
  const [step, setStep] = useState(0)
  const [form, setForm] = useState(initial)
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const headRef = useRef(null)
  const inView = useInView(headRef, { once: true, margin: '-60px' })

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))
  const toggleService = (s) =>
    setForm((f) => ({
      ...f,
      services: f.services.includes(s) ? f.services.filter((x) => x !== s) : [...f.services, s],
    }))

  const canNext = () => {
    if (step === 0) return form.name && form.email && form.phone
    if (step === 1) return form.industry && form.budget
    if (step === 2) return form.day && form.time
    return false
  }

  const handleSubmit = async () => {
    setSending(true)
    setError('')
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
        {
          from_name: form.name,
          company: form.company || 'Not provided',
          reply_to: form.email,
          phone: form.phone,
          industry: form.industry,
          budget: form.budget,
          services: form.services.join(', ') || 'Not specified',
          challenge: form.challenge || 'Not provided',
          preferred_day: form.day,
          preferred_time: form.time,
          notes: form.notes || 'None',
          to_email: 'admin@ignite-scale.com',
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'
      )
      setSent(true)
    } catch {
      setError('Something went wrong. Email us directly at admin@ignite-scale.com')
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="booking" className="section-pad max-w-7xl mx-auto">
      <motion.div
        ref={headRef}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="mb-14"
      >
        <div className="flex items-center gap-4 mb-5">
          <span className="w-8 h-px bg-accent" />
          <span className="text-accent text-[10px] font-medium tracking-[0.4em] uppercase">Free Strategy Call</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h2
            className="font-display text-white leading-none tracking-tight"
            style={{ fontSize: 'clamp(44px, 7vw, 90px)' }}
          >
            BOOK YOUR
            <br />
            <span className="gradient-text">FREE CALL</span>
          </h2>
          <p className="text-white/35 text-sm leading-relaxed max-w-sm md:text-right">
            45 minutes. No obligation. We'll audit your current presence and show you exactly what's leaving money on the table.
          </p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Side info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-2 flex flex-col gap-6"
        >
          <div className="glass gradient-border rounded-sm p-7">
            <h3 className="text-white font-semibold mb-4">What You'll Get</h3>
            <ul className="space-y-3">
              {[
                'Full social media audit',
                'Competitor gap analysis',
                'Custom 90-day growth roadmap',
                'Paid ads opportunity breakdown',
                'Honest pricing — no upsell pressure',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white/50">
                  <span className="text-accent mt-0.5 shrink-0">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="glass gradient-border rounded-sm p-7">
            <div className="font-display text-4xl gradient-text tracking-wider">48hrs</div>
            <div className="text-white/30 text-[11px] uppercase tracking-[0.25em] mt-1">Response Time Guaranteed</div>
            <p className="text-white/40 text-xs mt-4 leading-relaxed">
              We review every submission personally. Expect a confirmation within 48 hours with your confirmed time slot.
            </p>
          </div>

          <div className="glass gradient-border rounded-sm p-7 space-y-3">
            <div className="text-white/30 text-[10px] uppercase tracking-[0.3em]">Contact Directly</div>
            <a href="mailto:admin@ignite-scale.com" className="text-white/60 text-sm hover:text-white transition-colors block">
              admin@ignite-scale.com
            </a>
            <div className="text-white/25 text-xs">Dubai, UAE — DIFC</div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="lg:col-span-3 glass gradient-border rounded-sm p-8"
        >
          <AnimatePresence mode="wait">
            {sent ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-16 gap-6"
              >
                <div className="w-16 h-16 rounded-full border border-accent/30 bg-accent/10 flex items-center justify-center">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M5 14l6 6L23 8" stroke="#FF3300" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Booking Received</h3>
                  <p className="text-white/40 text-sm leading-relaxed max-w-xs">
                    We'll review your details and confirm your strategy call within 48 hours. Check your inbox — including spam.
                  </p>
                </div>
                <div className="text-[10px] text-white/20 uppercase tracking-[0.3em]">
                  A confirmation will be sent to {form.email}
                </div>
              </motion.div>
            ) : (
              <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                {/* Step indicator */}
                <div className="flex items-center gap-3 mb-8">
                  {STEP_LABELS.map((label, i) => (
                    <div key={label} className="flex items-center gap-3">
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-medium transition-all duration-300 ${
                            i === step
                              ? 'bg-accent text-white'
                              : i < step
                              ? 'bg-accent/20 text-accent border border-accent/30'
                              : 'bg-white/[0.04] text-white/20 border border-white/[0.06]'
                          }`}
                        >
                          {i < step ? '✓' : i + 1}
                        </div>
                        <span
                          className={`text-[10px] tracking-[0.2em] uppercase hidden sm:block transition-colors ${
                            i === step ? 'text-white/70' : i < step ? 'text-accent/60' : 'text-white/20'
                          }`}
                        >
                          {label}
                        </span>
                      </div>
                      {i < STEP_LABELS.length - 1 && (
                        <div className={`h-px w-8 transition-colors ${i < step ? 'bg-accent/30' : 'bg-white/[0.06]'}`} />
                      )}
                    </div>
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  {/* Step 0 */}
                  {step === 0 && (
                    <motion.div
                      key="s0"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-5"
                    >
                      <Field label="Full Name" required>
                        <input className={inputCls} placeholder="Your full name" value={form.name} onChange={set('name')} />
                      </Field>
                      <Field label="Company / Business Name">
                        <input className={inputCls} placeholder="Your business name" value={form.company} onChange={set('company')} />
                      </Field>
                      <Field label="Email Address" required>
                        <input className={inputCls} type="email" placeholder="your@email.com" value={form.email} onChange={set('email')} />
                      </Field>
                      <Field label="Phone Number (UAE)" required>
                        <input className={inputCls} placeholder="+971 50 000 0000" value={form.phone} onChange={set('phone')} />
                      </Field>
                    </motion.div>
                  )}

                  {/* Step 1 */}
                  {step === 1 && (
                    <motion.div
                      key="s1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-5"
                    >
                      <Field label="Industry" required>
                        <select className={inputCls} value={form.industry} onChange={set('industry')}>
                          <option value="">Select your industry</option>
                          {INDUSTRIES.map((i) => <option key={i}>{i}</option>)}
                        </select>
                      </Field>
                      <Field label="Monthly Marketing Budget" required>
                        <select className={inputCls} value={form.budget} onChange={set('budget')}>
                          <option value="">Select your budget range</option>
                          {BUDGETS.map((b) => <option key={b}>{b}</option>)}
                        </select>
                      </Field>
                      <Field label="Services Interested In">
                        <div className="flex flex-wrap gap-2">
                          {SERVICES.map((s) => (
                            <button
                              key={s}
                              type="button"
                              onClick={() => toggleService(s)}
                              className={`text-[10px] tracking-[0.15em] uppercase px-4 py-2 border transition-all duration-200 ${
                                form.services.includes(s)
                                  ? 'border-accent/50 bg-accent/10 text-accent'
                                  : 'border-white/[0.07] text-white/30 hover:border-white/20 hover:text-white/50'
                              }`}
                            >
                              {s}
                            </button>
                          ))}
                        </div>
                      </Field>
                      <Field label="Biggest Current Challenge">
                        <textarea
                          className={`${inputCls} resize-none`}
                          rows={3}
                          placeholder="What's the #1 thing holding your brand back right now?"
                          value={form.challenge}
                          onChange={set('challenge')}
                        />
                      </Field>
                    </motion.div>
                  )}

                  {/* Step 2 */}
                  {step === 2 && (
                    <motion.div
                      key="s2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-5"
                    >
                      <Field label="Preferred Day" required>
                        <div className="grid grid-cols-3 gap-2">
                          {DAYS.map((d) => (
                            <button
                              key={d}
                              type="button"
                              onClick={() => setForm((f) => ({ ...f, day: d }))}
                              className={`text-[11px] tracking-[0.15em] uppercase py-3 border transition-all ${
                                form.day === d
                                  ? 'border-accent/50 bg-accent/10 text-accent'
                                  : 'border-white/[0.07] text-white/30 hover:border-white/20 hover:text-white/50'
                              }`}
                            >
                              {d.slice(0, 3)}
                            </button>
                          ))}
                        </div>
                      </Field>
                      <Field label="Preferred Time (Dubai, GST UTC+4)" required>
                        <div className="grid grid-cols-3 gap-2">
                          {TIMES.map((t) => (
                            <button
                              key={t}
                              type="button"
                              onClick={() => setForm((f) => ({ ...f, time: t }))}
                              className={`text-[11px] tracking-[0.1em] py-3 border transition-all ${
                                form.time === t
                                  ? 'border-accent/50 bg-accent/10 text-accent'
                                  : 'border-white/[0.07] text-white/30 hover:border-white/20 hover:text-white/50'
                              }`}
                            >
                              {t}
                            </button>
                          ))}
                        </div>
                      </Field>
                      <Field label="Additional Notes">
                        <textarea
                          className={`${inputCls} resize-none`}
                          rows={3}
                          placeholder="Anything else we should know before the call?"
                          value={form.notes}
                          onChange={set('notes')}
                        />
                      </Field>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Error */}
                {error && (
                  <p className="mt-4 text-accent/80 text-xs leading-relaxed">{error}</p>
                )}

                {/* Nav buttons */}
                <div className="flex items-center justify-between mt-8">
                  <button
                    onClick={() => setStep((s) => s - 1)}
                    className={`text-[11px] tracking-[0.25em] uppercase text-white/30 hover:text-white transition-colors ${step === 0 ? 'invisible' : ''}`}
                  >
                    ← Back
                  </button>

                  {step < 2 ? (
                    <button
                      onClick={() => setStep((s) => s + 1)}
                      disabled={!canNext()}
                      className={`btn-primary transition-opacity ${canNext() ? 'opacity-100' : 'opacity-30'}`}
                    >
                      Continue →
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmit}
                      disabled={!canNext() || sending}
                      className={`btn-primary min-w-[160px] text-center transition-opacity ${canNext() && !sending ? 'opacity-100' : 'opacity-40'}`}
                    >
                      {sending ? 'Sending...' : 'Book My Call'}
                    </button>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
