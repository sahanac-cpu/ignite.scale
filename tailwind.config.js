/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './lib/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg-0)',
        surface: 'var(--bg-1)',
        ink: 'var(--ink)',
        accent: 'var(--accent)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'ui-sans-serif', 'sans-serif'],
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      zIndex: {
        nav: '100',
        cursor: '200',
        overlay: '150',
        grain: '300',
      },
    },
  },
  plugins: [],
}
