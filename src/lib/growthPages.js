/* Single source of truth for the UAE growth-page architecture:
   service hubs, Dubai commercial keyword pages, and industry pages.
   Pure data — imported by GrowthPage.jsx (render) AND scripts/seo-routes.mjs (prerender + sitemap).

   Shape:
   {
     path, group ('service'|'keyword'|'industry'),
     kicker, title (meta title), description (meta), h1,
     answer  — 40–60 word extractive block rendered under the H1 (AEO),
     sections: [{ h, ps: [paragraphs], bullets?: [strings], bulletsTitle? }],
     faqs: [{ q, a }]  — rendered visibly + FAQPage schema,
     related: [{ label, to }],
     service: { name, serviceType, description }  — Service schema,
     cta? — override CTA headline
   }
*/

export const AUDIT_PATH = '/audit'

export const GROWTH_PAGES = [
  /* ─────────────────────────── SERVICE HUBS ─────────────────────────── */
  {
    path: '/services/client-acquisition-systems',
    group: 'service',
    kicker: 'Flagship system',
    title: 'Client Acquisition Systems for UAE Businesses | Ignite Scale',
    description: 'The full client acquisition system: SEO, paid ads, landing pages, CRM funnels and WhatsApp follow-up — engineered as one measurable machine for UAE service businesses.',
    h1: 'The Full Client Acquisition System: Demand, Conversion, Follow-Up, Measurement',
    answer: 'A client acquisition system is the connected infrastructure — SEO, paid ads, landing pages, CRM, and follow-up automation — that turns demand into booked, tracked revenue. Ignite Scale designs, installs and runs these systems for high-value UAE service businesses, measured in booked appointments, not impressions.',
    sections: [
      {
        h: 'Why campaigns fail and systems don’t',
        ps: [
          'Most UAE businesses don’t have a traffic problem. They have a system problem. Ads generate enquiries that sit unanswered for hours. SEO drives visitors to pages that don’t convert. Leads live in WhatsApp threads on someone’s personal phone, and nobody can say which dirham of spend produced which booked appointment.',
          'Agencies keep selling more traffic into that leaking bucket, because traffic is what they’re paid to deliver. We’re paid to deliver something else: a system where every layer is connected and every result is traceable.',
        ],
      },
      {
        h: 'The five connected layers',
        ps: ['Remove any layer and the others underperform. That is why we do not sell channels — we install systems.'],
        bulletsTitle: 'What we install',
        bullets: [
          'Demand — SEO that captures UAE search intent and paid ads (Google + Meta) that generate qualified enquiries',
          'Conversion — landing pages engineered for each offer, built mobile-first for UAE traffic',
          'Capture — a CRM pipeline that collects every lead from every source: forms, WhatsApp, calls, ad lead forms',
          'Follow-up — WhatsApp and email automation that responds in under 60 seconds and follows up for weeks',
          'Measurement — revenue attribution that traces every booked appointment back to the spend that produced it',
        ],
      },
      {
        h: 'What you own',
        ps: [
          'Everything. Ad accounts stay in your name with us added as a partner. Ad spend bills directly to your card. The CRM, the landing pages, the automations and the data are your property. If we ever part ways, the system keeps working — that is the difference between infrastructure and a retainer.',
        ],
      },
      {
        h: 'Installed in 90 days',
        ps: [
          'Week 0 is the Client Acquisition Audit. Weeks 1–2 build foundations: tracking, CRM pipeline, follow-up automation and the first landing pages. Weeks 3–6 switch on demand — ads live, SEO build underway. Weeks 7–12 optimise against one number: cost per booked appointment.',
        ],
      },
    ],
    faqs: [
      { q: 'How is a client acquisition system different from hiring an agency?', a: 'An agency retainer buys activity — posts, campaigns, reports. A client acquisition system is installed infrastructure: connected SEO, ads, landing pages, CRM and follow-up automation that you own, measured in booked appointments and attributed revenue.' },
      { q: 'How long does installation take?', a: 'The core system — tracking, CRM, follow-up automation and first landing pages — is live within 30 days. Full installation and optimisation runs 90 days.' },
      { q: 'Why do you scope after the audit?', a: 'Because the right build depends on your industry, offer, CRM maturity, follow-up capacity and current demand. We explain the required stages after the audit rather than publishing generic packages.' },
      { q: 'Do we own the system?', a: 'Yes. Ad accounts, CRM, landing pages, automations and data all remain your property. We build in your accounts, not ours.' },
      { q: 'Why do you charge in GBP?', a: 'Ignite Scale is a UK-founded company delivering UK-standard strategy, contracts and reporting to UAE businesses. GBP pricing reflects that standard — clients evaluate the investment on cost per booked appointment, not currency.' },
    ],
    related: [
      { label: 'Client Acquisition System — Dubai', to: '/client-acquisition-system-dubai' },
      { label: 'CRM Funnel Systems', to: '/services/crm-funnels' },
      { label: 'WhatsApp Follow-Up Automation', to: '/services/whatsapp-automation' },
      { label: 'Engagement Stages', to: '/investment' },
    ],
    service: { name: 'Client Acquisition Systems', serviceType: 'Marketing Systems Consulting', description: 'Design, installation and operation of full client acquisition systems: SEO, paid ads, landing pages, CRM funnels and follow-up automation.' },
  },
  {
    path: '/services/seo-uae',
    group: 'service',
    kicker: 'SEO',
    title: 'SEO for UAE Businesses — Revenue-Measured SEO | Ignite Scale',
    description: 'UAE SEO that is tied to revenue: keyword strategy, local SEO, technical fixes, AI-search optimisation and CRM-connected tracking. Measured in enquiries, not rankings.',
    h1: 'SEO for UAE Businesses, Measured in Enquiries and Revenue — Not Rankings',
    answer: 'Ignite Scale builds revenue-measured SEO for UAE businesses: every keyword maps to commercial intent, every page is built to convert, and every enquiry is captured in your CRM and traced back to the search that produced it. The output is qualified pipeline, not a ranking screenshot.',
    sections: [
      {
        h: 'The problem with SEO as it is usually sold',
        ps: [
          'Most SEO in the UAE is sold as a ranking report. Positions go up, traffic charts look healthy, and revenue doesn’t move — because nobody connected search visibility to enquiries, bookings and sales. Rankings are a means. Booked appointments are the end.',
        ],
      },
      {
        h: 'How we build it',
        ps: ['Our SEO program is engineered backwards from revenue.'],
        bullets: [
          'Commercial keyword mapping — we target the searches UAE buyers make when they are ready to enquire, not vanity head terms',
          'Technical foundation — Core Web Vitals, clean architecture, schema markup, breadcrumbs and internal linking',
          'Conversion-first pages — every ranking page carries an offer, proof and a booking path',
          'Local UAE visibility — Google Business Profile optimisation and UAE citations where a genuine presence exists',
          'AI-search optimisation (AEO) — extraction-ready answers, FAQ schema and definitions built to be cited by Google AI Overviews, ChatGPT and Gemini',
          'CRM-connected tracking — organic enquiries land in your pipeline tagged by source, so SEO reports in revenue',
        ],
      },
      {
        h: 'Timeline, honestly',
        ps: [
          'Lower-competition terms move in 3–4 months. Competitive Dubai commercial keywords take 6–12 months. That is the truth of the channel — which is why our systems pair SEO with paid acquisition to cover the gap while organic compounds.',
        ],
      },
    ],
    faqs: [
      { q: 'How long does SEO take to work in Dubai?', a: 'Meaningful movement typically appears in 3–4 months for lower-competition terms and 6–12 months for competitive Dubai commercial keywords. Paid acquisition covers the gap while SEO compounds.' },
      { q: 'How do you measure SEO revenue?', a: 'Organic enquiries are captured in your CRM tagged by landing page and query theme, then followed through to booked appointments and closed revenue. SEO reports in pipeline, not positions.' },
      { q: 'Do you optimise for AI search like ChatGPT and Google AI Overviews?', a: 'Yes. Every key page carries extraction-ready answer blocks, FAQ schema and citation-ready definitions designed to be quoted by AI search engines — where a growing share of UAE buyers now start.' },
      { q: 'Do you do Arabic SEO?', a: 'Our core programs are English-first, where most UAE commercial search value for premium services sits. Arabic landing pages and content are added where the data justifies them.' },
    ],
    related: [
      { label: 'SEO Agency Dubai', to: '/seo-agency-dubai' },
      { label: 'SEO for Clinics Dubai', to: '/seo-for-clinics-dubai' },
      { label: 'Client Acquisition Systems', to: '/services/client-acquisition-systems' },
    ],
    service: { name: 'SEO for UAE Businesses', serviceType: 'Search Engine Optimization', description: 'Revenue-measured SEO: technical, on-page, local and AI-search optimisation with CRM-connected attribution.' },
  },
  {
    path: '/services/crm-funnels',
    group: 'service',
    kicker: 'CRM infrastructure',
    title: 'CRM Funnel Systems — Lead-to-Revenue Pipelines | Ignite Scale',
    description: 'CRM funnels that stop paid leads going to waste: one pipeline for every lead source, automated follow-up, booking integration and revenue reporting. Built for UAE businesses.',
    h1: 'CRM Funnels: The System That Stops Paid Leads Going to Waste',
    answer: 'A CRM funnel connects every paid lead to follow-up, booking, and revenue reporting. Ignite Scale builds CRM funnels for UAE businesses that capture leads from forms, WhatsApp, calls and ad lead forms into one pipeline — with automation that responds in seconds and reporting that shows what each lead is worth.',
    sections: [
      {
        h: 'You are paying for leads twice',
        ps: [
          'Once to generate them. Once in the revenue you lose when they are ignored. In audit after audit of UAE service businesses we find the same pattern: enquiries answered hours late, WhatsApp conversations that die after one message, no-shows never rescheduled, and no record of any of it.',
        ],
      },
      {
        h: 'What we build',
        ps: [],
        bullets: [
          'Pipeline design — stages that mirror how your business actually sells, from new enquiry to closed revenue',
          'Lead routing — every source (website forms, Meta and Google lead forms, WhatsApp, calls) lands in one place, tagged by origin',
          'Speed-to-lead automation — instant WhatsApp and email response the moment an enquiry arrives',
          'Booking integration — calendar links, reminders and no-show recovery sequences',
          'Dashboards — spend, leads, appointments and revenue on one screen',
          'Team training — your staff adopt the pipeline, or the system fails; we train until it sticks',
        ],
      },
      {
        h: 'Metrics we hold ourselves to',
        ps: [
          'Speed-to-lead under five minutes (usually under one). Lead-to-appointment rate. Show rate. Pipeline value by source. If a number is not improving, you will hear it from us first — with the fix.',
        ],
      },
    ],
    faqs: [
      { q: 'What is a CRM funnel?', a: 'A CRM funnel is a pipeline that captures every lead from every source, triggers automated follow-up by WhatsApp and email, books appointments, and reports which campaigns produced revenue.' },
      { q: 'Which CRM do you use?', a: 'We implement on proven platforms suited to UAE service businesses and integrate with what you already have. The pipeline, automations and data are configured in your account and remain yours.' },
      { q: 'Can it connect to Meta and Google lead forms?', a: 'Yes. Ad-platform lead forms sync into the pipeline in real time, trigger instant follow-up, and send conversion data back to the ad platforms to improve lead quality.' },
      { q: 'What if my team won’t use it?', a: 'Adoption is part of the build. We design stages around how your team already works, train them directly, and keep dashboards simple enough that managers actually check them.' },
    ],
    related: [
      { label: 'CRM Funnels Dubai', to: '/crm-funnels-dubai' },
      { label: 'WhatsApp Follow-Up Automation', to: '/services/whatsapp-automation' },
      { label: 'Reporting & Revenue Attribution', to: '/services/reporting-attribution' },
    ],
    service: { name: 'CRM Funnel Systems', serviceType: 'CRM Implementation and Marketing Automation', description: 'CRM pipeline design, lead routing, follow-up automation, booking integration and revenue dashboards.' },
  },
  {
    path: '/services/whatsapp-automation',
    group: 'service',
    kicker: 'Follow-up',
    title: 'WhatsApp Follow-Up Automation for UAE Businesses | Ignite Scale',
    description: 'WhatsApp automation that responds to every UAE lead in under 60 seconds: qualification, booking links, reminders, no-show recovery and human handoff. Built on the Business API.',
    h1: 'WhatsApp Automation: Respond to Every UAE Lead in Under 60 Seconds',
    answer: 'WhatsApp follow-up automation replies to every new UAE lead within 60 seconds, automatically — qualifying the enquiry, sending a booking link, issuing reminders and recovering no-shows, then handing to a human the moment one is needed. In a WhatsApp-first market, the fastest responder usually wins the booking.',
    sections: [
      {
        h: 'The UAE is a WhatsApp market',
        ps: [
          'UAE buyers do not want to fill in forms and wait for an email. They want to message you — and they message your competitors at the same time. The business that answers first, with something useful, usually gets the appointment. Most businesses answer in hours. Automation answers in seconds.',
        ],
      },
      {
        h: 'The sequence we install',
        ps: [],
        bullets: [
          'Instant acknowledgement — a useful first reply within 60 seconds, 24/7, including weekends',
          'Qualification — 2–3 structured questions that separate serious buyers from browsers',
          'Booking — calendar link sent in-thread the moment a lead qualifies',
          'Reminders — appointment confirmations and reminders that measurably lift show rates',
          'No-show recovery — polite, persistent rescheduling sequences that recover missed appointments',
          'Human handoff — clear rules for when a conversation moves from automation to your team, with full context',
        ],
      },
      {
        h: 'Done properly',
        ps: [
          'We build on the WhatsApp Business API with proper opt-in, template approval and compliance — not grey-market tools that get numbers banned. Every conversation is logged in your CRM against the lead, so nothing lives on a personal phone ever again.',
        ],
      },
    ],
    faqs: [
      { q: 'Does WhatsApp automation feel robotic to leads?', a: 'Not when designed well. The first replies are useful — acknowledgement, a relevant question, a booking link — and a human takes over the moment the conversation needs one. Speed reads as service, not spam.' },
      { q: 'Is automated WhatsApp messaging compliant?', a: 'We build on the official WhatsApp Business API with explicit opt-in and approved message templates. That protects your number and your brand.' },
      { q: 'Does it work with our existing number?', a: 'Yes — we migrate or register your business number on the Business API so customers see the brand they already know.' },
      { q: 'What results should we expect?', a: 'The reliable effects are faster first response (seconds instead of hours), higher lead-to-appointment conversion, and higher show rates from reminder and recovery sequences. We baseline your numbers in the audit before promising anything.' },
    ],
    related: [
      { label: 'WhatsApp Automation Dubai', to: '/whatsapp-follow-up-automation-dubai' },
      { label: 'CRM Funnel Systems', to: '/services/crm-funnels' },
      { label: 'Clinic Marketing Dubai', to: '/clinic-marketing-dubai' },
    ],
    service: { name: 'WhatsApp Follow-Up Automation', serviceType: 'Marketing Automation', description: 'WhatsApp Business API automation: instant response, qualification, booking, reminders and no-show recovery.' },
  },
  {
    path: '/services/google-ads',
    group: 'service',
    kicker: 'Paid search',
    title: 'Google Ads for UAE High-Intent Leads | Ignite Scale',
    description: 'Google Ads for high-intent UAE searches: intent-tiered keywords, disciplined negatives, purpose-built landing pages and CRM-fed offline conversions. Measured in cost per booked appointment.',
    h1: 'Google Ads for High-Intent UAE Searches — Not Wasted Clicks',
    answer: 'Ignite Scale runs Google Ads for UAE businesses against one metric: cost per booked appointment. Intent-tiered keywords capture buyers who are ready to enquire, disciplined negative keywords cut waste, and CRM-fed offline conversions teach Google to find leads that actually book — not just click.',
    sections: [
      {
        h: 'Dubai clicks are expensive. Waste is optional.',
        ps: [
          'Premium UAE niches carry some of the highest CPCs in the region — which makes discipline the whole game. Broad match on a homepage with no negative keyword list is how budgets die. Every campaign we run pairs tightly-themed ad groups with a landing page built for that exact search, and a negative list that grows weekly.',
        ],
      },
      {
        h: 'The build',
        ps: [],
        bullets: [
          'Intent-tiered keyword strategy — “ready now” terms funded first, research terms only when the economics work',
          'Purpose-built landing pages — message-matched to the query, never a generic homepage',
          'Offline conversion imports — your CRM tells Google which clicks became booked appointments, so the algorithm optimises for revenue, not form-fills',
          'Call and WhatsApp tracking — UAE buyers often skip forms entirely; we track those paths too',
          'Weekly negative keyword mining and search-term review',
          'Transparent reporting — spend, leads, appointments and CPBA, in your account, visible any time',
        ],
      },
    ],
    faqs: [
      { q: 'How do you size Google Ads for Dubai?', a: 'We size media after the audit based on competition, expected conversion rate, sales capacity and how quickly the business needs statistically useful data. Spend is billed directly to your own ad accounts.' },
      { q: 'Why is cost per lead the wrong metric?', a: 'Because a cheap lead that never answers the phone is worthless. Cost per booked appointment counts what acquisition actually delivers, and our CRM integration makes it measurable.' },
      { q: 'Do you work in our ad account or yours?', a: 'Yours, always. You keep the account, the history and the data; we operate as a partner with admin access.' },
    ],
    related: [
      { label: 'Google Ads Agency Dubai', to: '/google-ads-agency-dubai' },
      { label: 'Landing Pages Dubai', to: '/landing-pages-dubai' },
      { label: 'Reporting & Revenue Attribution', to: '/services/reporting-attribution' },
    ],
    service: { name: 'Google Ads Management', serviceType: 'Pay Per Click Advertising', description: 'High-intent Google Ads for UAE businesses with CRM-fed offline conversions and CPBA reporting.' },
  },
  {
    path: '/services/reporting-attribution',
    group: 'service',
    kicker: 'Measurement',
    title: 'Marketing Reporting & Revenue Attribution | Ignite Scale',
    description: 'Revenue attribution for UAE businesses: trace every booked appointment back to the campaign and pound that produced it. One dashboard for spend, leads, appointments and revenue.',
    h1: 'Revenue Attribution: Know Exactly Which Pound Produced Which Appointment',
    answer: 'Revenue attribution traces each booked appointment back to the campaign that produced it. Ignite Scale connects your ad platforms, website, WhatsApp and CRM into one reporting chain — source to lead to appointment to revenue — so marketing decisions are made on money, not vanity metrics.',
    sections: [
      {
        h: 'If you can’t trace it, you can’t manage it',
        ps: [
          'Most UAE businesses judge marketing on screenshots: reach, clicks, cost per lead. None of those numbers say whether the month made money. The chain that matters is source → lead → appointment → show → revenue, and it breaks the moment any link goes untracked.',
        ],
      },
      {
        h: 'What we connect',
        ps: [],
        bullets: [
          'Pixel and server-side tracking on every page and form, with UTMs preserved end-to-end',
          'WhatsApp and call attribution — the enquiry paths UAE buyers actually use',
          'CRM stage tracking — every lead carries its source through the pipeline to revenue',
          'Offline conversion sync back to Google and Meta, so the platforms optimise for bookings',
          'One dashboard — spend, leads, appointments, show rate, CPBA and attributed revenue',
        ],
      },
      {
        h: 'What we report when things aren’t working',
        ps: [
          'The truth, early. If a channel is underperforming you will see it on the same dashboard we do, with our diagnosis and the fix — or the recommendation to switch it off. Honest reporting is cheaper than a wasted quarter.',
        ],
      },
    ],
    faqs: [
      { q: 'What is cost per booked appointment?', a: 'Cost per booked appointment (CPBA) is total acquisition spend divided by appointments actually booked. It is a truer performance measure than cost per lead, which ignores follow-up and lead quality.' },
      { q: 'Can you attribute WhatsApp enquiries?', a: 'Yes. Tagged WhatsApp links and Business API integration let us tie WhatsApp conversations back to the ad, page or search that started them.' },
      { q: 'How often do we get reports?', a: 'The dashboard is live, always. We add a monthly written review: what worked, what didn’t, and what changes next month.' },
    ],
    related: [
      { label: 'CRM Funnel Systems', to: '/services/crm-funnels' },
      { label: 'Client Acquisition Systems', to: '/services/client-acquisition-systems' },
      { label: 'Google Ads', to: '/services/google-ads' },
    ],
    service: { name: 'Reporting & Revenue Attribution', serviceType: 'Marketing Analytics', description: 'End-to-end attribution: tracking, CRM stage reporting, offline conversion sync and live revenue dashboards.' },
  },

  /* ──────────────────── DUBAI COMMERCIAL KEYWORD PAGES ──────────────────── */
  {
    path: '/client-acquisition-system-uae',
    group: 'keyword',
    kicker: 'UAE',
    title: 'Client Acquisition System UAE — Ads, SEO, CRM & Follow-Up | Ignite Scale',
    description: 'How UAE businesses install a client acquisition system: SEO, paid ads, landing pages, CRM funnels and WhatsApp follow-up connected into one measurable machine.',
    h1: 'The Client Acquisition System: How UAE Businesses Turn Demand Into Booked Revenue',
    answer: 'Ignite Scale builds client acquisition systems for UAE clinics and service businesses. The system connects SEO, paid ads, landing pages, CRM funnels and WhatsApp follow-up into one machine, measured in booked appointments and attributed revenue — installed in 90 days and owned by you.',
    sections: [
      {
        h: 'Why UAE businesses outgrow agencies',
        ps: [
          'The UAE is one of the most competitive service markets in the world. Aesthetic clinics, real estate firms, business setup consultants and B2B providers all fight for the same attention, and most respond by buying more of it — more ads, more content, more agencies. The winners do something different: they build infrastructure that converts attention more reliably than competitors can.',
          'A client acquisition system is that infrastructure. It is not a campaign, and it does not expire at the end of a retainer.',
        ],
      },
      {
        h: 'What the system includes',
        ps: [],
        bullets: [
          'Demand capture — SEO built for UAE commercial searches, plus Google and Meta ads for qualified enquiries',
          'Conversion — landing pages engineered per offer, mobile-first for UAE traffic',
          'Follow-up — WhatsApp and email automation that answers every enquiry in under 60 seconds',
          'Pipeline — a CRM that holds every lead, books appointments and recovers no-shows',
          'Measurement — cost per booked appointment and revenue attribution on one dashboard',
        ],
      },
      {
        h: 'Emirate by emirate',
        ps: [
          'We build systems for businesses across Dubai, Abu Dhabi and Sharjah. The mechanics are the same; the demand profile is not — search volumes, CPCs and buyer behaviour differ by emirate and by niche, and the audit maps yours specifically.',
        ],
      },
    ],
    faqs: [
      { q: 'What is a client acquisition system?', a: 'A client acquisition system is the connected infrastructure — SEO, paid ads, landing pages, CRM funnels and automated follow-up — that turns search demand and ad traffic into booked appointments and tracked revenue.' },
      { q: 'Who is it for?', a: 'High-value UAE service businesses: clinics, real estate, business setup and immigration consultants, private education, luxury services and B2B firms with an offer that already sells and capacity to follow up enquiries.' },
      { q: 'How is Ignite Scale different from a social media agency?', a: 'Social media agencies sell content and impressions. Ignite Scale installs measurable acquisition infrastructure and is judged on booked appointments and attributed revenue, not posting schedules.' },
      { q: 'How fast will we see results?', a: 'The follow-up layer typically lifts conversion within the first month, because it recovers leads you already generate. Paid demand scales over the first quarter; SEO compounds over 6–12 months.' },
    ],
    related: [
      { label: 'Client Acquisition System — Dubai', to: '/client-acquisition-system-dubai' },
      { label: 'The full system, explained', to: '/services/client-acquisition-systems' },
      { label: 'Our 90-day process', to: '/process' },
    ],
    service: { name: 'Client Acquisition Systems (UAE)', serviceType: 'Marketing Systems Consulting', description: 'Full client acquisition system design and installation for UAE businesses.' },
  },
  {
    path: '/client-acquisition-system-dubai',
    group: 'keyword',
    kicker: 'Dubai',
    title: 'Client Acquisition System Dubai — Booked Appointments, Not Leads | Ignite Scale',
    description: 'A client acquisition system for Dubai businesses: connected SEO, ads, landing pages, CRM and WhatsApp follow-up. Measured in booked appointments and revenue. UK-standard, GBP-priced.',
    h1: 'A Client Acquisition System Built for the Dubai Market',
    answer: 'For Dubai businesses, a client acquisition system replaces disconnected marketing with one machine: ads and SEO capture demand, landing pages convert it, a CRM captures every lead, WhatsApp automation follows up in seconds, and attribution reports what each booked appointment cost. Ignite Scale installs it in 90 days.',
    sections: [
      {
        h: 'Dubai’s specific problem: expensive attention, cheap follow-up',
        ps: [
          'Dubai has some of the highest advertising costs in the region — and some of the fastest-moving buyers. A prospect who enquires about a clinic treatment, a property or a business setup package is usually talking to three of your competitors within the hour. In that market, the follow-up layer is not admin. It is the competitive weapon.',
          'Most Dubai businesses spend 90% of their budget generating enquiries and almost nothing making sure those enquiries are answered, qualified, booked and shown up. That is the leak we fix first.',
        ],
      },
      {
        h: 'What we install for Dubai businesses',
        ps: [],
        bullets: [
          'Google Ads on high-intent Dubai searches, with offline conversions fed back from your CRM',
          'Meta ads for demand generation in visual niches — clinics, real estate, premium services',
          'Landing pages message-matched to each campaign, loading in under two seconds on mobile',
          'A CRM pipeline holding every enquiry from every source, with speed-to-lead SLAs',
          'WhatsApp automation — first response in under 60 seconds, 24/7',
          'One dashboard: spend, leads, appointments, show rate, revenue',
        ],
      },
      {
        h: 'UK-standard, Dubai-focused',
        ps: [
          'Ignite Scale is UK-founded and prices in GBP. Dubai clients work with us precisely because they want an international-standard growth partner: transparent contracts, honest reporting, and infrastructure they own. If the deciding factor is finding the cheapest agency in the city, we are not it — deliberately.',
        ],
      },
    ],
    faqs: [
      { q: 'Do you work with businesses outside Dubai?', a: 'Yes — across the UAE including Abu Dhabi and Sharjah, and select international clients. Systems are built remotely with structured onboarding and live reporting.' },
      { q: 'How is the system scoped?', a: 'Scope is set after the audit. We define the right sequence of diagnostic, foundation, launch and optimisation stages, with ad spend billed directly to your own accounts.' },
      { q: 'What happens in the first 30 days?', a: 'Tracking, CRM pipeline, WhatsApp and email automation, and your first landing pages go live. Demand channels switch on once the conversion layer can hold what they produce.' },
      { q: 'Which industries do you focus on in Dubai?', a: 'Aesthetic, dental and medical clinics, real estate, business setup and immigration consultants, private education, luxury services and B2B firms.' },
    ],
    related: [
      { label: 'Client Acquisition System — UAE', to: '/client-acquisition-system-uae' },
      { label: 'Lead Generation Agency Dubai', to: '/lead-generation-agency-dubai' },
      { label: 'Engagement Stages', to: '/investment' },
    ],
    service: { name: 'Client Acquisition Systems (Dubai)', serviceType: 'Marketing Systems Consulting', description: 'Client acquisition system installation for Dubai businesses: ads, SEO, landing pages, CRM and WhatsApp automation.' },
  },
  {
    path: '/seo-agency-dubai',
    group: 'keyword',
    kicker: 'Dubai SEO',
    title: 'SEO Agency Dubai — Revenue-Focused SEO for UAE Businesses | Ignite Scale',
    description: 'Dubai SEO built for revenue: keyword strategy, local SEO, AI-search optimisation and conversion tracking — connected to your CRM so every ranking is tied to booked appointments.',
    h1: 'An SEO Agency in Dubai That’s Measured in Booked Appointments, Not Rankings',
    answer: 'Ignite Scale is a UK-founded SEO partner for Dubai businesses. We target the commercial searches Dubai buyers make when ready to enquire, build pages that convert them, and connect every organic enquiry to your CRM — so SEO reports in booked appointments and revenue, not ranking screenshots.',
    sections: [
      {
        h: 'How to judge an SEO agency in Dubai',
        ps: [
          'Ask one question: “How will I see what SEO earned me?” If the answer involves ranking reports and traffic charts, keep looking. Rankings for the wrong terms are free; rankings for buying-intent terms with a converting page behind them are a revenue asset. The difference is the entire discipline.',
        ],
      },
      {
        h: 'What the program covers',
        ps: [],
        bullets: [
          'Commercial keyword strategy mapped to Dubai and UAE search demand in your niche',
          'Technical SEO — site speed, architecture, schema, indexation hygiene',
          'Conversion-first landing and service pages, written to rank and to book',
          'Local visibility — Google Business Profile and UAE citations where you have a genuine presence',
          'AEO — answer blocks, FAQ schema and definitions built for Google AI Overviews and ChatGPT citations',
          'Attribution — organic enquiries tagged in your CRM through to appointments and revenue',
        ],
      },
      {
        h: 'SEO inside a system',
        ps: [
          'SEO performs best as one layer of an acquisition system: paid search proves which keywords convert before you invest months ranking for them, and the CRM proves which rankings earn money. That loop is standard in every program we run.',
        ],
      },
    ],
    faqs: [
      { q: 'How is SEO scoped in Dubai?', a: 'SEO scope depends on competition, technical debt, content gaps, location coverage and whether CRM attribution is already in place. We size the program after the audit and tie it to enquiries, not ranking screenshots.' },
      { q: 'How long until we rank?', a: '3–4 months for lower-competition terms; 6–12 months for competitive Dubai commercial keywords. We publish the expected curve per keyword group in the audit.' },
      { q: 'Do you guarantee rankings?', a: 'No honest agency does — Google does not sell guarantees. We commit to the inputs, publish the plan, and report against enquiries and revenue.' },
      { q: 'Is SEO still worth it now AI answers questions directly?', a: 'Yes — but the work has changed. We optimise for both classic rankings and AI citation (AEO), because a growing share of Dubai buyers start in AI Overviews and ChatGPT.' },
    ],
    related: [
      { label: 'SEO for UAE Businesses', to: '/services/seo-uae' },
      { label: 'SEO for Clinics Dubai', to: '/seo-for-clinics-dubai' },
      { label: 'Google Ads Agency Dubai', to: '/google-ads-agency-dubai' },
    ],
    service: { name: 'SEO Agency Services (Dubai)', serviceType: 'Search Engine Optimization', description: 'Revenue-measured SEO for Dubai businesses with CRM-connected attribution and AI-search optimisation.' },
  },
  {
    path: '/seo-for-clinics-dubai',
    group: 'keyword',
    kicker: 'Clinic SEO',
    title: 'SEO for Clinics in Dubai — Patient Acquisition SEO | Ignite Scale',
    description: 'Clinic SEO for Dubai: rank for treatment searches, capture Google Maps demand, and track every enquiry to a booked consultation. Compliance-aware, revenue-measured.',
    h1: 'SEO for Dubai Clinics: Own the Searches Your Patients Are Already Making',
    answer: 'Clinic SEO in Dubai means ranking for treatment searches — “dental implants Dubai”, “morpheus8 Dubai”, “dermatologist near me” — with pages that convert those searches into booked consultations. Ignite Scale builds treatment-level SEO for clinics, tracked through the CRM from first click to consultation.',
    sections: [
      {
        h: 'Patients search by treatment, not by clinic',
        ps: [
          'Almost nobody searches your clinic’s name until after they have found you. They search the treatment, the problem, and “near me”. Clinics that rank one homepage for one generic term lose to clinics with a dedicated, well-built page for every high-value treatment they offer. Treatment pages are the unit of clinic SEO.',
        ],
      },
      {
        h: 'The clinic SEO build',
        ps: [],
        bullets: [
          'Treatment keyword mapping — every revenue-driving procedure gets its own target cluster',
          'Treatment pages that convert — pricing framing, proof, FAQs and a WhatsApp booking path on every page',
          'Google Business Profile optimisation and review velocity — Maps is where “near me” demand converts',
          'Compliance-aware content — written within UAE healthcare advertising rules',
          'CRM tracking — every organic enquiry tagged to its treatment page, followed through to consultation',
        ],
      },
      {
        h: 'Why pair it with paid',
        ps: [
          'Google Ads on treatment terms proves conversion economics in weeks; SEO then makes the winning terms progressively cheaper to own. Clinics that run both against one CRM see exactly which searches fill chairs — and double down with confidence.',
        ],
      },
    ],
    faqs: [
      { q: 'How long does clinic SEO take in Dubai?', a: 'Maps visibility and lower-competition treatment terms often move within 3–4 months. Flagship terms like “dental implants Dubai” are 6–12 month projects — which is why we pair SEO with paid search from day one.' },
      { q: 'Can you write medically compliant content?', a: 'Yes. Content is written within UAE healthcare advertising rules and routed through your clinical team for sign-off before publication.' },
      { q: 'Do reviews really affect rankings?', a: 'For Maps visibility, strongly. We install review-request automation post-appointment so velocity grows from patients you already serve.' },
      { q: 'How do we know SEO is producing patients?', a: 'Every enquiry is tagged by source and page in the CRM, then tracked to booked and attended consultations. You see SEO as a patient count, not a traffic chart.' },
    ],
    related: [
      { label: 'Clinic Marketing Dubai', to: '/clinic-marketing-dubai' },
      { label: 'Aesthetic Clinic Marketing', to: '/aesthetic-clinic-marketing-dubai' },
      { label: 'Dental Clinic Marketing', to: '/dental-clinic-marketing-dubai' },
    ],
    service: { name: 'SEO for Clinics (Dubai)', serviceType: 'Healthcare Search Engine Optimization', description: 'Treatment-level SEO for Dubai clinics with Maps optimisation and consultation tracking.' },
  },
  {
    path: '/clinic-marketing-dubai',
    group: 'keyword',
    kicker: 'Clinics',
    title: 'Clinic Marketing Dubai — Patient Acquisition Systems | Ignite Scale',
    description: 'Full clinic marketing for Dubai: SEO, Meta and Google ads, treatment landing pages, CRM and WhatsApp follow-up — measured in booked consultations, not likes.',
    h1: 'Clinic Marketing in Dubai, Rebuilt as a Patient Acquisition System',
    answer: 'Clinic marketing in Dubai works when it is built as a system: ads and SEO capture treatment demand, landing pages convert it, WhatsApp automation answers every enquiry in seconds, and the CRM books, reminds and recovers patients. Ignite Scale installs that system and measures it in booked consultations.',
    sections: [
      {
        h: 'Where Dubai clinics actually lose patients',
        ps: [
          'Not in the ad account. In the gap after the enquiry: Instagram DMs answered the next day, WhatsApp threads that die after one message, calls that ring out at lunch, no-shows nobody reschedules. Dubai patients enquire with three clinics at once — the one that responds first and follows up best wins, almost regardless of who had the better ad.',
        ],
      },
      {
        h: 'The patient acquisition system',
        ps: [],
        bullets: [
          'Treatment-level demand capture — Google Ads and SEO on the procedures that drive your revenue',
          'Meta campaigns for demand generation, built compliant with UAE healthcare advertising rules',
          'Treatment landing pages with pricing framing, proof and instant WhatsApp booking',
          'Sub-60-second automated first response, qualification and booking links',
          'Reminder and no-show recovery sequences that protect the calendar you paid to fill',
          'A dashboard reporting cost per booked consultation by treatment and channel',
        ],
      },
      {
        h: 'Front desk included',
        ps: [
          'The best funnel dies at an untrained front desk. Our clinic installations include call and WhatsApp handling playbooks, response-time SLAs and simple pipeline views your reception team will actually use.',
        ],
      },
    ],
    faqs: [
      { q: 'How do you size clinic marketing activity?', a: 'The audit sizes activity against treatment margins, calendar capacity, search demand, follow-up readiness and how many service lines need separate funnels.' },
      { q: 'Which works better for clinics — Meta or Google?', a: 'Google captures patients already searching for treatments; Meta creates demand for visual, elective procedures. Most clinics need both, sequenced — and one CRM to prove which fills chairs.' },
      { q: 'Can you reduce our no-show rate?', a: 'Usually, and quickly. Deposit-secured bookings, automated reminders and recovery sequences reliably lift show rates — it is often the fastest ROI in the whole system.' },
      { q: 'Do you handle healthcare advertising compliance?', a: 'Campaigns and content are built within UAE healthcare advertising rules and signed off by your clinical team before going live.' },
    ],
    related: [
      { label: 'SEO for Clinics Dubai', to: '/seo-for-clinics-dubai' },
      { label: 'Aesthetic Clinic Marketing Dubai', to: '/aesthetic-clinic-marketing-dubai' },
      { label: 'WhatsApp Automation Dubai', to: '/whatsapp-follow-up-automation-dubai' },
    ],
    service: { name: 'Clinic Marketing (Dubai)', serviceType: 'Healthcare Marketing', description: 'Full patient acquisition systems for Dubai clinics: ads, SEO, landing pages, CRM and WhatsApp follow-up.' },
    cta: 'Book a Clinic Acquisition Audit',
  },
  {
    path: '/aesthetic-clinic-marketing-dubai',
    group: 'keyword',
    kicker: 'Aesthetic clinics',
    title: 'Aesthetic Clinic Marketing Dubai — Consultation-Booking Systems | Ignite Scale',
    description: 'Aesthetic clinic marketing in Dubai measured in booked consultations: treatment campaigns, qualification funnels, WhatsApp follow-up and no-show recovery.',
    h1: 'Aesthetic Clinic Marketing in Dubai: Fill Your Consultation Calendar, Not Your Feed',
    answer: 'Aesthetic clinic marketing in Dubai fails when it optimises for followers and DMs. It works when every treatment campaign feeds a qualification funnel: landing page, instant WhatsApp response, deposit-secured consultation booking and no-show recovery. Ignite Scale installs that funnel and reports cost per booked consultation.',
    sections: [
      {
        h: 'The DM graveyard',
        ps: [
          'Dubai aesthetic clinics generate enormous engagement — and convert almost none of it. Enquiries arrive as DMs and WhatsApp messages, get answered hours later by whoever is free, and evaporate. Meanwhile the discount clinic down the road answers in 40 seconds with a booking link. Aesthetics is a speed-and-trust market; both are systematisable.',
        ],
      },
      {
        h: 'What we build for aesthetic clinics',
        ps: [],
        bullets: [
          'Treatment-specific campaigns — Morpheus8, fillers, skin boosters, body contouring — each with its own page and economics',
          'Qualification sequences that filter price-shoppers before they reach your calendar',
          'Deposit-secured consultation bookings that cut no-shows sharply',
          'Instant WhatsApp response with treatment info, pricing frames and booking links',
          'Review and referral automation from patients you already delight',
          'Cost per booked consultation reporting, by treatment',
        ],
      },
      {
        h: 'Compliance without blandness',
        ps: [
          'UAE healthcare advertising rules constrain claims, imagery and language. We build creative that converts inside those rules — clinical authority, honest outcomes framing and social proof do the work that exaggerated promises can’t legally do.',
        ],
      },
    ],
    faqs: [
      { q: 'How do you filter out price-shoppers?', a: 'Qualification questions in the WhatsApp sequence, pricing frames on the landing page, and deposit-secured bookings. Serious patients book; bargain-hunters self-select out before consuming staff time.' },
      { q: 'Can you market injectables compliantly in the UAE?', a: 'Yes, within the rules: no before/after exaggeration, compliant claims and disclaimers, clinical sign-off. Converting creative and compliance are not in conflict when done properly.' },
      { q: 'What is a good cost per booked consultation?', a: 'It varies by treatment margin — a Morpheus8 package supports a very different CPBA than a facial. We benchmark yours in the audit and manage each treatment to its own target.' },
    ],
    related: [
      { label: 'Aesthetic Clinics — industry page', to: '/industries/aesthetic-clinics' },
      { label: 'Clinic Marketing Dubai', to: '/clinic-marketing-dubai' },
      { label: 'SEO for Clinics Dubai', to: '/seo-for-clinics-dubai' },
    ],
    service: { name: 'Aesthetic Clinic Marketing (Dubai)', serviceType: 'Healthcare Marketing', description: 'Consultation-booking systems for Dubai aesthetic clinics: treatment campaigns, qualification funnels, WhatsApp follow-up.' },
    cta: 'Book a Clinic Acquisition Audit',
  },
  {
    path: '/dental-clinic-marketing-dubai',
    group: 'keyword',
    kicker: 'Dental clinics',
    title: 'Dental Clinic Marketing Dubai — Patient Acquisition | Ignite Scale',
    description: 'Dental marketing in Dubai for high-value treatments: implants, veneers, Invisalign. Search campaigns, treatment pages, WhatsApp booking and recall automation.',
    h1: 'Dental Clinic Marketing in Dubai That’s Measured in Booked Chairs',
    answer: 'Dental clinic marketing in Dubai pays best on high-value treatments — implants, veneers, orthodontics — where patients search with intent and compare on trust and finance options. Ignite Scale builds treatment-level search campaigns, converting pages and WhatsApp booking flows, tracked to booked chairs in your CRM.',
    sections: [
      {
        h: 'Two markets in one clinic',
        ps: [
          'Routine dentistry is an insurance-and-proximity game. High-value treatments — implants, full-mouth rehabilitation, veneers, Invisalign — are a search-and-trust game with entirely different economics. Marketing that treats them the same wastes money on the first and under-invests in the second. We build around your treatment P&L.',
        ],
      },
      {
        h: 'The dental acquisition build',
        ps: [],
        bullets: [
          'Google Ads on treatment and emergency terms, with call and WhatsApp tracking',
          'Treatment pages with finance framing — monthly-payment framing routinely outconverts lump-sum pricing',
          'Instant WhatsApp response and consultation booking, including out-of-hours',
          'Reminder and recovery sequences protecting chair time',
          'Recall automation — reactivating your existing patient base is the cheapest revenue you have',
          'Per-treatment CPBA and revenue attribution',
        ],
      },
    ],
    faqs: [
      { q: 'Which dental treatments should we advertise first?', a: 'Usually the highest-margin treatments with real search demand — implants, veneers and Invisalign lead in most Dubai clinics. The audit maps demand and economics per treatment.' },
      { q: 'How do you handle insurance-driven enquiries?', a: 'Qualification in the follow-up flow separates insurance/routine enquiries from high-value treatment leads, routing each to the right booking path so your treatment coordinators focus where the value is.' },
      { q: 'Does emergency dental advertising work?', a: 'Yes — emergency terms convert extremely well if you answer instantly at any hour. Our WhatsApp automation makes 2am enquiries bookable.' },
    ],
    related: [
      { label: 'Dental Clinics — industry page', to: '/industries/dental-clinics' },
      { label: 'Clinic Marketing Dubai', to: '/clinic-marketing-dubai' },
      { label: 'Google Ads Agency Dubai', to: '/google-ads-agency-dubai' },
    ],
    service: { name: 'Dental Clinic Marketing (Dubai)', serviceType: 'Healthcare Marketing', description: 'Patient acquisition for Dubai dental clinics: treatment search campaigns, converting pages, WhatsApp booking, recall automation.' },
    cta: 'Book a Clinic Acquisition Audit',
  },
  {
    path: '/crm-funnels-dubai',
    group: 'keyword',
    kicker: 'CRM',
    title: 'CRM Funnels Dubai — Lead-to-Appointment Automation | Ignite Scale',
    description: 'CRM funnels for Dubai businesses: one pipeline for every lead source, WhatsApp and email automation, booking integration and revenue reporting. Stop losing paid leads.',
    h1: 'CRM Funnels for Dubai Businesses: Stop Losing the Leads You Already Paid For',
    answer: 'A CRM funnel gives a Dubai business one pipeline for every lead — website, WhatsApp, calls, ad lead forms — with automated follow-up, appointment booking and revenue reporting. Ignite Scale designs and installs CRM funnels that respond to every enquiry in under a minute and show what each lead became.',
    sections: [
      {
        h: 'The most expensive spreadsheet in Dubai',
        ps: [
          'It is the one your leads live in — or worse, the WhatsApp thread on a salesperson’s personal phone. Dubai businesses spend heavily generating enquiries and then manage them with memory and good intentions. Every audit we run finds the same thing: 40–70% of paid leads never receive a second follow-up.',
        ],
      },
      {
        h: 'What a proper CRM funnel changes',
        ps: [],
        bullets: [
          'Every lead source lands in one pipeline, tagged by origin and campaign',
          'First response happens in seconds, automatically, by WhatsApp — the channel Dubai buyers actually answer',
          'Follow-up runs for weeks, not one attempt — most bookings come from touches 3 to 8',
          'Appointments book, remind and recover themselves',
          'Managers see pipeline value, response times and conversion by rep on one dashboard',
          'Ad platforms receive conversion data back, so Google and Meta learn what a good lead looks like',
        ],
      },
      {
        h: 'Built in your account, adopted by your team',
        ps: [
          'We configure the CRM in your account, design stages around how you actually sell, and train your team until the pipeline is habit. Software nobody uses is a subscription, not a system.',
        ],
      },
    ],
    faqs: [
      { q: 'We already have a CRM. Do we need a rebuild?', a: 'Often no — most CRMs are underconfigured, not wrong. The audit tells you whether your current platform can run the funnel or whether switching pays for itself.' },
      { q: 'How fast can a CRM funnel go live in Dubai?', a: 'A working pipeline with WhatsApp automation typically goes live within 2–3 weeks, including team training.' },
      { q: 'How is a CRM funnel build scoped?', a: 'Scope depends on lead sources, routing rules, WhatsApp requirements, booking flow, reporting depth and how many teams or locations need visibility.' },
    ],
    related: [
      { label: 'CRM Funnel Systems', to: '/services/crm-funnels' },
      { label: 'WhatsApp Automation Dubai', to: '/whatsapp-follow-up-automation-dubai' },
      { label: 'Reporting & Attribution', to: '/services/reporting-attribution' },
    ],
    service: { name: 'CRM Funnels (Dubai)', serviceType: 'CRM Implementation and Marketing Automation', description: 'CRM funnel design and installation for Dubai businesses: pipeline, automation, booking, attribution.' },
  },
  {
    path: '/lead-generation-agency-dubai',
    group: 'keyword',
    kicker: 'Lead generation',
    title: 'Lead Generation Agency Dubai — Qualified Leads to Booked Appointments | Ignite Scale',
    description: 'A Dubai lead generation partner accountable for what happens after the lead: qualification, follow-up, booking and revenue attribution — not just a spreadsheet of contacts.',
    h1: 'A Lead Generation Agency in Dubai That’s Accountable for What Happens After the Lead',
    answer: 'Most Dubai lead generation agencies deliver contacts and call it done. Ignite Scale delivers the full chain: qualified enquiries, automated follow-up in under 60 seconds, booked appointments and revenue attribution. Lead generation is only the first metre of the funnel — we build the whole thing.',
    sections: [
      {
        h: '“We sent you 200 leads” is not a result',
        ps: [
          'Every Dubai business owner has heard it: the agency reports 200 leads, sales says 12 answered the phone, and nobody agrees whose fault the gap is. The gap is structural. Leads generated into a business with no speed-to-lead automation, no qualification and no pipeline convert at a fraction of their potential — and the agency’s incentive is volume, because volume is what it is paid on.',
        ],
      },
      {
        h: 'Our definition of delivery',
        ps: [],
        bullets: [
          'Qualified enquiries — campaigns and forms designed to filter, not inflate',
          'Sub-60-second first response via WhatsApp automation, around the clock',
          'Structured follow-up for weeks — most Dubai buyers book between touch 3 and touch 8',
          'Booked appointments on your calendar, with reminders and no-show recovery',
          'Cost per booked appointment and attributed revenue as the reported metrics',
        ],
      },
      {
        h: 'Channel-agnostic on purpose',
        ps: [
          'Google, Meta, SEO, LinkedIn — the right mix depends on your niche economics, not our preferences. Because we measure to revenue in one CRM, budget flows to whatever actually books appointments, and we will tell you when a channel should be switched off.',
        ],
      },
    ],
    faqs: [
      { q: 'What makes a lead “qualified”?', a: 'Defined together in the audit: typically budget, location, timeframe and intent criteria checked by the qualification sequence before an appointment reaches your calendar.' },
      { q: 'Do you sell leads or build systems?', a: 'Systems. Shared or resold leads are a race to the bottom. Everything we generate is exclusively yours, in your accounts, in your CRM.' },
      { q: 'Which industries do you generate leads for in Dubai?', a: 'Clinics, real estate, business setup, immigration, private education, luxury services and B2B — high-value services where a booked appointment carries real revenue.' },
      { q: 'How quickly do leads start?', a: 'Paid campaigns produce enquiries within days of launch. The system around them — which is what makes the leads convert — is installed in the first 2–3 weeks.' },
    ],
    related: [
      { label: 'Client Acquisition System Dubai', to: '/client-acquisition-system-dubai' },
      { label: 'Meta Ads Agency Dubai', to: '/meta-ads-agency-dubai' },
      { label: 'Real Estate Lead Generation', to: '/real-estate-lead-generation-dubai' },
    ],
    service: { name: 'Lead Generation (Dubai)', serviceType: 'Lead Generation', description: 'Full-chain lead generation for Dubai businesses: qualified enquiries, automated follow-up, booked appointments, attribution.' },
  },
  {
    path: '/landing-pages-dubai',
    group: 'keyword',
    kicker: 'Landing pages',
    title: 'Landing Pages Dubai — Built to Convert Paid Traffic | Ignite Scale',
    description: 'Landing pages for Dubai campaigns: message-matched to each ad, mobile-first, sub-two-second loads, WhatsApp CTAs and CRM-connected forms. Conversion engineering, not decoration.',
    h1: 'Landing Pages for Dubai Campaigns, Built to Convert Paid Traffic',
    answer: 'A landing page’s job is to convert one audience from one campaign into one action. Ignite Scale builds Dubai landing pages message-matched to each ad, loading in under two seconds on mobile, with WhatsApp CTAs and CRM-connected forms — then tests them against a single number: conversion to booked appointment.',
    sections: [
      {
        h: 'Why homepages burn ad budget',
        ps: [
          'A homepage speaks to everyone, so it converts no one. Dubai CPCs are too high to pay for a click and then hand the visitor seven navigation options and a generic contact form. Message match — the ad’s promise restated and proven on the page — is the single highest-leverage fix in most accounts we audit.',
        ],
      },
      {
        h: 'Anatomy of our pages',
        ps: [],
        bullets: [
          'One offer, one action — every element either advances the booking or gets cut',
          'Mobile-first for UAE traffic, LCP under two seconds',
          'WhatsApp as a primary CTA — the conversion path Dubai buyers prefer',
          'Proof stacked near the decision: results, reviews, credentials, guarantees where honest',
          'CRM-connected forms with UTMs preserved, so attribution survives the click',
          'Structured testing — headline, offer and proof variants against booked-appointment rate',
        ],
      },
    ],
    faqs: [
      { q: 'How many landing pages do we need?', a: 'One per distinct offer/audience pair. A clinic running three treatment campaigns needs three pages — message match is worth far more than volume.' },
      { q: 'How fast can you build one?', a: 'First page live within the first two weeks of an engagement, including tracking and CRM connection.' },
      { q: 'Do landing pages help SEO too?', a: 'Their primary job is paid conversion, but we build them technically clean; the SEO layer of the system handles organic with dedicated pages.' },
    ],
    related: [
      { label: 'Google Ads Agency Dubai', to: '/google-ads-agency-dubai' },
      { label: 'Meta Ads Agency Dubai', to: '/meta-ads-agency-dubai' },
      { label: 'CRM Funnels Dubai', to: '/crm-funnels-dubai' },
    ],
    service: { name: 'Landing Pages (Dubai)', serviceType: 'Conversion Rate Optimization', description: 'Message-matched, mobile-first landing pages for Dubai paid campaigns with CRM-connected tracking.' },
  },
  {
    path: '/meta-ads-agency-dubai',
    group: 'keyword',
    kicker: 'Meta ads',
    title: 'Meta Ads Agency Dubai — Facebook & Instagram Ads That Book Appointments | Ignite Scale',
    description: 'Meta ads in Dubai measured in cost per booked appointment: creative testing, CAPI tracking, lead quality feedback from your CRM and follow-up automation on every lead.',
    h1: 'Meta Ads for Dubai Businesses — Measured in Cost Per Booked Appointment',
    answer: 'Ignite Scale runs Facebook and Instagram ads for Dubai businesses with the full chain attached: tested creative, CAPI tracking, instant WhatsApp follow-up on every lead, and CRM feedback that teaches Meta which leads actually book. The reported metric is cost per booked appointment, not cost per lead.',
    sections: [
      {
        h: 'Meta leads are only as good as the 60 seconds after them',
        ps: [
          'Meta can generate enquiries in Dubai at scale — and those enquiries decay faster than any other channel’s. A lead-form submission answered in five minutes converts at multiples of one answered in five hours. Running Meta ads without automated follow-up is buying ice and leaving it in the sun.',
        ],
      },
      {
        h: 'How we run Meta in Dubai',
        ps: [],
        bullets: [
          'Creative testing as a system — hooks, formats and angles tested weekly, losers cut fast',
          'Lead forms vs landing pages decided by data per offer, not dogma',
          'CAPI + pixel tracking so optimisation survives iOS privacy limits',
          'Instant WhatsApp follow-up on every lead, 24/7',
          'CRM lead-quality feedback to Meta — the algorithm learns “booked appointment”, not “cheap form-fill”',
          'CPBA reporting by campaign, ad set and creative',
        ],
      },
    ],
    faqs: [
      { q: 'How do you size Meta ads in Dubai?', a: 'We size testing around audience depth, offer clarity, creative volume, lead quality targets and your team’s ability to respond quickly. Spend stays in your own ad accounts.' },
      { q: 'Why are our Meta leads low quality?', a: 'Usually some mix of broad creative attracting bargain-hunters, instant forms with zero friction, no qualification step and slow follow-up. All four are fixable — quality is designed, not lucky.' },
      { q: 'Do you produce the ad creative?', a: 'Yes — creative strategy, copy, and production direction are part of the engagement, tested against booked-appointment data rather than opinions.' },
    ],
    related: [
      { label: 'Paid Social service', to: '/services/paid-social' },
      { label: 'Landing Pages Dubai', to: '/landing-pages-dubai' },
      { label: 'CRM Funnels Dubai', to: '/crm-funnels-dubai' },
    ],
    service: { name: 'Meta Ads Management (Dubai)', serviceType: 'Social Media Advertising', description: 'Facebook and Instagram advertising for Dubai businesses with CRM lead-quality feedback and CPBA reporting.' },
  },
  {
    path: '/google-ads-agency-dubai',
    group: 'keyword',
    kicker: 'Google ads',
    title: 'Google Ads Agency Dubai — High-Intent PPC That Books Appointments | Ignite Scale',
    description: 'Google Ads management in Dubai: intent-tiered keywords, weekly negative mining, message-matched landing pages and CRM-fed offline conversions. Judged on cost per booked appointment.',
    h1: 'A Google Ads Agency in Dubai for High-Intent Leads — Not Wasted Clicks',
    answer: 'Google Ads works in Dubai when discipline beats budget: intent-tiered keywords, weekly negative mining, landing pages matched to each search, and offline conversions from your CRM teaching Google what a booked appointment looks like. Ignite Scale manages Dubai PPC accounts against cost per booked appointment.',
    sections: [
      {
        h: 'The Dubai PPC trap',
        ps: [
          'High CPCs plus broad match plus a homepage landing page — that combination quietly burns six figures a year in many Dubai accounts. The clicks are real; the buyers aren’t. Search-term reports in the accounts we audit routinely show 30–50% of spend going to queries that could never convert.',
        ],
      },
      {
        h: 'Our operating standard',
        ps: [],
        bullets: [
          'Intent tiers — “ready now” terms funded first; research terms only when the economics prove out',
          'Tightly-themed ad groups with message-matched landing pages',
          'Weekly search-term review and negative keyword mining',
          'Call and WhatsApp conversion tracking — Dubai buyers often never touch a form',
          'Offline conversion import from your CRM, so smart bidding optimises for bookings',
          'Your account, your data, transparent access at all times',
        ],
      },
    ],
    faqs: [
      { q: 'How long until Google Ads produces results in Dubai?', a: 'First enquiries typically arrive within days of launch; reliable CPBA economics take 4–8 weeks of data and optimisation. We report the curve honestly from week one.' },
      { q: 'Should we run Performance Max?', a: 'Sometimes — with guardrails, proper feeds and after search has proven converting intent. PMax without conversion data quality is a black box that spends confidently and learns nothing.' },
      { q: 'Can you audit our existing account?', a: 'Yes — the Client Acquisition Audit includes a structured review of your account: wasted spend, tracking gaps, and a prioritised fix list you keep either way.' },
    ],
    related: [
      { label: 'Google Ads service', to: '/services/google-ads' },
      { label: 'Landing Pages Dubai', to: '/landing-pages-dubai' },
      { label: 'Business Setup Lead Generation', to: '/business-setup-lead-generation-dubai' },
    ],
    service: { name: 'Google Ads Management (Dubai)', serviceType: 'Pay Per Click Advertising', description: 'High-intent Google Ads management for Dubai businesses with offline conversion optimisation.' },
  },
  {
    path: '/whatsapp-follow-up-automation-dubai',
    group: 'keyword',
    kicker: 'WhatsApp',
    title: 'WhatsApp Follow-Up Automation Dubai — Answer Every Lead in 60 Seconds | Ignite Scale',
    description: 'WhatsApp automation for Dubai businesses: instant first response, qualification, booking links, reminders and no-show recovery on the official Business API. Every conversation logged to your CRM.',
    h1: 'WhatsApp Follow-Up Automation for Dubai Businesses: Answer Every Lead in Under 60 Seconds',
    answer: 'In Dubai, the business that answers WhatsApp first usually wins the customer. Ignite Scale installs WhatsApp follow-up automation on the official Business API: instant first response, qualification questions, booking links, appointment reminders and no-show recovery — every conversation logged in your CRM.',
    sections: [
      {
        h: 'Dubai buyers live on WhatsApp',
        ps: [
          'They enquire on WhatsApp, compare on WhatsApp, and book with whoever answers on WhatsApp. Yet in most Dubai businesses, those conversations sit on personal phones — unanswered at night, invisible to managers, lost when staff leave. Automating the first minutes and systematising the rest is the cheapest conversion lift available in this market.',
        ],
      },
      {
        h: 'The installed flow',
        ps: [],
        bullets: [
          'Instant, useful first reply — 24/7, weekends and holidays included',
          'Qualification — structured questions that sort serious buyers from browsers before staff time is spent',
          'In-thread booking links, confirmations and reminders',
          'No-show recovery sequences that reschedule missed appointments automatically',
          'Human handoff rules with full conversation context in the CRM',
          'Manager visibility — response times, conversation outcomes and pipeline impact on one dashboard',
        ],
      },
      {
        h: 'Official API, protected number',
        ps: [
          'Everything runs on the WhatsApp Business API with proper opt-in and approved templates — not the grey-market bulk tools that get numbers banned mid-campaign. Your number, your brand, protected.',
        ],
      },
    ],
    faqs: [
      { q: 'How fast can WhatsApp automation go live?', a: 'Business API registration and the core flows typically go live within 2–3 weeks, including template approvals and CRM integration.' },
      { q: 'Will customers know they’re talking to automation?', a: 'The first messages are transparent and useful — acknowledgement, a relevant question, a booking link. A human takes over the moment nuance is needed. Speed is experienced as service.' },
      { q: 'Can it handle Arabic and English?', a: 'Yes — bilingual flows with language detection on the first message are standard for Dubai installations.' },
      { q: 'What does it connect to?', a: 'Your CRM, calendar, website forms and ad lead forms — WhatsApp becomes a fully tracked channel instead of a black hole.' },
    ],
    related: [
      { label: 'WhatsApp Automation service', to: '/services/whatsapp-automation' },
      { label: 'CRM Funnels Dubai', to: '/crm-funnels-dubai' },
      { label: 'Clinic Marketing Dubai', to: '/clinic-marketing-dubai' },
    ],
    service: { name: 'WhatsApp Follow-Up Automation (Dubai)', serviceType: 'Marketing Automation', description: 'WhatsApp Business API automation for Dubai businesses: instant response, qualification, booking, recovery.' },
  },
  {
    path: '/real-estate-lead-generation-dubai',
    group: 'keyword',
    kicker: 'Real estate',
    title: 'Real Estate Lead Generation Dubai — Qualified Buyers, Not Portal Junk | Ignite Scale',
    description: 'Real estate lead generation in Dubai: own your lead flow instead of renting it from portals. Qualification funnels, instant WhatsApp response, agent routing and long-cycle nurture.',
    h1: 'Real Estate Lead Generation in Dubai: Qualified Buyers and Investors, Not Portal Junk Leads',
    answer: 'Dubai real estate lead generation works when you own the funnel: project-specific campaigns and pages, instant WhatsApp qualification of budget and timeline, routing to agents with SLAs, and nurture across the 6–18 month buying cycle. Ignite Scale builds that system so brokerages stop renting leads from portals.',
    sections: [
      {
        h: 'The portal treadmill',
        ps: [
          'Portals sell the same lead to multiple agencies, at rising prices, with zero exclusivity and no data ownership. It is a rental model — the day you stop paying, the flow stops and you keep nothing. Building your own acquisition system costs more upfront and compounds forever: your audience, your data, your remarketing pools, your pipeline.',
        ],
      },
      {
        h: 'The brokerage system',
        ps: [],
        bullets: [
          'Campaigns per project or community — off-plan launches, communities, investor propositions each get their own funnel',
          'Instant WhatsApp qualification — budget, timeline, residency status, financing — before an agent is involved',
          'Lead scoring and routing with response-time SLAs per agent, visible to managers',
          'Long-cycle nurture — most buyers transact months after first enquiry; the pipeline that stays in touch wins them',
          'International targeting for investor demand, with time-zone-aware automated response',
          'Attribution from campaign to viewing to transaction',
        ],
      },
      {
        h: 'The agent accountability problem, solved structurally',
        ps: [
          'Agents cherry-pick fresh, hot leads and abandon the rest — rationally, given their incentives. The system fixes it structurally: automation works every lead regardless of temperature, and managers see exactly which leads received which follow-up. Recovered “cold” pipeline is routinely the largest hidden asset we find in brokerages.',
        ],
      },
    ],
    faqs: [
      { q: 'What does a qualified real estate lead look like?', a: 'Defined with you: typically verified budget range, purchase timeline, residency/financing status and location intent — checked by the WhatsApp sequence before reaching an agent.' },
      { q: 'Can you generate international investor leads?', a: 'Yes — geo-targeted campaigns for key investor markets with automated response that works across time zones, so a Singapore enquiry at 3am Dubai time still gets answered in seconds.' },
      { q: 'How do you handle long buying cycles?', a: 'Structured nurture: market updates, project milestones and personalised check-ins over 6–18 months, all logged in the CRM. The database becomes an appreciating asset instead of a graveyard.' },
      { q: 'Do you replace portals entirely?', a: 'Not necessarily — portals can stay as one channel while you build owned flow. The goal is that within 12 months, owned channels produce the majority of qualified pipeline.' },
    ],
    related: [
      { label: 'Real Estate — industry page', to: '/industries/real-estate' },
      { label: 'Meta Ads Agency Dubai', to: '/meta-ads-agency-dubai' },
      { label: 'CRM Funnels Dubai', to: '/crm-funnels-dubai' },
    ],
    service: { name: 'Real Estate Lead Generation (Dubai)', serviceType: 'Lead Generation', description: 'Owned lead generation systems for Dubai real estate: project funnels, qualification, agent routing, nurture.' },
  },
  {
    path: '/business-setup-lead-generation-dubai',
    group: 'keyword',
    kicker: 'Business setup',
    title: 'Business Setup Lead Generation Dubai — Win the Comparison War | Ignite Scale',
    description: 'Lead generation for Dubai business setup consultants: high-intent search campaigns, cost-calculator funnels, 24/7 automated response for international leads and comparison-winning follow-up.',
    h1: 'Lead Generation for Business Setup Consultants in Dubai',
    answer: 'Business setup buyers in Dubai get quotes from five consultants and choose on responsiveness and clarity. Ignite Scale builds acquisition systems for setup firms: high-intent search campaigns, cost-calculator funnels that capture early-stage demand, and 24/7 automated follow-up that wins the comparison war across time zones.',
    sections: [
      {
        h: 'The five-quote reality',
        ps: [
          'Every serious business setup enquiry is shopping. CPCs on “business setup Dubai” terms are brutal because the lifetime value is real — and most firms pay those CPCs, then take six hours to respond to the lead. In a comparison market, response speed and follow-up quality convert more deals than any ad ever will.',
        ],
      },
      {
        h: 'The setup-firm system',
        ps: [],
        bullets: [
          'Google Ads on high-intent terms — freezone vs mainland, licence types, visa-linked searches — with disciplined negatives',
          'Cost-calculator and comparison-guide funnels that capture buyers still researching',
          'Instant automated response, 24/7 — international founders enquire in every time zone',
          'Qualification: activity type, visa needs, timeline, budget — before a consultant’s time is spent',
          'Structured follow-up over the full research cycle, with proposals tracked to outcome',
          'CPBA and revenue attribution by campaign and service line',
        ],
      },
    ],
    faqs: [
      { q: 'Why are business setup CPCs so high in Dubai?', a: 'Because lifetime value is high and competition is intense. The answer is not avoiding the auction but converting better around it: faster response, better funnels, disciplined negatives and full-cycle follow-up.' },
      { q: 'Can you capture leads before they compare five firms?', a: 'Partly — calculator and guide funnels reach founders earlier in research, and instant response plus a strong first consultation reduces how many competitors they bother contacting.' },
      { q: 'Do you handle international enquiries?', a: 'Yes — automated first response works around the clock, and the qualification flow books consultations into time-zone-appropriate slots automatically.' },
    ],
    related: [
      { label: 'Business Setup — industry page', to: '/industries/business-setup' },
      { label: 'Google Ads Agency Dubai', to: '/google-ads-agency-dubai' },
      { label: 'Landing Pages Dubai', to: '/landing-pages-dubai' },
    ],
    service: { name: 'Business Setup Lead Generation (Dubai)', serviceType: 'Lead Generation', description: 'Acquisition systems for Dubai business setup consultants: search campaigns, calculator funnels, 24/7 follow-up.' },
  },

  /* ─────────────────────────── INDUSTRY PAGES ─────────────────────────── */
  {
    path: '/industries/aesthetic-clinics',
    group: 'industry',
    kicker: 'Industry',
    title: 'Aesthetic Clinic Marketing & Patient Acquisition UAE | Ignite Scale',
    description: 'Patient acquisition systems for UAE aesthetic clinics: treatment campaigns, qualification funnels, deposit-secured bookings, WhatsApp follow-up and per-treatment revenue reporting.',
    h1: 'Patient Acquisition Systems for Aesthetic Clinics in the UAE',
    answer: 'Ignite Scale builds patient acquisition systems for UAE aesthetic clinics: treatment-specific campaigns, qualification funnels that filter price-shoppers, deposit-secured consultation bookings, and WhatsApp follow-up that answers every enquiry in seconds — measured in cost per booked consultation, by treatment.',
    sections: [
      {
        h: 'What aesthetic clinic owners tell us',
        ps: ['The pattern across Dubai and Abu Dhabi clinics is remarkably consistent:'],
        bullets: [
          'Instagram engagement is high; booked consultations don’t follow',
          'DMs and WhatsApp enquiries are answered hours late, by whoever is free',
          'Enquirers are price-shoppers comparing against discount clinics',
          'No-show rates quietly destroy calendar economics',
          'Compliance rules make the team afraid to market at all',
          'Nobody can say what a booked consultation costs by treatment',
        ],
      },
      {
        h: 'The system we install',
        ps: [
          'Demand: Meta campaigns for elective, visual treatments plus Google for active treatment searches. Conversion: a landing page per treatment with pricing frames and proof. Follow-up: WhatsApp automation that answers in under a minute, qualifies seriousness and takes a deposit-secured booking. Protection: reminders, no-show recovery, and review automation after every visit.',
          'Everything reports to one number per treatment: cost per booked consultation — and behind it, revenue per campaign.',
        ],
      },
    ],
    faqs: [
      { q: 'How do you compete with discount clinics?', a: 'You don’t — you position out of their market. Qualification funnels, premium framing and deposit bookings repel bargain-hunters and select for patients choosing on outcome and trust, where your margins live.' },
      { q: 'What lifts no-show rates fastest?', a: 'Deposits at booking plus automated reminder and recovery sequences. Together they routinely move show rates dramatically within the first month.' },
      { q: 'Is this compliant with UAE healthcare advertising rules?', a: 'Yes — creative and claims are built within the rules and signed off by your clinical team before launch.' },
    ],
    related: [
      { label: 'Aesthetic Clinic Marketing Dubai', to: '/aesthetic-clinic-marketing-dubai' },
      { label: 'Clinic Marketing Dubai', to: '/clinic-marketing-dubai' },
      { label: 'WhatsApp Automation', to: '/services/whatsapp-automation' },
    ],
    service: { name: 'Aesthetic Clinic Patient Acquisition', serviceType: 'Healthcare Marketing', description: 'Acquisition systems for UAE aesthetic clinics: campaigns, qualification, booking, follow-up, attribution.' },
    cta: 'Book a Clinic Acquisition Audit',
  },
  {
    path: '/industries/dental-clinics',
    group: 'industry',
    kicker: 'Industry',
    title: 'Dental Clinic Marketing & Patient Acquisition UAE | Ignite Scale',
    description: 'Acquisition systems for UAE dental clinics: high-value treatment campaigns (implants, veneers, Invisalign), finance-framed pages, WhatsApp booking and recall automation.',
    h1: 'Patient Acquisition Systems for UAE Dental Clinics',
    answer: 'UAE dental clinics grow fastest on high-value treatments — implants, veneers, Invisalign — where patients search with intent and decide on trust and financing. Ignite Scale builds treatment-level campaigns, finance-framed landing pages, instant WhatsApp booking and recall automation, tracked to booked chairs.',
    sections: [
      {
        h: 'The high-value treatment opportunity',
        ps: [
          'Routine dentistry fills schedules; high-value treatments build clinics. An implant case is worth many multiples of a cleaning, the patient journey starts with a Google search, and the deciding factors — credibility, clarity, financing — are all buildable assets. Most UAE dental marketing ignores this and advertises the brand generically. We build per-treatment economics instead.',
        ],
      },
      {
        h: 'What the dental system includes',
        ps: [],
        bullets: [
          'Google Ads on treatment and emergency searches with call and WhatsApp tracking',
          'Treatment pages with monthly-payment framing — financing clarity routinely outconverts price-hiding',
          'Instant WhatsApp response and booking, including out-of-hours emergency enquiries',
          'Insurance vs high-value qualification routing, so coordinators focus where value is',
          'Recall and reactivation automation across your existing patient base',
          'Per-treatment cost per booked chair and revenue attribution',
        ],
      },
    ],
    faqs: [
      { q: 'What is the fastest win for a UAE dental clinic?', a: 'Usually reactivation — automated recall across your existing patient base costs almost nothing and fills chairs within weeks — followed by emergency-search campaigns with instant response.' },
      { q: 'How should we present implant pricing?', a: 'Transparently framed: ranges, what determines the final figure, and monthly payment options. Hiding pricing generates unqualified enquiries and wastes coordinator time.' },
      { q: 'Do you work with multi-branch clinics?', a: 'Yes — per-branch tracking, routing and reporting so each location’s economics stand on their own.' },
    ],
    related: [
      { label: 'Dental Clinic Marketing Dubai', to: '/dental-clinic-marketing-dubai' },
      { label: 'SEO for Clinics Dubai', to: '/seo-for-clinics-dubai' },
      { label: 'Google Ads', to: '/services/google-ads' },
    ],
    service: { name: 'Dental Clinic Patient Acquisition', serviceType: 'Healthcare Marketing', description: 'High-value treatment acquisition systems for UAE dental clinics.' },
    cta: 'Book a Clinic Acquisition Audit',
  },
  {
    path: '/industries/medical-clinics',
    group: 'industry',
    kicker: 'Industry',
    title: 'Medical Clinic Marketing & Patient Acquisition UAE | Ignite Scale',
    description: 'Acquisition systems for UAE medical clinics: grow self-pay, high-value service lines with compliant campaigns, department-level attribution and WhatsApp booking flows.',
    h1: 'Patient Acquisition Systems for UAE Medical Clinics',
    answer: 'For UAE medical clinics, the growth lever is self-pay and high-value service lines — dermatology, physiotherapy, diagnostics, specialist consultations. Ignite Scale builds compliant, department-level acquisition: search campaigns per service line, WhatsApp booking flows and attribution that shows each department’s cost per booked patient.',
    sections: [
      {
        h: 'The multi-department attribution problem',
        ps: [
          'A medical centre marketing itself as one brand cannot see which departments its budget actually feeds. Dermatology may be printing money while the same spend on general practice barely covers itself. Department-level campaigns, pages and tracking turn marketing from a shared cost into a set of accountable P&Ls.',
        ],
      },
      {
        h: 'The medical clinic build',
        ps: [],
        bullets: [
          'Service-line campaigns — each revenue-driving department gets its own funnel and economics',
          'Compliant content and claims, signed off by your medical director',
          'WhatsApp and call booking flows with insurance/self-pay qualification',
          'Reminders and recovery protecting specialist calendars',
          'Department-level dashboards: spend, enquiries, booked patients, attended, revenue',
        ],
      },
    ],
    faqs: [
      { q: 'Can you market regulated medical services in the UAE?', a: 'Yes — within UAE healthcare advertising rules, with claims and creative signed off by your clinical leadership before launch.' },
      { q: 'How do you handle insurance-mix patients?', a: 'Qualification in the booking flow identifies insurance vs self-pay early and routes each to the correct path, keeping specialist calendars weighted toward the service lines you want to grow.' },
      { q: 'Which service lines respond best?', a: 'Self-pay lines with active search demand — dermatology, physio, dental, diagnostics, IV therapy and specialist consultations typically lead. The audit maps demand per department.' },
    ],
    related: [
      { label: 'Clinic Marketing Dubai', to: '/clinic-marketing-dubai' },
      { label: 'SEO for Clinics Dubai', to: '/seo-for-clinics-dubai' },
      { label: 'Reporting & Attribution', to: '/services/reporting-attribution' },
    ],
    service: { name: 'Medical Clinic Patient Acquisition', serviceType: 'Healthcare Marketing', description: 'Department-level acquisition systems for UAE medical clinics and centres.' },
    cta: 'Book a Clinic Acquisition Audit',
  },
  {
    path: '/industries/real-estate',
    group: 'industry',
    kicker: 'Industry',
    title: 'Real Estate Lead Generation Systems Dubai & UAE | Ignite Scale',
    description: 'Qualified buyer and investor acquisition for UAE real estate: owned lead flow, WhatsApp qualification, agent routing with SLAs and nurture across long buying cycles.',
    h1: 'Qualified Buyer & Investor Acquisition for UAE Real Estate',
    answer: 'UAE real estate firms win by owning their lead flow: project-specific funnels, instant WhatsApp qualification of budget and timeline, agent routing with response SLAs, and nurture across 6–18 month buying cycles. Ignite Scale builds that infrastructure so brokerages and developers stop depending on portals.',
    sections: [
      {
        h: 'The problems every brokerage recognises',
        ps: [],
        bullets: [
          'Portal dependence — rented leads, shared with competitors, gone the day you stop paying',
          'International “leads” that never answer and were never qualified',
          'Agents cherry-picking hot leads while the database rots',
          'No speed-to-lead standard — enquiries answered when convenient',
          'Zero nurture across buying cycles that run months or years',
          'No attribution from campaign to viewing to transaction',
        ],
      },
      {
        h: 'The owned-acquisition alternative',
        ps: [
          'Campaigns per project and buyer segment feed landing pages built for each proposition. WhatsApp automation qualifies budget, timeline, residency and financing in the first minutes — at any hour, in any time zone. Scored leads route to agents under visible SLAs; everything else enters structured nurture. Managers finally see the whole pipeline, and the database becomes an appreciating asset.',
        ],
      },
    ],
    faqs: [
      { q: 'Does this work for off-plan launches?', a: 'Especially well — launch funnels with project-specific pages, EOI flows and instant qualification are where owned acquisition beats portals most decisively.' },
      { q: 'How do you stop agents ignoring system leads?', a: 'Structurally: SLAs visible to managers, automated follow-up that works leads regardless of agent attention, and routing rules that reward responsiveness.' },
      { q: 'Can you target international investors?', a: 'Yes — geo-targeted campaigns in key investor markets with time-zone-aware automated response and qualification.' },
    ],
    related: [
      { label: 'Real Estate Lead Generation Dubai', to: '/real-estate-lead-generation-dubai' },
      { label: 'Meta Ads Agency Dubai', to: '/meta-ads-agency-dubai' },
      { label: 'CRM Funnel Systems', to: '/services/crm-funnels' },
    ],
    service: { name: 'Real Estate Acquisition Systems', serviceType: 'Real Estate Marketing', description: 'Owned lead generation and nurture systems for UAE brokerages and developers.' },
  },
  {
    path: '/industries/business-setup',
    group: 'industry',
    kicker: 'Industry',
    title: 'Lead Generation for Business Setup Consultants UAE | Ignite Scale',
    description: 'Client acquisition systems for UAE business setup consultants: high-intent search, calculator funnels, 24/7 international follow-up and proposal-to-close tracking.',
    h1: 'Client Acquisition Systems for UAE Business Setup Consultants',
    answer: 'Business setup is a comparison market: buyers collect quotes from five firms and choose on speed and clarity. Ignite Scale builds acquisition systems for UAE setup consultants — high-intent search campaigns, cost-calculator funnels, 24/7 automated response for international founders, and follow-up that tracks every proposal to outcome.',
    sections: [
      {
        h: 'Why setup firms lose deals they paid for',
        ps: [
          'The lead cost is brutal and the follow-up is casual — that mismatch defines the industry. A founder comparing freezone options at midnight in Berlin enquires with five firms; four respond the next afternoon with a generic PDF. The firm that responds in seconds, asks intelligent qualification questions and books a consultation while the founder is still at their desk wins disproportionately.',
        ],
      },
      {
        h: 'The system for setup consultants',
        ps: [],
        bullets: [
          'Google Ads on high-intent terms with aggressive negative discipline',
          'Cost-calculator and freezone-comparison funnels capturing earlier-stage research demand',
          'Instant automated response and qualification, 24/7 across time zones',
          'Consultation booking with time-zone-aware slots',
          'Proposal tracking and structured follow-up to close — most deals are won in touches 3–8',
          'Revenue attribution by campaign and service line (mainland, freezone, visas, renewals)',
        ],
      },
    ],
    faqs: [
      { q: 'How do we differentiate when every firm sells the same licences?', a: 'On the buying experience: response speed, clarity of guidance, transparent pricing and credible expertise. The system manufactures the first three; your consultants supply the fourth.' },
      { q: 'What about renewals and upsells?', a: 'The CRM tracks every client’s renewal dates and visa events, with automated outreach — recurring revenue most firms leave to memory.' },
      { q: 'Do calculator funnels produce real buyers?', a: 'Yes, earlier-stage ones — which is the point. Captured and nurtured before they enter comparison mode, they close at strong rates with less price pressure.' },
    ],
    related: [
      { label: 'Business Setup Lead Generation Dubai', to: '/business-setup-lead-generation-dubai' },
      { label: 'Google Ads Agency Dubai', to: '/google-ads-agency-dubai' },
      { label: 'CRM Funnels Dubai', to: '/crm-funnels-dubai' },
    ],
    service: { name: 'Business Setup Client Acquisition', serviceType: 'Lead Generation', description: 'Acquisition systems for UAE business setup and company formation consultants.' },
  },
  {
    path: '/industries/immigration-consultants',
    group: 'industry',
    kicker: 'Industry',
    title: 'Immigration Consultant Marketing & Lead Generation UAE | Ignite Scale',
    description: 'Qualification-first acquisition for UAE immigration consultants: eligibility-checker funnels, scored pipelines and trust-building follow-up that filters serious applicants.',
    h1: 'Client Acquisition for Immigration Consultants in the UAE',
    answer: 'Immigration consulting suffers a double problem: a trust deficit in the niche and floods of unqualified enquiries. Ignite Scale builds qualification-first funnels for UAE immigration consultants — eligibility-checker lead magnets, scored CRM pipelines and credibility-led follow-up that filters serious applicants from browsers.',
    sections: [
      {
        h: 'The niche’s twin problems',
        ps: [
          'First, trust: applicants have been burned by overpromising operators, so scepticism is the default. Second, qualification: visa enquiries arrive in volume, but most enquirers are ineligible, unfunded or years from acting. Marketing that ignores either problem produces expensive noise.',
        ],
      },
      {
        h: 'Qualification-first acquisition',
        ps: [],
        bullets: [
          'Eligibility-checker funnels — applicants self-assess before they ever reach a consultant',
          'Scored pipelines — funding, eligibility signals and timeline determine routing and priority',
          'Credibility-led follow-up — process transparency, honest timelines and verifiable credentials instead of promises',
          'Automated document-collection flows once an applicant engages',
          'Per-programme attribution: which campaigns produce paid retainers, not just enquiries',
        ],
      },
    ],
    faqs: [
      { q: 'How do you market ethically in this niche?', a: 'No guaranteed-outcome claims, transparent eligibility criteria and honest timelines. It filters out fantasy-shoppers and builds exactly the trust serious applicants are looking for — ethics and conversion align here.' },
      { q: 'Can you reduce time wasted on ineligible enquiries?', a: 'Substantially — the eligibility checker plus qualification sequence means consultants speak mostly with funded, plausible applicants.' },
      { q: 'Which visa programmes should we advertise?', a: 'The ones where your economics and success rates are strongest; the audit maps search demand per programme against your margins.' },
    ],
    related: [
      { label: 'Lead Generation Agency Dubai', to: '/lead-generation-agency-dubai' },
      { label: 'CRM Funnel Systems', to: '/services/crm-funnels' },
      { label: 'Landing Pages Dubai', to: '/landing-pages-dubai' },
    ],
    service: { name: 'Immigration Consultant Acquisition', serviceType: 'Lead Generation', description: 'Qualification-first acquisition systems for UAE immigration consultants.' },
  },
  {
    path: '/industries/luxury-services',
    group: 'industry',
    kicker: 'Industry',
    title: 'Luxury Service Marketing UAE — Low-Volume, High-Precision Acquisition | Ignite Scale',
    description: 'Acquisition for UAE luxury service businesses: precision targeting of low-volume high-value demand, refined landing experiences and concierge-grade follow-up.',
    h1: 'Low-Volume, High-Precision Acquisition for UAE Luxury Services',
    answer: 'Luxury services in the UAE — private aviation, yachting, concierge, high-end interiors, bespoke experiences — sell to few buyers at high value. Ignite Scale builds precision acquisition: high-intent search capture, refined landing experiences and concierge-grade follow-up that is prompt and personal, never pushy.',
    sections: [
      {
        h: 'Luxury breaks normal playbooks',
        ps: [
          'Mass-market funnel tactics repel luxury buyers. Countdown timers, aggressive retargeting and hard-sell sequences signal exactly the wrong thing. But the opposite error is worse: relying purely on referrals and word of mouth leaves demand uncaptured — because even UHNW buyers Google “private chef Dubai” at 11pm.',
        ],
      },
      {
        h: 'The luxury acquisition approach',
        ps: [],
        bullets: [
          'High-intent search capture — small volumes, exceptional values, disciplined spend',
          'Landing experiences that match the service’s standard — restrained, fast, flawless on mobile',
          'Concierge-grade follow-up: prompt, personal, human-led with automation invisible behind it',
          'Discretion by design — private enquiry paths and careful data handling',
          'Referral systematisation — the channel that already works, made deliberate instead of accidental',
        ],
      },
    ],
    faqs: [
      { q: 'Does automation belong in luxury at all?', a: 'Behind the curtain, yes: instant internal alerts, prepared context for the human responder, and follow-through that never forgets. The client experiences responsiveness, not robots.' },
      { q: 'How do you measure success at low volumes?', a: 'Per-enquiry economics: enquiry quality, consultation rate and closed value. At luxury price points, a handful of won clients justifies the entire system.' },
      { q: 'Can you keep our marketing discreet?', a: 'Yes — precision targeting over mass visibility, private enquiry flows, and no client names used anywhere without written consent.' },
    ],
    related: [
      { label: 'Google Ads', to: '/services/google-ads' },
      { label: 'Landing Pages Dubai', to: '/landing-pages-dubai' },
      { label: 'Client Acquisition Systems', to: '/services/client-acquisition-systems' },
    ],
    service: { name: 'Luxury Services Acquisition', serviceType: 'Luxury Marketing', description: 'Precision acquisition systems for UAE luxury service businesses.' },
  },
  {
    path: '/industries/private-education',
    group: 'industry',
    kicker: 'Industry',
    title: 'Private Education & Tutoring Marketing UAE — Enrolment Systems | Ignite Scale',
    description: 'Enrolment acquisition for UAE private education: seasonal campaigns, open-day and assessment funnels, parent nurture sequences and show-rate protection.',
    h1: 'Enrolment Acquisition Systems for UAE Private Education & Tutoring',
    answer: 'Education enrolment in the UAE is seasonal, parent-driven and trust-heavy. Ignite Scale builds enrolment systems for schools, nurseries and tutoring centres: campaigns timed to the academic calendar, open-day and assessment booking funnels, and parent nurture sequences that protect show rates through long decision cycles.',
    sections: [
      {
        h: 'The enrolment funnel is a parent-decision funnel',
        ps: [
          'Parents research for months, shortlist a handful of options, attend open days and decide slowly — then everyone enrols in the same six-week windows. Marketing that ignores this rhythm wastes budget off-season and under-converts in-season. The system is built around the calendar and the decision psychology.',
        ],
      },
      {
        h: 'What we build for education providers',
        ps: [],
        bullets: [
          'Seasonal campaign architecture — demand capture scaled to enrolment windows, nurture in between',
          'Open-day, tour and assessment booking funnels with instant WhatsApp confirmation',
          'Parent nurture sequences — curriculum answers, fees clarity, outcomes proof — timed to the decision cycle',
          'Show-rate protection: reminders and recovery for tours and assessments',
          'Sibling and referral automation across your existing parent base',
          'Per-campaign cost per enrolment attribution',
        ],
      },
    ],
    faqs: [
      { q: 'When should education campaigns start?', a: 'Demand capture should be strongest 3–4 months before each enrolment window, with nurture running year-round. Starting when competitors do is starting late.' },
      { q: 'How do you handle fees questions?', a: 'Directly — transparent fee frames in the funnel qualify families early and save your admissions team from unqualified tours.' },
      { q: 'Does this work for tutoring centres too?', a: 'Yes — shorter cycles, faster decisions, same mechanics: assessment booking funnels, instant response and parent follow-up sequences.' },
    ],
    related: [
      { label: 'CRM Funnel Systems', to: '/services/crm-funnels' },
      { label: 'Meta Ads Agency Dubai', to: '/meta-ads-agency-dubai' },
      { label: 'WhatsApp Automation', to: '/services/whatsapp-automation' },
    ],
    service: { name: 'Private Education Enrolment Systems', serviceType: 'Education Marketing', description: 'Enrolment acquisition systems for UAE schools, nurseries and tutoring centres.' },
  },
  {
    path: '/industries/b2b-consultants',
    group: 'industry',
    kicker: 'Industry',
    title: 'B2B Consultant Lead Generation UAE — Pipeline Beyond the Founder | Ignite Scale',
    description: 'Predictable pipeline for UAE B2B consultancies: diagnostic-call offers, authority content, LinkedIn and search demand capture, and CRM-staged pipeline visibility.',
    h1: 'A Predictable B2B Pipeline That Doesn’t Depend on the Founder’s Network',
    answer: 'Most UAE B2B consultancies run on the founder’s network — which caps growth at the founder’s calendar. Ignite Scale builds owned pipeline: a diagnostic-call offer that converts, authority content that earns trust, LinkedIn and search demand capture, and a CRM-staged pipeline the whole firm can see and work.',
    sections: [
      {
        h: 'The founder-bottleneck pattern',
        ps: [
          'Revenue tracks the founder’s relationships and speaking calendar. When the founder sells, the pipeline fills; when they deliver, it empties. There is no system a new hire could operate, no visibility into what is coming, and no asset being built. That is a job with staff, not a firm.',
        ],
      },
      {
        h: 'The B2B pipeline build',
        ps: [],
        bullets: [
          'A diagnostic-call offer — specific, valuable and bookable, replacing “let’s grab a coffee”',
          'Authority content that codifies the founder’s expertise into an asset others can distribute',
          'LinkedIn demand capture — founder-voice content plus structured outreach, without the spam',
          'Search capture on the problems your buyers Google before they know who solves them',
          'CRM-staged pipeline: every opportunity visible, aged, and owned by someone',
          'Win/loss attribution so business development budget follows evidence',
        ],
      },
    ],
    faqs: [
      { q: 'Does cold outreach still work for UAE B2B?', a: 'Personalised, research-backed outreach to tight lists works; volume spam does not. We build outreach as one channel inside the system, warmed by content and measured to meetings held.' },
      { q: 'What does a good B2B diagnostic offer look like?', a: 'Specific scope, tangible artefact, honest time commitment — “a 45-minute pricing-model review with a written gap summary” books far better than “a free consultation”.' },
      { q: 'How long until the pipeline is predictable?', a: 'Expect the first system-sourced meetings within weeks and statistically useful pipeline rhythm in one to two quarters, depending on deal size and cycle.' },
    ],
    related: [
      { label: 'Client Acquisition Systems', to: '/services/client-acquisition-systems' },
      { label: 'Lead Generation Agency Dubai', to: '/lead-generation-agency-dubai' },
      { label: 'Reporting & Attribution', to: '/services/reporting-attribution' },
    ],
    service: { name: 'B2B Consultant Pipeline Systems', serviceType: 'B2B Lead Generation', description: 'Owned pipeline systems for UAE B2B consultancies: offers, content, demand capture, CRM visibility.' },
  },
]

export function getGrowthPage(path) {
  return GROWTH_PAGES.find((p) => p.path === path)
}
