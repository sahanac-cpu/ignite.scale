# Design System Reference
### Synthesized from: Laura Monin × Alt–Border
**Sources:** lauramonin.com · alt-border.com via Refero Pro

---

## 01 — North Stars

| Site | North Star | Mood |
|---|---|---|
| **Laura Monin** | Gallery Grid Serenity | Serene, editorial fashion portfolio. Airy white canvas, negative space as a design element. Like a high-end magazine digitized. |
| **Alt–Border** | Monochromatic Minimalist Gallery | Dense art-catalog intelligence. Tight grid, hairline borders, every element controlled and deliberate. Like a contemporary art archive. |

**Synthesized Direction:** A hybrid that marries Laura Monin's breathable negative space and elegant serif display with Alt–Border's hairline border discipline and compact grid density. White ground, black ink, ruled structure — no color, no decoration, pure content.

---

## 02 — Color System

### Strict Monochrome Palette

| Token | Hex | Name | Role |
|---|---|---|---|
| `--color-bg` | `#ffffff` | Canvas White | Page background, all content surfaces |
| `--color-text` | `#000000` | Ink Black / Text Black | All primary text, headings, nav links, strong borders |
| `--color-border-strong` | `#333333` | Charcoal Grey | Section dividers, content frame borders, structural lines |
| `--color-border-subtle` | `#808080` | Pale Stone | Decorative image borders, subtle card edges, secondary dividers |

**Rules:**
- Zero chromatic color. No accent, no tint, no brand color.
- No gradients, no shadows, no elevation effects.
- Contrast comes entirely from scale, weight, and spatial tension.
- Ghost buttons only — white fill, black border, black text.

---

## 03 — Typography

### Font Stack

| Font | Substitute | Role | Weights | Sizes |
|---|---|---|---|---|
| `Inferi` | Georgia | Headlines, nav links, content text, captions. Narrow serif, high-fashion editorial authority. | 200, 300, 400 | 14px, 21px, 34px, 120px |
| `Neuehaasdisplay` | Helvetica Neue | Hero display statements only. Extra-condensed, architectural impact. | 300 | 105px |
| `neue-haas-grotesk-display` | Helvetica Neue | Body copy, nav elements, supplementary labels. Clean, narrow sans. | 400 | 12px, 14px, 18px, 22px |
| `Suisseintl` | Inter | Descriptive body text. Unobtrusive, legible. | 300 | 21px |

### Type Scale

| Role | Size | Line Height | Letter Spacing | Font |
|---|---|---|---|---|
| Caption | 12–14px | 1.00–1.15 | −0.38 to 0 | neue-haas-grotesk / Inferi 200 |
| Body | 14–21px | 1.00–1.15 | −0.57 | Suisseintl 300 / neue-haas-grotesk 400 |
| Subheading | 18–34px | 1.00–1.15 | −0.92 | Inferi 300 |
| Heading | 22–58px | 1.15–1.20 | −0.63 | Inferi 300–400 |
| Display SM | 58px | 1.20 | −0.63 | Inferi / title serif |
| Display | 105–158px | 0.85–1.20 | −1.4 to −2.84 | Neuehaasdisplay 300 / title |

### Typography Rules
- Hero headline: Neuehaasdisplay or bespoke title serif at 105–158px, weight 300, tight tracking.
- Second-level display: Inferi weight 300 at 34–58px, letter-spacing −0.92px.
- Navigation: 12–14px, weight 200–300, no ornamental framing.
- Captions: 12–14px, Inferi weight 200, directly adjacent to image, 7px gap.
- Never use bold (600+) anywhere. The system lives in the light/regular weight range.
- Never use italic for primary hierarchy.

---

## 04 — Spacing & Layout

### Spacing Tokens

| Token | Value | Use |
|---|---|---|
| `--gap-element` | 7–9px | Between image and caption; between tightly grouped items |
| `--gap-card-padding` | 9px | Internal card padding |
| `--gap-section` | 48–255px | Between major page sections (dense → airy) |
| `--base-unit` | 4px | All spacing derived from this |

### Border Radius

| Context | Radius |
|---|---|
| Laura Monin images / cards | **0px** — sharp gallery edges, no rounding |
| Alt–Border images / cards | **10px** — softened art-piece framing |
| Ghost buttons | **0px** — rectilinear, no pill |
| Navigation elements | **0px** |

> **Decision:** Default to 0px for images and structural containers (editorial sharpness). Use 10px only where images need the curated "framed artwork" feel.

### Layout Patterns

**Laura Monin pattern:**
- Full-bleed white canvas, content centrally anchored
- Images float with massive negative space (~255px section gaps)
- Asymmetric editorial grid — items don't lock to identical rows
- Navigation: top-right, 12px text, 16px spacing between items
- Hero: large centered serif title, full viewport width impression

**Alt–Border pattern:**
- Max-width contained layout with structured grid
- Dense 3-column or 2-column image grids
- Sections separated by full-width 1px `#333333` horizontal rules
- Navigation: minimalist top bar, text links only
- Content rhythm: headline → 1px rule → body text → image grid

**Synthesized layout rules:**
1. White canvas always full-bleed.
2. Content container: max-width with generous side margins.
3. Section breaks = 1px solid `#333333` hairline, full content width.
4. Image grids: structured 2–3 column, 9px gaps between cells.
5. Hero sections: large display type + enormous negative space above/below.
6. No decorative containers, no cards with backgrounds, no boxes with fills.

---

## 05 — Components

### Navigation Bar

```
Font: neue-haas-grotesk-display / Inferi weight 200
Size: 12–14px
Color: #000000
Spacing between items: 16px
Position: fixed top, right-aligned (LM) or full-width minimal bar (Alt–B)
Behavior: no background, no border, floats over white
Hover: underline or subtle opacity shift — no color change
```

### Hero Section

```
Background: #ffffff
Headline font: Neuehaasdisplay weight 300 OR bespoke title serif
Headline size: 105–158px
Headline color: #000000
Letter-spacing: −1.4 to −2.84px (negative, condensed)
Line height: 0.85–1.20
Sub-copy: neue-haas-grotesk 18px weight 400, centered below title
Spacing above: ~25vh
Spacing below headline: 48–80px before next element
Decoration: none. Pure type on white.
```

### Image / Gallery Card

```
Border-radius: 0px (sharp) or 10px (framed)
Border: 1px solid #808080 (Pale Stone) — on images
Hover border: 1px solid #000000 (Ink Black)
Caption below: Inferi weight 200, 14px, #000000, 7–9px gap from image
Background: transparent (image is the surface)
Shadow: none
```

### Section Headline (Content Blocks)

```
Font: Inferi weight 300
Size: 34px
Color: #000000
Letter-spacing: −0.92px
Followed by: 1px solid #333333 full-width divider rule
Margin-bottom before body text: 16–24px
```

### Dividing Line

```
Height: 1px
Color: #333333 (strong) or #808080 (subtle)
Width: 100% of content container
No margin ornament — flush to grid
```

### Ghost Button / CTA

```
Background: transparent
Border: 1px solid #000000
Color: #000000
Border-radius: 0px
Font: Inferi weight 200–300, 14px
Padding: 10px 20px
Hover: background #000000, color #ffffff (invert)
No shadow, no animation beyond invert
```

### Ghost Navigation Arrow (Prev / Next)

```
Text: ← Previous / Next →
Font: Inferi weight 200, 14px
Background: none
Border: none
Color: #000000
Hover: underline
```

### Image Caption

```
Font: neue-haas-grotesk-display OR Inferi weight 200
Size: 12–14px
Color: #000000
Spacing above: 7px (from image bottom)
Case: ALL CAPS or sentence case — consistent per section
```

### Footer

```
Background: #ffffff
Border-top: 1px solid #333333
Font: neue-haas-grotesk 12px weight 400
Color: #000000
Layout: minimal columns, left-right split or simple row
No decorative elements
```

---

## 06 — Imagery & Media

### Photography Treatment
- **Primary role:** Photography IS the design. The UI is scaffolding for the images.
- Sharp, non-rounded presentation (0px) = gallery archival quality.
- Softly bordered (10px + 1px Pale Stone border) = art-piece curation.
- Always edge-to-edge within their grid cell — no float padding inside card.
- High-contrast editorial and fashion photography preferred.
- CGI renders treated identically to photography.
- No illustration. No icons. No decorative graphics.
- No text overlay on images (caption lives below, not on top).

### Image Grid Density
- **Laura Monin:** Fewer images, large scale, enormous breathing room.
- **Alt–Border:** Dense grids, 3 columns, compact 9px gutters — each image as a "stamp."
- **Synthesized:** Section-specific. Hero/feature images: LM treatment. Archive/index grids: Alt–B treatment.

---

## 07 — Animation & Interaction

Both reference sites are static/print-influenced. Interactions are understated.

### Hover States
- Image cards: border shifts from `#808080` → `#000000` (Pale Stone → Ink Black)
- Navigation links: underline reveal or 15–20% opacity decrease
- Ghost buttons: full invert (black bg, white text)
- No transforms, no scale, no translation on hover

### Scroll Behavior
- No parallax (both sites are flat/print-inspired)
- Sections reveal in sequence — simple opacity fade-in if animated at all
- No horizontal scroll, no sticky elements beyond nav

### Transitions
- Duration: 200–300ms
- Easing: `ease` or `cubic-bezier(0.4, 0, 0.2, 1)`
- Properties: opacity, border-color, background-color, color only
- No transform-based animations

---

## 08 — Page Structure Template

```
┌─────────────────────────────────────────────────┐
│  NAV  [logo left]          [links right 12px]   │  ← fixed, no bg
├─────────────────────────────────────────────────┤
│                                                 │
│         HERO DISPLAY TYPE 105–158px             │  ← 25vh padding-top
│         subtitle 18px                          │
│                                                 │
├─ 1px #333333 ───────────────────────────────────┤
│                                                 │
│  SECTION HEADLINE 34px Inferi 300               │
│  ─────────────────────────────── 1px rule       │
│  Body text 21px Suisseintl 300                  │
│                                                 │
│  [img][img][img]  ← 3-col grid, 9px gap         │
│  cap  cap  cap    ← 14px Inferi 200, 7px above  │
│                                                 │
├─ 48px gap ──────────────────────────────────────┤
│                                                 │
│  SECTION HEADLINE 34px                         │
│  ─────────────────────────────── 1px rule       │
│                                                 │
│         [large feature image]                   │  ← 0px radius
│         caption 14px                           │
│                                                 │
├─ 1px #333333 ───────────────────────────────────┤
│  FOOTER  links left          links right  12px  │
└─────────────────────────────────────────────────┘
```

---

## 09 — Do / Don't Rules (Combined)

### DO
- Use `#ffffff` for all backgrounds and surfaces
- Use `#000000` for all text, headings, borders
- Use display type at 105–158px for hero — no restraint at large scale
- Apply negative letter-spacing on all display and heading type
- Frame images with 1px borders (Pale Stone or Charcoal Grey)
- Use 1px hairline rules as the only structural dividers
- Maintain dense 9px gaps in grids; generous 48–255px between sections
- Keep weight in the 200–400 range — never bold
- Let photography carry visual weight; keep UI invisible

### DON'T
- No chromatic colors — not even a muted tint
- No drop shadows or elevation on any element
- No rounded corners on structural containers (0px)
- No filled button backgrounds (ghost only)
- No gradients or background textures
- No illustration, icons, or decorative graphics
- No heavy type weights (500+)
- No overcrowding — protect section gaps aggressively
- No text overlay on photography
- No ornamental framing, badges, or labels beyond plain text

---

## 10 — CSS Variables Starter

```css
:root {
  /* Colors */
  --color-bg:              #ffffff;
  --color-text:            #000000;
  --color-border-strong:   #333333;
  --color-border-subtle:   #808080;

  /* Typography */
  --font-display:          'Neuehaasdisplay', 'Helvetica Neue', sans-serif;
  --font-serif:            'Inferi', Georgia, serif;
  --font-sans:             'neue-haas-grotesk-display', 'Helvetica Neue', sans-serif;
  --font-body:             'Suisseintl', Inter, sans-serif;

  /* Type scale */
  --text-caption:          12px;
  --text-body:             14px;
  --text-body-lg:          21px;
  --text-subhead:          34px;
  --text-heading:          58px;
  --text-display-sm:       105px;
  --text-display:          158px;

  /* Letter spacing */
  --ls-display:            -0.018em;
  --ls-heading:            -0.92px;
  --ls-body:               -0.57px;
  --ls-caption:            -0.38px;

  /* Spacing */
  --gap-element:           7px;
  --gap-card:              9px;
  --gap-section-dense:     48px;
  --gap-section-airy:      255px;
  --base-unit:             4px;

  /* Borders */
  --radius-image-sharp:    0px;
  --radius-image-framed:   10px;
  --border-width:          1px;
}
```

---

## 11 — Implementation Notes

1. **Font sourcing:** Inferi, Neuehaasdisplay, and neue-haas-grotesk-display are custom/licensed fonts. Use Georgia (serif) and Helvetica Neue (sans) as system substitutes during development.

2. **Hero scaling:** At mobile breakpoints, scale display type proportionally. 158px → 48–64px at 375px viewport. Never let hero type wrap awkwardly — reduce size before wrapping.

3. **Grid approach:** CSS Grid for image galleries. `grid-template-columns: repeat(3, 1fr)` with `gap: 9px`. Fallback to 2-col on tablet, 1-col on mobile.

4. **Hairline rules:** Use `border-top: 1px solid var(--color-border-strong)` between sections — not `<hr>` (inconsistent styling).

5. **Image aspect ratios:** Fix image aspect ratios in grid (e.g., `aspect-ratio: 3/4` for portrait, `4/3` for landscape) to preserve grid structure regardless of source image dimensions.

6. **Ghost button focus state:** Add `outline: 2px solid #000000; outline-offset: 2px` for keyboard accessibility — consistent with the monochrome system.

7. **No JS required** for this design system. All effects achievable in CSS alone.

---

---

## 12 — Scroll Behavior

### Laura Monin — Scroll Philosophy: "Slow Gallery Walk"

The site feels like walking through a quiet museum. Scroll moves content at a calm, inertia-dampened pace. Nothing snaps or jumps. The enormous section gaps (~255px) mean the user spends real time between elements — that emptiness is intentional pacing, not wasted space.

**Scroll implementation:**
```
Library: Lenis (smooth scroll) or native scroll with CSS scroll-behavior: smooth
Scroll easing: cubic-bezier(0.16, 1, 0.3, 1) — exponential ease-out, feels weighty
Scroll multiplier: 0.8–0.9× (slightly slower than native — contemplative)
Touch/mobile: native momentum scroll preserved
```

**Per-element scroll behavior:**

| Element | Entry behavior | Timing |
|---|---|---|
| Hero title (158px) | Already visible on load — no scroll trigger. Fades in on page load. | 800ms, delay 200ms |
| Body subtitle | Fade up: `translateY(20px) → 0`, `opacity 0 → 1` | 600ms, delay 400ms |
| Section headlines (34px) | Fade up from 30px below | 700ms, triggered when 20% in viewport |
| Hairline rules | Width draws from left: `scaleX(0) → 1`, `transform-origin: left` | 600ms, ease-out |
| Image grid cards | Staggered fade up per card, 80ms between each | 500ms per card |
| Large feature images | Simple opacity fade: `0 → 1` | 700ms |
| Captions | Fade in after parent image: delay 150ms | 400ms |
| Nav | Visible on load, hides on scroll down (−60px translate), returns on scroll up | 300ms ease |

**What does NOT animate:**
- Background (always white, never moves)
- Borders/rules already on screen
- Nav links on hover get underline only, no motion

---

### Alt–Border — Scroll Philosophy: "Archive Page Turn"

Alt–Border feels like methodically turning pages in a design catalog. Scroll reveals feel precise and intentional — text appears line by line, images wipe into existence, borders draw themselves. The compact 9px grid density means more elements enter the viewport per scroll unit, so animations must be fast and clean — no lingering.

**Scroll implementation:**
```
Library: Lenis + GSAP ScrollTrigger, or Locomotive Scroll
Scroll easing: power2.out (GSAP) — responsive but controlled
Scroll multiplier: 1.0–1.1× (near-native speed — the density demands it)
Touch/mobile: native momentum scroll preserved
```

**Per-element scroll behavior:**

| Element | Entry behavior | Timing |
|---|---|---|
| Hero headline (105px) | Mask reveal — clip-path: `inset(100% 0 0 0) → inset(0% 0 0 0)` | 900ms, ease-out |
| Section headline (34px) | Same mask reveal, slightly faster | 700ms |
| Hairline divider rules | Width draw: `scaleX(0) → 1`, `transform-origin: left` | 500ms |
| Image grid (3-col) | Each column staggers in with `opacity 0 → 1`, 60ms between columns | 400ms per col |
| Individual image cards | Clip-path wipe from bottom: `inset(0 0 100% 0) → inset(0 0 0% 0)` | 600ms |
| Body text paragraphs | Fade up: `translateY(15px) → 0`, `opacity 0 → 1` | 500ms |
| Border on image card | Border `opacity 0 → 1` on scroll enter, not on hover | 300ms |
| Nav links | No scroll-driven animation. Static. |  |

**What does NOT animate:**
- Page background (pure white, immovable)
- Image content inside cards (only the container wipes)
- Typography weight or size (no kinetic type on scroll)

---

## 13 — Page Transitions

### Laura Monin — Transition: "Dissolve"

Between pages the content fades out entirely, white fills the screen momentarily, then the new content fades in. Feels like turning a page in a printed book — deliberate, unhurried.

```
Pattern: Fade out → white hold → fade in
Exit: opacity 1 → 0, duration 400ms, ease-in
Hold: white canvas, 100ms
Enter: opacity 0 → 1, duration 600ms, ease-out
Total transition time: ~1100ms

Implementation approach:
- Overlay: position fixed, full viewport, background #ffffff, z-index 9999
- Exit: overlay fades IN (opacity 0 → 1) — page disappears behind white
- Enter: overlay fades OUT (opacity 1 → 0) — new page revealed
- New page content starts invisible, fades up after overlay clears

CSS / JS pattern:
  document.querySelector('.page-overlay').classList.add('transitioning')
  → after 400ms: navigate to new route
  → on new page load: overlay fades out over 600ms
```

**Hero title on new page:**
After the overlay clears, the large hero type appears with a slow stagger — each word or line drifts up from 40px below over 800ms. This is the "landing moment" that defines the site's personality.

---

### Alt–Border — Transition: "Black Curtain Wipe"

Between pages a black overlay wipes across the screen horizontally (left to right), covering the old page, then retracts (left to right, but revealing from left) showing the new page. Feels like a film edit — hard cut with motion.

```
Pattern: Horizontal wipe in → brief black hold → wipe out (reveal)
Exit (wipe in): black panel enters from left, covers viewport
  - transform: translateX(-100%) → translateX(0)
  - duration: 500ms, cubic-bezier(0.76, 0, 0.24, 1)
Hold: all black, 80ms
Enter (wipe out): black panel exits to right, revealing new page
  - transform: translateX(0) → translateX(100%)
  - duration: 500ms, cubic-bezier(0.76, 0, 0.24, 1)
Total transition time: ~1080ms

Implementation approach:
- Overlay: position fixed div, background #000000, full viewport, z-index 9999
- Both phases use the same panel — it slides in, pauses, slides out
- New page content is rendered underneath while panel is black
```

**After panel exits:**
The new page's headline does its mask reveal immediately — `clip-path: inset(100% 0 0 0) → inset(0% 0 0 0)` over 900ms. The hairline rules draw left-to-right at the same time. The two animations running in parallel make the landing feel composed and architectural.

---

## 14 — Hover & Cursor Behavior

### Laura Monin — Hover

```
Default cursor: standard arrow (no custom cursor)
Image card hover:
  - Border appears: 1px solid #000000 (was transparent or pale)
  - Transition: border-color 200ms ease
  - NO scale, no lift, no overlay

Navigation links:
  - Underline slides in from left: pseudo-element width 0 → 100%
  - Duration: 250ms, ease-out
  - Color stays #000000

Ghost buttons:
  - Background: transparent → #000000
  - Color: #000000 → #ffffff
  - Duration: 250ms, ease

No cursor tracking, no magnetic effects, no tilt effects.
```

### Alt–Border — Hover

```
Default cursor: standard, OR minimal custom cursor (8px circle, #000000, no border)
Custom cursor behavior if implemented:
  - Scales up to 32px on image hover
  - Changes label to "VIEW" in 11px Inferi weight 200 centered inside

Image card hover:
  - Border: 1px solid #808080 → 1px solid #000000
  - Slight brightness increase on image: filter brightness(1.0) → brightness(1.05)
  - Duration: 200ms ease

Section headline hover (if linked):
  - Opacity: 1 → 0.6
  - Duration: 150ms

Ghost button hover:
  - Background: transparent → #000000
  - Color: #000000 → #ffffff
  - Duration: 200ms ease
  - Border stays black throughout

Navigation links:
  - opacity: 1 → 0.5 on hover (NOT underline — opacity pull-back)
  - Duration: 150ms ease
```

---

## 15 — Load Sequence (First Visit)

### Laura Monin — First Paint

```
0ms       Page is white (#ffffff). Nothing visible.
0–200ms   Nav fades in: opacity 0 → 1
200ms     Hero title begins: translateY(40px) opacity 0 → translateY(0) opacity 1
200–800ms Hero title animates (800ms duration, slow and deliberate)
800ms     Subtitle text fades up
1000ms    First image row begins staggered fade-in
1200ms+   User is invited to scroll. No autoscroll. No loading spinner.
```

**Rule:** Never show a loading indicator. The white canvas IS the loader — the site appears instantly white, then content blooms in. The emptiness never feels like a wait.

---

### Alt–Border — First Paint

```
0ms       Page white. Nav items at opacity 0. Hero at opacity 0.
0–100ms   Nav bar fades in: opacity 0 → 1 (fast, structural)
100ms     Hero headline mask begins: clip-path inset(100% 0 0 0) → inset(0% 0 0 0)
100–1000ms Hero headline reveals (900ms)
400ms     Hairline divider rule draws left to right (concurrent with headline tail)
600ms     First image column fades in
660ms     Second image column fades in (60ms stagger)
720ms     Third image column fades in
800ms+    Below-fold content waits for scroll trigger
```

**Rule:** The headline mask reveal IS the loading animation. No spinners, no skeletons, no progress bars. The type appearing is the signal that the page is ready.

---

## 16 — Scroll Trigger Thresholds

These control when off-screen elements start animating as the user scrolls down.

```
Laura Monin (airy, generous):
  rootMargin: "0px 0px -15% 0px"
  → Elements fire when their TOP edge crosses 85% down the viewport
  → Later trigger = more dramatic arrival from below

Alt–Border (dense, immediate):
  rootMargin: "0px 0px -5% 0px"
  → Elements fire almost as soon as they enter the viewport bottom
  → Tighter trigger = content feels always ready, never laggy
```

**IntersectionObserver setup:**
```js
// Laura Monin style
const observer = new IntersectionObserver(onEnter, {
  rootMargin: '0px 0px -15% 0px',
  threshold: 0
});

// Alt–Border style
const observer = new IntersectionObserver(onEnter, {
  rootMargin: '0px 0px -5% 0px',
  threshold: 0
});

function onEnter(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target); // fire once only
    }
  });
}
```

---

## 17 — Animation Token Summary

```css
:root {
  /* Durations */
  --duration-fast:        150ms;   /* hover states, border changes */
  --duration-normal:      300ms;   /* nav, small reveals */
  --duration-medium:      500–600ms; /* image reveals, rule draws */
  --duration-slow:        700–800ms; /* section text, feature images */
  --duration-display:     900ms;   /* hero headline reveals */

  /* Easings */
  --ease-out-expo:        cubic-bezier(0.16, 1, 0.3, 1);  /* Laura Monin scroll */
  --ease-out-editorial:   cubic-bezier(0.76, 0, 0.24, 1); /* Alt–Border curtain */
  --ease-out-standard:    cubic-bezier(0.4, 0, 0.2, 1);   /* general UI */

  /* Transform start states */
  --enter-y-small:        15px;    /* body text drift */
  --enter-y-medium:       30px;    /* section headlines */
  --enter-y-large:        40px;    /* hero elements */

  /* Page transition overlay */
  --overlay-bg-lm:        #ffffff; /* Laura Monin dissolve */
  --overlay-bg-ab:        #000000; /* Alt–Border curtain */
}
```

---

## 18 — Motion Do / Don't

### DO
- Use `Lenis` or `@studio-freight/lenis` for smooth scroll — both sites warrant it
- Fire scroll animations once (`unobserve` after trigger) — never re-animate on scroll up
- Keep page transitions under 1200ms total — anything longer feels like a loading problem
- Let the hero type be the loudest motion on any page — everything else defers to it
- Use `will-change: transform, opacity` on animated elements to prep the GPU
- Use `prefers-reduced-motion` media query — disable all transforms, keep fades at 50% speed

### DON'T
- No scroll-jacking (hijacking native scroll speed/direction)
- No parallax on content — both sites are print-flat, parallax destroys that
- No looping animations after page load (no pulse, no float, no rotate)
- No spring/bounce physics (overshoot feels playful — wrong register entirely)
- No particle effects, no noise overlays, no cursor trails
- No progress bars tied to scroll depth
- No section pinning or horizontal scroll panels
- No stagger longer than 100ms between siblings — anything longer reads as glitchy

---

## 19 — Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  /* Remove all transforms */
  [data-animate] {
    transform: none !important;
    transition: opacity var(--duration-normal) ease !important;
  }

  /* Slow page transitions to simple opacity */
  .page-overlay {
    transition: opacity 200ms ease !important;
    /* No translateX — just fade the overlay */
  }

  /* Disable rule draw animations */
  .rule-draw {
    transform: scaleX(1) !important;
    transition: none !important;
  }

  /* Disable Lenis smooth scroll */
  html.lenis {
    scroll-behavior: auto !important;
  }
}
```

---

*Generated from Refero Pro style analysis of lauramonin.com + alt-border.com*
