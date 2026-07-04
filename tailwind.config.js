/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        brand: {
          violet: {
            DEFAULT: '#7C3AED',
            light: '#A78BFA',
            glow: 'rgba(124, 58, 237, 0.25)',
          },
          cyan: {
            DEFAULT: '#22D3EE',
            glow: 'rgba(34, 211, 238, 0.2)',
          },
          bg: '#0A0A0F',
          surface: '#12121C',
          'surface-2': '#1A1A28',
          border: 'rgba(255, 255, 255, 0.07)',
          'border-strong': 'rgba(255, 255, 255, 0.12)',
          'text-primary': '#F1F0FF',
          'text-secondary': '#8B8AA8',
        },
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'marquee-up': {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(-100%)' },
        },
        'marquee-down': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0%)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: 0.15, transform: 'translateX(-50%) scale(1)' },
          '50%': { opacity: 0.35, transform: 'translateX(-50%) scale(1.15)' },
        },
        'gradient-x': {
          '0%, 100%': { 'background-size': '200% 200%', 'background-position': 'left center' },
          '50%': { 'background-size': '200% 200%', 'background-position': 'right center' },
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'marquee-up': 'marquee-up 60s linear infinite',
        'marquee-down': 'marquee-down 60s linear infinite',
        'pulse-glow': 'pulse-glow 8s ease-in-out infinite',
        'gradient-x': 'gradient-x 15s ease infinite',
      }
    }
  },
  plugins: [],
}
