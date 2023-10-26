/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        C_Green: "#03A696",
        C_GreenSlit: "#04c8b4",
        C_DullWhite: "#fcfcfc",
        C_White: "#FDFDFD",
        C_TextWhite: "#FDFDFE",
        C_TextWhiteDull: "#F2F6F7",
        C_TextBlack: "#52585D",
        C_UserDullBlack: "#AFBCC680",
      },
      animation :{
        
      },
      theme: {
      }
    },
  },
  plugins: [],
}

