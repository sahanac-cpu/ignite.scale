import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import emailjs from '@emailjs/browser'
import AuroraLayer from './AuroraLayer'
import { useT } from '../i18n/locale'

function getOptions(t) {
  return {
    INDUSTRIES: [
      t('Aesthetic Clinic', 'عيادة تجميل'),
      t('Dental Clinic', 'عيادة أسنان'),
      t('Medical Clinic', 'عيادة طبية'),
      t('Real Estate', 'عقارات'),
      t('Business Setup', 'تأسيس شركات'),
      t('Immigration Consulting', 'استشارات هجرة'),
      t('Private Education / Tutoring', 'تعليم خاص'),
      t('Luxury Services', 'خدمات فاخرة'),
      t('B2B Services / Consulting', 'خدمات B2B واستشارات'),
      t('Other', 'أخرى'),
    ],
    LOCATIONS: [
      t('Dubai', 'دبي'),
      t('Abu Dhabi', 'أبوظبي'),
      t('Sharjah', 'الشارقة'),
      t('Other UAE', 'إمارة أخرى'),
      t('Outside UAE', 'خارج الإمارات'),
    ],
    REVENUES: [
      t('Pre-revenue / validating offer', 'قبل الإيراد / اختبار العرض'),
      t('Offer selling, pipeline inconsistent', 'العرض يبيع لكن خط الأنابيب غير ثابت'),
      t('Established, ready to systemise growth', 'نشاط قائم وجاهز لتنظيم النمو'),
      t('Multi-location / scaling service lines', 'متعدد الفروع / توسع خطوط الخدمات'),
    ],
    AD_SPENDS: [
      t('Not advertising yet', 'لا نعلن حالياً'),
      t('Testing paid channels', 'نختبر القنوات المدفوعة'),
      t('Active campaigns, inconsistent quality', 'حملات نشطة وجودة غير ثابتة'),
      t('Scaling spend and need attribution', 'نوسع الإنفاق ونحتاج نسباً واضحاً'),
      t('Multi-channel acquisition already running', 'اكتساب متعدد القنوات قائم بالفعل'),
    ],
    LEAD_SOURCES: [
      t('Google Ads', 'إعلانات قوقل'),
      t('Meta / Instagram Ads', 'إعلانات ميتا / إنستغرام'),
      t('SEO / Organic', 'نتائج البحث'),
      t('Referrals / Word of Mouth', 'توصيات'),
      t('Portals / Marketplaces', 'منصّات وبوابات'),
      t('Walk-ins', 'زيارات مباشرة'),
    ],
    VOLUMES: [
      t('Under 20', 'أقل من ٢٠'),
      t('20 – 100', '٢٠ – ١٠٠'),
      t('100 – 500', '١٠٠ – ٥٠٠'),
      t('500+', 'أكثر من ٥٠٠'),
      t("Don't know", 'لا أعرف'),
    ],
    APPOINTMENTS: [
      t('Under 10', 'أقل من ١٠'),
      t('10 – 50', '١٠ – ٥٠'),
      t('50 – 200', '٥٠ – ٢٠٠'),
      t('200+', 'أكثر من ٢٠٠'),
      t("Don't track this", 'لا نتتبّع ذلك'),
    ],
    CONTACT_METHODS: [
      t('WhatsApp', 'واتساب'),
      t('Phone Call', 'مكالمة هاتفية'),
      t('Email', 'بريد إلكتروني'),
    ],
    STEP_LABELS: [
      t('Your Details', 'بياناتك'),
      t('Your Business', 'نشاطك'),
      t('Your Funnel', 'قمعك التسويقي'),
    ],
  }
}

const initial = {
  name: '', company: '', website: '', email: '', phone: '', contact_method: '',
  industry: '', location: '', monthly_revenue_range: '', monthly_ad_spend: '',
  lead_sources: [], leads_per_month: '', appointments_per_month: '', crm_used: '', biggest_problem: '',
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
  const [locale, t] = useT()
  const {
    INDUSTRIES, LOCATIONS, REVENUES, AD_SPENDS, LEAD_SOURCES,
    VOLUMES, APPOINTMENTS, CONTACT_METHODS, STEP_LABELS,
  } = getOptions(t)
  const [step, setStep] = useState(0)
  const [form, setForm] = useState(initial)
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const headRef = useRef(null)
  const inView = useInView(headRef, { once: true, margin: '-60px' })

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))
  const toggleSource = (s) =>
    setForm((f) => ({
      ...f,
      lead_sources: f.lead_sources.includes(s) ? f.lead_sources.filter((x) => x !== s) : [...f.lead_sources, s],
    }))

  const canNext = () => {
    if (step === 0) return form.name && form.email && form.phone && form.contact_method
    if (step === 1) return form.industry && form.location && form.monthly_revenue_range
    if (step === 2) return form.biggest_problem.trim().length > 0
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
          website: form.website || 'Not provided',
          reply_to: form.email,
          phone: form.phone,
          contact_method: form.contact_method,
          industry: form.industry,
          location: form.location,
          monthly_revenue_range: form.monthly_revenue_range,
          monthly_ad_spend: form.monthly_ad_spend || 'Not provided',
          lead_sources: form.lead_sources.join(', ') || 'Not specified',
          leads_per_month: form.leads_per_month || 'Not provided',
          appointments_per_month: form.appointments_per_month || 'Not provided',
          crm_used: form.crm_used || 'None / not provided',
          biggest_problem: form.biggest_problem,
          to_email: 'admin@ignite-scale.com',
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'
      )
      setSent(true)
    } catch {
      setError(t('Something went wrong. Please try again in a moment.', 'حدث خطأ. يُرجى المحاولة مرة أخرى بعد قليل.'))
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="booking" style={{ position: 'relative', overflow: 'hidden', background: 'var(--sec-booking)' }}>
      <AuroraLayer variant="booking" />
      <div className="section-pad max-w-7xl mx-auto" style={{ position: 'relative', zIndex: 1 }}>
      <motion.div
        ref={headRef}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="mb-14"
      >
        <div className="flex items-center gap-4 mb-5">
          <span className="w-8 h-px bg-accent" />
          <span className="text-accent text-[10px] font-medium tracking-[0.4em] uppercase">{t('Six audits per month', 'ستة تدقيقات شهرياً')}</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h2
            className="font-display text-white leading-none tracking-tight"
            style={{ fontSize: 'clamp(44px, 7vw, 90px)' }}
          >
            {t('THE CLIENT', 'تدقيق')}
            <br />
            <span className="gradient-text">{t('ACQUISITION AUDIT', 'اكتساب العملاء')}</span>
          </h2>
          <p className="text-white/35 text-sm leading-relaxed max-w-sm md:text-right">
            {t(
              'A 45-minute diagnostic of your funnel — where leads come from, where they die, and the 90-day plan to fix it. You keep the roadmap whether or not we work together.',
              'تشخيص لمدة ٤٥ دقيقة لقمعك التسويقي — من أين يأتي العملاء، وأين يضيعون، وخطة ٩٠ يوماً لإصلاح ذلك. تحتفظ بخارطة الطريق سواء عملنا معاً أم لا.'
            )}
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
            <h3 className="text-white font-semibold mb-4">{t('What you leave with', 'ما ستحصل عليه')}</h3>
            <ul className="space-y-3">
              {[
                t('A map of your current acquisition funnel', 'خريطة لقمع اكتساب العملاء الحالي لديك'),
                t('Revenue-leak analysis: response time, follow-up gaps, tracking blind spots', 'تحليل تسرّب الإيرادات: زمن الاستجابة وفجوات المتابعة والتتبّع'),
                t('Competitor visibility snapshot for your niche', 'لمحة عن حضور منافسيك في مجالك'),
                t('A prioritised 90-day roadmap — yours to keep', 'خارطة طريق ٩٠ يوماً مرتّبة بالأولوية — تبقى لك'),
                t("A straight answer on whether we're a fit", 'إجابة صريحة حول مدى ملاءمتنا لك'),
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white/50">
                  <span className="text-accent mt-0.5 shrink-0">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="glass gradient-border rounded-sm p-7">
            <h3 className="text-white font-semibold mb-3">{t('Who this is for', 'لمن هذا التدقيق')}</h3>
            <p className="text-white/40 text-xs leading-relaxed">
              {t(
                'Established UAE service businesses — clinics, real estate, consultancies, education and premium services — with an offer that already sells, a team ready to follow up enquiries and the ambition to build owned pipeline.',
                'أنشطة خدمية إماراتية قائمة — عيادات وعقارات واستشارات وخدمات مميزة — بإيرادات ٥٠ ألف درهم شهرياً فأكثر، ولديها عرض ناجح وطموح للتوسّع.'
              )}
            </p>
            <h3 className="text-white font-semibold mb-3 mt-6">{t('Who it is not for', 'لمن ليس مناسباً')}</h3>
            <p className="text-white/40 text-xs leading-relaxed">
              {t(
                "Pre-revenue startups, teams that only want isolated social posting, or anyone looking for the cheapest supplier. We'd rather say it here than waste your call.",
                'الشركات الناشئة قبل الإيرادات، أو من يريد فقط «إدارة إنستغرام»، أو من يختار على أساس السعر الأدنى.'
              )}
            </p>
          </div>

          <div className="glass gradient-border rounded-sm p-7 space-y-3">
            <div className="text-white/30 text-[10px] uppercase tracking-[0.3em]">{t('Contact Directly', 'تواصل مباشرةً')}</div>
            <a href="mailto:admin@ignite-scale.com" className="text-white/60 text-sm hover:text-white transition-colors block">
              admin@ignite-scale.com
            </a>
            <div className="text-white/25 text-xs">{t('UK-founded · Serving the UAE', 'تأسست في المملكة المتحدة · تخدم الإمارات')}</div>
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
                    <path d="M5 14l6 6L23 8" stroke="#C9A96E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{t('Your audit request is in', 'تم استلام طلب التدقيق')}</h3>
                  <p className="text-white/40 text-sm leading-relaxed max-w-xs">
                    {t(
                      "We review every request personally. Before your call, we'll look at your website, ads visibility and search presence — expect audit times within one business day.",
                      'نراجع كل طلب شخصياً. قبل مكالمتك سنطّلع على موقعك وحضورك الإعلاني ونتائج البحث — توقّع مواعيد التدقيق خلال يوم عمل واحد.'
                    )}
                  </p>
                </div>
                <div className="text-[10px] text-white/20 uppercase tracking-[0.3em]">
                  {t('Confirmation sent to', 'أُرسل التأكيد إلى')} {form.email}
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
                  {/* Step 0 — contact */}
                  {step === 0 && (
                    <motion.div
                      key="s0"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-5"
                    >
                      <Field label={t('Full Name', 'الاسم الكامل')} required>
                        <input name="name" className={inputCls} placeholder={t('Your full name', 'اسمك الكامل')} value={form.name} onChange={set('name')} />
                      </Field>
                      <Field label={t('Company', 'اسم الشركة')}>
                        <input name="company" className={inputCls} placeholder={t('Your business name', 'اسم نشاطك')} value={form.company} onChange={set('company')} />
                      </Field>
                      <Field label={t('Website', 'الموقع الإلكتروني')}>
                        <input name="website" className={inputCls} placeholder="https://" value={form.website} onChange={set('website')} />
                      </Field>
                      <Field label={t('Email Address', 'البريد الإلكتروني')} required>
                        <input name="email" className={inputCls} type="email" placeholder="your@email.com" value={form.email} onChange={set('email')} />
                      </Field>
                      <Field label={t('Phone / WhatsApp', 'الهاتف / واتساب')} required>
                        <input name="phone" className={inputCls} placeholder="+971 50 000 0000" value={form.phone} onChange={set('phone')} />
                      </Field>
                      <Field label={t('Preferred Contact Method', 'وسيلة التواصل المفضّلة')} required>
                        <div className="grid grid-cols-3 gap-2">
                          {CONTACT_METHODS.map((m) => (
                            <button
                              key={m}
                              type="button"
                              onClick={() => setForm((f) => ({ ...f, contact_method: m }))}
                              className={`text-[11px] tracking-[0.12em] uppercase py-3 border transition-all ${
                                form.contact_method === m
                                  ? 'border-accent/50 bg-accent/10 text-accent'
                                  : 'border-white/[0.07] text-white/30 hover:border-white/20 hover:text-white/50'
                              }`}
                            >
                              {m}
                            </button>
                          ))}
                        </div>
                      </Field>
                    </motion.div>
                  )}

                  {/* Step 1 — business */}
                  {step === 1 && (
                    <motion.div
                      key="s1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-5"
                    >
                      <Field label={t('Industry', 'القطاع')} required>
                        <select name="industry" className={inputCls} value={form.industry} onChange={set('industry')}>
                          <option value="">{t('Select your industry', 'اختر قطاعك')}</option>
                          {INDUSTRIES.map((i) => <option key={i}>{i}</option>)}
                        </select>
                      </Field>
                      <Field label={t('Location', 'الموقع')} required>
                        <select name="location" className={inputCls} value={form.location} onChange={set('location')}>
                          <option value="">{t('Select your location', 'اختر موقعك')}</option>
                          {LOCATIONS.map((l) => <option key={l}>{l}</option>)}
                        </select>
                      </Field>
                      <Field label={t('Monthly Revenue Range', 'نطاق الإيرادات الشهرية')} required>
                        <select name="monthly_revenue_range" className={inputCls} value={form.monthly_revenue_range} onChange={set('monthly_revenue_range')}>
                          <option value="">{t('Select a range', 'اختر النطاق')}</option>
                          {REVENUES.map((r) => <option key={r}>{r}</option>)}
                        </select>
                      </Field>
                      <Field label={t('Monthly Ad Spend', 'الإنفاق الإعلاني الشهري')}>
                        <select name="monthly_ad_spend" className={inputCls} value={form.monthly_ad_spend} onChange={set('monthly_ad_spend')}>
                          <option value="">{t('Select a range', 'اختر النطاق')}</option>
                          {AD_SPENDS.map((a) => <option key={a}>{a}</option>)}
                        </select>
                      </Field>
                    </motion.div>
                  )}

                  {/* Step 2 — funnel */}
                  {step === 2 && (
                    <motion.div
                      key="s2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-5"
                    >
                      <Field label={t('Current Lead Sources', 'مصادر العملاء الحالية')}>
                        <div className="flex flex-wrap gap-2">
                          {LEAD_SOURCES.map((s) => (
                            <button
                              key={s}
                              type="button"
                              onClick={() => toggleSource(s)}
                              className={`text-[10px] tracking-[0.15em] uppercase px-4 py-2 border transition-all duration-200 ${
                                form.lead_sources.includes(s)
                                  ? 'border-accent/50 bg-accent/10 text-accent'
                                  : 'border-white/[0.07] text-white/30 hover:border-white/20 hover:text-white/50'
                              }`}
                            >
                              {s}
                            </button>
                          ))}
                        </div>
                      </Field>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <Field label={t('Leads per Month', 'عدد العملاء المحتملين شهرياً')}>
                          <select name="leads_per_month" className={inputCls} value={form.leads_per_month} onChange={set('leads_per_month')}>
                            <option value="">{t('Select', 'اختر')}</option>
                            {VOLUMES.map((v) => <option key={v}>{v}</option>)}
                          </select>
                        </Field>
                        <Field label={t('Booked Appointments per Month', 'المواعيد المحجوزة شهرياً')}>
                          <select name="appointments_per_month" className={inputCls} value={form.appointments_per_month} onChange={set('appointments_per_month')}>
                            <option value="">{t('Select', 'اختر')}</option>
                            {APPOINTMENTS.map((a) => <option key={a}>{a}</option>)}
                          </select>
                        </Field>
                      </div>
                      <Field label={t('CRM Used (if any)', 'نظام إدارة العملاء المستخدم إن وجد')}>
                        <input name="crm_used" className={inputCls} placeholder={t('e.g. HubSpot, GoHighLevel, spreadsheets, none', 'مثال: HubSpot أو جداول بيانات أو لا شيء')} value={form.crm_used} onChange={set('crm_used')} />
                      </Field>
                      <Field label={t('Biggest Acquisition Problem', 'أكبر مشكلة في اكتساب العملاء')} required>
                        <textarea
                          name="biggest_problem"
                          className={`${inputCls} resize-none`}
                          rows={3}
                          placeholder={t('Where do you think leads are being lost right now?', 'أين تعتقد أن العملاء يضيعون حالياً؟')}
                          value={form.biggest_problem}
                          onChange={set('biggest_problem')}
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
                    {t('← Back', '→ رجوع')}
                  </button>

                  {step < 2 ? (
                    <button
                      onClick={() => setStep((s) => s + 1)}
                      disabled={!canNext()}
                      className={`btn-primary transition-opacity ${canNext() ? 'opacity-100' : 'opacity-30'}`}
                    >
                      {t('Continue →', 'متابعة ←')}
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmit}
                      disabled={!canNext() || sending}
                      className={`btn-primary min-w-[200px] text-center transition-opacity ${canNext() && !sending ? 'opacity-100' : 'opacity-40'}`}
                    >
                      {sending ? t('Sending…', 'جاري الإرسال…') : t('Request My Audit', 'اطلب تدقيقي')}
                    </button>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
      </div>
    </section>
  )
}
