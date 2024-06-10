/** @type {import('tailwindcss').Config} */
import { amber } from 'tailwindcss/colors'

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        amber
      }
    }
  },
  plugins: []
}
