/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        C_Blue: '#3651DA',
        C_Black: '#000',
        C_DullBlack: '#60718B',
        C_GreyBlue: '#36404F',
        C_DullWhite: '#f2f2f2',
        C_White: '#FDFDFD',
        C_PureWhite: '#FEFEFE',
        C_WhiteGray: '#D5DAE2',
        C_TextWhite: '#FDFDFE',
        C_TextWhiteDull: '#747474',
        C_GreyShades: '#FAFAFA',
        C_UserDullBlack: '#AFBCC680',
      },
      animation: {},
      theme: {},
      fontFamily: {
        poppin: ['Poppins', 'sans'],
      },
    },
  },
  plugins: [],
};
