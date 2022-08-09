/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				twitter: '#00ADED',
				cuteBlue: '#AC7088',
				hoverBlue: '#8c586d',
			},
		},
	},
	plugins: [],
};
