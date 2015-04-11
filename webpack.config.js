var path = require('path');

module.exports = {
	entry: './src/app.jsx',
	output: {
		path: path.join(__dirname, 'public/scripts'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{ test: /\.jsx/, loader: 'babel-loader' }
		]
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	}
};
