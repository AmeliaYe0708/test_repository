import { useEffect, useRef, useState } from 'react'
import { Icon, asset } from './ui.jsx'

// ---------------------------------------------------------------------------
// FilePreview: a framed preview of one file + Open / Download buttons.
//   PDF          -> first page, drawn with pdf.js (top of the page fills the frame)
//   Image        -> the part of the image that fits the frame (from the top-left corner)
//   PowerPoint   -> embedded Microsoft Office viewer (only works on the live site,
//                   because Microsoft's servers need to fetch the file from a public URL)
// Any file can set `preview: 'files/some-image.png'` to use that picture instead.
// ---------------------------------------------------------------------------

const IMAGE_EXT = ['png', 'jpg', 'jpeg', 'gif', 'webp', 'svg', 'avif']
const SLIDE_EXT = ['ppt', 'pptx']

const extOf = (path) => path.split(/[?#]/)[0].split('.').pop().toLowerCase()
const kindOf = (path) => {
  const ext = extOf(path)
  if (ext === 'pdf') return 'pdf'
  if (IMAGE_EXT.includes(ext)) return 'image'
  if (SLIDE_EXT.includes(ext)) return 'slides'
  return 'other'
}
// Files in /public are referenced like 'files/paper.pdf'; full URLs are used as-is.
const resolve = (path) => (/^https?:\/\//.test(path) ? path : asset(path))
const fileName = (path) => decodeURIComponent(path.split(/[?#]/)[0].split('/').pop())

function Placeholder({ icon = 'file', title, note }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-stone-100 p-6 text-center">
      <Icon name={icon} className="h-8 w-8 text-stone-400" />
      <p className="text-sm font-medium text-stone-600">{title}</p>
      {note && <p className="max-w-xs text-xs text-stone-500">{note}</p>}
    </div>
  )
}

let pdfjsPromise
function loadPdfjs() {
  // Loaded only when a PDF preview is on screen, so other pages stay light.
  pdfjsPromise ??= Promise.all([
    import('pdfjs-dist'),
    import('pdfjs-dist/build/pdf.worker.min.mjs?url'),
  ]).then(([pdfjs, worker]) => {
    pdfjs.GlobalWorkerOptions.workerSrc = worker.default
    return pdfjs
  })
  return pdfjsPromise
}

function PdfFirstPage({ url }) {
  const canvasRef = useRef(null)
  const [state, setState] = useState('loading')

  useEffect(() => {
    let cancelled = false
    let task
    ;(async () => {
      try {
        const pdfjs = await loadPdfjs()
        task = pdfjs.getDocument({ url: new URL(url, window.location.href).href })
        const doc = await task.promise
        const page = await doc.getPage(1)
        const canvas = canvasRef.current
        if (cancelled || !canvas) return
        const cssWidth = canvas.parentElement.clientWidth || 600
        const base = page.getViewport({ scale: 1 })
        const scale = (cssWidth / base.width) * Math.min(window.devicePixelRatio || 1, 2)
        const viewport = page.getViewport({ scale })
        canvas.width = viewport.width
        canvas.height = viewport.height
        await page.render({ canvas, viewport }).promise
        if (!cancelled) setState('ready')
      } catch (err) {
        console.warn('PDF preview failed:', url, err)
        if (!cancelled) setState('error')
      }
    })()
    return () => {
      cancelled = true
      task?.destroy()
    }
  }, [url])

  if (state === 'error') {
    return <Placeholder title="PDF preview unavailable" note="Use Open or Download below. (PDFs hosted on other sites, like arXiv, often can't be previewed.)" />
  }
  return (
    <>
      {state === 'loading' && <div className="absolute inset-0 animate-pulse bg-stone-100" />}
      <canvas ref={canvasRef} className="block w-full bg-white" />
    </>
  )
}

function SlidesEmbed({ url }) {
  const host = window.location.hostname
  if (host === 'localhost' || host === '127.0.0.1') {
    return <Placeholder title="PowerPoint preview" note="Shows on the published site. Microsoft's viewer can't reach files on your own computer." />
  }
  const absolute = new URL(url, window.location.href).href
  return (
    <iframe
      title="Slides preview"
      src={`https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(absolute)}`}
      className="h-full w-full border-0"
      loading="lazy"
    />
  )
}

function Frame({ path, previewPath, label }) {
  const kind = kindOf(previewPath)
  const url = resolve(previewPath)
  if (kind === 'pdf') return <PdfFirstPage url={url} />
  if (kind === 'image') {
    return <img src={url} alt={label} loading="lazy" className="h-full w-full object-cover object-left-top" />
  }
  if (kind === 'slides') return <SlidesEmbed url={url} />
  return <Placeholder title={fileName(path)} note="No preview for this file type." />
}

export default function FilePreview({ label, file, preview }) {
  const url = resolve(file)
  const interactive = kindOf(preview ?? file) === 'slides' // let people click through slides
  const frameClass = 'relative block aspect-[4/3] overflow-hidden border-b border-stone-200 bg-stone-50'

  return (
    <figure className="overflow-hidden rounded-xl border border-stone-200 bg-white">
      {interactive ? (
        <div className={frameClass}>
          <Frame path={file} previewPath={preview ?? file} label={label} />
        </div>
      ) : (
        <a href={url} target="_blank" rel="noreferrer" className={`${frameClass} group`} aria-label={`Open ${label}`}>
          <Frame path={file} previewPath={preview ?? file} label={label} />
          <span className="absolute inset-0 bg-stone-900/0 transition group-hover:bg-stone-900/5" />
        </a>
      )}

      <figcaption className="flex flex-wrap items-center justify-between gap-3 px-4 py-3">
        <div className="min-w-0">
          <p className="text-sm font-medium text-stone-900">{label}</p>
          <p className="truncate text-xs text-stone-500">{fileName(file)}</p>
        </div>
        <div className="flex gap-2">
          <a href={url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-md border border-stone-300 px-2.5 py-1 text-xs font-medium text-stone-700 transition hover:border-teal-700 hover:text-teal-800">
            <Icon name="external" className="h-3.5 w-3.5" /> Open
          </a>
          <a href={url} download className="inline-flex items-center gap-1.5 rounded-md bg-teal-800 px-2.5 py-1 text-xs font-medium text-white transition hover:bg-teal-900">
            <Icon name="download" className="h-3.5 w-3.5" /> Download
          </a>
        </div>
      </figcaption>
    </figure>
  )
}
