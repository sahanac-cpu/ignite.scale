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
    <div className="relative overflow-hidden border-y border-white/[0.05] py-5 bg-[#080808]">
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#080808] to-transparent z-10 pointer-events-none" />
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#080808] to-transparent z-10 pointer-events-none" />

      <div className="flex gap-12 animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-4 shrink-0">
            <span className="w-1 h-1 rounded-full bg-accent" />
            <span className="text-[11px] tracking-[0.35em] uppercase text-white/30 font-medium">
              {item}
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
