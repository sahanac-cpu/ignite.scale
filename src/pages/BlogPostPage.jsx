import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { marked } from 'marked'
import matter from 'gray-matter'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEOMeta from '../components/SEOMeta'
import { useT } from '../i18n/locale'

/* All blog posts as Vite-imported raw markdown.
   The publish script just drops a new file into content/blog/, no other code touches needed. */
const POSTS = import.meta.glob('/content/blog/*.md', { query: '?raw', import: 'default', eager: true })

function parsePost(rawMd) {
  const { data, content } = matter(rawMd)
  return { meta: data, body: marked.parse(content) }
}

export function getAllPosts() {
  return Object.entries(POSTS)
    .map(([path, raw]) => {
      const slug = path.split('/').pop().replace(/\.md$/, '')
      const { meta, body } = parsePost(raw)
      return { slug, ...meta, body }
    })
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
}

export default function BlogPostPage() {
  const { slug } = useParams()
  const [locale, t] = useT()
  const [post, setPost] = useState(null)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    const match = Object.entries(POSTS).find(([p]) =>
      p.endsWith(`/${slug}.md`)
    )
    if (!match) {
      setNotFound(true)
      return
    }
    setPost(parsePost(match[1]))
  }, [slug])

  if (notFound) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen flex items-center justify-center px-6">
          <div className="text-center">
            <h1 className="text-white text-3xl mb-4">{t('Post not found', 'المنشور غير موجود')}</h1>
            <Link to={locale === 'ar' ? '/ar' : '/'} className="text-accent">
              {t('Back to home →', 'العودة إلى الرئيسية ←')}
            </Link>
          </div>
        </main>
      </>
    )
  }

  if (!post) return null

  const m = post.meta
  const canonical = `https://ignite-scale.com${locale === 'ar' ? '/ar' : ''}/blog/${slug}`

  return (
    <>
      <SEOMeta
        title={`${m.title} | ignite-scale`}
        description={m.description}
        canonical={canonical}
        locale={locale}
        breadcrumbs={[
          { name: t('Home', 'الرئيسية'), url: locale === 'ar' ? '/ar' : '/' },
          { name: t('Blog', 'المدونة'), url: locale === 'ar' ? '/ar/blog' : '/blog' },
          { name: m.title, url: canonical },
        ]}
        article={{ datePublished: m.publishedAt, headline: m.title }}
      />
      <Navbar />
      <main
        className="min-h-screen pt-32 pb-24 px-6 md:px-12 lg:px-24"
        style={{ background: '#03050F' }}
      >
        <article className="max-w-3xl mx-auto">
          {m.tags && m.tags.length > 0 && (
            <div className="flex items-center gap-2 mb-6">
              <span className="w-6 h-px bg-accent" />
              <span className="text-accent text-[10px] tracking-[0.3em] uppercase font-medium">
                {m.tags[0]}
              </span>
            </div>
          )}
          <h1
            className="font-display text-white leading-[1.1] tracking-tight mb-6"
            style={{ fontSize: 'clamp(34px, 5vw, 56px)' }}
          >
            {m.title}
          </h1>
          {m.description && (
            <p className="text-white/50 text-lg leading-relaxed mb-10 font-body">
              {m.description}
            </p>
          )}
          <div className="text-white/30 text-[11px] tracking-[0.25em] uppercase mb-10">
            {new Date(m.publishedAt).toLocaleDateString('en-GB', {
              day: 'numeric', month: 'long', year: 'numeric',
            })}
            {m.readingMinutes && (
              <>
                <span className="mx-3 text-white/15">·</span>
                {m.readingMinutes} {t('min read', 'دقائق قراءة')}
              </>
            )}
          </div>

          <div
            className="blog-content text-white/70 text-[15px] leading-[1.85] font-body"
            dangerouslySetInnerHTML={{ __html: post.body }}
          />

          <div className="mt-16 pt-10 border-t border-white/[0.06] flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div>
              <div className="text-white/30 text-[10px] uppercase tracking-[0.3em] mb-2">
                {t('Need help applying this?', 'تحتاج مساعدة في التطبيق؟')}
              </div>
              <div className="text-white text-lg font-display">
                {t('Book a free strategy call', 'احجز مكالمة استراتيجية مجانية')}
              </div>
            </div>
            <Link
              to={locale === 'ar' ? '/ar/book' : '/book'}
              className="btn-primary text-[11px] px-6 py-3"
            >
              {t('Book a Call', 'احجز مكالمة')}
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
