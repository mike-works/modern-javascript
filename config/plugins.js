const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function generateWebpackPlugins(/* env*/) {
  return [new ExtractTextPlugin('styles.css')];
};
