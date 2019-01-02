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
            loader: 'babel-loader'
          },
          {
            loader: 'eslint-loader'
          }
        ]
      },
      {
        test: /\.scss$/,
        use: ['css-loader', 'sass-loader']
      }
    ]
  };
};
