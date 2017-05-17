const fs = require('fs');
const path = require('path');
const exercises = require('./exercises');

function hasFile(env, filePath) {
  let exercisePath = exercises.exercisePath(env);
  return fs.existsSync(path.join(exercisePath, filePath));
}


module.exports = {
  hasFile
};