/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'media',
  theme: {
    extend: {
      backgroundImage: {
        authBackground: "url('/background/auth.webp')",
        bg_image:
          "linear-gradient(rgba(0, 0, 0, 0.01), rgba(0, 0, 0, 0.01)),url(../public/cover.webp)",
        card1: "url(../public/card1.webp)",
        card2: "url(../public/card2.webp)",
      },
      flex: {
        '2': '2 2 0%',
        '3': '3 3 0%'
      },

      colors: {
          buttonPrimary: "#262161",
          bone:'#F1D1D0',
          btwo:'#0C63B4',
          bthree:'#F0ECE3',
          lessuse:'#F0ECE3',
          bfour:'#0C63B4',
          baseblu:"#262161",
          baseblue:'#262161',
          primaryColor:'#0B7D5D',
          baseliteblue:"#0C63B4",
          footer:"#9CD3F9",
          inputplaceholder:"rgba(0, 0, 0, 0.40)",
          submitbutton:'#F0AD4E',
          noticebackground:"#effaff",
          shadowtop:"",
          transparentBlack:" rgba( 0 , 0 , 0 , 0.502 )",
          otpHeader:"#D5ECC2",
          highlite:"#D5ECC2",
          resendOTP:"#F0AD4E",
          buttonHover:"rgba(213, 236, 194, 1)",
          addnew:'#0C63B4',
          edit:"rgba(133, 32, 212, 1)",
          active:'#226331',
          tablehead:'rgba(240, 236, 227, 1)',
          pestcolor:'#98DDCA',
          userstableheader:'#03A9F4',
          
      },
      boxShadow: {
        noticeboard: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
        header: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        footer: "box-shadow: 0px -4px 4px 0px rgba(0, 0, 0, 0.25",
        mobileNotice: "0px 0px 1.253px 0px rgba(0, 0, 0, 0.25)",
      },
      screens: {
        xs: "330px", //small phone
        sm: "580px", //large phone
        md: "768px", //tab, ipad
        lg: "1024px", //small laptop
        xl: "1280px", //large laptop
        "2xl": "1620px", //desktop
      },
    },
  },
  plugins: [],

  safelist: ["bg-url('/background/auth.webp", "bg-authBackground"],
};
