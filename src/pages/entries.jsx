import { Fragment } from 'react'
import { profile } from '../content.js'

// Turns each kind of entry in content.js into props for <EntryCard>,
// so the list pages and the detail pages always show the same card.

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

export const publicationCard = (p) => ({
  title: p.title,
  citation: <Citation authors={p.authors} venue={p.venue} year={p.year} />,
  status: p.status,
  fields: [
    ['Problem', p.problem],
    ['What I did', p.approach],
    ['Results', p.results],
  ],
  links: p.links,
  to: `/publications/${p.slug}`,
})

export const presentationCard = (t) => ({
  title: t.title,
  meta: [t.event, t.location, t.date].filter(Boolean).join(' · '),
  status: t.type,
  fields: [['Summary', t.summary]],
  links: t.links,
  to: `/publications/${t.slug}`,
})

export const projectCard = (p) => ({
  title: p.title,
  meta: [p.course, p.term].filter(Boolean).join(' · '),
  fields: [
    ['Problem', p.problem],
    ['Contributions', p.contributions],
    ['Conclusions', p.conclusions],
  ],
  links: p.links,
  to: `/projects/${p.slug}`,
})
