const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  entry: {
    scripts: "./inc/js/scripts.js",
    main: "./inc/scss/main.scss"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./inc/template.html",
      filename: "../../index.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: {
          loader: "file-loader",
          options: {
            entry: path.resolve(__dirname, "inc/img"),
            name: "[name].[ext]",
            outputPath: "../img/"
          }
        }
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              entry: path.resolve(__dirname, "inc/fonts"),
              name: "[name].[ext]",
              outputPath: "../fonts/"
            }
          }
        ]
      }
    ]
  },
  watch: true
}