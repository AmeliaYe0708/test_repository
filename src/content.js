// ============================================================================
//  ALL SITE CONTENT LIVES IN THIS FILE.
//  Edit the text below — you should not need to touch any other file.
//  Anything in [square brackets] is a placeholder to replace.
// ============================================================================

// Paths below are relative to the /public folder:
//   cv: 'CV_Linshan_Ye.pdf'          -> public/CV_Linshan_Ye.pdf
//   headshot: 'files/headshot.png'   -> public/files/headshot.png
export const profile = {
  name: 'Linshan Ye',
  // How your name appears in author lists — it gets bolded on the Publications page.
  citationName: 'Y. Linshan',
  title: 'Undergraduate Student',
  affiliation: 'Zhili College, Tsinghua University',
  affiliationUrl: 'https://www.zlc.tsinghua.edu.cn/EN/en.htm', // optional link to your department / lab

  // Path of your photo inside /public. Leave '' to show initials.
  headshot: 'files/headshot.png',

  // ONE sentence: who you are as a researcher.
  identity:
    'I work on AI for biology — building and fine-tuning models that help answer concrete biological questions.',

  // 2–3 sentences on SPECIFIC interests. Name the problems, methods, or settings.
  // Avoid empty statements like "I am very interested in AI".
  interests: [
    'Developing and refining machine learning models for predicting and prioritizing biological macromolecules, closing the loop with wet-lab validation.',
    'Building safer language models with respect to biosafety and copyright-sensitive settings through unlearning methods.',
  ],

  // Keywords shown as small tags under the interests (optional — use [] to hide).
  keywords: ['AI for science', 'Biological Data Science', 'AI safety'],

  email: 'yls23@mails.tsinghua.edu.cn', // prefer your institutional email
  cv: 'CV_Linshan_Ye.pdf',
  cvLastUpdated: 'Nov 2026',

  links: {
    // Replace the placeholders below; set a link to '' to hide that row.
    orcid: 'https://orcid.org/0009-0005-4991-4684',
    github: 'https://github.com/AmeliaYe0708',
  },
}

// ============================================================================
//  HOW TO ADD FILES (PDFs, PowerPoints, pictures)
//  1. Put the file in  public/files/  (e.g. public/files/my-paper.pdf).
//  2. List it under that entry's `files`:  { label: 'Paper', file: 'files/my-paper.pdf' }
//     The entry's page (opened by clicking its card) shows a preview frame
//     for each file, with Open and Download buttons.
//       .pdf               -> first page
//       .png/.jpg/.webp    -> the top part of the picture that fits the frame
//       .pptx/.ppt         -> Microsoft's slide viewer (only on the live site)
//     Optional: add  preview: 'files/cover.png'  to show a different picture.
//  3. Use spaces-free, lowercase file names (my-paper.pdf, not My Paper.pdf).
//
//  HOW TO ADD LINKS
//  Fill in the `links` of an entry; empty ones ('') are hidden.
//
//  slug: the entry's page address, e.g. slug 'paper-1' -> #/publications/paper-1.
//  Lowercase letters, numbers, and dashes; each slug must be unique.
// ============================================================================

// ----------------------------------------------------------------------------
//  PUBLICATIONS  (shown on the Publications page — listed first)
//  authors: list in order; the one matching profile.citationName is bolded.
//  status: 'published' | 'under-review' | 'ongoing'
//  links: any of pdf, arxiv, openreview, code, slides, poster — leave '' to hide
// ----------------------------------------------------------------------------
export const publications = [
  {
    slug: 'publication-1',
    title: '[Publication Title 1]',
    authors: ['[A. Author]', '[Y. Name]', '[C. Author]'],
    venue: '[arXiv]',
    year: '[2026]',
    status: 'published',
    problem: '[What problem does this paper address, and why is it hard or important?]',
    approach: '[What did YOU do? Methods, systems built, experiments run.]',
    results: '[Concrete outcomes: numbers, findings, artifacts, your specific contributions.]',
    links: { arxiv: '', openreview: '', code: '' },
    files: [],
  },
  {
    slug: 'publication-2',
    title: '[Publication Title 2]',
    year: '2026',
    status: 'ongoing',
    problem: '[What problem does this paper address?]',
    approach: '[What did you do?]',
  }
]

// ----------------------------------------------------------------------------
//  POSTERS & TALKS  (shown on the Publications page, below the papers)
//  type: 'poster' | 'talk'   — use [] to hide the whole section
//  links: any of poster, slides, video, pdf, website — leave '' to hide
// ----------------------------------------------------------------------------
export const presentations = [
  {
    slug: 'poster-1',
    title: 'Phage therapy targeting Eggerthella lenta for depression',
    type: 'poster',
    event: 'Tsinghua University 2024 Student Academic Research Promotion Program — Individual Project Mid-term Exchange',
    location: 'Beijing, China',
    date: 'October 2024',
    summary: 'We isolated two phages targeting Eggerthella lenta and characterized their genomes, laying the groundwork for investigating phage-based modulation of the gut microbiome as a potential approach to depression.',
    files: [
      { label: 'Poster (PDF)', file: 'files/poster-phage-eggerthella-lenta.pdf' },
    ],
  },
  {
    slug: 'poster-2',
    title: 'Preparation of analgesic peptide using synthetic biology approaches',
    type: 'poster',
    event: 'Tsinghua University 2025 Student Academic Research Promotion Program — Individual Project Mid-term Exchange',
    location: 'Beijing, China',
    date: 'October 2025',
    summary: 'We modified an analgesic peptide and engineered probiotic bacteria for its production and extracellular release, exploring a synthetic biology approach to pain management.',
    files: [
      { label: 'Poster (PDF)', file: 'files/poster-analgesic-peptide.pdf' },
    ],
  },
  {
    slug: 'talk-1',
    title: 'DuCon：A Dual-microbe system for vinasse recycling through Conversion to succinate',
    type: 'talk',
    event: 'iGEM 2025 Jamboree',
    location: 'Paris, France',
    date: 'October 2025',
    summary: 'We designed an innovative dual-microbe system to tackle this issue and produce high-value succinate. This system promises efficient vinasse decomposition while generating a valuable chemical, balancing environmental sustainability with economic benefit.',
    links: { website: 'https://jamboree.igem.org/2025/schedule/5f25a51e-cd7d-4482-9c59-5da7b57a001b' }
  },
  {
    slug: 'talk-2',
    title: 'Effects of insect color tropism on flower-visiting behavior',
    type: 'talk',
    event: 'Capital Universities Annual Symposium on Biology Field Practice Exchange',
    location: 'Beijing, China',
    date: 'December 2024',
    summary: 'Insects show distinct patterns of flower visitation. We used controlled experiments with flower-colored paper models to explore how color and other factors contribute to these differences.'
  },
]

// ----------------------------------------------------------------------------
//  PROJECTS  (course projects, shown on the Projects page)
//  links: any of report, code, slides, website, wiki — leave '' to hide
//  files: PDFs, PowerPoints, and pictures
// ----------------------------------------------------------------------------
export const projects = [
  {
    slug: 'box-cox-reaction-order',
    title: 'Determination of Chemical Reaction Order Using the Box–Cox Transformation',
    course: 'Physical Chemistry B',
    term: 'Fall 2025',
    problem:
      'Reaction order is often found by trial-and-error linear regression or the half-life method. Those approaches are awkward for non-integer orders and for noisy sampling. This project asks how to identify the order from concentration–time data on statistical grounds.',
    contributions:
      'I applied the Box–Cox transformation to three concentration–time series, used the maximising λ as the linearising exponent, and compared first-order, one-and-a-half-order, and second-order kinetics in R.',
    conclusions:
      'Box–Cox recovers the kinetic order, including half-integer orders, from the same linear-regression setup used in the conventional method, without a separate search over integer rate laws.',
    files: [
      { label: 'Report (PDF)', file: 'files/box-cox-reaction-order.pdf' },
      { label: 'R code and data', file: 'files/box-cox-reaction-order-code.md' },
    ],
  },
  {
    slug: 'project-2',
    title: '[Course Project Title 2]',
    course: '[COURSE 202: Course Name]',
    term: '[Spring 2026]',
    problem: '[What problem did the project tackle?]',
    contributions: '[What did you do?]',
    conclusions: '[What did you conclude?]',
    files: [],
  },
  {
    slug: 'project-3',
    title: 'DuCon：A Dual-microbe system for vinasse recycling through Conversion to succinate',
    course: 'Laboratory of Molecular Biology',
    term: 'Fall 2025',
    problem: 'The treatment of Baijiu vinasse, which contains hard-to-degrade carbon sources, is a significant environmental challenge.',
    contributions: 'I carried out genetic manipulation of acid-tolerant KT 2440 and, as student team and wet-lab leader, supervised wet-lab experiments and wiki writing.',
    conclusions: 'We designed an innovative dual-microbe system to tackle this issue and produce high-value succinate. This system promises efficient vinasse decomposition while generating a valuable chemical, balancing environmental sustainability with economic benefit.',
    links: { wiki: 'https://2025.igem.wiki/tsinghua/' }
  },
]
