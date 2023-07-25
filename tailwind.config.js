/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "hsl(25, 100%, 94%)",
          200: "hsl(26, 100%, 55%)",
          300: "hsl(26, 100%, 65%)",
        },
        sec: {
          100: "hsl(223, 64%, 98%)",
          200: "hsl(220, 14%, 75%)",
          300: "hsl(219, 9%, 45%)",
          400: "hsl(220, 13%, 13%)",
        },
      },
    },
  },
  plugins: [],
};
