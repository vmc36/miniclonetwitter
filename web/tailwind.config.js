const brandColors = {
  'richBlack':'#15202b',
  'onix':'#333639',
  'silver':'#71767b',
  'platinumm': '#E7E9EA',
  'birdBlue':'#1d9bf0',
}

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
       ...brandColors,
       
       backgroundColor: brandColors.richBlack,
       textColor: brandColors.platinumm
      }
    },
  },
  plugins: [],
}