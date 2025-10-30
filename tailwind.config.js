/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        display: ['Space Grotesk', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        background: '#020817',
        foreground: '#E1E7EF',
        muted: '#1F2937',
        'muted-foreground': '#9CA3AF',
        border: '#1F2937',
        ring: '#1F2937',
        primary: '#00A3FF',
        secondary: '#FF1E1E',
        accent: '#7F00FF',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #00A3FF 0%, #0057FF 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #FF1E1E 0%, #FF9C1E 100%)',
        'gradient-accent': 'linear-gradient(135deg, #7F00FF 0%, #E100FF 100%)',
        'gradient-background': 'radial-gradient(circle at top center, #020817 0%, #010509 100%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        'fade-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'slide-in-right': {
          '0%': {
            transform: 'translateX(100%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
      },
      backgroundImage: {
      'gradient-primary': 'var(--gradient-primary)',
      'gradient-secondary': 'var(--gradient-secondary)',
      'gradient-accent': 'var(--gradient-accent)',
      'gradient-background': 'var(--gradient-background)',
      'gradient-text-primary': 'linear-gradient(135deg, #00A3FF 0%, #0057FF 100%)', // Adaugă asta
      'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
    },
      animation: {
        'fade-up': 'fade-up 0.5s ease-out',
        'fade-down': 'fade-down 0.5s ease-out',
        'slide-in-right': 'slide-in-right 0.5s ease-out',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-animate'),
  ],
}