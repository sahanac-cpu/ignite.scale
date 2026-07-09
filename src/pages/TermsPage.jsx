import LegalLayout from '../components/LegalLayout'

export default function TermsPage() {
  return (
    <LegalLayout
      slug="terms"
      title="Terms of Service"
      updated="Last updated June 2026"
      intro="These terms govern your use of the Ignite Scale website and any enquiry you submit through it. By using this site you agree to them. They are governed by the laws of the United Kingdom."
      sections={[
        { h: 'About this site', body: [
          'This website is an informational and marketing site for Ignite Scale, a UK-registered growth company serving UAE businesses. Content describes our services and representative results and does not constitute a binding offer.',
        ] },
        { h: 'Enquiries & consultations', body: [
          'Submitting the booking form requests a consultation; it does not create a contract for services. Any engagement is governed by a separate written agreement signed by both parties.',
        ] },
        { h: 'Results disclaimer', body: [
          'Performance figures shown on this site (such as ROAS, cost-per-lead reductions and engagement lifts) are representative of past work and are not a guarantee of future results. Outcomes depend on your market, budget, offer and other factors outside our control.',
        ] },
        { h: 'Intellectual property', body: [
          'All content on this site — text, design, graphics and logos — is owned by or licensed to Ignite Scale and may not be copied or reused without our written permission.',
        ] },
        { h: 'Acceptable use', body: [
          'You agree not to misuse the site, attempt to disrupt it, or use it for any unlawful purpose.',
        ] },
        { h: 'Limitation of liability', body: [
          'To the fullest extent permitted by law, Ignite Scale is not liable for any indirect or consequential loss arising from your use of this site or reliance on its content.',
        ] },
        { h: 'Changes', body: [
          'We may update these terms from time to time. The current version is always the one published on this page.',
        ] },
      ]}
    />
  )
}
