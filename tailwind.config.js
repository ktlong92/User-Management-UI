const { join } = require("path");

module.exports = {
	content: [
		join(__dirname, "./pages/**/*.{js,ts,jsx,tsx}"),
		join(__dirname, "./src/**/*.{js,ts,jsx,tsx}"),
	],
	theme: {
		extend: {
			colors: {
				"light-white": "rgba(255,255,255,0.18)",
			},
		},
	},
	plugins: [],
};
