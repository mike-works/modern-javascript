import { default as _fetch } from 'node-fetch';

// value to be mutated by fetchPlus
const REQUEST_CACHE = {};

// Do not change this function signature or the tests will break
export default function fetchPlus(url, options, fetch = _fetch ) {
  // check to see if we know about a pending request
  let inProgress = REQUEST_CACHE[url];
  if (inProgress) return inProgress; // found one, return it
  // make a new request
  let p = fetch(url, options)
    .then(response => response.json());
  REQUEST_CACHE[url] = p; // cache in case someone else needs it later
  return p; // return it
}