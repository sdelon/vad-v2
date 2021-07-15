const colors = require('tailwindcss/colors')

module.exports = {
	mode: "jit",
	purge: [
		"./src/**/*.{html,js,svelte,ts}",
	],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			gray: colors.warmGray,
			teal: colors.teal,
			purple: colors.purple,
			'bleu-dark': '#0E777E',
			'bleu-primaire': '#09C7D4',
			'bleu-light': '#9FEAEF',
			'gray-card-bg': '#EFEFEF',
			'gray-dark': '#1C2828',
			'gray-bg': '#F7F7F8',
			'yellow': '#DFAF2C',
			'yellow-light': '#FAF1D8'
		},
		extend: {
			fontFamily: {
				sans : ['Inter', 'system-ui', '-apple-system', 'sans-serif']
			}
		}
	},
	plugins: [
		require('@tailwindcss/typography')
	],
};
