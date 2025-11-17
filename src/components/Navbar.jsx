// src/components/Navbar.jsx
import React from 'react'

export default function Navbar({ active = 'home', onNav = () => {} }) {
  const items = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'profile', label: 'Profile' }
  ]

  return (
    <div className="inline-flex items-center gap-2 bg-white/60 glass rounded-lg p-1 shadow-sm">
      {items.map(it => {
        const isActive = active === it.id
        const activeCls = isActive ? "bg-gradient-to-r from-sky-500 to-indigo-500 text-white shadow-md" : "text-slate-700 hover:bg-slate-100"
        return (
          <button
            key={it.id}
            onClick={() => onNav(it.id)}
            className={`px-4 py-2 text-sm rounded-md btn focus-ring ${activeCls}`}
            aria-current={isActive ? 'page' : undefined}
          >
            {it.label}
          </button>
        )
      })}
    </div>
  )
}
