/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        myPink: "#FD2F70",
        gray1: "#333333",
        gray2: "#4F4F4F",
        gray6: "#F2F2F2",
        gray3: "#7D7D7D",
        grayDark: "#707070",
        grayLight: "#F5F5F5",
      },
      fontFamily: {
        sans: ["iransans"],
      },
    },
  },
  plugins: [],
};
