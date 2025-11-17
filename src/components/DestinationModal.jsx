// src/components/DestinationModal.jsx
import React, { useEffect } from 'react'

export default function DestinationModal({ open, onClose, data }) {
  // close on Escape
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape' && open) onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open || !data) return null

  const {
    name_en,
    name,
    long_description,
    short_description,
    coordinates,
    address,
    website,
    image,
    categories,
    opening_hours,
    entry_fee,
    tips
  } = data

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative max-w-3xl w-full bg-white rounded-xl shadow-2xl overflow-hidden">
        <button
          onClick={onClose}
          className="absolute right-3 top-3 text-slate-600 bg-white/60 rounded-full p-1 hover:bg-white"
          aria-label="Close details"
        >
          ✕
        </button>

        <img
  src={data?.image}
  alt={data?.name_en}
  className="w-full h-full object-cover"
  loading="eager"
  decoding="async"
  fetchPriority="high"
  onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/placeholder-800.png' }}
/>



        <div className="p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold leading-tight">
                {name_en} {name ? <span className="text-sm text-slate-500 block">({name})</span> : null}
              </h3>
              {categories && categories.length > 0 && (
                <div className="mt-1 text-xs text-slate-500">{categories.join(' · ')}</div>
              )}
            </div>
          </div>

          {short_description && <p className="mt-3 text-sm text-slate-700">{short_description}</p>}
          {long_description && <p className="mt-3 text-sm text-slate-600 whitespace-pre-line">{long_description}</p>}

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
            {address && <div><span className="font-medium">Address:</span><div>{address}</div></div>}
            {coordinates && <div><span className="font-medium">Coordinates:</span><div>{coordinates.lat}, {coordinates.lon}</div></div>}
            {opening_hours && <div><span className="font-medium">Opening hours:</span><div>{opening_hours}</div></div>}
            {entry_fee && <div><span className="font-medium">Entry fee:</span><div>{entry_fee}</div></div>}
          </div>

          {website && (
            <div className="mt-4 text-sm">
              <span className="font-medium">Website: </span>
              <a href={website} target="_blank" rel="noreferrer" className="text-sky-600 underline">{website}</a>
            </div>
          )}

          {tips && (
            <div className="mt-4 bg-slate-50 p-3 rounded text-sm text-slate-700">
              <div className="font-medium mb-1">Tips</div>
              <div>{tips}</div>
            </div>
          )}

          <div className="mt-6 flex justify-end gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-md border text-sm text-slate-700 hover:bg-slate-50"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
