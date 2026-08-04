/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Warm orange primary + purple secondary on a LIGHT surface system
        primary: {
          DEFAULT: '#f97316', // orange-500
          light: '#fb923c',
          dark: '#ea580c',
        },
        accent: {
          DEFAULT: '#a855f7', // purple-500
          light: '#c084fc',
          dark: '#9333ea',
        },
        // Light surfaces: warm-tinted whites + soft orange-grays (no plain white sections)
        surface: {
          DEFAULT: '#fffcfa', // page/base warm off-white
          50: '#fef7f0', // soft warm-tinted section background
          100: '#fef0e2', // subtle warm panels
          200: '#fde5cc', // borders/dividers (warm)
          300: '#fbd5ab', // stronger hover borders
        },
        // Text: deep warm ink for AA contrast on light surfaces
        ink: {
          DEFAULT: '#1c1007', // deep warm near-black primary text
          soft: '#4a3520', // muted warm secondary text
          muted: '#7a5f44', // muted (large text / captions only)
        },
      },
      fontFamily: {
        display: ['Sora', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        // soft, elevated cards for the light theme
        card: '0 1px 3px rgba(28,16,7,0.06), 0 8px 24px rgba(28,16,7,0.06)',
        'card-hover': '0 10px 34px rgba(249,115,22,0.20)',
        glow: '0 0 24px rgba(249,115,22,0.45)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'pulse-glow': 'pulseGlow 2.4s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 18px rgba(249,115,22,0.35)' },
          '50%': { boxShadow: '0 0 30px rgba(249,115,22,0.6)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
