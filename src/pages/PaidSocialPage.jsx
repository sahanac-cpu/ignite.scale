import ServiceLayout from '../components/ServiceLayout'
import { useT } from '../i18n/locale'

export default function PaidSocialPage() {
  const [, t] = useT()
  return (
    <ServiceLayout
      slug="paid-social"
      seoTitle={t('Paid Social & Performance Ads in the UAE | Ignite Scale', 'إعلانات ممولة وأداء في لندن | Ignite Scale')}
      seoDescription={t('Meta, TikTok, Snap and Google ad campaigns engineered around CPL and ROAS for UAE businesses.', 'حملات إعلانية على ميتا وتيك توك وسناب وجوجل مبنية حول تكلفة العميل والعائد لعلامات الإمارات.')}
    />
  )
}
