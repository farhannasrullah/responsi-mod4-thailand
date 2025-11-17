import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

// PWA manual register helper (since injectRegister:false)
import { registerSW } from 'virtual:pwa-register'
const updateSW = registerSW({
  onNeedRefresh() { console.log('SW: need refresh') },
  onOfflineReady() { console.log('SW: offline ready') }
})

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App registerSW={updateSW} />
  </React.StrictMode>
)
