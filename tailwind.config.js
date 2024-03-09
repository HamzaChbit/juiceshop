/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      

      backgroundImage: {
        'back':"url('/image/Background.webp')",
        
      },
      colors:{
        hero : '#f9f9f9',
        green : '#3d5a23',
        navbar:'#d6e9c6',
        bgfooter : '#e2e2f2'
      }
    },
  },
  plugins: [],
}
