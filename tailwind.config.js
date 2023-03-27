/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryText: '#103ce7',
        primaryBg: '#1a1e2d',
      },
    },
  },
  plugins: [],
};
