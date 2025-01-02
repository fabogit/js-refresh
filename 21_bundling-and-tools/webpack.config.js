const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
	entry: './src/app.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html',
			minify: {
				removeComments: true,
				collapseWhitespace: true,
			},
		}),
		new CompressionPlugin({
			test: /\.(js|css|html)$/,
			algorithm: 'gzip',
		}),
	],
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin({
				terserOptions: {
					format: {
						comments: true,
					},
				},
				extractComments: false,
			}),
			new CssMinimizerPlugin(),
		],
	},
	devServer: {
		static: './dist',
		port: 3003,
		open: true,
		compress: true
	},
	mode: 'production', // 'development'
};
