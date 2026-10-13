/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          turquoise: '#00ACC1',
          dark: '#00838F',
          darker: '#006064',
          light: '#E0F7FA',
        },
        surface: {
          light: '#F4F7F8',
          white: '#FFFFFF',
        },
        content: {
          main: '#0B2B33',
          muted: '#4A5F66',
        },
        whatsapp: '#25D366',
        rating: '#F4B400',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        'site': '1152px',
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(11, 43, 51, 0.06), 0 2px 6px -1px rgba(11, 43, 51, 0.04)',
        'soft-lg': '0 10px 30px -4px rgba(11, 43, 51, 0.1), 0 4px 10px -2px rgba(11, 43, 51, 0.05)',
        'cta': '0 10px 25px -5px rgba(37, 211, 102, 0.4)',
        'primary-cta': '0 10px 25px -5px rgba(0, 131, 143, 0.35)',
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
        '3xl': '24px',
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 0 0 0 rgba(37, 211, 102, 0.5)' },
          '50%': { transform: 'scale(1.05)', boxShadow: '0 0 0 14px rgba(37, 211, 102, 0)' },
        },
      },
    },
  },
  plugins: [],
}
