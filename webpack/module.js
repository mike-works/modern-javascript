const ExtractTextPlugin = require('extract-text-webpack-plugin');
const exercises = require('./exercises');

module.exports = function generateWebpackModule(env) {
  return {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        include: [exercises.exercisePath(env)],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['env', 'stage-2']
            }
          },
          {
            loader: 'eslint-loader'
          }
        ]
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          // resolve-url-loader may be chained before sass-loader if necessary
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  };
};
