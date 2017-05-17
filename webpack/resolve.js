module.exports = function generateWebpackResolve(/* env*/) {
  return {
    extensions: ['.jsx', '.js'],
    alias: {
      react: 'preact-compat',
      'react-dom': 'preact-compat'
    }
  };
};
