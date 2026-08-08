/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: 'rgb(var(--color-base) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        surface2: 'rgb(var(--color-surface2) / <alpha-value>)',
        border: 'rgb(var(--color-border) / <alpha-value>)',
        purple: {
          300: 'rgb(var(--color-purple-300) / <alpha-value>)',
          400: 'rgb(var(--color-purple-400) / <alpha-value>)',
          500: 'rgb(var(--color-purple-500) / <alpha-value>)',
          600: 'rgb(var(--color-purple-600) / <alpha-value>)',
          700: 'rgb(var(--color-purple-700) / <alpha-value>)',
          900: 'rgb(var(--color-purple-900) / <alpha-value>)',
        },
        lilac: '#E9D5FF',
        orange: { 500: '#F97316' },
        text: {
          primary: 'rgb(var(--color-text-primary) / <alpha-value>)',
          secondary: 'rgb(var(--color-text-secondary) / <alpha-value>)',
          muted: 'rgb(var(--color-text-muted) / <alpha-value>)',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      backgroundImage: {
        'grid-dots': 'radial-gradient(circle, rgb(var(--color-border)) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '28px 28px',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(168,85,247,0.4), 0 0 24px -4px rgba(168,85,247,0.55)',
        'glow-lg': '0 0 0 1px rgba(168,85,247,0.5), 0 0 45px -6px rgba(168,85,247,0.7)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(6deg)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(10px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'floatSlow 8s ease-in-out infinite',
        marquee: 'marquee 22s linear infinite',
      },
    },
  },
  plugins: [],
}
