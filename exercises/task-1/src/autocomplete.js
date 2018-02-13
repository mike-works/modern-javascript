// @ts-check
import { wait } from './utils/promise';
import { placesQuery, detailsFromPlaceIds } from './utils/place';

/**
 * Search google places API with a given term
 * @param {string} term search term
 * @returns {Promise} places found for search term
 */
export async function autocomplete(term) {
  // Wait for 500ms
  await wait(500);
  console.log(`⏳ Beginning search for ${term}`);
  // Begin actual query API call
  let placeResults = await placesQuery(term);

  console.log(`✅ Completed search for ${term}`);
  let placeIds = placeResults.map(place => place.place_id);
  let places = await detailsFromPlaceIds(placeIds);
  console.log(places);
  // Return the results (eventual value of the task)
  return places;
}
