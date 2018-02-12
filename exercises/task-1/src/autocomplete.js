// @ts-check
import { wait } from './utils/promise';
import { placesQuery, detailsFromPlaceIds } from './utils/place';

/**
 * Search google places API with a given term
 * @param {string} term search term
 * @returns {Promise} places found for search term
 */
export function autocomplete(term) {
  // Wait for 500ms
  return wait(500)
    .then(() => {
      console.log(`⏳ Beginning search for ${term}`);
      // Begin actual query API call
      return placesQuery(term);
    })
    .then(placeResults => {
      console.log(`✅ Completed search for ${term}`);
      let placeIds = placeResults.map(place => place.place_id);
      return detailsFromPlaceIds(placeIds);
    })
    .then(places => {
      console.log(places);
      // Return the results (eventual value of the task)
      return places;
    });
}
