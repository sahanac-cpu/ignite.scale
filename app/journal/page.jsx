import Link from 'next/link'
import Image from 'next/image'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'
import { journal } from '@/lib/content'

export const metadata = {
  title: 'Journal — Growth Marketing Notes from Dubai',
  description:
    'Field notes on paid social, creative and growth for UAE brands. Practical playbooks from the Ignite Scale studio in Dubai.',
  alternates: { canonical: '/journal' },
}

function fmt(d) {
  return new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
}

export default function JournalPage() {
  return (
    <>
      <PageHero
        kicker="Journal"
        title="Playbooks from the studio floor."
        intro="What’s actually working in UAE paid social right now, written for operators who care about pipeline, not platitudes."
      />

      <section className="shell" style={{ paddingBottom: 'clamp(72px, 11vw, 160px)' }}>
        <div className="journal-grid">
          {journal.map((a, i) => (
            <Reveal key={a.slug} delay={i * 0.06}>
              <Link href={`/journal/${a.slug}`} data-cursor="hover" className="jcard">
                <div className="jcard-media">
                  <Image src={a.image} alt={a.alt} fill sizes="(max-width: 760px) 100vw, 33vw" style={{ objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '20px 4px 0' }}>
                  <div style={{ display: 'flex', gap: 14, alignItems: 'center', marginBottom: 12 }}>
                    <span className="meta" style={{ color: 'var(--accent)' }}>{a.tag}</span>
                    <span className="meta">{a.readingTime}</span>
                  </div>
                  <h2 style={{ fontSize: 'clamp(20px, 2.4vw, 25px)', marginBottom: 12, lineHeight: 1.12 }}>{a.title}</h2>
                  <p style={{ color: 'var(--ink-dim)', fontSize: 15, lineHeight: 1.6 }}>{a.excerpt}</p>
                  <span className="meta" style={{ display: 'block', marginTop: 16 }}>{fmt(a.date)}</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <style>{`
        .journal-grid { display: grid; grid-template-columns: 1fr; gap: clamp(28px, 4vw, 40px); }
        @media (min-width: 640px) { .journal-grid { grid-template-columns: 1fr 1fr; } }
        @media (min-width: 1000px) { .journal-grid { grid-template-columns: repeat(3, 1fr); } }
        .jcard { display: block; }
        .jcard-media { position: relative; aspect-ratio: 3/2; border-radius: 14px; overflow: hidden; border: 1px solid var(--line); }
        .jcard-media :global(img) { transition: transform .6s cubic-bezier(0.16,1,0.3,1); }
        .jcard:hover .jcard-media :global(img) { transform: scale(1.05); }
        .jcard h2 { transition: color .3s ease; }
        .jcard:hover h2 { color: var(--accent-soft); }
      `}</style>
    </>
  )
}
