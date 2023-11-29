import { defineConfig, presetAttributify, presetIcons, presetUno, presetWebFonts } from 'unocss'

export default defineConfig({
  shortcuts: {
    'border-base': 'border-gray-300 dark:border-gray-600',
    'bg-active': ':bg-gray/10',
  },
  presets: [
    presetUno(),
    presetIcons(),
    presetAttributify(),
    presetWebFonts({
      provider: 'none',
      fonts: {
        sans: 'Salesforce Sans, system-ui, sans-serif',
      },
    }),
  ],
})
