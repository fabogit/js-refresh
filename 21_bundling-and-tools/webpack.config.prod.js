const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
	// Entry point of the application
	entry: './src/app.js',
	devtool: 'cheap-module-source-map', // Enable sourcemap for debug
	// Output configuration for generated files
	output: {
		path: path.resolve(__dirname, 'dist'), // Directory for build output
		filename: '[name].[contenthash].js', // Main bundle with unique hash
		chunkFilename: '[name].[contenthash].js', // For dynamically imported chunks
		clean: true, // Clean 'dist' directory before every build
	},
	// Module rules for processing files
	module: {
		rules: [
			{
				test: /\.css$/i, // Match CSS files
				use: ['style-loader', 'css-loader'], // Loaders to handle CSS
			},
		],
	},
	// Plugins for additional functionality
	plugins: [
		// Automatically generate and update the HTML file
		new HtmlWebpackPlugin({
			template: './index.html', // Use this file as a template
			filename: 'index.html',   // Name of the generated HTML file
			minify: {
				removeComments: true, // Remove comments from HTML
				collapseWhitespace: true, // Minify whitespace
			},
		}),
		// Generate GZIP-compressed versions of assets
		new CompressionPlugin({
			test: /\.(js|css|html)$/, // Compress JavaScript, CSS, and HTML files
			algorithm: 'gzip', // Use GZIP for compression
		}),
	],
	// Optimization settings
	optimization: {
		splitChunks: {
			chunks: 'all', // Split shared dependencies into separate chunks
		},
		minimize: true, // Enable code minimization
		minimizer: [
			new TerserPlugin({
				terserOptions: {
					format: {
						comments: false, // Remove comments from JavaScript
					},
					sourceMap: true, // Enable sourcemap for JavaScript minification
				},
				extractComments: false, // Avoid generating separate files for comments
			}),
			new CssMinimizerPlugin({
				minimizerOptions: {
					sourceMap: true, // Enable sourcemaps within minimizerOptions
				},
			}),
		],
	},
	// Development server configuration
	devServer: {
		static: './dist', // Serve files from 'dist' directory
		port: 3000, // Development server port
		open: true, // Open browser automatically
		compress: true, // Enable gzip compression for served files
	},
	// Set mode: 'development' for debugging, 'production' for optimized builds
	mode: 'production',
};
