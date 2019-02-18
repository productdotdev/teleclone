const { resolve } = require("path");
const {
	create: createImportTransformer
} = require("typescript-transform-imports");

const importsTransformer = createImportTransformer({
	material: {
		match: /^\@material-ui\/core$/,
		writePath: (prop) => ({ path: `@material-ui/core/${prop}/`, isNamed: true })
	}
});

module.exports = {
	context: resolve(__dirname, "src"),
	entry: ["./index", "./serviceworker"],
	output: {
		path: resolve(__dirname, "assets", "js"),
		filename: "[name].js",
		pathinfo: false,
		chunkFilename: "[name].bundle.js",
		publicPath: "/js/"
	},
	resolve: {
		extensions: [".js", ".ts", ".tsx", ".jsx"]
	},
	target: "web",
	optimization: {
		splitChunks: {
			chunks: "all"
		}
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: "ts-loader",
				exclude: [resolve(__dirname, "/node_modules/")],
				options: {
					transpileOnly: true,
					experimentalWatchApi: false,
					getCustomTransformers: () => ({ before: [importsTransformer] })
				}
			}
		]
	},
	mode: "development"
};
