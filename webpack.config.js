var path = require('path');

module.exports = {
	entry: './src/app.js',
	output: {
		path: path.join(__dirname, 'public/scripts'),
		filename: 'bundle.js'
	}
};
