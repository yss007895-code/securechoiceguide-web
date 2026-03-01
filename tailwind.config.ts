import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f7fa',
          100: '#d4eaf2',
          200: '#a8d5e5',
          300: '#7cbfd8',
          400: '#50aacb',
          500: '#0084B4',
          600: '#006d94',
          700: '#004B6D',
          800: '#003a55',
          900: '#002a3e',
          950: '#001a28',
        },
        trust: {
          green: '#0084B4',
          'green-light': '#e6f4f9',
          'green-dark': '#004B6D',
        },
        surface: {
          white: '#ffffff',
          light: '#f8fafb',
          muted: '#f1f5f7',
          border: '#dde4e8',
          'border-dark': '#c4cdd4',
        },
        accent: '#009ED9',
      },
      fontFamily: {
        display: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-in-bottom': 'slideInBottom 0.3s ease-out',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideUp: { '0%': { opacity: '0', transform: 'translateY(12px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        slideInBottom: { '0%': { transform: 'translateY(100%)' }, '100%': { transform: 'translateY(0)' } },
      },
    },
  },
  plugins: [],
};
export default config;
