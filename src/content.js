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
//  PROJECTS  (shown on the Projects page)
//  status: 'published' | 'under-review' | 'ongoing'
//  links: any of paper (PDF), arxiv, openreview, code, slides, poster — leave '' to hide
// ----------------------------------------------------------------------------
export const projects = [
  {
    title: '[Project Title 1]',
    status: 'published',
    period: '[2025 – 2026]',
    advisor: '[Advisor name, Lab]',
    problem: '[What problem does this address, and why is it hard or important?]',
    approach: '[What did YOU do? Methods, systems built, experiments run.]',
    results: '[Concrete outcomes: numbers, findings, artifacts, your specific contributions.]',
    links: { paper: '', arxiv: '', openreview: '', code: '' },
  },
  {
    title: '[Project Title 2]',
    status: 'under-review',
    period: '[2025 – present]',
    advisor: '',
    problem: '[What problem does this address?]',
    approach: '[What did you do?]',
    results: '[What came out of it?]',
    links: { paper: '', arxiv: '', openreview: '', code: '' },
  },
  {
    title: '[Project Title 3]',
    status: 'ongoing',
    period: '[2026 – present]',
    advisor: '',
    problem: '[What problem does this address?]',
    approach: '[What are you doing?]',
    results: '[Progress so far / expected contributions.]',
    links: { code: '' },
  },
]

// ----------------------------------------------------------------------------
//  PUBLICATIONS  (shown on the Publications page)
//  authors: list in order; the one matching profile.citationName is bolded.
//  status: optional note shown after the venue, e.g. 'Under review', 'To appear'
// ----------------------------------------------------------------------------
export const publications = [
  {
    authors: ['[A. Author]', '[Y. Name]', '[C. Author]'],
    title: '[Paper Title]',
    venue: '[Conference or Journal Name (ABBR)]',
    year: '[2026]',
    status: '',
    links: { pdf: '', arxiv: '', openreview: '', code: '' },
  },
  {
    authors: ['[Y. Name]', '[B. Author]'],
    title: '[Paper Title]',
    venue: '[arXiv preprint]',
    year: '[2026]',
    status: 'Under review',
    links: { pdf: '', arxiv: '', openreview: '', code: '' },
  },
]

// Conference posters and talks (optional — use [] to hide the section).
// type: 'Poster' | 'Talk' | 'Oral' | 'Workshop' ...
export const presentations = [
  {
    type: 'Poster',
    title: '[Poster Title]',
    event: '[Conference / Symposium Name]',
    location: '[City]',
    date: '[Month Year]',
    links: { poster: '', slides: '' },
  },
  {
    type: 'Talk',
    title: '[Talk Title]',
    event: '[Seminar / Workshop Name]',
    location: '[City]',
    date: '[Month Year]',
    links: { poster: '', slides: '' },
  },
]
