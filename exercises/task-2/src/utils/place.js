// @ts-check

/**
 * Search google place API
 * @param {string} s search term
 * @return {string} url to hit
 */
function urlForQuery(s) {
  return `http://localhost:3000/maps/api/place/autocomplete/json?types=establishment&input=${s}`;
}

/**
 * Get a URL for place details
 * @param {number} placeId id of place to retrieve details about 
 * @return {string} url to hit
 */
function urlForPlaceDetails(placeId) {
  return `http://localhost:3000/maps/api/place/details/json?placeid=${placeId}`;
}

/**
 * Search the google places API, for a particular term
 *
 * @export
 * @param {string} input Search term
 * @returns {Promise} promise that resolves to search results
 */
export function placesQuery(input) {
  return fetch(urlForQuery(input))
    .then(response => response.json())
    .then(jsonData => {
      return jsonData.predictions;
    });
}

export function detailsFromPlaceIds(placeids) {
  return Promise.all(
    placeids.map(placeid => {
      return fetch(urlForPlaceDetails(placeid))
        .then(response => response.json())
        .then(jsonData => jsonData.result);
    })
  );
}