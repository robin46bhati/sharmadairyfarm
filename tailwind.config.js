/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FFF9EE',
        milk: '#FFFDF8',
        barn: '#9B2C2C',
        grass: {
          50: '#F1F8EC',
          100: '#DDEFCF',
          500: '#4C9A2A',
          600: '#3D7F21',
          700: '#2F6319',
          900: '#1B3A10',
        },
        sun: '#F6B93B',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"Nunito"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
