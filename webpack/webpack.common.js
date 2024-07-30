module.exports = {
  entry: {
    app: "./src/app.js",
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/[name].[hash].[ext]",
        },
      },
    ],
  },
};
