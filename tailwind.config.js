module.exports = {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust based on your project structure
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
