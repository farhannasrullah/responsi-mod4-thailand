import React from 'react'
import { motion } from 'framer-motion'

export default function Profile() {
  // Ganti nilai di bawah sesuai data Anda (statik)
  const nama = "Farhan Nasrullah"
  const nim = "21120123120039"
  const kelompok = "Kelompok 5"

  return (
    <motion.section initial={{opacity:0, y:8}} animate={{opacity:1, y:0}} transition={{duration:0.45}} className="glass rounded-2xl p-8 shadow-xl max-w-2xl mx-auto">
      <div className="flex items-center gap-5">
        <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-indigo-500 to-sky-500 flex items-center justify-center text-white text-xl font-semibold shadow-lg">
          {nama.split(' ').slice(0,2).map(n => n[0]).join('')}
        </div>
        <div>
          <h3 className="text-xl font-bold">{nama}</h3>
          <p className="text-sm text-slate-600">Teknik Komputer 2023</p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 bg-white/60 rounded-md glass">
          <div className="text-xs text-slate-500">NIM</div>
          <div className="font-medium">{nim}</div>
        </div>
        <div className="p-4 bg-white/60 rounded-md glass">
          <div className="text-xs text-slate-500">Kelompok</div>
          <div className="font-medium">{kelompok}</div>
        </div>
        <div className="p-4 bg-white/60 rounded-md glass">
          <div className="text-xs text-slate-500">Status</div>
          <div className="font-medium">Data Statis</div>
        </div>
      </div>

      <p className="mt-4 text-sm text-slate-600">Catatan:  <code className="bg-slate-100 px-2 py-0.5 rounded">ฟาฮานรักชมพู่สุดหัวใจตลอดไป</code></p>
    </motion.section>
  )
}
