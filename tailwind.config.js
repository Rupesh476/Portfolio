/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enables class-based dark mode
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Custom theme colors
        lightHover: '#fcf4ff',
        darkHover: '#2a004a',
        darkTheme: '#11001F',

        // Standardized backgrounds and text
        background: {
          light: '#ffffff',
          dark: '#0e0e0e',
        },
        text: {
          light: '#1f1f1f',
          dark: '#f1f1f1',
        },

        // Additional utility colors
        primary: '#6366f1', // Tailwind indigo-500
        accent: '#ec4899',  // Tailwind pink-500
      },

      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        ovo: ['Ovo', 'serif'],
      },

      boxShadow: {
        black: '4px 4px 0 #000',
        white: '4px 4px 0 #fff',
        'md-soft': '0 4px 10px rgba(0, 0, 0, 0.08)',
      },

      gridTemplateColumns: {
        auto: 'repeat(auto-fit, minmax(200px, 1fr))',
      },

      transitionProperty: {
        height: 'height',
      },

      screens: {
        xs: '480px',
      },
    },
  },
  plugins: [],
}
