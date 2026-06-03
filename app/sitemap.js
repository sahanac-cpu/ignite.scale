import { site } from '@/lib/site'
import { journal } from '@/lib/content'

export default function sitemap() {
  const routes = ['', '/work', '/services', '/process', '/journal', '/faq', '/contact']
  const now = new Date()
  const pages = routes.map((r) => ({
    url: `${site.domain}${r}`,
    lastModified: now,
    changeFrequency: r === '' ? 'weekly' : 'monthly',
    priority: r === '' ? 1 : 0.7,
  }))
  const posts = journal.map((a) => ({
    url: `${site.domain}/journal/${a.slug}`,
    lastModified: new Date(a.date),
    changeFrequency: 'yearly',
    priority: 0.5,
  }))
  return [...pages, ...posts]
}
