import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        topnav: "#252B42",
        primery: "#23A6F0",
        logocol: "#252B42",
        secnavitemcol: "#737373",
        snbtn: "#2DC071",
        adsection: "#23856D",
        footbar: "#FAFAFA",


      },
    },
  },
  plugins: [],
};
export default config;
