const { google } = require('../apikeys.js');

if (!google || typeof google !== 'string' || google.length === 0) {
  throw 'Google API key not found. Please set it as an environment variable GOOGLE_API_KEY';
}

module.exports = () => {
  return {
    '/maps/api/place': {
      target: 'https://maps.googleapis.com',
      changeOrigin: true,
      log: true,
      pathRewrite: path => `${path}&key=${google}`
    }
  };
};
