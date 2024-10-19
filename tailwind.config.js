/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://infrahive-ai-search.vercel.app/bg-search.png')",
        
      }
    },
  },
  plugins: [],
}

