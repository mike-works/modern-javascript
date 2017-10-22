const { hasFile } = require('./utils');

module.exports = function generateWebpackEntries(env) {
  let baseEntries = ['../../public/styles/app.scss'];

  if (hasFile(env, './src/index.jsx')) {
    baseEntries.push('./src/index.jsx');
  } else if (hasFile(env, './src/index.js')) {
    baseEntries.push('./src/index.js');
  } else {
    throw `Exercise ${env} must either have an index.js or index.jsx`;
  }

  if (hasFile(env, './styles/app.scss')) {
    baseEntries.push('./styles/app.scss');
  }
  if (hasFile(env, './styles/app.css')) {
    baseEntries.push('./styles/app.css');
  }
  return baseEntries;
};
