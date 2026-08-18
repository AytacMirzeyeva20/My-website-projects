/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        royal: {
          50: '#f6f3fb',
          100: '#ece4f5',
          200: '#d7c5ea',
          300: '#bb9adb',
          400: '#9c6cc9',
          500: '#7f47b3',
          600: '#663497',
          700: '#4f2777',
          800: '#3a1c59',
          900: '#28133e',
          950: '#170a24',
        },
        gold: {
          50: '#fdf9ec',
          100: '#faf0cb',
          200: '#f3dd8f',
          300: '#eac457',
          400: '#e0ab31',
          500: '#c98f20',
          600: '#a86e19',
          700: '#855119',
          800: '#6c4119',
          900: '#5c3719',
        },
        cream: '#FBF7EE',
        lavender: '#EDE6F7',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"Manrope"', 'sans-serif'],
      },
      boxShadow: {
        premium: '0 10px 40px -10px rgba(79, 39, 119, 0.25)',
        gold: '0 8px 24px -6px rgba(201, 143, 32, 0.45)',
      },
      backgroundImage: {
        'royal-gradient': 'linear-gradient(135deg,#28133e 0%,#4f2777 45%,#7f47b3 100%)',
        'gold-line': 'linear-gradient(90deg,transparent,#eac457,transparent)',
      },
    },
  },
  plugins: [],
}
