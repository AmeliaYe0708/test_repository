import { Fragment } from 'react'
import { profile, publications, presentations } from '../content.js'
import { LinkPills, PageHeader, SectionHeading } from '../components/ui.jsx'

function Authors({ authors }) {
  return authors.map((a, i) => (
    <Fragment key={i}>
      {a === profile.citationName ? <strong className="font-semibold text-stone-900">{a}</strong> : a}
      {i < authors.length - 2 ? ', ' : i === authors.length - 2 ? (authors.length > 2 ? ', and ' : ' and ') : ''}
    </Fragment>
  ))
}

export default function Publications() {
  return (
    <>
      <PageHeader title="Publications" subtitle="Papers, posters, and talks." />

      <section>
        <SectionHeading id="papers">Papers</SectionHeading>
        <ol className="space-y-6">
          {publications.map((p, i) => (
            <li key={i} className="grid grid-cols-[2rem_1fr] gap-2">
              <span className="pt-0.5 text-sm text-stone-400">[{publications.length - i}]</span>
              <div className="space-y-2">
                {/* Formal citation: Authors. "Title." Venue, Year. */}
                <p className="leading-relaxed text-stone-700">
                  <Authors authors={p.authors} />. “<span className="text-stone-900">{p.title}</span>.”{' '}
                  <em>{p.venue}</em>, {p.year}.
                  {p.status && <span className="ml-2 text-sm text-amber-700">({p.status})</span>}
                </p>
                <LinkPills links={p.links} />
              </div>
            </li>
          ))}
        </ol>
      </section>

      {presentations.length > 0 && (
        <section className="mt-16">
          <SectionHeading id="presentations">Posters &amp; Talks</SectionHeading>
          <ul className="space-y-5">
            {presentations.map((t, i) => (
              <li key={i} className="grid gap-2 sm:grid-cols-[5rem_1fr] sm:gap-4">
                <span className="w-fit rounded bg-stone-200/70 px-2 py-0.5 text-xs font-medium text-stone-700 sm:mt-0.5 sm:h-fit">
                  {t.type}
                </span>
                <div className="space-y-2">
                  <p className="leading-relaxed text-stone-700">
                    “<span className="text-stone-900">{t.title}</span>.” <em>{t.event}</em>
                    {[t.location, t.date].filter(Boolean).map((x) => `, ${x}`).join('')}.
                  </p>
                  <LinkPills links={t.links} />
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  )
}
