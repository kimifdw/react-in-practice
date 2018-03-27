const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const pkg = require('../package.json')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  entry: {
    main: path.join(__dirname, '../src/app.js')
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: `js/[name].${pkg.version}.js`,
    chunkFilename: `js/[id].${pkg.version}.js`
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.less']
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: [{
        loader: 'babel-loader'
      }],
      exclude: /node_modules/
    }, {
      test: /\.(css|less)$/,
      use: isProd ? ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [{
          loader: 'css-loader',
          options: {
            modules: true,
            localIdentName: '[local]_[hash:base64:8]',
            importLoaders: 2
          }
        }, {
          loader: 'postcss-loader'
        }, {
          loader: 'less-loader'
        }]
      }) : [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader',
        options: {
          modules: true,
          localIdentName: '[local]_[hash:base64:8]',
          importLoaders: 2
        }
      }, {
        loader: 'postcss-loader'
      }, {
        loader: 'less-loader'
      }],
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
      include: /node_modules/
    }, {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: 'img/[name].[hash:7].[ext]'
        }
      }]
    }, {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: 'fonts/[name].[hash:7].[ext]'
        }
      }]
    }]
  }
}
