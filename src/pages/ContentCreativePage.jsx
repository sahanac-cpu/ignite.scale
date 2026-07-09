import ServiceLayout from '../components/ServiceLayout'
import { useT } from '../i18n/locale'

export default function ContentCreativePage() {
  const [, t] = useT()
  return (
    <ServiceLayout
      slug="content-creative"
      seoTitle={t('Content & Creative Production in the UAE | Ignite Scale', 'إنتاج المحتوى والإبداع في لندن | Ignite Scale')}
      seoDescription={t('UGC video, luxury editorial photography and data-backed copy, produced in-house for UAE businesses.', 'فيديو ومحتوى مستخدم وتصوير تحريري فاخر ونصوص مدعومة بالبيانات، يُنتج داخلياً لعلامات الإمارات.')}
    />
  )
}
