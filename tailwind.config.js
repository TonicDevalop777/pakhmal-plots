module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
		"node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		fontFamily: {
			primary: "Orbitron",
			secondary: "Rajdhani",
			tertiary: "Aldrich",
		},
		container: {
			padding: {
				DEFAULT: "15px",
			},
		},
		screens: {
			// xs: "320px",
			sm: "320px",
			md: "768px",
			lg: "960px",
			xl: "1200px",
		},
		extend: {
			colors: {
				primary: "#0a0a0a",
				accent: "#B809C3",
			},
			backgroundImage: {
				hero: "url('./assets/agro.jpg')",
				about_1: "url('./assets/about_1.jpg')",
				about_img: "url('./assets/image.jpg')",
				tuproq: "url('./assets/tuproq.png')",
			},
		},
	},
	plugins: [require("flowbite/plugin")],
};
