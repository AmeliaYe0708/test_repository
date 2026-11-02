import { projects } from '../content.js'
import { LinkPills, PageHeader } from '../components/ui.jsx'

export const statusStyles = {
  published: ['Published', 'bg-emerald-50 text-emerald-800 ring-emerald-200'],
  'under-review': ['Under review', 'bg-amber-50 text-amber-800 ring-amber-200'],
  ongoing: ['Ongoing', 'bg-sky-50 text-sky-800 ring-sky-200'],
}

function StatusBadge({ status }) {
  const [label, cls] = statusStyles[status] ?? [status, 'bg-stone-100 text-stone-700 ring-stone-200']
  return <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ${cls}`}>{label}</span>
}

function Field({ label, children }) {
  if (!children) return null
  return (
    <div className="grid gap-1 sm:grid-cols-[7.5rem_1fr] sm:gap-4">
      <dt className="text-xs font-semibold uppercase tracking-wider text-stone-500 sm:pt-0.5">{label}</dt>
      <dd className="leading-relaxed text-stone-700">{children}</dd>
    </div>
  )
}

export default function Projects() {
  return (
    <>
      <PageHeader title="Projects" subtitle="Research experience: the problem, what I did, and what came of it." />

      <div className="space-y-8">
        {projects.map((p) => (
          <article key={p.title} className="rounded-xl border border-stone-200 bg-white p-6 sm:p-8">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h2 className="font-serif text-xl font-semibold text-stone-900">{p.title}</h2>
                <p className="mt-1 text-sm text-stone-500">
                  {[p.period, p.advisor].filter(Boolean).join(' · ')}
                </p>
              </div>
              <StatusBadge status={p.status} />
            </div>

            <dl className="mt-6 space-y-4">
              <Field label="Problem">{p.problem}</Field>
              <Field label="What I did">{p.approach}</Field>
              <Field label="Results">{p.results}</Field>
            </dl>

            {Object.values(p.links ?? {}).some(Boolean) && (
              <div className="mt-6 border-t border-stone-100 pt-5">
                <LinkPills links={p.links} />
              </div>
            )}
          </article>
        ))}
      </div>
    </>
  )
}
