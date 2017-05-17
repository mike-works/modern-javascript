import { task } from './task';
import { placesQuery, detailsFromPlaceIds, wait } from './utils';

export function autocomplete(term) {
  let p = task(function* searchForPlace() {
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
  p.term = term;
  return p;
}
