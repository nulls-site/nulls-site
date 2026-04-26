/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        // Semantic theme-aware colors backed by CSS custom properties
        'theme-bg':           'var(--theme-bg)',
        'theme-surface':      'var(--theme-surface)',
        'theme-border':       'var(--theme-border)',
        'theme-accent':       'var(--theme-accent)',
        'theme-accent-bright':'var(--theme-accent-bright)',
        'theme-text':         'var(--theme-text)',
        'theme-highlight':    'var(--theme-highlight)',
      },
    },
  },
  plugins: [],
}
