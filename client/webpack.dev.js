const path = require('path');
const { DefinePlugin } = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	mode: 'development',
	devtool: 'inline-source-map',
	output: {
		publicPath: 'http://localhost:2992/'
	},
	devServer: {
		contentBase: path.join(__dirname, '../public'),
	},
	plugins: [
		new DefinePlugin({
			'SOCKET_URL': JSON.stringify('http://localhost:3000')
		})
	]
});
