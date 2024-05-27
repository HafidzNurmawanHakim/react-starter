/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";

module.exports = {
   safeList: ["h-60", "h-80"],
   mode: "jit",
   content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
      extend: {
         screens: {
            xs: "360px",
            "3xl": "1870px",
         },
         fontSize: {
            xs: "10px",
            sm: "12px",
            md: "14px",
         },
         backgroundImage: {
            "blue-img":
               'url("https://images.unsplash.com/photo-1523633589114-88eaf4b4f1a8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&fit=crop&w=460&h=340&q=100")',
            "green-img":
               'url("https://images.unsplash.com/photo-1488330890490-c291ecf62571?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&fit=crop&w=460&h=340&q=100")',
            "purple-img":
               'url("https://images.unsplash.com/photo-1511800453077-8c0afa94175f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&fit=crop&w=460&h=340&q=100")',
            "red-img":
               'url("https://images.unsplash.com/photo-1519181245277-cffeb31da2e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&fit=crop&w=460&h=340&q=100")',
            "yellow-img":
               'url("https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&fit=crop&w=460&h=340&q=100")',
         },
         colors: {
            gray: {
               900: "#0f1011",
            },
         },
         minHeight: {
            14: "3.5rem",
         },
         minWidth: {
            14: "3.5rem",
         },
         transitionTimingFunction: {
            "in-out": "cubic-bezier(0.2, 1, 0.25, 1)",
         },
      },
      fontFamily: {
         sans: ['"Poppins"', "sans-serif"],
         logo: ["Yellowtail", "cursive"],
         heroTitle: ["Preahvihear", "sans-serif"],
         header: ["Montserrat", "sans-serif"],
         desc: ["Oswald", "sans-serif"],
      },
   },
   darkMode: "class",
   plugins: [
      nextui({
         themes: {
            dark: {
               extend: "dark", // <- inherit default values from dark theme
               colors: {
                  background: "#000000",
                  foreground: "#0f0f0f",
                  fontBase: "#919191",
                  fontHeader: "rgb(156 163 175)",
                  default: "#000000",
                  time: "#4b5563",
                  darkBase: "#2E2E30",
                  primary: {
                     50: "#FEFCE8",
                     100: "#FDEDD3",
                     200: "#FBDBA7",
                     300: "#F9C97C",
                     400: "#F7B750",
                     500: "#F5A524",
                     600: "#C4841D",
                     700: "#936316",
                     800: "#62420E",
                     900: "#312107",
                     DEFAULT: "#F5A524",
                     foreground: "#0f0f0f",
                  },
                  focus: "transparent",
               },
               layout: {
                  disabledOpacity: "0.3",
                  borderWidth: {
                     small: "1px",
                     medium: "2px",
                     large: "3px",
                  },
               },
            },
            light: {
               extend: "light", // <- inherit default values from dark theme
               colors: {
                  background: "#f5f8ff",
                  foreground: "#ffffff",
                  fontBase: "#919191",
                  fontHeader: "rgb(156 163 175)",
                  time: "#4b5563",
                  primary: {
                     50: "#E4D4F4",
                     100: "#E4D4F4",
                     200: "#C9A9E9",
                     300: "#AE7EDE",
                     400: "#9353D3",
                     500: "#7828C8",
                     600: "#6020A0",
                     700: "#481878",
                     800: "#301050",
                     900: "#180828",
                     DEFAULT: "#7828C8",
                     foreground: "#ffffff",
                  },
                  focus: "transparent",
               },
               layout: {
                  disabledOpacity: "0.3",
                  borderWidth: {
                     small: "1px",
                     medium: "2px",
                     large: "3px",
                  },
               },
            },
         },
      }),
   ],
};
