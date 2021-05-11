module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          900: "#1E3C72",
          800: "#2A5298"
        },
        white: {
          100 : "#FFFFFF",
          200 : "#F3F5F7"
        }
      },
      screens: {
        'xs' : "426px"
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
