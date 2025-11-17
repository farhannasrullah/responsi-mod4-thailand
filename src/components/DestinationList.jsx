// src/components/DestinationList.jsx
import React, { useEffect, useMemo, useState } from 'react'
import DestinationModal from './DestinationModal'
import destinations from '../data/destinations'
import Thumb from './Thumb'
import { resolveImageUrl } from '../utils/resolveImage'

// PaginationControls (embedded)
function PaginationControls({ total, page, pageSize, onPageChange, onPageSizeChange }) {
  const totalPages = Math.max(1, Math.ceil(total / pageSize))
  const pages = []

  const maxButtons = 7
  let start = Math.max(1, page - Math.floor(maxButtons / 2))
  let end = start + maxButtons - 1
  if (end > totalPages) {
    end = totalPages
    start = Math.max(1, end - maxButtons + 1)
  }
  for (let i = start; i <= end; i++) pages.push(i)

  return (
    <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-3">
      <div className="flex items-center gap-2 text-sm text-slate-600">
        <span>Show</span>
        <select
          value={pageSize}
          onChange={(e) => onPageSizeChange(Number(e.target.value))}
          className="text-sm rounded border px-2 py-1 bg-white"
          aria-label="Select page size"
        >
          <option value={5}>5</option>
          <option value={8}>8</option>
          <option value={12}>12</option>
        </select>
        <span>per page</span>
        <span className="ml-3">Showing <strong>{Math.min((page - 1) * pageSize + 1, total)}</strong> – <strong>{Math.min(page * pageSize, total)}</strong> of <strong>{total}</strong></span>
      </div>

      <nav className="flex items-center gap-1" role="navigation" aria-label="Pagination">
        <button
          onClick={() => onPageChange(Math.max(1, page - 1))}
          disabled={page === 1}
          className="px-3 py-1 rounded-md border bg-white text-sm disabled:opacity-50"
          aria-label="Previous page"
        >
          ‹ Prev
        </button>

        {start > 1 && (
          <>
            <button onClick={() => onPageChange(1)} className="px-3 py-1 rounded-md border bg-white text-sm">1</button>
            {start > 2 && <span className="px-2">…</span>}
          </>
        )}

        {pages.map(pn => (
          <button
            key={pn}
            onClick={() => onPageChange(pn)}
            aria-current={pn === page ? 'page' : undefined}
            className={`px-3 py-1 rounded-md border text-sm ${pn === page ? 'bg-sky-600 text-white' : 'bg-white'}`}
          >
            {pn}
          </button>
        ))}

        {end < totalPages && (
          <>
            {end < totalPages - 1 && <span className="px-2">…</span>}
            <button onClick={() => onPageChange(totalPages)} className="px-3 py-1 rounded-md border bg-white text-sm">{totalPages}</button>
          </>
        )}

        <button
          onClick={() => onPageChange(Math.min(totalPages, page + 1))}
          disabled={page >= totalPages}
          className="px-3 py-1 rounded-md border bg-white text-sm disabled:opacity-50"
          aria-label="Next page"
        >
          Next ›
        </button>
      </nav>
    </div>
  )
}

export default function DestinationList() {
  const [selected, setSelected] = useState(null)
  const [open, setOpen] = useState(false)

  // pagination state
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(8) // default 8 per page

  // search filter
  const [query, setQuery] = useState('')

  // filtered list (client-side)
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return destinations
    return destinations.filter(d => {
      return (
        (d.name_en && d.name_en.toLowerCase().includes(q)) ||
        (d.name && d.name.toLowerCase().includes(q)) ||
        (d.short_description && d.short_description.toLowerCase().includes(q)) ||
        (d.categories && d.categories.join(' ').toLowerCase().includes(q))
      )
    })
  }, [query])

  const total = filtered.length
  const totalPages = Math.max(1, Math.ceil(total / pageSize))

  useEffect(() => {
    if (page > totalPages) setPage(totalPages)
    if (page < 1) setPage(1)
  }, [totalPages, page])

  const startIndex = (page - 1) * pageSize
  const pageItems = filtered.slice(startIndex, startIndex + pageSize)

  // open modal with best-effort preload/resolution of image
  // di DestinationList.jsx — ganti openModal dengan ini
  async function openModal(dest) {
    let finalImage = dest.image ? `/images/${dest.image}` : null
  
    try {
      const resolver = resolveImageUrl(finalImage)
      const resolverTimeout = new Promise((res) => setTimeout(() => res(null), 1500))
      const resolved = await Promise.race([resolver, resolverTimeout])
  
      finalImage = resolved || finalImage
  
      if (finalImage) {
        try {
          const img = new Image()
          img.src = finalImage
          const decodePromise = img.decode ? img.decode() : Promise.resolve()
          const decodeTimeout = new Promise((res) => setTimeout(() => res('timeout'), 2000))
          await Promise.race([decodePromise, decodeTimeout])
        } catch (e) {
          console.warn('preload error', e)
        }
      }
    } catch (e) {
      console.warn('openModal resolve/preload error', e)
    }
  
    console.log('openModal using image:', finalImage)
  
    setSelected({ ...dest, image: finalImage })
    setOpen(true)
  }
  
  

  function closeModal() {
    setOpen(false)
    // clear selected a little after close to help with re-open flashes
    setTimeout(() => setSelected(null), 200)
  }

  return (
    <section>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4">
        <h2 className="text-2xl font-semibold">Destinasi Wisata Thailand</h2>

        <div className="flex items-center gap-2">
          <label htmlFor="search" className="sr-only">Search destinations</label>
          <input
            id="search"
            type="search"
            value={query}
            onChange={(e) => { setQuery(e.target.value); setPage(1) }}
            placeholder="Search (name, category, description)..."
            className="text-sm border rounded-md px-3 py-2 focus:ring focus:ring-sky-200"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {pageItems.map((d) => (
          <article
            key={d.id}
            className="flex gap-3 items-start p-3 bg-white/70 glass rounded-lg shadow-sm hover:shadow-md transition cursor-pointer"
            role="button"
            tabIndex={0}
            onClick={() => openModal(d)}
            onKeyDown={(e) => { if (e.key === 'Enter') openModal(d) }}
            aria-label={`Open details for ${d.name_en}`}
          >
            <div className="w-28 h-20 flex-shrink-0 rounded-md overflow-hidden bg-slate-100">
            <Thumb src={`/images/${d.image}`} alt={d.name_en} className="w-28 h-20" />

            </div>

            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-semibold leading-tight">{d.name_en}</h3>
              <div className="text-xs text-slate-500 truncate">{d.name}</div>
              <p className="mt-2 text-xs text-slate-600 line-clamp-3">{d.short_description}</p>

              <div className="mt-3 flex items-center gap-2">
                <button
                  className="text-xs px-3 py-1 rounded-md bg-sky-600 text-white btn"
                  onClick={(e) => { e.stopPropagation(); openModal(d) }}
                >
                  Details
                </button>
                <span className="text-xs text-slate-500">{d.categories?.[0]}</span>
              </div>
            </div>
          </article>
        ))}

        {pageItems.length === 0 && (
          <div className="col-span-2 p-6 text-center text-slate-600">No destinations found.</div>
        )}
      </div>

      <PaginationControls
        total={total}
        page={page}f
        pageSize={pageSize}
        onPageChange={(p) => setPage(p)}
        onPageSizeChange={(s) => { setPageSize(s); setPage(1) }}
      />

      <DestinationModal open={open} onClose={closeModal} data={selected} />
    </section>
  )
}
