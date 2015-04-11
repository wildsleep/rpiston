var path = require('path');

module.exports = {
	entry: './src/app.jsx',
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{ test: /\.js/, include: path.join(__dirname, 'src'), loader: 'babel-loader' },
			{ test: /\.jsx/, loader: 'babel-loader' },
			{ test: /\.less/, loaders: ['style-loader', 'css-loader', 'less-loader'] }
		]
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	}
};
