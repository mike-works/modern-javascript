const path = require('path');
const fs = require('fs');
const exercises = require('./exercises');

module.exports = function generateWebpackEntries(env) {
  let exercisePath = exercises.exercisePath(env);

  let baseEntries = ['./src/index.js', '../../public/styles/app.scss'];
  if (fs.existsSync(path.join(exercisePath, 'styles', 'app.scss'))) {
    baseEntries.push('./styles/app.scss');
  }
  if (fs.existsSync(path.join(exercisePath, 'styles', 'app.css'))) {
    baseEntries.push('./styles/app.css');
  }
  return baseEntries;
};
