/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#151c39",
          "200": "#111729",
          "300": "rgba(255, 255, 255, 0.2)",
        },
        darkslateblue: "#1c2a4e",
        darkslategray: {
          "100": "#2c3a58",
          "200": "#2c3a57",
          "300": "#1b2c4f",
        },
        cornflowerblue: {
          "100": "#409bee",
          "200": "rgba(64, 155, 238, 0.5)",
        },
        white: "#fff",
        lightgray: "#ccc",
        lightsteelblue: "#bdd8f0",
        black: "#000",
        whitesmoke: {
          "100": "#f5f5f5",
          "200": "#f1f1f1",
        },
        palegoldenrod: {
          "100": "#e8f8bb",
          "200": "#cbf8bb",
        },
        paleturquoise: {
          "100": "#bbf8f1",
          "200": "#abefeb",
        },
        plum: "#e8bbf8",
        gainsboro: {
          "100": "#dcdcdc",
          "200": "#d9d9d9",
        },
        lightblue: "#c2e2f4",
        lightcyan: "#c9f4ec",
        honeydew: "#e5f5e6",
        mistyrose: "#f5e5e5",
        dimgray: "#686868",
        red: "#e30000",
      },
      spacing: {},
      fontFamily: {
        manrope: "Manrope",
      },
      borderRadius: {
        "21xl": "40px",
        "10xl": "29px",
        xl: "20px",
        "12xs-5": "0.5px",
        sm: "14px",
        "11xl": "30px",
        "3xs": "10px",
        mini: "15px",
      },
    },
    fontSize: {
      xs: "12px",
      base: "16px",
      sm: "14px",
      lg: "18px",
      "5xl": "24px",
      lgi: "19px",
      xl: "20px",
      "3xs-4": "9.4px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
