/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      fontFamily:{
        sans: ["Poppins", "sans-serif"],
        // serif: ["IBM Plex Mono", "serif"],
        serif: ["Inter", "serif"],
      },
      colors:{
        blue:{
          100: "#CAD7FC",
          200: "#9AB2F9",
          300: "#6A8DF6",
          400: "#3968F3",
          500: "#0E46EC",
          600: "#0B38BD",
          700: "#08298C",
          800: "#051B5C",
          900: "#030D2B",
        },
        green:{
          100: "#CFFCE4",
          200: "#A3F5C9",
          300: "#79ECAE",
          400: "#4FE393",
          500: "#23DC78",
          600: "#23DC78",
          700: "#14B85F",
          800: "#089147",
          900: "#066633",
        }
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

