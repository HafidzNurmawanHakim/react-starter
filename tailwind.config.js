/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";

module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			screens: {
				xs: "360px",
			},
		},
		fontFamily: {
			sans: ["Poppins", "sans-serif"],
			logo: ["Yellowtail", "cursive"],
			heroTitle: ["Preahvihear", "sans-serif"],
			desc: ["Montserrat", "sans-serif"],
		},
	},
	darkMode: "class",
	plugins: [
		nextui({
			themes: {
				light: {
					layout: {},
					colors: {
						light: "#f5f8fa",
					},
				},
				dark: {
					layout: {},
					colors: {
						primary: "#0A2647",
					},
				},
			},
		}),
	],
};
