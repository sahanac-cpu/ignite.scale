---
title: "A ROAS Framework for Dubai Brands That Actually Holds Up"
description: "The 5-layer ROAS framework we use to evaluate every Dubai paid media account before we take it on, and the diagnostic questions that surface 80% of the leaks."
slug: "roas-framework-dubai"
publishedAt: "2026-07-05"
tags: ["ROAS", "Paid ads strategy", "Performance marketing"]
readingMinutes: 8
---

"What's your ROAS?" is the single most-asked question in Dubai paid media, and the single most-misanswered. The answer most agencies give is some flattering number that doesn't account for attribution gaps, organic baseline, or marginal cost. The answer that's actually useful is more complicated.

Here is the framework we use internally for every Dubai client, and the five questions that surface most leaks within an hour of auditing an account.

## Layer 1: Platform-reported ROAS

This is what most agencies report. Meta Ads Manager says you spent AED 50,000 and produced AED 200,000 in attributed conversions, so your ROAS is 4×.

Take this number with caution. It is built on a stack of assumptions that have been getting weaker every year:

- iOS 17+ broke client-side attribution for 30-45% of Meta conversions
- Safari ITP wipes most third-party cookies within 7 days
- Cross-device attribution is a guess
- Meta's "last-touch" model takes credit for conversions that would have happened anyway

If platform-reported ROAS is the only number you look at, you are running on partial information. It is the starting point, not the answer.

## Layer 2: Server-side ROAS

The next layer is conversions measured via server-side tracking — Meta Conversions API, Google Enhanced Conversions, server-side GTM. This sees conversions the client-side pixel misses.

The implementation isn't trivial but it is one-time work:

- Set up Conversions API for Meta, with deduplication against the pixel
- Set up Enhanced Conversions for Google with hashed customer data
- Push offline conversions weekly (closed deals, in-store purchases) back to the platforms
- Make sure your CRM is the source of truth, not the platform's reporting

With server-side tracking properly in place, you will typically see your reported ROAS improve 15-30%. The same campaign you thought was at 2.4× is actually at 3.0× because you're capturing conversions you previously missed.

## Layer 3: Incremental ROAS

This is where most reporting falls apart. Platform-reported and server-side ROAS both take credit for conversions that would have happened without your ad. The question that matters is: what additional revenue did the ad spend produce?

Approaches to measuring incremental ROAS:

- **Conversion lift study** in Meta (only available above certain spend thresholds, but worth running)
- **Geo holdout tests** — run ads in 4 emirates, withhold in 3, compare conversion baselines
- **Time-based holdouts** — pause campaigns for 2 weeks, measure organic baseline, restart
- **Brand-vs-non-brand search separation** — in Google, brand-keyword conversions are usually 60-80% incremental zero. Reporting them as ROAS inflates your numbers

A Dubai brand reporting 4× platform ROAS often has 2.5-3× incremental ROAS. That's still good. But it's the real number, not the marketing one.

## Layer 4: Cohort ROAS

For brands with repeat purchases (most of them, if you look at lifetime value), the right framing isn't first-purchase ROAS — it's cohort lifetime ROAS.

A customer acquired through Meta who spent AED 600 on their first purchase looks like a 1.2× ROAS at AED 500 CPL. But if their 12-month LTV averages AED 2,800, the real ROAS is 5.6× across the cohort.

To run this properly:

- Tag every customer in your CRM with acquisition source
- Track 30, 60, 90, 180, 365-day revenue per cohort
- Compare cohorts by channel and creative
- Compute payback period: how many months until cumulative revenue exceeds acquisition cost

Brands that operate on cohort ROAS make different (better) decisions about how aggressively to scale acquisition. Brands that operate on first-purchase ROAS routinely underinvest in their best channels.

## Layer 5: Contribution Margin ROAS

The final layer most brands skip: do you make money after delivering the product?

A 4× ROAS at AED 1,000 CPL with AED 800 contribution margin per sale is a losing campaign. The math:

- Revenue: AED 4,000
- COGS + fulfillment: AED 1,200
- Acquisition cost: AED 1,000
- Contribution: AED 1,800
- Net margin %: 45%
- This is fine

A 4× ROAS at AED 1,000 CPL with AED 400 contribution margin is:

- Revenue: AED 4,000
- COGS + fulfillment: AED 2,400
- Acquisition cost: AED 1,000
- Contribution: AED 600
- Net margin %: 15%
- Now barely breakeven once you add overhead

Most agencies will never look at your COGS. They report ROAS in a vacuum and call it a win. For the brand, the relevant number is always contribution margin after acquisition cost.

---

## The 5 diagnostic questions that surface 80% of leaks

When we audit a new Dubai client's account, these are the five questions that consistently expose the biggest holes:

**1. What's your conversion API setup?** If they don't have one, or if they have one but pixel-deduplication isn't configured, they're under-reporting by 25-40%.

**2. How are you separating brand and non-brand Google search?** If brand and non-brand are mixed in one campaign with shared budget, the algorithm cannibalizes spend into branded queries that would have converted anyway. Easy fix, big lift.

**3. Show me your cohort revenue by acquisition channel for the last 6 months.** Most can't produce this. The ones who can are usually the ones beating their competitors.

**4. What's your contribution margin per sale by SKU?** If they don't know, they cannot optimize for profitable growth. They're optimizing for revenue at any cost.

**5. When did you last run a holdout test?** If never, their incremental ROAS is whatever they want it to be.

These five questions take 30 minutes to ask. The answers determine whether the brand has a real performance marketing operation or a vanity-metric machine.

## Where to start if this feels overwhelming

If you're currently reporting only platform ROAS, the order to fix things:

1. **Implement Conversions API** for Meta (this week)
2. **Set up Enhanced Conversions** for Google (this week)
3. **Separate brand and non-brand search** (this month)
4. **Start tracking cohort revenue** by acquisition channel (this month)
5. **Document contribution margin** per SKU or service line (this quarter)

You don't need to do all of this before you can start measuring properly. Even just layers 1 and 2 give you a vastly more accurate picture than the default.

If you want our team to audit your current ROAS measurement stack and identify which fixes would produce the biggest lift, we run 45-minute strategy calls free. We don't pitch on the call — we tell you what to fix, in order.
