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
          navy: '#183153',
          'navy-dark': '#0f1f35',
          'navy-light': '#25446e',
          teal: '#168C82',
          'teal-dark': '#116e66',
          'teal-light': '#21aba0',
        },
        civic: {
          bg: '#F7F9FC',
          card: '#FFFFFF',
          text: '#202B3C',
          muted: '#697586',
          border: '#E3E8EF',
          urgent: '#DC2626',
          high: '#EA580C',
          medium: '#D97706',
          low: '#4B5563',
          resolved: '#16A34A',
          inProgress: '#2563EB',
          underReview: '#0D9488',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)',
        'card': '0 4px 6px -1px rgba(24, 49, 83, 0.06), 0 2px 4px -1px rgba(24, 49, 83, 0.03)',
        'elevated': '0 10px 15px -3px rgba(24, 49, 83, 0.08), 0 4px 6px -2px rgba(24, 49, 83, 0.04)',
      }
    },
  },
  plugins: [],
}
