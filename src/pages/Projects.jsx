import { projects } from '../content.js'
import { EntryCard, PageHeader } from '../components/ui.jsx'
import { projectCard } from './entries.jsx'

export default function Projects() {
  return (
    <>
      <PageHeader title="Projects" />
      <div className="space-y-8">
        {projects.map((p) => (
          <EntryCard key={p.slug} {...projectCard(p)} />
        ))}
      </div>
    </>
  )
}
