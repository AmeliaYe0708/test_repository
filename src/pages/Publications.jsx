import { Fragment } from 'react'
import { profile, publications } from '../content.js'
import { EntryCard, PageHeader } from '../components/ui.jsx'

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
    </>
  )
}
