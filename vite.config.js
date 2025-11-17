import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'prompt',
      injectRegister: false,
      pwaAssets: { disabled: false, config: true },
      manifest: {
        name: 'responsi-modul4-farhan',
        short_name: 'responsi-modul4-farhan',
        description: 'responsi-modul4-farhan',
        theme_color: '#ffffff'
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
        cleanupOutdatedCaches: true,
        clientsClaim: true
      },
      devOptions: {
        enabled: true,
        navigateFallback: 'index.html',
        suppressWarnings: true,
        type: 'module'
      }
    })
  ],
  server: {
    proxy: {
      // during dev, calls to /tat/... will be forwarded to TAT API to avoid CORS
      '/tat': {
        target: 'https://tatdataapi.io',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/tat/, '')
      }
    }
  }
})
