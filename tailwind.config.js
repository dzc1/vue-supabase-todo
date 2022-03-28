const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./index.html",
    ,
    "./node_modules/flowbite/**/*.js",
    "./src/**/*.{vue,js,ts,jsx,tsx,}",
  ],
  theme: {
    fontFamily: {
      title: ["Merriweather", "serif"],
      body: ["Mullish", "sans-serif"],
    },
    colors: {
      manelColor: "#10103C",
      blue: colors.blue,
      red: colors.red,
      indigo: colors.indigo,
      purple: colors.purple,
      white: colors.white,
      green: colors.green,
      slate: colors.slate,
      teal: colors.teal,
      sky: colors.sky,
      gray: colors.gray,
      rose: colors.rose,
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
