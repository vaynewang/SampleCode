const webpack = require("webpack");
module.exports = {
  css: {
    modules: true
  },
  configureWebpack: {
    resolve: {
      extensions: [".js", ".vue", ".json", ".ts", ".tsx"]
    },
    plugins: [
      new webpack.ProvidePlugin({
        classNames: "classnames"
      })
    ]
  },
  devServer: {
    port: 8800
  }
};
