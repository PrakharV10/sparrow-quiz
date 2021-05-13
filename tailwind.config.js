module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          700: "#0173F7"
        },
        black:{
          900: "#16191E",
          800: "#1D2025",
          700: "#22252A"
        },
        white: {
          100 : "#FFFFFF",
          200 : "#F3F5F7"
        }
      },
      screens: {
        'xs' : "426px"
      },
      borderWidth: {
        '3' : "3px"
      },
      height: {
        'content' : 'max-content'
      }
    },
    fontFamily: {
      logo : ['Podkova', 'serif'],
      body : ['Poppins', 'sans-serif']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
