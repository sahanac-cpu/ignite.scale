import { useState, useEffect, useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useT } from '../i18n/locale'

export default function LeftNav() {
  const [locale, t] = useT()
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const base = locale === 'ar' ? '/ar' : ''
  const isHome = pathname === '/' || pathname === '/ar' || pathname === '/ar/'
  const [active, setActive] = useState('home')

  // items: home + two landing sections (services, results) + faq route
  const items = [
    { id: 'home', label: t('Home', 'الرئيسية'), kind: 'home' },
    { id: 'services', label: t('Services', 'الخدمات'), kind: 'section' },
    { id: 'results', label: t('Results', 'النتائج'), kind: 'section' },
    { id: 'faq', label: t('FAQ', 'الأسئلة'), kind: 'route', to: `${base}/faq` },
  ]

  // active section tracking on the homepage
  useEffect(() => {
    if (!isHome) return
    const ids = ['hero', 'services', 'results', 'booking']
    const onScroll = () => {
      const mid = window.innerHeight * 0.4
      let cur = 'home'
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= mid) cur = id === 'hero' ? 'home' : id
      }
      setActive(cur)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [isHome])

  const go = useCallback((it) => {
    if (it.kind === 'route') { navigate(it.to); return }
    const targetId = it.id === 'home' ? 'hero' : it.id
    if (isHome) {
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      sessionStorage.setItem('ig_scroll', targetId)
      navigate(base + '/')
    }
  }, [isHome, navigate, base])

  const isActive = (it) => {
    if (it.kind === 'route') return pathname === it.to || pathname === it.to + '/'
    return isHome && active === it.id
  }

  return (
    <nav className="left-nav" aria-label="Primary">
      <span className="left-nav-spine" aria-hidden="true" />
      <ul>
        {items.map((it) => {
          const on = isActive(it)
          return (
            <li key={it.id}>
              <button onClick={() => go(it)} data-cursor="hover" data-active={on} aria-current={on ? 'page' : undefined}>
                <span className="left-nav-tick" aria-hidden="true" />
                <span className="left-nav-label">{it.label}</span>
              </button>
            </li>
          )
        })}
      </ul>

      <style>{`
        .left-nav {
          position: fixed;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          z-index: 60;
          display: none;
          padding-left: clamp(14px, 1.4vw, 24px);
        }
        .left-nav-spine {
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 5px;
          background: var(--line-strong);
        }
        .left-nav ul {
          list-style: none; margin: 0; padding: 0;
          display: flex; flex-direction: column; gap: 10px;
        }
        .left-nav button {
          display: flex; flex-direction: column; align-items: center; gap: 8px;
          padding: 14px 6px;
          background: none; border: none; cursor: pointer;
          color: var(--ink-mute);
          transition: color .3s var(--ease-out);
        }
        .left-nav button:hover { color: var(--ink-dim); }
        .left-nav button[data-active="true"] { color: var(--accent); }

        .left-nav-tick {
          width: 1px; height: 12px; background: currentColor;
          transition: height .35s var(--ease-out), background .3s var(--ease-out);
          flex-shrink: 0;
        }
        .left-nav button[data-active="true"] .left-nav-tick { height: 24px; background: var(--accent); }

        .left-nav-label {
          font-family: var(--font-body);
          font-size: 11px; letter-spacing: 0.26em; text-transform: uppercase;
          font-weight: 500; white-space: nowrap;
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }

        @media (min-width: 1100px) { .left-nav { display: block; } }
      `}</style>
    </nav>
  )
}
