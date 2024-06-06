/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: '#1C1E2E',
          dark: '#2C3047',
          light: '#9FA5BA',
          lighter: '#6F99DD',
        },
        gray: {
          DEFAULT: '#757f9e',
          dark: '#595b6f',
          light: '#acb0c2',
        },
      },
    },
  },
  plugins: [],
};
