const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const path = require("path");

module.exports = {
  entry: {
    app: "./src/app.js",
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "../dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/[name].[hash][ext]",
        },
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: ["...", new CssMinimizerPlugin()],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "../src/index.html"),
    }),
    new MiniCssExtractPlugin(),
  ],
};
