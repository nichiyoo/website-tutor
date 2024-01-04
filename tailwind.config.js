/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

module.exports = {
	content: ['./**/*.{html,js}'],
	theme: {
		extend: {
			fontFamily: {
				jakarta: ['Plus Jakarta Sans', ...defaultTheme.fontFamily.sans],
				nunito: ['Nunito', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
};
