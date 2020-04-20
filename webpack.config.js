const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/displayStudents.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "my-first-webpack.bundle.js",
  },
};
