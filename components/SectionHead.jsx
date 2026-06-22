'use client'

import Reveal from './Reveal'
import SplitText from './SplitText'

/* Monopo-style section header: micro-label + word-reveal title + body/link column */
export default function SectionHead({ kicker, title, intro, link, accent = [], dark = false }) {
  const titleColor = 'var(--color-paper-white)'
  const bodyColor  = 'var(--color-ash)'
  const kickerColor = 'var(--ink-mute)'

  return (
    <div className="sh-wrap">
      <div style={{ maxWidth: '20ch' }}>
        {kicker && (
          <Reveal>
            <span
              style={{
                display: 'block',
                marginBottom: 'clamp(16px, 2.5vw, 24px)',
                fontSize: 11,
                fontWeight: 400,
                letterSpacing: '0.20em',
                textTransform: 'uppercase',
                color: kickerColor,
              }}
            >
              {kicker}
            </span>
          </Reveal>
        )}
        <SplitText
          text={title}
          as="h2"
          accent={accent}
          delay={0.05}
          style={{
            fontSize: 'clamp(32px, 5vw, 64px)',
            fontWeight: 300,
            letterSpacing: '-0.02em',
            lineHeight: 1.05,
            color: titleColor,
          }}
        />
      </div>

      {(intro || link) && (
        <Reveal delay={0.1} style={{ maxWidth: '42ch', display: 'flex', flexDirection: 'column', gap: 18, alignSelf: 'end' }}>
          {intro && (
            <p style={{ fontSize: 16, fontWeight: 400, lineHeight: 1.7, color: bodyColor }}>
              {intro}
            </p>
          )}
          {link}
        </Reveal>
      )}

      <style>{`
        .sh-wrap { display: grid; gap: 28px; margin-bottom: clamp(40px, 6vw, 72px); }
        @media (min-width: 880px) { .sh-wrap { grid-template-columns: 1fr 1fr; align-items: end; gap: 56px; } }
      `}</style>
    </div>
  )
}
