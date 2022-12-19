/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        black_bg: "#272727",
        green: "#14A76C",
        coral: "#FF652F",
        light_yellow: "#FFE400",
        gray_bg: "#747474",
       "opaque-black" : "rgba(0,0,0,0.35)"
      },
      backgroundImage: (theme) => ({
        "gradient-rainblue": 
          "linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)",
             "gradient-BLUE": 
        "linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 69.36%, #FFBD0C 117.73%)",
      }),
      fontFamily : {
          body: ["Montserrat", "san-serif"],
          head: ["Roboto", "san-serif"],
          font1: ["Darker Grotesque", "san-serif"],
      },
      content: {
        brush: "url('./assets/brush.png')",
        person1: "url('/assets/person-1.png')",
        person2: "url('./assets/person-2.png')",
        person3: "url('./assets/person-3.png')"
      },
      screens: {
        xs: "480px",
        sm: "768px",
        md: "1060px"
      }
    },

  },
  plugins: [],
}
