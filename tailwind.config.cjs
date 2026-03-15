/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        'mandy-red': '#8b0000',
        'mandy-red-bright': '#c41e3a',
        'mandy-green': '#2d5016',
        'mandy-yellow': '#d4a017',
        'mandy-blue': '#1a4d6e',
        'mandy-purple': '#3b3154',
        'mandy-white': '#f5f5f0',
        'mandy-black': '#0d0d0c',
      },
    },
  },
  plugins: [],
}