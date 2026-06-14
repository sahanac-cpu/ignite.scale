import { useState } from 'react'
import { useLocale } from '../i18n/locale'

export default function ArBetaBanner() {
  const locale = useLocale()
  const [dismissed, setDismissed] = useState(false)

  if (locale !== 'ar' || dismissed) return null

  return (
    <div
      role="region"
      aria-label="Arabic beta notice"
      className="fixed top-0 left-0 right-0 z-[60] bg-[#1a0e0a]/95 backdrop-blur-md border-b border-accent/30 text-white/85 text-[12px] font-body"
      style={{ direction: 'rtl' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-2 flex items-center justify-between gap-4">
        <p className="text-balance">
          النسخة العربية قيد المراجعة من قبل متحدث أصلي
          <span className="opacity-50" style={{ direction: 'ltr', display: 'inline-block', margin: '0 8px' }}>·</span>
          Arabic version pending native review
        </p>
        <button
          onClick={() => setDismissed(true)}
          className="text-white/50 hover:text-white text-[14px] leading-none px-2"
          aria-label="إغلاق"
        >
          ×
        </button>
      </div>
    </div>
  )
}
