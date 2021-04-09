const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const resolve = require('path').resolve

module.exports = {
  mode: 'development',
  entry: './src/main.ts',
  output: { 
    filename: '[name].js?[chunkhash]',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [{
        test: /\.vue$/,
        use: ['vue-loader']
      },
      {
        test: /\.ts$/,
        use: ['ts-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000
          }
        }]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      title: 'Development',
    }),
  ],
  devServer: {
    host: '127.0.0.1',
    port: 8010, 
    },
  resolve: {
    extensions: ['.js', '.vue', '.json', '.ts'],
    alias: {
    }
  }

}
