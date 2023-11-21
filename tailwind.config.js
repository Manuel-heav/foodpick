/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#161616",
        secondaryColor: "#313131",
        mainColor: "#db20e5",
      },
    },
  },
  plugins: [],
};
