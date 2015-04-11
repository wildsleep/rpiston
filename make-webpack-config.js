var path = require('path');

module.exports = function (options) {
	var entry = './src/app.jsx';
	var output = {
		path: path.join(__dirname, 'public'),
		publicPath: options.devServer ?
			'http://localhost:' + options.devServerPort + '/' :
			'/',
		filename: 'bundle.js'
	};
	var loaders = [
		{ test: /\.js/, include: path.join(__dirname, 'src'), loader: 'babel-loader' },
		{ test: /\.jsx/, loader: 'babel-loader' },
		{ test: /\.less/, loaders: [
			'style-loader',
			'css-loader',
			'autoprefixer-loader?browsers=last 2 version',
			'less-loader'
		]}
	];
	var extensions = ['', '.js', '.jsx'];

	return {
		entry: entry,
		output: output,
		target: 'web',
		module: {
			loaders: loaders
		},
		resolve: {
			extensions: extensions
		}
	};
};
