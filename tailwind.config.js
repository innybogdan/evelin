/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'menu-green': '#5E8885',
        'menu-button': '#615955',
        'item-hover': '#6E9391'
      },
      backgroundImage: {
        'welcome_back': "url('../assets/witamy-tlo.jpg')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      }
    },
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Calibri'],
      'mono': ['ui-monospace', 'Ebrima'],
      'sysfont': ['Gloock'],
      'body': ['Montserrat'],
    },
    container: {
      center: true,
      padding: {
        // 'DEFAULT': '1rem',
        // 'sm': '1.5rem',
        // 'lg': '2rem',
        // 'xl': '2.5rem'
      }
    },
  },
  plugins: [],
}



