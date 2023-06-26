/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "hsl(0, 0%, 100%)",
      lightgray: "hsl(212, 45%, 89%)",
      grayishblue: "hsl(220, 15%, 55%)",
      darkblue: "hsl(218, 44%, 22%)",
    },
  },
  plugins: [],
};
