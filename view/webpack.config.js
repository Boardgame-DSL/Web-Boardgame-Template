const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");

module.exports = {
	entry: path.resolve(__dirname, "./src/index.js"),
	mode: "development",
	resolve: {
		extensions: [
			".js",
		],
	},
	plugins: [
		new HtmlPlugin({
			template: path.resolve(__dirname, "./index.html"),
			base: "./",
		}),
	],
	output: {
		filename: "index.js",
		path: path.resolve(__dirname, "./dist/"),
	},
	devServer: {
		contentBase: path.resolve(__dirname, "./dist/"),
		port: 9090,
		host: "127.0.0.1",
	},
};
