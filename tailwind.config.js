/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,tx,tsx}",
    "./components/**/*.{js,tx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#101010',
        gray: '#aaaaaa',
        primary: {
          50: '#e7ebfa',
          100: '#d0d7f4',
          200: '#b8c4ef',
          300: '#a1b0e9',
          400: '#899ce4',
          500: '#7188de',
          600: '#5a74d9',
          700: '#4261d3',
          800: '#2b4dce',
          900: '#1339c8',
          transparent: '#1339c899',
        },
        secondary: {
          50: '#fdf1f4',
          100: '#fce2ea',
          200: '#fad4df',
          300: '#f9c5d4',
          400: '#f7b7ca',
          500: '#f5a9bf',
          600: '#f49ab4',
          700: '#f28ca9',
          800: '#f17d9f',
          900: '#ef6f94',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
