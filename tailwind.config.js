/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#EC000A",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        archivo: ["Archivo", "sans-serif"],
      },
      backgroundImage: {
        radial: "url('/radial-bg.png')",
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
