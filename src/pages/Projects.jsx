import { projects } from '../content.js'
import { EntryCard, PageHeader } from '../components/ui.jsx'

export default function Projects() {
  return (
    <>
      <PageHeader title="Projects" />
      <div className="space-y-8">
        {projects.map((p) => (
          <EntryCard
            key={p.title}
            title={p.title}
            meta={[p.course, p.term].filter(Boolean).join(' · ')}
            fields={[
              ['Problem', p.problem],
              ['Contributions', p.contributions],
              ['Conclusions', p.conclusions],
            ]}
            links={p.links}
          />
        ))}
      </div>
    </>
  )
}
