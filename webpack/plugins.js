const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
// const CompressionPlugin = require('compression-webpack-plugin');
module.exports = function generateWebpackPlugins(/* env*/) {
  let plugins = [
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new ExtractTextPlugin('styles.css'),
    new webpack.ProvidePlugin({
      React: 'react'
    })
    // new UglifyJSPlugin(),
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     'NODE_ENV': JSON.stringify('production')
    //   }
    // }),
    // new CompressionPlugin({
    //   asset: '[path].gz[query]',
    //   algorithm: 'gzip',
    //   test: /\.js$|\.css$|\.html$/,
    //   threshold: 10240,
    //   minRatio: 0.8
    // }),
    // new webpack.optimize.AggressiveMergingPlugin()
  ];
  if (process.env.ANALYZE === 'true') {
    plugins.push(new BundleAnalyzer());
  }
  return plugins;
};
