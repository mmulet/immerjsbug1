const { resolve } = require("path");
module.exports = {
  mode: "development",
  target: "web",
  entry: {
    app: resolve(__dirname, "./src/testWebpack.js")
  },
  output: {
    globalObject: "self",
    path: resolve(__dirname, "./dist"),
    publicPath: "/dist",
    filename: "testWebpack.bundle.js"
  },
  resolve: {
    extensions: [".js"],
    symlinks: false
  }
};
