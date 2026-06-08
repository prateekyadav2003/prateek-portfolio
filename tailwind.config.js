/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        bg2: 'var(--bg2)',
        bg3: 'var(--bg3)',
        glass: 'var(--glass)',
        glass2: 'var(--glass2)',
        borderCol: 'var(--border)',
        borderCol2: 'var(--border2)',
        textCol: 'var(--text)',
        textCol2: 'var(--text2)',
        textCol3: 'var(--text3)',
        accent: 'var(--accent)',
        accent2: 'var(--accent2)',
        accent3: 'var(--accent3)',
        inputBg: 'var(--input-bg)',
        inputBorder: 'var(--input-border)',
        footerBg: 'var(--footer-bg)',
      },
      backgroundImage: {
        'grad': 'var(--grad)',
      },
      boxShadow: {
        'shadow': 'var(--shadow)',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      animation: {
        'blink': 'blink 1.5s infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '.25' },
        }
      }
    },
  },
  plugins: [],
}
