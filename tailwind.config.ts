import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#ffe689',
          100: '#ffd97c',
          200: '#ffc063',
          300: '#ffa649',
          400: '#ff8d30',
          500: '#F97316',
          600: '#df5900',
          700: '#c64000',
          800: '#ac2600',
          900: '#930d00',
        },
        secondary: {
          50: '#aef5ff',
          100: '#a1e8ff',
          200: '#88cfff',
          300: '#6eb5ff',
          400: '#559cff',
          500: '#3B82F6',
          600: '#2168dc',
          700: '#084fc3',
          800: '#0035a9',
          900: '#001c90',
        },
        accent: {
          50: '#ffbbff',
          100: '#ffaeff',
          200: '#ff95e6',
          300: '#ff7bcc',
          400: '#ff62b3',
          500: '#EC4899',
          600: '#d22e7f',
          700: '#b91566',
          800: '#9f004c',
          900: '#860033',
        },
      },
    },
  },
  plugins: [],
};

export default config;
