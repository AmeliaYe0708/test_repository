import { Fragment } from 'react'
import { profile, publications, presentations } from '../content.js'
import { EntryCard, PageHeader, SectionHeading } from '../components/ui.jsx'

// Formal citation line: A. Author, Y. Name, and C. Author. Venue, Year.
function Citation({ authors, venue, year }) {
  return (
    <>
      {authors.map((a, i) => (
        <Fragment key={i}>
          {a === profile.citationName ? <strong className="font-semibold text-stone-800">{a}</strong> : a}
          {i < authors.length - 2 ? ', ' : i === authors.length - 2 ? (authors.length > 2 ? ', and ' : ' and ') : ''}
        </Fragment>
      ))}
      . <em>{venue}</em>, {year}.
    </>
  )
}

export default function Publications() {
  return (
    <>
      <PageHeader title="Publications" />
      <SectionHeading id="papers">Papers</SectionHeading>
      <div className="space-y-8">
        {publications.map((p) => (
          <EntryCard
            key={p.title}
            title={p.title}
            citation={<Citation authors={p.authors} venue={p.venue} year={p.year} />}
            status={p.status}
            fields={[
              ['Problem', p.problem],
              ['What I did', p.approach],
              ['Results', p.results],
            ]}
            links={p.links}
          />
        ))}
      </div>

      {presentations.length > 0 && (
        <section className="mt-16">
          <SectionHeading id="posters-talks">Posters &amp; Talks</SectionHeading>
          <div className="space-y-8">
            {presentations.map((t) => (
              <EntryCard
                key={t.title}
                title={t.title}
                meta={[t.event, t.location, t.date].filter(Boolean).join(' · ')}
                status={t.type}
                fields={[['Summary', t.summary]]}
                links={t.links}
              />
            ))}
          </div>
        </section>
      )}
    </>
  )
}
