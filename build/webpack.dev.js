const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.common')
const webpack = require('webpack') // 内置插件
const HTMLWebPackPlugin = require('html-webpack-plugin')

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    port: 8080,
    hotOnly: true,
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'https://easy-mock.com/mock/5a1d07011d7fcc245cfb0bdc/example',
        secure: false
      }
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // 热更新插件
    new HTMLWebPackPlugin({
      template: 'index.html',
      inject: true
    })
  ]
})
