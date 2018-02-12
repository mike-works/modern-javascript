// @ts-check
import { task } from './task';
import { wait } from './utils/promise';
import { placesQuery, detailsFromPlaceIds } from './utils/place';

/**
 * Search google places API with a given term
 * @param {string} term search term
 * @returns {Promise} places found for search term
 */
export function autocomplete(term) {
  return task(function* searchForPlace() {
    // Wait for 500ms
    yield wait(500);
    console.log(`⏳ Beginning search for ${term}`);

    // Begin actual query API call
    let placeResults = yield placesQuery(term);
    console.log(`✅ Completed search for ${term}`);
    let placeIds = placeResults.map(place => place.place_id);
    let places = yield detailsFromPlaceIds(placeIds);
    console.log(places);
    // Return the results (eventual value of the task)
    yield places;
  });
}
