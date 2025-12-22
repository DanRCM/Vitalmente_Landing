/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vital: {
          green: "#3E8E4D", // El verde de tu logo
          dark: "#2d6a38",  // Verde oscuro para hover
          cream: "#F9F6E8", // El fondo crema
          text: "#1F2937",  // Gris oscuro
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}