/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        black_bg: "#050505",
        green: "#3d685f",
        coral: "#FF652F",
        light_yellow: "#FFE400",
        gray_bg: "#727272",
        "opaque-black": "rgba(0,0,0,0.35)",
      },
      fontFamily: {
        body: ["Montserrat", "san-serif"],
        head: ["Roboto", "san-serif"],
        font1: ["Darker Grotesque", "san-serif"],
      },
    },
  },
  plugins: [],
};
