import { Link, useParams } from 'react-router-dom'
import { projects, publications, presentations } from '../content.js'
import { EntryCard, Icon, SectionHeading } from '../components/ui.jsx'
import FilePreview from '../components/FilePreview.jsx'
import { presentationCard, projectCard, publicationCard } from './entries.jsx'

const sections = {
  publications: {
    back: 'All publications',
    find: (slug) => {
      const pub = publications.find((p) => p.slug === slug)
      if (pub) return [pub, publicationCard(pub)]
      const talk = presentations.find((t) => t.slug === slug)
      if (talk) return [talk, presentationCard(talk)]
      return []
    },
  },
  projects: {
    back: 'All projects',
    find: (slug) => {
      const proj = projects.find((p) => p.slug === slug)
      return proj ? [proj, projectCard(proj)] : []
    },
  },
}

// Detail page for one publication / poster / talk / project:
// the same card as on the list page, followed by previews of its files.
export default function Detail({ section }) {
  const { slug } = useParams()
  const { back, find } = sections[section]
  const [entry, card] = find(slug)

  const backLink = (
    <Link to={`/${section}`} className="inline-flex items-center gap-1.5 text-sm font-medium text-teal-800 hover:underline">
      <Icon name="arrow" className="h-4 w-4 rotate-180" /> {back}
    </Link>
  )

  if (!entry) {
    return (
      <div className="space-y-4">
        {backLink}
        <p className="text-stone-600">That page doesn't exist.</p>
      </div>
    )
  }

  const files = entry.files ?? []
  return (
    <div className="space-y-8">
      {backLink}
      <EntryCard {...card} to={undefined} />

      {files.length > 0 && (
        <section className="pt-4">
          <SectionHeading id="files">Files</SectionHeading>
          <div className="grid gap-6 sm:grid-cols-2">
            {files.map((f) => (
              <FilePreview key={f.file} {...f} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
