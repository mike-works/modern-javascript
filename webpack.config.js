const path = require('path');
const webpack = require('webpack');

const plugins = require('./config/plugins');
const entries = require('./config/entries');
const resolve = require('./config/resolve');
const mod = require('./config/module');
const exercises = require('./config/exercises');

module.exports = function webpackConfig(env) {
  const EXERCISE_PATH = exercises.exercisePath(env);

  return {
    entry: entries(env),
    context: EXERCISE_PATH,
    output: {
      path: path.join(__dirname, 'dist'),
      filename: '[name].js',
      publicPath: '/assets/'
    },
    devServer: {
      publicPath: '/assets/',
      contentBase: EXERCISE_PATH,
      overlay: true,
      port: 3000
    },
    plugins: plugins(env),
    module: mod(env),
    resolve: resolve(env)
  };
};
