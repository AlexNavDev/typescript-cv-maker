/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      body: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
    },
    extend: {
      backgroundImage: {
        hero: "url('/src/assets/img/b1.jpg')",
      },
    },
  },
  plugins: [],
};
