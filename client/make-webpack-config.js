var path = require('path');
var autoprefixer = require('autoprefixer');

module.exports = function (options) {
	var entry = './client/src/app.jsx';
	var output = {
		path: path.join(__dirname, '../public'),
		publicPath: options.devServer ?
			'http://localhost:' + options.devServerPort + '/' :
			'/',
		filename: 'bundle.js'
	};
	var loaders = [
		{
			test: /\.jsx?$/,
			include: path.join(__dirname, 'src'),
			loader: 'babel-loader'
		}, {
			test: /\.less$/,
			loaders: [
				'style-loader',
				'css-loader',
				'postcss-loader',
				'less-loader'
			]
		}
	];
	var extensions = ['', '.js', '.jsx'];

	return {
		entry: entry,
		output: output,
		target: 'web',
		devtool: 'source-map',
		module: {
			loaders: loaders
		},
		resolve: {
			extensions: extensions
		},
		postcss: function () {
			return [autoprefixer];
		}
	};
};
