/* Composites the OG image: Higgsfield backdrop + brand wordmark overlay.
   Also rasterises favicon variants from public/logo.svg.
   Run: node scripts/build-og-image.mjs <higgsfield-image-url>
   If no URL is passed, uses a built-in dark gradient fallback. */

import sharp from 'sharp'
import { writeFileSync, readFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'

const BACKDROP_URL = process.argv[2] || ''

const W = 1200
const H = 630

async function loadBackdrop() {
  if (BACKDROP_URL && BACKDROP_URL.startsWith('http')) {
    console.log(`Fetching backdrop: ${BACKDROP_URL}`)
    const res = await fetch(BACKDROP_URL)
    if (!res.ok) throw new Error(`Failed to fetch backdrop: ${res.status}`)
    const buf = Buffer.from(await res.arrayBuffer())
    return sharp(buf).resize(W, H, { fit: 'cover', position: 'centre' })
  }
  // Fallback: programmatic gradient backdrop
  const svg = `
    <svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="glow" cx="78%" cy="80%" r="65%">
          <stop offset="0%" stop-color="#ff5a3c" stop-opacity="0.55"/>
          <stop offset="40%" stop-color="#1a0e0a" stop-opacity="0.85"/>
          <stop offset="100%" stop-color="#0e0e10" stop-opacity="1"/>
        </radialGradient>
        <linearGradient id="vignette" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#0e0e10" stop-opacity="0.4"/>
          <stop offset="100%" stop-color="#0e0e10" stop-opacity="0.0"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="#0e0e10"/>
      <rect width="100%" height="100%" fill="url(#glow)"/>
      <rect width="100%" height="100%" fill="url(#vignette)"/>
    </svg>`
  return sharp(Buffer.from(svg))
}

function overlaySvg() {
  return `
    <svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="scrim" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#0e0e10" stop-opacity="0.78"/>
          <stop offset="55%" stop-color="#0e0e10" stop-opacity="0.30"/>
          <stop offset="100%" stop-color="#0e0e10" stop-opacity="0.00"/>
        </linearGradient>
      </defs>

      <rect width="100%" height="100%" fill="url(#scrim)"/>

      <!-- Eyebrow -->
      <text x="80" y="180"
            font-family="DM Sans, Inter, system-ui, sans-serif"
            font-size="22" font-weight="500"
            fill="#ff6b35" letter-spacing="6">
        DUBAI GROWTH AGENCY
      </text>

      <!-- Wordmark -->
      <text x="80" y="310"
            font-family="DM Sans, Inter, system-ui, sans-serif"
            font-size="120" font-weight="700"
            fill="#fffaf0" letter-spacing="-3">
        IGNITE<tspan fill="#ff6b35">.SCALE</tspan>
      </text>

      <!-- Tagline -->
      <text x="80" y="395"
            font-family="Cormorant Garamond, Georgia, serif"
            font-size="34" font-style="italic" font-weight="400"
            fill="#fffaf0" fill-opacity="0.82">
        Paid social, content and funnels for Dubai's
      </text>
      <text x="80" y="438"
            font-family="Cormorant Garamond, Georgia, serif"
            font-size="34" font-style="italic" font-weight="400"
            fill="#fffaf0" fill-opacity="0.82">
        most competitive niches.
      </text>

      <!-- Footer -->
      <line x1="80" y1="540" x2="280" y2="540" stroke="#ff6b35" stroke-width="2"/>
      <text x="80" y="575"
            font-family="DM Sans, Inter, system-ui, sans-serif"
            font-size="18" font-weight="500"
            fill="#fffaf0" fill-opacity="0.65" letter-spacing="4">
        IGNITE-SCALE.COM
      </text>
    </svg>`
}

async function buildOG() {
  const backdrop = await loadBackdrop()
  const composed = await backdrop
    .composite([{ input: Buffer.from(overlaySvg()), top: 0, left: 0 }])
    .jpeg({ quality: 88, mozjpeg: true })
    .toBuffer()
  const out = resolve('public/og-image.jpg')
  writeFileSync(out, composed)
  console.log(`✓ Wrote ${out} (${composed.length.toLocaleString()} bytes)`)
}

async function buildFavicons() {
  /* Rasterise from favicon.svg (clean small-size optimised) not logo.svg (large square wordmark). */
  const logoPath = resolve('public/favicon.svg')
  if (!existsSync(logoPath)) {
    console.warn('favicon.svg missing — skipping favicons')
    return
  }
  const svg = readFileSync(logoPath)
  const variants = [
    { name: 'icon-512.png', size: 512 },
    { name: 'icon-192.png', size: 192 },
    { name: 'apple-touch-icon.png', size: 180 },
    { name: 'favicon-32.png', size: 32 },
  ]
  for (const v of variants) {
    const buf = await sharp(svg, { density: 512 })
      .resize(v.size, v.size, { fit: 'contain', background: '#000000' })
      .png()
      .toBuffer()
    const out = resolve(`public/${v.name}`)
    writeFileSync(out, buf)
    console.log(`✓ Wrote ${out} (${buf.length.toLocaleString()} bytes)`)
  }
}

await buildOG()
await buildFavicons()
