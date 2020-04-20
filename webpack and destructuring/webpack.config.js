const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/printFullName.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "my-first-webpack.bundle.js",
  },
};
