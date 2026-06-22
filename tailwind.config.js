/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './lib/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        'paper-white': 'var(--color-paper-white)',
        'ink-black':   'var(--color-ink-black)',
        'carbon':      'var(--color-carbon)',
        'ash':         'var(--color-ash)',
        'smoke':       'var(--color-smoke)',
        'pewter':      'var(--color-pewter)',
        'graphite':    'var(--color-graphite)',
        /* backward-compat */
        bg:      'var(--color-paper-white)',
        surface: '#f5f5f5',
        ink:     'var(--color-carbon)',
        accent:  'var(--color-ink-black)',
      },
      fontFamily: {
        roobert: ['var(--font-roobert)', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        /* backward-compat */
        display: ['var(--font-roobert)', 'Inter', 'ui-sans-serif', 'sans-serif'],
        sans:    ['var(--font-roobert)', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        full: '75px',
      },
      zIndex: {
        nav:     '100',
        cursor:  '200',
        overlay: '150',
        grain:   '300',
      },
    },
  },
  plugins: [],
}
