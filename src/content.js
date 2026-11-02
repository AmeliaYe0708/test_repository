// ============================================================================
//  ALL SITE CONTENT LIVES IN THIS FILE.
//  Edit the text below — you should not need to touch any other file.
//  Anything in [square brackets] is a placeholder to replace.
// ============================================================================

// Files in /public are served from the site root:
//   public/cv.pdf        -> replace with your real CV (keep the name cv.pdf)
//   public/headshot.jpg  -> add your photo, then set `headshot` below
export const profile = {
  name: '[Your Full Name]',
  // How your name appears in author lists — it gets bolded on the Publications page.
  citationName: '[Y. Name]',
  title: '[PhD Student / Undergraduate Researcher]',
  affiliation: '[Department of Computer Science, University Name]',
  affiliationUrl: '', // optional link to your department / lab

  // Set to 'headshot.jpg' after adding public/headshot.jpg. Leave '' to show initials.
  headshot: '',

  // ONE sentence: who you are as a researcher.
  identity:
    '[I study how X can be made Y, focusing on Z.]',

  // 2–3 sentences on SPECIFIC interests. Name the problems, methods, or settings.
  // Avoid empty statements like "I am very interested in AI".
  interests: [
    '[Specific interest 1 — e.g. the concrete problem you work on and why it matters.]',
    '[Specific interest 2 — e.g. the method or angle you take on it.]',
    '[Optional interest 3 — e.g. an application domain or a direction you are moving toward.]',
  ],

  // Keywords shown as small tags under the interests (optional — use [] to hide).
  keywords: ['[Keyword 1]', '[Keyword 2]', '[Keyword 3]'],

  email: '[you@university.edu]', // prefer your institutional email
  cv: 'cv.pdf',
  cvLastUpdated: '[Month Year]',

  links: {
    // Replace the placeholders below; set a link to '' to hide that row.
    googleScholar: 'https://scholar.google.com/citations?user=[YOUR_ID]',
    orcid: 'https://orcid.org/[0000-0000-0000-0000]',
    github: 'https://github.com/AmeliaYe0708',
  },
}

// ----------------------------------------------------------------------------
//  PUBLICATIONS  (shown on the Publications page — listed first)
//  authors: list in order; the one matching profile.citationName is bolded.
//  status: 'published' | 'under-review' | 'ongoing'
//  links: any of pdf, arxiv, openreview, code, slides, poster — leave '' to hide
// ----------------------------------------------------------------------------
export const publications = [
  {
    title: '[Publication Title 1]',
    authors: ['[A. Author]', '[Y. Name]', '[C. Author]'],
    venue: '[Conference or Journal Name (ABBR)]',
    year: '[2026]',
    status: 'published',
    problem: '[What problem does this paper address, and why is it hard or important?]',
    approach: '[What did YOU do? Methods, systems built, experiments run.]',
    results: '[Concrete outcomes: numbers, findings, artifacts, your specific contributions.]',
    links: { pdf: '', arxiv: '', openreview: '', code: '' },
  },
  {
    title: '[Publication Title 2]',
    authors: ['[Y. Name]', '[B. Author]'],
    venue: '[arXiv preprint]',
    year: '[2026]',
    status: 'under-review',
    problem: '[What problem does this paper address?]',
    approach: '[What did you do?]',
    results: '[What came out of it?]',
    links: { pdf: '', arxiv: '', openreview: '', code: '' },
  },
  {
    title: '[Publication Title 3]',
    authors: ['[Y. Name]', '[B. Author]', '[C. Author]'],
    venue: '[Target venue / in preparation]',
    year: '[2026]',
    status: 'ongoing',
    problem: '[What problem does this work address?]',
    approach: '[What are you doing?]',
    results: '[Progress so far / expected contributions.]',
    links: { code: '' },
  },
]

// ----------------------------------------------------------------------------
//  POSTERS & TALKS  (shown on the Publications page, below the papers)
//  type: 'poster' | 'talk'   — use [] to hide the whole section
//  links: any of poster, slides, video, pdf — leave '' to hide
// ----------------------------------------------------------------------------
export const presentations = [
  {
    title: '[Poster Title]',
    type: 'poster',
    event: '[Conference / Symposium Name]',
    location: '[City]',
    date: '[Month Year]',
    summary: '[One or two sentences on what was presented.]',
    links: { poster: '', slides: '' },
  },
  {
    title: '[Talk Title]',
    type: 'talk',
    event: '[Seminar / Workshop Name]',
    location: '[City]',
    date: '[Month Year]',
    summary: '[One or two sentences on what was presented.]',
    links: { poster: '', slides: '' },
  },
]

// ----------------------------------------------------------------------------
//  PROJECTS  (course projects, shown on the Projects page)
//  links: any of report (PDF), code, slides — leave '' to hide
// ----------------------------------------------------------------------------
export const projects = [
  {
    title: '[Course Project Title 1]',
    course: '[COURSE 101: Course Name]',
    term: '[Fall 2025]',
    problem: '[What problem did the project tackle?]',
    contributions: '[What did you build, implement, or analyze? What was your part in a team?]',
    conclusions: '[What did you find or learn? Key results or takeaways.]',
    links: { report: '', code: '' },
  },
  {
    title: '[Course Project Title 2]',
    course: '[COURSE 202: Course Name]',
    term: '[Spring 2026]',
    problem: '[What problem did the project tackle?]',
    contributions: '[What did you do?]',
    conclusions: '[What did you conclude?]',
    links: { report: '', code: '' },
  },
]
