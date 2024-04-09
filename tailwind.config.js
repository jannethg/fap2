/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#0D5C9B',
        'primary-dark-blue': '#064D82',
        'special-dark': '#04365B',
        'primary-indigo': '#1E293B',
        'primary-slate': '#DFE8EF',
        'secondary-color': '#F3F7FA',
        'green':'#6BA544'
      }
    },
  },
  plugins: [],
}

