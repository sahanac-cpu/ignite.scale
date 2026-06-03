'use client'

import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { site } from '@/lib/site'

const services = ['Paid social', 'Content & creative', 'Funnels & CRO', 'Brand & strategy', 'Not sure yet']
const budgets = ['AED 15k–30k / mo', 'AED 30k–60k / mo', 'AED 60k+ / mo', 'Let’s discuss']

export default function BookingForm() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [form, setForm] = useState({ name: '', email: '', company: '', service: services[0], budget: budgets[0], message: '' })

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    const SID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const TID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    const KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

    try {
      if (SID && TID && KEY) {
        await emailjs.send(SID, TID, {
          from_name: form.name, reply_to: form.email, company: form.company,
          services: form.service, budget: form.budget, message: form.message,
        }, { publicKey: KEY })
      } else {
        // No email provider configured — open the user's mail client as a fallback.
        const body = encodeURIComponent(
          `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\nService: ${form.service}\nBudget: ${form.budget}\n\n${form.message}`
        )
        window.location.href = `mailto:${site.email}?subject=${encodeURIComponent('Strategy call — ' + (form.company || form.name))}&body=${body}`
      }
      setStatus('sent')
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div style={{ padding: 'clamp(32px, 5vw, 56px)', border: '1px solid var(--line)', borderRadius: 18, background: 'var(--bg-1)' }}>
        <span style={{ fontSize: 40 }} aria-hidden="true">✦</span>
        <h2 style={{ fontSize: 'clamp(24px, 3vw, 34px)', marginBlock: '16px 12px' }}>Thanks, {form.name.split(' ')[0] || 'there'}.</h2>
        <p style={{ color: 'var(--ink-dim)', fontSize: 16.5, lineHeight: 1.7, maxWidth: '46ch' }}>
          Your request is on its way. We reply to every serious enquiry within one business day with times for a call.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} style={{ display: 'grid', gap: 18 }}>
      <div className="bf-row">
        <Field label="Name" required><input className="field" required value={form.name} onChange={set('name')} placeholder="Your full name" autoComplete="name" /></Field>
        <Field label="Email" required><input className="field" type="email" required value={form.email} onChange={set('email')} placeholder="you@company.com" autoComplete="email" /></Field>
      </div>
      <Field label="Company"><input className="field" value={form.company} onChange={set('company')} placeholder="Your brand or company" autoComplete="organization" /></Field>
      <div className="bf-row">
        <Field label="Primary interest">
          <select className="field" value={form.service} onChange={set('service')}>{services.map((s) => <option key={s}>{s}</option>)}</select>
        </Field>
        <Field label="Monthly budget">
          <select className="field" value={form.budget} onChange={set('budget')}>{budgets.map((b) => <option key={b}>{b}</option>)}</select>
        </Field>
      </div>
      <Field label="What are you trying to grow?">
        <textarea className="field" rows={4} value={form.message} onChange={set('message')} placeholder="A sentence or two about your brand and goals." style={{ resize: 'vertical' }} />
      </Field>

      {status === 'error' && (
        <p style={{ color: 'var(--accent-soft)', fontSize: 14 }}>Something went wrong sending that. Email us directly at {site.email}.</p>
      )}

      <button type="submit" className="btn btn-primary" disabled={status === 'sending'} data-cursor="hover"
        style={{ justifyContent: 'center', marginTop: 6, opacity: status === 'sending' ? 0.7 : 1 }}>
        {status === 'sending' ? 'Sending…' : 'Request a strategy call →'}
      </button>

      <style>{`
        .bf-row { display: grid; gap: 18px; }
        @media (min-width: 560px) { .bf-row { grid-template-columns: 1fr 1fr; } }
      `}</style>
    </form>
  )
}

function Field({ label, required, children }) {
  return (
    <label style={{ display: 'grid', gap: 8 }}>
      <span className="meta" style={{ color: 'var(--ink-dim)' }}>{label}{required && <span style={{ color: 'var(--accent)' }}> *</span>}</span>
      {children}
    </label>
  )
}
