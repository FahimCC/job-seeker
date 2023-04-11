/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#7E90FE',
				secondary: '#9873FF',
				gray: '#757575',
			},
			fontFamily: {
				manrope: ['Manrope', 'sans-serif'],
			},
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				md: '2rem',
				lg: '3rem',
				xl: '5rem',
				'2xl': '6rem',
			},
		},
	},
	plugins: [],
};
