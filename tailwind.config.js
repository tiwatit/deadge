/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '370px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily:{
      rubik: ['Rubik', 'sans-serif'],
    },
    extend:{
      backgroundImage:{
        'bgleaf': "url('/src/assets/topImageAbout.png')",
        'bgleaf2': "url('/src/assets/topImageAbout2.png')",
        'contactsbg': "url('/src/assets/contactsbg.jpg')",
        'bgproect': "url('/src/assets/bgproect.png')",
        'topImage1': "url('/src/PagesAndComponents/Pages/KonchaZaspa/Images/TopImage.png')",
        'topImage2': "url('/src/PagesAndComponents/Pages/Tarasivka/Images/TopImage.png')",
        'topImage3': "url('/src/PagesAndComponents/Pages/Gatne/Images/TopImage.png')",
        'topImage4': "url('/src/PagesAndComponents/Pages/Gatne2/Images/TopImage.png')",
        'topImage5': "url('/src/PagesAndComponents/Pages/Hotyanivka/Images/TopImage.png')",
      }
    }
  },
  plugins: [],
}