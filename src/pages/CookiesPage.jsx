import LegalLayout from '../components/LegalLayout'

export default function CookiesPage() {
  return (
    <LegalLayout
      slug="cookies"
      title="Cookie Policy"
      updated="Last updated June 2026"
      intro="This policy explains how Ignite Scale uses cookies and similar technologies on this website, and how you can control them."
      sections={[
        { h: 'What cookies are', body: [
          'Cookies are small text files stored on your device when you visit a website. They help the site function and let us understand how it’s used.',
        ] },
        { h: 'How we use them', body: [
          'Essential: a single preference cookie remembers your cookie choice and your language (English/Arabic). The site cannot function correctly without these.',
          'Analytics: with your consent, Google Analytics and Vercel Analytics set cookies to measure aggregated, anonymous traffic — which pages are visited and where visitors come from. We use this only to improve the site.',
        ] },
        { h: 'Managing cookies', body: [
          'When you first visit, a banner lets you accept or decline analytics cookies. You can change your mind any time by clearing this site’s data in your browser, which will show the banner again.',
          'You can also block or delete cookies through your browser settings. Blocking essential cookies may affect how the site works.',
        ] },
        { h: 'Third parties', body: [
          'Analytics cookies are set by Google and Vercel under their own policies. We do not use cookies for advertising or to sell your data.',
        ] },
      ]}
    />
  )
}
