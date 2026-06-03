# ignite.scale

Marketing/growth studio website for **Ignite Scale**, a Dubai growth studio.

Built with **Next.js (App Router)** for real per-page SEO, server-rendered subpages, sitemap and structured data.

## Stack

- **Next.js 15** (App Router, all marketing pages prerendered static)
- **React 19**
- **Framer Motion** for page transitions, reveals and the magnetic / cursor interactions
- **Tailwind CSS** + a CSS-variable design system (`app/globals.css`)
- **next/font** — Bricolage Grotesque (display) + Hanken Grotesk (text)
- **EmailJS** for the contact form (optional; falls back to a mailto link)
- **@vercel/analytics**

## Design

- Cinematic, atmospheric dark theme: cold deep-petrol base with a warm peach/amber glow.
- Custom bioluminescent particle field on the hero (`components/ParticleField.jsx`).
- Tabbed navigation across real routes (not a single long scroll).

## Routes

| Route | Purpose |
|---|---|
| `/` | Home — hero + section teasers |
| `/services` | Services in detail |
| `/work` | Case studies & results |
| `/process` | Four-step growth process |
| `/journal` + `/journal/[slug]` | SEO articles |
| `/faq` | FAQ (with FAQ structured data) |
| `/contact` | Booking form |

`sitemap.xml` and `robots.txt` are generated from `app/sitemap.js` and `app/robots.js`.

## Develop

```bash
npm install
npm run dev          # http://localhost:3000
npm run build && npm start
```

## Environment

Copy `.env.example` to `.env.local` and fill in the EmailJS keys to enable the
contact form to send email. Without them, the form opens the visitor's mail client.
