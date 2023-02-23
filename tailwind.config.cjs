/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        black: "var(--black)",
        feat: "var(--feat)",
        overlay: "var(--overlay)",
        subtle: "var(--subtitle)",
      },
      screens: {
        'mxl': { max: '1280px' },
        'mlg': { max: '1024px' },
        'mmd': { max: '768px' },
      },
    },
  },
  plugins: []
};