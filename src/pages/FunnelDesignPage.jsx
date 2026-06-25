import ServiceLayout from '../components/ServiceLayout'
import { useT } from '../i18n/locale'

export default function FunnelDesignPage() {
  const [, t] = useT()
  return (
    <ServiceLayout
      slug="funnels"
      seoTitle={t('Conversion Funnels & Landing Pages in London | Ignite Scale', 'قمعات تحويل وصفحات هبوط في لندن | Ignite Scale')}
      seoDescription={t('Conversion-first landing pages and lead funnels wired into your CRM and A/B tested.', 'صفحات هبوط وقمعات عملاء تركّز على التحويل ومربوطة بنظامك وتُختبر.')}
    />
  )
}
