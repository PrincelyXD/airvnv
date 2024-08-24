/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "380px",
      sm: "480px",
      md: "804px",
      lg: "1040px",
      xl: "1440px",
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      openSans: ["Open Sans", "sans-serif"],
      rubik: ["Rubik", "sans-serif"],
    },
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "2.353rem",
      "4xl": "2.441rem",
      "5xl": "3.40rem",
      "6xl": "3.82rem",
    },

    extend: {
      colors: {
        "deep-saffron": "#FF8C38",
        "chinese-black": "#161616",
        "body-cream": "#FFF7ED",
        "link-bg-cream": "#FFEAD0",
        "peach-orange": "#FFCC8D",
        "bangladesh-green": "#115E59",
        "terra-cotta": "#E17654",
        
      },
      backgroundImage: {
        "home-background": "url('/src/assets/images/image-1bg.png')",
        "about-img-bg": "url('/src/assets/images/image-2bg.png')",
        "test-img": "url('/src/assets/images/test-img.png')",
      },
    },
  },
  plugins: [],
};
