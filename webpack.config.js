var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var webpack = require('webpack');
var _ = require('lodash');
var config;

if(process.env.NODE_ENV === 'production') {
  config = {
    entry: './src/js/main.js',
    output: {
      path: __dirname + '/dist/',
      publicPath: '/webassets/'
    },
    module: {
      loaders: [
        { loader: 'babel?stage=0' }
      ]
    },
    plugins: [
      // undefined,
      new webpack.optimize.UglifyJsPlugin()
    ]
  };
} else {
  config = {
    devtool: 'eval-source-map',
    entry: [
      'webpack-dev-server/client?http://0.0.0.0:8000',
      'webpack/hot/dev-server',
      './src/js/main.js'
    ],
    output: {
      path: __dirname + '/build/',
    },
    module: {
      loaders: [
        { loaders: ['react-hot', 'babel?stage=0'] }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({ template: __dirname + '/src/index.html' }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    ]
  };
}

_.merge(config, {
  output: {
    filename: 'app.js',
  },
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/ },
      { test: /\.(eot|gif|jpeg|jpg|png|svg|ttf|woff|woff2)$/, loader: 'url?limit=16384' },
      { test: /\.scss$/, loaders: ['style', 'css', 'autoprefixer-loader?browsers=last 2 version', 'sass?includePaths[]=' + path.resolve(__dirname, './node_modules/compass-mixins/lib')] },
    ]
  },
  externals: {
    vertx: '{}'
  },
  plugins: [
  ]
});

module.exports = config;
