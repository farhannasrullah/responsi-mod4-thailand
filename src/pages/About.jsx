import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <motion.section initial={{opacity:0, y:6}} animate={{opacity:1, y:0}} transition={{duration:0.45}} className="glass rounded-2xl p-8 shadow-xl">
      <h2 className="text-2xl font-semibold mb-3">About This App</h2>
      <p className="text-slate-700">
        Aplikasi demonstrasi PWA untuk Responsi Modul 4 Praktikum PPB Ganjil 2025. Dibangun dengan Vite, React, Tailwind, dan VitePWA plugin. Tema bebas, semua data pada responsi harus statis.
      </p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-white/60 rounded-lg glass">
          <h4 className="font-medium">Tech Stack</h4>
          <p className="text-sm text-slate-600">Vite · React · Tailwind CSS · VitePWA · Framer Motion</p>
        </div>
        <div className="p-4 bg-white/60 rounded-lg glass">
          <h4 className="font-medium">How to Use</h4>
          <p className="text-sm text-slate-600">I Don't Know</p>
        </div>
      </div>
    </motion.section>
  )
}
