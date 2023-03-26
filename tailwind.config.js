/* @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lavenderblush: { "100": "#fff4f6", "200": "#fff0f2" },
        gray: {
          "100": "#232323",
          "200": "#1f1f1f",
          "300": "rgba(255, 255, 255, 0.1)",
          "400": "rgba(0, 0, 0, 0.85)",
        },
        crimson: { "100": "#dd2c2c", "200": "rgba(217, 22, 22, 0.75)" },
        gainsboro: {
          "100": "#e8e8e8",
          "200": "#d9d9d9",
          "300": "rgba(217, 217, 217, 0)",
        },
        red: {
          "100": "#d70908",
          "200": "rgba(215, 9, 8, 0.5)",
          "300": "rgba(215, 9, 8, 0.9)",
          "400": "rgba(215, 9, 8, 0.85)",
        },
        white: "#fff",
        black: "#000",
        lightpink: "rgba(244, 175, 177, 0.5)",
        pink: {
          "100": "#fcbdc1",
          "200": "#fbbdc0",
          "300": "rgba(252, 189, 193, 0.75)",
        },
        mistyrose: {
          "100": "#fbdcde",
          "200": "#ffd6db",
          "300": "#f9d0d2",
          "400": "rgba(249, 208, 210, 0.5)",
          "500": "rgba(249, 208, 210, 0.65)",
          "600": "rgba(251, 220, 222, 0.4)",
        },
      },
      fontFamily: {
        montserrat: "Montserrat",
        cabin: "Cabin",
        brawler: "Brawler",
        inter: "Inter",
      },
      borderRadius: {
        mini: "15px",
        lg: "18px",
        xl: "20px",
        "4xl": "23px",
        "4xl-5": "23.5px",
        sm: "14px",
        "6xl": "25px",
        "3041xl": "3060px",
        "11xl": "30px",
        "16xl": "35px",
      },
    },
    fontSize: {
      "9xl": "28px",
      "5xl": "24px",
      "33xl": "52px",
      "59xl": "78px",
      "13xl": "32px",
      xl: "20px",
      "65xl": "84px",
      "45xl": "64px",
      "51xl": "70px",
      "5xs": "8px",
      xs: "12px",
      base: "16px",
      "69xl": "88px",
      sm: "14px",
      "17xl": "36px",
      "6xl": "25px",
      mid: "17px",
      "31xl": "50px",
      "21xl": "40px",
    },
  },
  corePlugins: { preflight: false },
};
