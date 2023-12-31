const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "eval-source-map",
  entry: {
    main: "./src/client/index.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist", "client"),
    publicPath: '/' // needs to be project root for HtmlWebpackPlugin, ./ does not work
  },
  module: {
    rules: [
      {
        test: /.(js|jsx|ts|tsx)$/,
        include: path.resolve(__dirname, "src", "client"),
        use: { loader: "babel-loader", },
        resolve: {
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
        },
      },
      {
        test: /\.(sa|sc|c)ss$/, // styles files
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: {
          loader: 'url-loader',
        },
      },
    ],
  },
  devServer: {
    static: {
      publicPath: "/", // URL mapped to folder
      directory: path.resolve(__dirname, "dist", "client"), // Folder where index.html is
    },
    proxy: {
      "/api": {
        target: "http://localhost:3001",
        secure: false,
      },
      "/session": {
        target: "http://localhost:3001",
        secure: false,
      },
    },
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: "src/client/index.html",
      chunks: ['main'],
    }),
  ],
};
