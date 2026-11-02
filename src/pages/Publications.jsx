import { publications, presentations } from '../content.js'
import { EntryCard, PageHeader, SectionHeading } from '../components/ui.jsx'
import { presentationCard, publicationCard } from './entries.jsx'

export default function Publications() {
  return (
    <>
      <PageHeader title="Publications" />
      <SectionHeading id="papers">Papers</SectionHeading>
      <div className="space-y-8">
        {publications.map((p) => (
          <EntryCard key={p.slug} {...publicationCard(p)} />
        ))}
      </div>

      {presentations.length > 0 && (
        <section className="mt-16">
          <SectionHeading id="posters-talks">Posters &amp; Talks</SectionHeading>
          <div className="space-y-8">
            {presentations.map((t) => (
              <EntryCard key={t.slug} {...presentationCard(t)} />
            ))}
          </div>
        </section>
      )}
    </>
  )
}
