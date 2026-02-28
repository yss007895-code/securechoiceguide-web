import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0D1117',
          surface: '#161B22',
          border: '#30363D',
          hover: '#1C2128',
        },
        text: {
          primary: '#E6EDF3',
          secondary: '#8B949E',
          muted: '#484F58',
        },
        accent: '#58A6FF',
        green: '#3FB950',
        red: '#F85149',
        orange: '#D29922',
      },
      fontFamily: {
        display: ['Sora', 'Inter', 'sans-serif'],
        body: ['"Merriweather Sans"', 'Helvetica', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
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
