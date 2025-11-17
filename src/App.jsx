// src/App.jsx
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import Navbar from './components/Navbar'

function PageWrapper({ children }) {
  return (
    <div>
      {children}
    </div>
  )
}

export default function App() {
  const [page, setPage] = useState('home')
  const [errorBoundary, setErrorBoundary] = useState(null)

  // simple error boundary: catch sync render errors
  try {
    // pick component
    let PageComponent = null
    if (page === 'home') PageComponent = <Home />
    else if (page === 'about') PageComponent = <About />
    else if (page === 'profile') PageComponent = <Profile />
    else PageComponent = <div className="p-6">Page not found</div>

    return (
      <div className="min-h-screen flex flex-col">
        <header className="backdrop-blur-sm sticky top-0 z-40">
          <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-sky-500 to-indigo-500 flex items-center justify-center shadow-lg">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-white">
                  <path d="M12 3L2 7l10 4 10-4-10-4z" fill="white" opacity="0.95"/>
                  <path d="M12 13L2 9v6l10 4 10-4V9l-10 4z" fill="white" opacity="0.9"/>
                </svg>
              </div>
              <div>
                <div className="text-lg font-semibold">Thailand</div>
                <div className="text-xs text-slate-600">Destinations</div>
              </div>
            </div>

            <nav>
              <Navbar active={page} onNav={(p) => { console.log('nav to', p); setPage(p); }} />
            </nav>
          </div>
        </header>

        <main className="flex-1 flex items-start justify-center py-8 px-4">
          <div className="w-full max-w-5xl">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={page}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.35 }}
              >
                <PageWrapper>{PageComponent}</PageWrapper>
              </motion.div>
            </AnimatePresence>
          </div>
        </main>

        <footer className="py-6">
          <div className="max-w-5xl mx-auto text-center text-sm text-slate-500">
            Built for Praktikum PPB • Static data • PWA-ready
          </div>
        </footer>
      </div>
    )
  } catch (e) {
    console.error('Render error in App:', e)
    return <div className="p-6 text-red-600">Render error: {String(e)}</div>
  }
}
