// Small shared building blocks: icons, link pills, section headings.

export const asset = (file) => `${import.meta.env.BASE_URL}${file}`

const paths = {
  mail: 'M3 6.75A1.75 1.75 0 0 1 4.75 5h14.5A1.75 1.75 0 0 1 21 6.75v10.5A1.75 1.75 0 0 1 19.25 19H4.75A1.75 1.75 0 0 1 3 17.25V6.75Zm1.6.1 7.4 5.55 7.4-5.55',
  download: 'M12 4v11m0 0-4.5-4.5M12 15l4.5-4.5M5 19h14',
  arrow: 'M5 12h14m0 0-5-5m5 5-5 5',
  file: 'M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Zm0 0v5h5',
  external: 'M14 4h6v6m0-6-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5',
  code: 'm8 8-4 4 4 4m8-8 4 4-4 4M13.5 5l-3 14',
}

export function Icon({ name, className = 'h-4 w-4' }) {
  if (name === 'github') {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
        <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.39.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
      </svg>
    )
  }
  if (name === 'scholar') {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
        <path d="M12 3 1 9.5l4 2.36V17h2v-3.96l5 2.96 11-6.5L12 3Zm0 9.68L5.2 8.66 12 4.64l6.8 4.02L12 12.68ZM7 16.5v1.2C8.2 19.6 10 20.5 12 20.5s3.8-.9 5-2.8v-1.2l-5 2.95-5-2.95Z" />
      </svg>
    )
  }
  if (name === 'orcid') {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20ZM8.3 17.2H6.9V9.4h1.4v7.8ZM7.6 8.4a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8Zm3.1.99h3.03c2.9 0 4.17 2.07 4.17 3.9 0 2-1.56 3.91-4.15 3.91H10.7V9.4Zm1.4 1.27v5.26h1.5c2.13 0 2.62-1.62 2.62-2.63 0-1.64-1.05-2.63-2.68-2.63H12.1Z" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d={paths[name]} />
    </svg>
  )
}

const linkLabels = {
  paper: ['PDF', 'file'],
  pdf: ['PDF', 'file'],
  arxiv: ['arXiv', 'external'],
  openreview: ['OpenReview', 'external'],
  code: ['Code', 'code'],
  report: ['Report', 'file'],
  slides: ['Slides', 'file'],
  video: ['Video', 'external'],
  poster: ['Poster', 'file'],
}

// Renders only the links that have a URL filled in.
export function LinkPills({ links = {} }) {
  const filled = Object.entries(links).filter(([, url]) => url)
  if (filled.length === 0) return null
  return (
    <div className="flex flex-wrap gap-2">
      {filled.map(([key, url]) => {
        const [label, icon] = linkLabels[key] ?? [key, 'external']
        return (
          <a
            key={key}
            href={url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-stone-300 bg-white px-2.5 py-1 text-xs font-medium text-stone-700 transition hover:border-teal-700 hover:text-teal-800"
          >
            <Icon name={icon} className="h-3.5 w-3.5" />
            {label}
          </a>
        )
      })}
    </div>
  )
}

export function PageHeader({ title, subtitle }) {
  return (
    <header className="mb-10 border-b border-stone-200 pb-6">
      <h1 className="font-serif text-4xl font-semibold tracking-tight text-stone-900">{title}</h1>
      {subtitle && <p className="mt-2 text-stone-600">{subtitle}</p>}
    </header>
  )
}

export function SectionHeading({ id, children, className = 'mb-5' }) {
  return (
    <h2 id={id} className={`${className} scroll-mt-24 font-serif text-2xl font-semibold text-stone-900`}>
      {children}
    </h2>
  )
}

// ---------------------------------------------------------------------------
// EntryCard: the card layout shared by Publications and Projects.
// fields: [[label, text], ...] — rows with empty text are skipped.
// ---------------------------------------------------------------------------
const statusStyles = {
  published: ['Published', 'bg-emerald-50 text-emerald-800 ring-emerald-200'],
  'under-review': ['Under review', 'bg-amber-50 text-amber-800 ring-amber-200'],
  ongoing: ['Ongoing', 'bg-sky-50 text-sky-800 ring-sky-200'],
  poster: ['Poster', 'bg-violet-50 text-violet-800 ring-violet-200'],
  talk: ['Talk', 'bg-rose-50 text-rose-800 ring-rose-200'],
}

function StatusBadge({ status }) {
  if (!status) return null
  const [label, cls] = statusStyles[status] ?? [status, 'bg-stone-100 text-stone-700 ring-stone-200']
  return <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ${cls}`}>{label}</span>
}

export function EntryCard({ title, meta, citation, status, fields, links }) {
  const rows = fields.filter(([, text]) => text)
  return (
    <article className="rounded-xl border border-stone-200 bg-white p-6 sm:p-8">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="font-serif text-xl font-semibold text-stone-900">{title}</h2>
          {citation && <p className="mt-1.5 text-sm leading-relaxed text-stone-600">{citation}</p>}
          {meta && <p className="mt-1 text-sm text-stone-500">{meta}</p>}
        </div>
        <StatusBadge status={status} />
      </div>

      {rows.length > 0 && (
        <dl className="mt-6 space-y-4">
          {rows.map(([label, text]) => (
            <div key={label} className="grid gap-1 sm:grid-cols-[7.5rem_1fr] sm:gap-4">
              <dt className="text-xs font-semibold uppercase tracking-wider text-stone-500 sm:pt-0.5">{label}</dt>
              <dd className="leading-relaxed text-stone-700">{text}</dd>
            </div>
          ))}
        </dl>
      )}

      {Object.values(links ?? {}).some(Boolean) && (
        <div className="mt-6 border-t border-stone-100 pt-5">
          <LinkPills links={links} />
        </div>
      )}
    </article>
  )
}
