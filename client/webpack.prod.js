const { DefinePlugin } = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	mode: 'production',
	output: {
		publicPath: '/'
	},
	plugins: [
		new DefinePlugin({
			'SOCKET_URL': JSON.stringify(undefined)
		})
	]
});