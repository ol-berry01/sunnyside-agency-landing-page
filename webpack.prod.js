const path = require("path")
const common = require("./webpack.common")
const { merge } = require("webpack-merge")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist/js")
  },
  plugins: [new MiniCssExtractPlugin({ filename: "../../dist/css/[name].[contenthash].css" })]
})