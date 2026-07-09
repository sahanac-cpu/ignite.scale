import ServiceLayout from '../components/ServiceLayout'
import { useT } from '../i18n/locale'

export default function WebDesignPage() {
  const [, t] = useT()
  return (
    <ServiceLayout
      slug="web-design"
      seoTitle={t('Web Design Dubai | Conversion-Optimised Websites | Ignite Scale', 'تصميم المواقع في الإمارات | مواقع مُحسَّنة للتحويل | Ignite Scale')}
      seoDescription={t('Mobile-first, fast-loading, SEO-ready websites for UAE businesses — engineered to convert.', 'مواقع متجاوبة وسريعة وجاهزة للبحث لعلامات الإمارات — مصمّمة للتحويل.')}
    />
  )
}
