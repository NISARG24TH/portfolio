/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['Unbounded', 'sans-serif'],
        body: ['Sora', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        light: {
          bg: '#ffffff',
          text: '#0a0a0a',
          accent: '#111111',
          card: '#e5e5e5',
        },
        dark: {
          bg: '#0a0a0a',
          text: '#f5f5f5',
          accent: '#ffffff',
          card: '#1a1a1a',
        },
      },
    },
  },
  plugins: [],
}
