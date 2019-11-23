const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = {
	entry: './client/src/app.jsx',
	output: {
		path: path.join(__dirname, '../public'),
		filename: 'bundle.js'
	},
	target: 'web',
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				include: path.join(__dirname, 'src'),
				loader: 'babel-loader'
			},
			{
				test: /\.css$/,
				loaders: [
					'style-loader',
					'css-loader',
					'postcss-loader'
				]
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx'],
	}
};
