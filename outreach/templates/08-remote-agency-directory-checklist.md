---
templateId: remote-agency-directory-checklist
purpose: "Off-page SEO playbook for ignite-scale at the current stage — no UAE trade license, no physical address. Updated to reflect what actually accepts service-area businesses without address verification."
---

# Remote-first SEO playbook — current stage (no trade license, no address)

These are platforms that genuinely accept service-area businesses without any physical address verification. Each gives you a high-DA backlink and an authoritative profile that Google cross-references with your site (via the `sameAs` schema field).

## ✅ Tier 1 — do these this week (90 min total, no address needed)

### 1. LinkedIn Company Page — DA 98, content amplification + brand SEO

**Why:** LinkedIn pages rank for branded searches. Buyers research agencies on LinkedIn first. Also doubles as where you post the weekly LinkedIn drafts the agent generates.

**Setup (25 min):**
1. Go to https://www.linkedin.com/company/setup/new
2. Page name: **ignite-scale**
3. LinkedIn URL slug: **ignite-scale**
4. Industry: **Marketing & Advertising**
5. Company size: **2–10 employees**
6. Company type: **Privately held**
7. Logo: upload `public/icon-512.png` from the repo
8. Tagline: "Dubai growth agency engineering paid social, content and funnels for ambitious UAE brands"
9. Description: paste the 200-word version from `outreach/templates/04-directory-listing.md`
10. Cover image: use `public/og-image.jpg`

### 2. Bing Places for Business (Service Area mode) — DA 94, feeds DuckDuckGo + Yahoo + AI search

**Why:** Bing Places explicitly supports "Service business" type without physical address. It also feeds DuckDuckGo, Yahoo, and gets cited by AI search engines (ChatGPT browse, Perplexity, Claude).

**Setup (20 min):**
1. Go to https://www.bingplaces.com
2. Sign in with a Microsoft account (create one using admin@ignite-scale.com if needed)
3. Add business → choose **"Service business"** (NOT "Physical location")
4. **Important:** when prompted for address, select "I serve customers at their location" — Bing accepts city + service area only
5. Service area: Dubai + Abu Dhabi + Sharjah + Ajman + Ras Al Khaimah + Fujairah + Umm Al Quwain
6. Verification: phone call to +971 55 511 6465
7. Once verified: complete every profile field (services, hours, photos)

### 3. Apple Maps Business Connect — DA 92, iPhone-first UAE market

**Why:** UAE iPhone share is ~65%. Siri queries route through Apple Maps. Apple accepts service businesses without physical address verification.

**Setup (15 min):**
1. Go to https://mapsconnect.apple.com
2. Sign in with Apple ID (create one with admin@ignite-scale.com if needed)
3. Add business → choose **"Service business"** type
4. Set service area to all 7 UAE emirates
5. Verification by phone to +971 55 511 6465

### 4. Trustpilot Business (free tier) — DA 84, review platform

**Why:** Trustpilot rankings appear in SERPs and feed Google's trust signal. Domain-based verification (no address needed).

**Setup (15 min):**
1. Go to https://business.trustpilot.com
2. Sign up free tier
3. Claim domain: ignite-scale.com
4. Verify via DNS TXT record (Vercel handles DNS — I can wire this if you need)
5. Set up review invitation link
6. Add company info: just city + country (Dubai, UAE)

### 5. Crunchbase Company Profile — DA 92, picked up by AI search engines

**Why:** Crunchbase data is in the training set of every major LLM. When ChatGPT or Claude is asked "what is ignite-scale", they often pull from Crunchbase. Free profile, no address required.

**Setup (15 min):**
1. Go to https://www.crunchbase.com/add-new
2. Add organization: ignite-scale
3. City: Dubai, Country: United Arab Emirates (street address optional, leave blank)
4. Industry: Marketing & Advertising
5. Description: paste from `outreach/templates/04-directory-listing.md`
6. Add website + LinkedIn URL once you have it
7. Add founders / team

---

## ✅ Tier 2 — do these this month (also no address required)

### 6. F6S — DA 66, founder + agency network

https://www.f6s.com — claim ignite-scale profile, list services, get found by founders. No address required.

### 7. HARO / Qwoted — DA 86 + DA 71, expert quote opportunities

- **HARO (Connectively.us):** https://www.connectively.us — daily journalist queries, you respond with expert commentary on Dubai marketing topics. Free.
- **Qwoted:** https://www.qwoted.com — better-quality journalists, $39/month subscription. Worth it once you have content to point to.

Each successful pitch lands a quote + backlink on a high-DA publication. Realistic: 1–3 placements per month.

### 8. ProductHunt + IndieHackers + Reddit founder communities

Founder-presence platforms. No address required. Each contributes brand mentions over time.

---

## 🚫 DEFERRED — need real address or trade license (do these later)

These all require a verified address. Skip until you have a UAE trade license + virtual office (~AED 12,500/year via Meydan or IFZA free zone, or once revenue justifies a coworking address ~AED 500/month):

- **Clutch.co** — needs Headquarter address, validates in 7–10 days (human review catches fakes)
- **GoodFirms** — phone + address validation
- **DesignRush** — phone + address validation
- **Sortlist** — asks for address (less strict but flagged in profile completeness score)
- **Bayut Business Directory** — needs UAE trade license
- **Dubai Chamber of Commerce** — needs UAE trade license

These represent the next ~30% of off-page SEO power that unlocks once you formalize the business. The 5 Tier 1 platforms give you most of the foundation without that step.

---

## After each Tier 1 platform is set up

Send me the URL. I'll add it to the schema's `sameAs` field. This is what teaches Google:

```
"sameAs": [
  "https://www.linkedin.com/company/ignite-scale",
  "https://www.bing.com/maps/...",
  "https://maps.apple.com/...",
  "https://www.trustpilot.com/review/ignite-scale.com",
  "https://www.crunchbase.com/organization/ignite-scale"
]
```

Multiple authoritative profiles all pointing at ignite-scale.com = Google trusts the brand is real. This is the single biggest signal that compensates for not having a Google Business Profile.

---

## What this gets you vs full GBP

| Signal | With full GBP | Tier 1 only (current) | Tier 1 + 2 + license eventually |
|---|---|---|---|
| Branded SERP (knowledge panel) | Yes | Partial (via WebSite schema) | Yes |
| Local pack (map 3-pack) | Yes | No | Yes |
| "Near me" searches | Yes | Partial | Yes |
| Cross-platform brand graph | Strong | Strong | Very strong |
| Reviews authority | Strong | Medium (Trustpilot only) | Strong |
| AI search engine citation | Medium | Strong (Crunchbase + LinkedIn) | Very strong |

Tier 1 gets you to roughly **65–70% of full SEO potential**. Adding license + Tier 2 over 6 months gets you to 95%.

That's plenty to start. The remaining 5% is mostly local-search map-pin advantage, which matters less if you're winning B2B clients through content + outreach + LinkedIn anyway.
