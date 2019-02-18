const { resolve } = require("path");

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
  /*optimization: {
		splitChunks: {
			chunks: 'all'
		}
	},*/
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: [resolve(__dirname, "/node_modules/")],
        options: {
          transpileOnly: true,
          experimentalWatchApi: false
        }
      }
    ]
  },
  mode: "development"
};
