const path = require('path');

const plugins = require('./webpack/plugins');
const entries = require('./webpack/entries');
const resolve = require('./webpack/resolve');
const proxies = require('./webpack/proxies');
const mod = require('./webpack/module');
const exercises = require('./webpack/exercises');

module.exports = function webpackConfig(env) {
  const EXERCISE_PATH = exercises.exercisePath(env);

  return {
    entry: entries(env),
    context: EXERCISE_PATH,
    devtool: 'source-maps',
    output: {
      path: path.join(__dirname, 'dist'),
      filename: '[name].js',
      publicPath: '/assets/'
    },
    devServer: {
      publicPath: '/assets/',
      contentBase: EXERCISE_PATH,
      overlay: true,
      proxy: proxies(env),
      port: 3000
    },
    plugins: plugins(env),
    module: mod(env),
    resolve: resolve(env)
  };
};
