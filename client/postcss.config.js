const path = require('path');

module.exports = {
	plugins: [
		require('postcss-preset-env'),
		require('tailwindcss')(path.join(__dirname, 'tailwind.config.js'))
	]
};
