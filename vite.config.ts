/// <reference types="vitest/config" />
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// Served from https://<user>.github.io/creami-app/ on GitHub Pages
const base = '/creami-app/'

export default defineConfig({
  base,
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'icons/apple-touch-icon.png'],
      manifest: {
        name: 'Creami Recipes',
        short_name: 'Creami',
        description: 'Ice cream, gelato, sorbet and more for every Ninja CREAMi.',
        theme_color: '#FFF8F0',
        background_color: '#FFF8F0',
        display: 'standalone',
        orientation: 'portrait',
        start_url: base,
        scope: base,
        icons: [
          { src: 'icons/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'icons/icon-512.png', sizes: '512x512', type: 'image/png' },
          { src: 'icons/icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
      },
      workbox: {
        // Latin fonts are precached for offline use; other subsets load on demand.
        globPatterns: ['**/*.{js,css,html,svg,png,jpg,jpeg,webp}', '**/*-latin-wght-normal-*.woff2'],
      },
    }),
  ],
  test: {
    environment: 'node',
  },
})
