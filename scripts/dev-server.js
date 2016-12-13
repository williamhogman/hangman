"use strict"
/* eslint-disable */

const WebpackDevServer = require("webpack-dev-server"),
      webpack = require("webpack")

const webpackConfig = require("./webpack.config.js").map(
  x => Object.assign({}, x, {
    output: Object.assign({}, x.output, { path: "/" }),
    bail: false,
  })
)

const server = new WebpackDevServer(
  webpack(webpackConfig),
  Object.assign(
    {},
    {
      noInfo: false,
      quiet: false,
      stats: {
        colors: true,
        chunks: false,
        assets: false,
      },
      headers: {
        "Cache-Control": "public, max-age=0, must-revalidate"
      },
    }
  )
)

const port = process.env["PORT"] || 3000
console.log(`Listening on port ${port}`)
server.listen(port)
