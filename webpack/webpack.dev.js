const ReactRefeshWebPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
  mode: 'development',
  devServer: {
    hot: true,
    port: 3000,
    quiet: true,
    historyApiFallback: true,
  },
  devtool: 'cheap-module-source-map',
  plugins: [new ReactRefeshWebPlugin()],
}
