import React from 'react'
import { motion } from 'framer-motion'
import DestinationList from '../components/DestinationList'

export default function Home() {
  return (
    <section className="space-y-8">
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="glass rounded-2xl p-8 shadow-xl">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-sky-400 to-indigo-600 flex items-center justify-center shadow-lg text-white text-xl font-bold">TH</div>
          <div className="flex-1">
            <h1 className="text-2xl md:text-3xl font-bold">Destinasi Wisata Thailand</h1>
            <p className="text-slate-600 mt-1">Jelajahi destinasi populer di Thailand. Klik kartu untuk melihat detail singkatnya.</p>
            <div className="mt-4 flex gap-3">
              <a href="#list" className="btn px-4 py-2 rounded-md bg-sky-600 text-white hover:shadow-lg focus-ring">Lihat Destinasi</a>
            </div>
          </div>
        </div>
      </motion.div>

      <div id="list" className="mt-4">
        <DestinationList />
      </div>
    </section>
  )
}
