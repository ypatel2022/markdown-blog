module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        logo: {
          DEFAULT: '#8CCDFF',
        },
        teal: {
          DEFAULT: '#38B2AC',
          50: '#DCF4F3',
          100: '#C8EEEC',
          200: '#A1E2DE',
          300: '#7BD5D1',
          400: '#54C9C3',
          500: '#38B2AC',
          600: '#2C8B87',
          700: '#206461',
          800: '#133E3C',
          900: '#071716',
        },
      },
      fontFamily: {
        logo: ['Inter', 'sans-serif'],
        body: ['Lato', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
