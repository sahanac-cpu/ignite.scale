const items = [
  'Luxury Real Estate',
  'Fine Dining & Hospitality',
  'Fashion & Retail',
  'Luxury Automotive',
  'Wealth Management',
  'Healthcare & Wellness',
  'E-Commerce Brands',
  'Professional Services',
  'Five-Star Hotels',
  'Tech Startups',
  'Beauty & Lifestyle',
  'Legal & Consulting',
]

export default function Marquee() {
  const doubled = [...items, ...items]

  return (
    <div
      className="relative overflow-hidden py-5"
      style={{
        background: 'linear-gradient(90deg, rgba(80,10,0,0.35) 0%, rgba(12,4,2,0.8) 20%, rgba(12,4,2,0.8) 80%, rgba(80,10,0,0.35) 100%)',
        borderTop: '1px solid rgba(255,120,50,0.06)',
        borderBottom: '1px solid rgba(255,120,50,0.06)',
      }}
    >
      <div className="absolute left-0 top-0 bottom-0 w-24 pointer-events-none z-10"
           style={{ background: 'linear-gradient(to right, #080304, transparent)' }} />
      <div className="absolute right-0 top-0 bottom-0 w-24 pointer-events-none z-10"
           style={{ background: 'linear-gradient(to left, #080304, transparent)' }} />

      <div className="flex gap-12 animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-4 shrink-0">
            <span className="w-1 h-1 rounded-full" style={{ background: 'rgba(220,80,20,0.7)' }} />
            <span className="text-[11px] tracking-[0.35em] uppercase font-medium" style={{ color: 'rgba(255,180,130,0.28)' }}>
              {item}
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
