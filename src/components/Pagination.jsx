import React from 'react'

export default function Pagination({ page, totalPages, onChange }) {
  const pages = []
  const start = Math.max(1, page - 2)
  const end = Math.min(totalPages, page + 2)
  for (let i = start; i <= end; i++) pages.push(i)

  return (
    <div className="flex items-center justify-center gap-2 mt-6">
      <button onClick={() => onChange(Math.max(1, page - 1))} disabled={page <= 1} className="px-3 py-1 rounded-md border bg-white/80 glass btn">Prev</button>

      {start > 1 && (
        <>
          <PageButton num={1} onClick={() => onChange(1)} active={page === 1} />
          {start > 2 && <div className="px-2">…</div>}
        </>
      )}

      {pages.map((p) => <PageButton key={p} num={p} onClick={() => onChange(p)} active={p === page} />)}

      {end < totalPages && (
        <>
          {end < totalPages - 1 && <div className="px-2">…</div>}
          <PageButton num={totalPages} onClick={() => onChange(totalPages)} active={page === totalPages} />
        </>
      )}

      <button onClick={() => onChange(Math.min(totalPages, page + 1))} disabled={page >= totalPages} className="px-3 py-1 rounded-md border bg-white/80 glass btn">Next</button>
    </div>
  )
}

function PageButton({ num, onClick, active }) {
  return <button onClick={() => onClick(num)} className={`px-3 py-1 rounded-md btn ${active ? 'bg-sky-600 text-white shadow-md' : 'bg-white/80 border'}`}>{num}</button>
}
