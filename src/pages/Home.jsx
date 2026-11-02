import { Link } from 'react-router-dom'
import { profile, projects, publications, presentations } from '../content.js'
import { Icon, SectionHeading, asset } from '../components/ui.jsx'

function Headshot() {
  if (profile.headshot) {
    return (
      <img
        src={asset(profile.headshot)}
        alt={`Headshot of ${profile.name}`}
        className="aspect-square w-40 rounded-full object-cover shadow-sm ring-1 ring-stone-200 sm:w-48"
      />
    )
  }
  const initials = profile.name
    .replace(/[[\]]/g, '')
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
  return (
    <div className="flex aspect-square w-40 items-center justify-center rounded-full bg-stone-200 font-serif text-4xl text-stone-500 ring-1 ring-stone-300 sm:w-48">
      {initials}
    </div>
  )
}

function NavCard({ to, title, description, count }) {
  return (
    <Link
      to={to}
      className="group flex flex-col justify-between rounded-xl border border-stone-200 bg-white p-6 transition hover:-translate-y-0.5 hover:border-teal-700 hover:shadow-md"
    >
      <div>
        <div className="flex items-baseline justify-between">
          <h3 className="font-serif text-xl font-semibold text-stone-900">{title}</h3>
          <span className="text-sm text-stone-400">{count}</span>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-stone-600">{description}</p>
      </div>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-teal-800">
        View {title.toLowerCase()}
        <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" />
      </span>
    </Link>
  )
}

const contactRows = [
  { key: 'email', label: 'Email', icon: 'mail' },
  { key: 'googleScholar', label: 'Google Scholar', icon: 'scholar' },
  { key: 'orcid', label: 'ORCID', icon: 'orcid' },
  { key: 'github', label: 'GitHub', icon: 'github' },
]

export default function Home() {
  const contacts = contactRows
    .map((row) => {
      const href = row.key === 'email' ? `mailto:${profile.email}` : profile.links[row.key]
      const text = row.key === 'email' ? profile.email : href?.replace(/^https?:\/\//, '')
      return { ...row, href, text }
    })
    .filter((row) => row.href)

  return (
    <div className="space-y-20">
      {/* ---------------- About ---------------- */}
      <section id="about" className="grid gap-10 sm:grid-cols-[auto_1fr] sm:gap-12">
        <div className="flex justify-center sm:block">
          <Headshot />
        </div>

        <div>
          <h1 className="font-serif text-4xl font-semibold tracking-tight text-stone-900">{profile.name}</h1>
          <p className="mt-2 text-stone-600">
            {profile.title}
            <span className="mx-2 text-stone-300">·</span>
            {profile.affiliationUrl ? (
              <a href={profile.affiliationUrl} target="_blank" rel="noreferrer" className="underline decoration-stone-300 underline-offset-4 hover:decoration-teal-700">
                {profile.affiliation}
              </a>
            ) : (
              profile.affiliation
            )}
          </p>

          <p className="mt-6 font-serif text-xl leading-relaxed text-stone-900">{profile.identity}</p>
          <p className="mt-4 leading-relaxed text-stone-700">{profile.interests.join(' ')}</p>

          {profile.keywords.length > 0 && (
            <ul className="mt-5 flex flex-wrap gap-2">
              {profile.keywords.map((k) => (
                <li key={k} className="rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-900 ring-1 ring-teal-100">
                  {k}
                </li>
              ))}
            </ul>
          )}

          {/* Email + CV: visible at a glance */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-sm font-medium text-stone-800 transition hover:border-teal-700 hover:text-teal-800"
            >
              <Icon name="mail" /> {profile.email}
            </a>
            <a
              href={asset(profile.cv)}
              download
              className="inline-flex items-center gap-2 rounded-lg bg-teal-800 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-teal-900"
            >
              <Icon name="download" /> Download CV (PDF)
            </a>
          </div>
        </div>
      </section>

      {/* ---------------- Research: entry points ---------------- */}
      <section>
        <SectionHeading id="research">Research</SectionHeading>
        <div className="grid gap-5 sm:grid-cols-2">
          <NavCard
            to="/publications"
            title="Publications"
            count={`${publications.length + presentations.length}`}
            description="Papers with the problem, my approach, results, and status, plus posters and talks."
          />
          <NavCard
            to="/projects"
            title="Projects"
            count={`${projects.length}`}
            description="Course projects: the problem, my contributions, and conclusions."
          />
        </div>
      </section>

      {/* ---------------- CV ---------------- */}
      <section>
        <SectionHeading id="cv">CV</SectionHeading>
        <a
          href={asset(profile.cv)}
          download
          className="group flex items-center justify-between gap-4 rounded-xl border border-stone-200 bg-white px-5 py-4 transition hover:border-teal-700"
        >
          <span className="flex items-center gap-4">
            <Icon name="file" className="h-5 w-5 shrink-0 text-stone-500" />
            <span>
              <span className="block text-sm font-medium text-stone-900">Curriculum Vitae (PDF)</span>
              <span className="block text-xs text-stone-500">Last updated {profile.cvLastUpdated}</span>
            </span>
          </span>
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-teal-800">
            <Icon name="download" /> Download
          </span>
        </a>
      </section>

      {/* ---------------- Contact ---------------- */}
      <section>
        <SectionHeading id="contact">Contact</SectionHeading>
        <ul className="divide-y divide-stone-200 rounded-xl border border-stone-200 bg-white">
          {contacts.map((c) => (
            <li key={c.key}>
              <a
                href={c.href}
                target={c.key === 'email' ? undefined : '_blank'}
                rel="noreferrer"
                className="flex items-center gap-4 px-5 py-4 transition hover:bg-stone-50"
              >
                <Icon name={c.icon} className="h-5 w-5 shrink-0 text-stone-500" />
                <span className="w-32 shrink-0 text-sm font-medium text-stone-900">{c.label}</span>
                <span className="truncate text-sm text-stone-600">{c.text}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
