const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { DefinePlugin } = require('webpack')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const { REACT_ENV, REACT_SERVER_URL, REACT_BASE_URL } = require('../env')

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.tsx'),
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, '..', './build'),
    filename: 'bundle.[chunkhash].js',
    publicPath: '/',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './public/index.html'),
    }),
    /*
    * Insert more env variables as required
    */
    new DefinePlugin({
      REACT_ENV: JSON.stringify(REACT_ENV) || 'development',
      REACT_SERVER_URL: JSON.stringify(REACT_SERVER_URL) || '',
      REACT_BASE_URL: JSON.stringify(REACT_BASE_URL) || '',
    }),
    new FriendlyErrorsWebpackPlugin(),
  ],
}
