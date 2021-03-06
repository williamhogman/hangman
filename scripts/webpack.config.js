"use strict"
/* eslint-disable */

var webpack = require("webpack")
var html = require("html-webpack-plugin")
var ExtractTextPlugin = require("extract-text-webpack-plugin")

var staticFilePattern = "name=[name].[sha256:hash:base64:7].static.[ext]"

var babelLoaderConf = {
  test: /\.js$/,
  exclude: /(node_modules|bower_components)/,
  loader: 'babel-loader?cacheDirectory'
}

function absolutePath(path) {
  return process.cwd() + "/" + path
}

const nodeEnv = process.env["NODE_ENV"] || "development"
const isProd = nodeEnv === "production"

module.exports = [
  {
    bail: true, // exit with fail code if there's an error (duh)

    name: 'hangman',
    target: 'web',
    devtool: 'source-map',

    output: {
      path: "build",
      filename: "[name].[chunkhash].static.js",
      chunkFilename: "chunk.[chunkhash].static.js",
    },

    plugins: [
      isProd && new webpack.optimize.UglifyJsPlugin(),
      new webpack.DefinePlugin({ WORD_API_KEY: JSON.stringify(process.env["WORD_API_KEY"]) }),
      // Pull imported CSS out into a bundle, instead of getting them inline
      // in JavaScript.
      new ExtractTextPlugin("[name].[sha256:contenthash:base64:7].static.css", {
        // Put all component styles in the main CSS chunk so that we
        // don't get unstyled components when loading from the markup
        // cache.
        allChunks: true,
      }),

      // This helps maintain a predictable chunk ID order.
      new webpack.optimize.OccurrenceOrderPlugin(true),
      // Generate dist/index.html from a template.
      new html({
        template: "./index.html.ejs",
        inject: "body",
        chunksSortMode: "none", // use the chunk ID order
      }),
    ].filter(x => !!x),

    entry: {
      main: ["./src/index.js"],
    },

    module: {
      loaders: [
        babelLoaderConf,
      ]
    },
    node: {
      dns: "mock",
      net: "mock",
    },
  },
]
