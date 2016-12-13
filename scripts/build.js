"use strict"
/* eslint-disable */
var webpack = require("webpack")

const STATS_OPTIONS = { colors: true, chunks: false, assets: false },
      EXIT_OK = 0,
      EXIT_WEBPACK_ERROR = 2,
      EXIT_COMPILE_ERROR = 3

webpack(require("./webpack.config.js"), function(err, stats) {
  if (err) {
    console.error(err)
    process.exit(EXIT_WEBPACK_ERROR)
  }
  console.log(stats.toString(STATS_OPTIONS))
})
