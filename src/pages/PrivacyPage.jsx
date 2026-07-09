import LegalLayout from '../components/LegalLayout'

export default function PrivacyPage() {
  return (
    <LegalLayout
      slug="privacy"
      title="Privacy Policy"
      updated="Last updated June 2026"
      intro="Ignite Scale (“we”, “us”) is a growth marketing studio based in London, United Kingdom. This policy explains what personal data we collect, why we collect it, and the choices you have. We comply with UK data protection law (UK GDPR) and, where applicable, the UAE Personal Data Protection Law (Federal Decree-Law No. 45 of 2021)."
      sections={[
        { h: 'Information we collect', body: [
          'When you submit our booking or contact form we collect the details you provide: your name, email address, phone number, company, industry, budget range, the services you’re interested in, and any message you send us.',
          'We also automatically collect limited technical data such as your IP address, browser type, pages visited and referring source, through analytics tools (see “Cookies & analytics”).',
        ] },
        { h: 'How we use your information', body: [
          'We use your contact details to respond to your enquiry, schedule a consultation, and send you information you’ve requested. We use technical and analytics data to understand how the site is used and to improve it.',
          'We do not sell your personal data to third parties.',
        ] },
        { h: 'Legal basis', body: [
          'We process your data on the basis of your consent (which you give by submitting a form), and our legitimate interest in operating and improving our business.',
        ] },
        { h: 'Sharing & processors', body: [
          'We share form submissions with EmailJS, which delivers the message to our inbox, and we use Google Analytics and Vercel Analytics for aggregated usage statistics. These providers process data on our behalf under their own privacy terms.',
        ] },
        { h: 'Data retention', body: [
          'We keep enquiry data for as long as needed to serve you and for a reasonable period afterwards for our records. You can ask us to delete it at any time.',
        ] },
        { h: 'Your rights', body: [
          'You may request access to, correction of, or deletion of your personal data, and you may withdraw consent at any time. To exercise these rights, email admin@ignite-scale.com.',
        ] },
        { h: 'Security', body: [
          'We use reputable third-party services and reasonable technical measures to protect your data, though no method of transmission over the internet is completely secure.',
        ] },
      ]}
    />
  )
}
