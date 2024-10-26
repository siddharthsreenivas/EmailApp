/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'theme-bgColor': '#F4F5F9',
        'theme-pinkColor':'#E54065',
        'theme-borderColor':'#CFD2DC',
        'theme-textColor':'#636363',
        'theme-readBg':'#F2F2F2',
        'theme-filtrBtn':'#E1E4EA',
      }
    },
  },
  plugins: [],
}