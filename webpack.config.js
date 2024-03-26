const path = require('path');

module.exports = {
	entry: './src/index.js',
	mode: 'production',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index.js',
		libraryTarget: 'umd',
		library: 'awesome-ui'
	},
	module: {
		rules: [
			{
				test: /\.jsx/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.css/,
				use: ['style-loader', 'css-loader']
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	externals: {
		react: 'react'
	}
};
