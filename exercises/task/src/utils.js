import { google } from '../../../apikeys.js';
// import fetch from 'node-fetch';

if (!google || typeof google !== 'string' || google.length === 0) {
  throw 'Google API key not found. Please set it as an environment variable GOOGLE_API_KEY';
}

/**
 * Check to see whether a value is a promise
 *
 * @param {any} x value to check
 * @returns {boolean} true if the value is found to be a promise
 */
export function isPromise(x) {
  return x && typeof x.then === 'function';
}

/**
 * Returns a promise that will resolve in a particular amount of time
 *
 * @param {any} time time to wait (in ms)
 * @returns {Promise} a promise that will resolve after time
 */
export function wait(time) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

/**
 * Search the google places API, for a particular term
 *
 * @export
 * @param {string} input Search term
 * @returns {Promise} promise that resolves to search results
 */
export function placesQuery(input) {
  return fetch(
    `http://localhost:3000/maps/api/place/autocomplete/json?types=establishment&input=${input}`
  )
    .then(response => response.json())
    .then(jsonData => {
      return jsonData.predictions;
    });
}

export function detailsFromPlaceIds(placeids) {
  return Promise.all(
    placeids.map(placeid => {
      return fetch(
        `http://localhost:3000/maps/api/place/details/json?placeid=${placeid}`
      )
        .then(response => response.json())
        .then(jsonData => jsonData.result);
    })
  );
}