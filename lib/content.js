/* Single source of truth for services, work, process, FAQ. */

export const services = [
  {
    slug: 'paid-social',
    title: 'Paid social',
    summary: 'Meta, TikTok and Snap campaigns engineered around cost per qualified lead, not impressions.',
    points: ['Full-funnel account builds', 'Creative testing systems', 'Weekly spend reallocation'],
    image: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&w=900&q=80',
    alt: 'Aurora over a dark sky, suggesting reach and momentum',
  },
  {
    slug: 'content-creative',
    title: 'Content & creative',
    summary: 'Thumb-stopping short-form shot, edited and shipped on a schedule your competitors can’t match.',
    points: ['UGC & studio production', 'Hook-led editing', 'Arabic + English versions'],
    image: 'https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=900&q=80',
    alt: 'Light through a moody forest, a cinematic creative mood',
  },
  {
    slug: 'funnels-cro',
    title: 'Funnels & CRO',
    summary: 'Landing pages and lead flows that turn paid traffic into booked calls and signed deals.',
    points: ['Landing page builds', 'Lead routing & CRM', 'A/B testing'],
    image: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=900&q=80',
    alt: 'A still mountain lake mirroring the sky, a clean funnel mood',
  },
  {
    slug: 'brand-strategy',
    title: 'Brand & strategy',
    summary: 'Positioning, messaging and a visual system that makes premium pricing feel obvious.',
    points: ['Positioning workshops', 'Messaging frameworks', 'Identity systems'],
    image: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=900&q=80',
    alt: 'Forest canopy reaching upward, a brand-growth mood',
  },
]

/* Client names are withheld under NDA. These are anonymised, representative
   engagements; figures reflect the kind of outcomes we build toward. */
export const work = [
  {
    slug: 'waterfront-residential',
    client: 'Waterfront residential launch',
    sector: 'Luxury real estate',
    result: '~5× ROAS',
    blurb: 'The funnel and creative system behind a premium off-plan launch built to sell out early releases on paid social.',
    image: 'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&w=1200&q=80',
    alt: 'Misty mountains at dawn, evoking a coastal property launch',
    metrics: [
      { k: 'ROAS', v: '~5×' },
      { k: 'Cost per lead', v: '−60%' },
      { k: 'Qualified leads', v: '1k+' },
    ],
  },
  {
    slug: 'restaurant-group',
    client: 'Restaurant group expansion',
    sector: 'Hospitality',
    result: '~4× ROAS',
    blurb: 'A content and booking-funnel programme designed to fill covers on the nights that matter and build a repeat base.',
    image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=80',
    alt: 'Foggy forest at dawn, a calm hospitality mood',
    metrics: [
      { k: 'Covers', v: '+200%' },
      { k: 'Cost per booking', v: '−45%' },
      { k: 'Repeat guests', v: '⅓' },
    ],
  },
  {
    slug: 'fashion-label',
    client: 'Fashion label scale-up',
    sector: 'Luxury retail',
    result: '~4.5× ROAS',
    blurb: 'Positioning, creative and paid social built to take a boutique label from local favourite to a regional waitlist.',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80',
    alt: 'Atmospheric misty valley, a luxury retail mood',
    metrics: [
      { k: 'Revenue', v: '+180%' },
      { k: 'ROAS', v: '~4.5×' },
      { k: 'Waitlist', v: '6k' },
    ],
  },
]

export const process = [
  {
    n: '01',
    title: 'Diagnose',
    body: 'We audit your funnel, ad accounts and positioning, then model where the next dirham of spend should go.',
  },
  {
    n: '02',
    title: 'Build',
    body: 'Account architecture, creative system and landing pages go live as one connected machine, not loose parts.',
  },
  {
    n: '03',
    title: 'Scale',
    body: 'We push spend behind what converts, cut what doesn’t, and reallocate every week against pipeline.',
  },
  {
    n: '04',
    title: 'Compound',
    body: 'Winning angles feed brand, brand lowers acquisition cost, and the whole system gets cheaper over time.',
  },
]

export const faqs = [
  { q: 'Who do you work with?', a: 'Ambitious UAE brands in real estate, hospitality and luxury retail that are ready to spend on paid acquisition and want a partner accountable to pipeline, not vanity metrics.' },
  { q: 'What does a typical engagement cost?', a: 'Retainers begin at AED 18,000 per month plus media spend. We scope the exact figure on a strategy call once we understand your goals and current numbers.' },
  { q: 'How fast will we see results?', a: 'Early signal usually appears within the first three to four weeks of a campaign going live. Compounding gains in cost per lead and ROAS typically land across the first quarter.' },
  { q: 'Do you handle creative as well as media buying?', a: 'Yes. Content and media buying live in the same building here, so creative is briefed against performance data and shipped on a weekly cadence.' },
  { q: 'Do you produce content in Arabic?', a: 'We ship in both Arabic and English, with native creators and editors for each, so campaigns resonate across the UAE’s audiences.' },
  { q: 'What happens on the first call?', a: 'A 30-minute strategy call: we review your current funnel, identify the biggest constraint on growth, and tell you honestly whether we’re the right team to fix it.' },
]

export const journal = [
  {
    slug: 'roas-dubai-real-estate',
    title: 'How Dubai real estate brands hit 5× ROAS on paid social',
    excerpt: 'The funnel structure, creative cadence and offer design behind property launches that sell out before completion.',
    date: '2026-05-18',
    readingTime: '7 min',
    tag: 'Real estate',
    image: 'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&w=1200&q=80',
    alt: 'Teal mountains in mist',
    body: [
      'Most property launches in the UAE treat paid social as a billboard. They run brand awareness, count impressions, and wonder why the cost per qualified lead stays stubbornly high.',
      'The brands that hit 5× returns do something different. They build a full funnel, separate cold prospecting from warm retargeting, and design an offer that gives a serious buyer a reason to raise their hand today rather than next quarter.',
      'Creative cadence matters as much as structure. A launch needs a steady supply of hooks, each testing a different motivation: location, yield, lifestyle, scarcity. The winners get more budget, the losers get cut, and the account compounds.',
      'The result is predictable: a lower cost per lead every month, a sales team that trusts the pipeline, and a launch that closes on schedule.',
    ],
  },
  {
    slug: 'uae-social-trends-2026',
    title: 'The UAE social trends actually worth your budget in 2026',
    excerpt: 'A clear-eyed look at where attention is moving across the Emirates, and what to ignore.',
    date: '2026-04-02',
    readingTime: '6 min',
    tag: 'Strategy',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80',
    alt: 'Misty valley at dawn',
    body: [
      'Every January brings a flood of trend predictions. Most are noise. The few that matter share a trait: they change where your audience already spends attention, not where a platform wishes they would.',
      'Short-form video remains the centre of gravity, but the bar for production has risen. Audiences in the Emirates now expect creative that feels native to the platform and considered in its craft, in both Arabic and English.',
      'The quieter shift is in measurement. As tracking gets harder, brands that build first-party data and tie spend to real pipeline will outpace those still optimising to platform-reported conversions.',
    ],
  },
  {
    slug: 'why-dubai-brands-waste-ad-spend',
    title: 'Why most Dubai brands quietly waste their ad spend',
    excerpt: 'Five structural mistakes that drain budgets, and the fix for each.',
    date: '2026-02-20',
    readingTime: '8 min',
    tag: 'Performance',
    image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=80',
    alt: 'Foggy forest at dawn',
    body: [
      'Wasted ad spend rarely looks like waste. It looks like a dashboard full of clicks, a busy content calendar, and a monthly report nobody questions.',
      'The first mistake is optimising to the wrong event. If the platform is counting page views, it will find you cheap page views. Tell it to find booked calls, and the whole account changes character.',
      'The second is creative scarcity. One or two ads carry the account until they fatigue, then performance falls off a cliff. A steady pipeline of fresh hooks keeps cost per result flat as you scale.',
      'Fix measurement, fix creative supply, connect the funnel end to end, and the same budget starts producing two or three times the pipeline.',
    ],
  },
]
