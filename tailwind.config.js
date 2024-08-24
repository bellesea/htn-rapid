/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'lightYellow': "#FFFAAA",
        'normalYellow': '#FED44F',
        'darkYellow': '#E3B429',
        'normalRed': '#CF1C43'
      },
      fontFamily: {
        gaegu: ['Gaegu', 'sans-serif'],
        darum: ['Darumadrop One', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
