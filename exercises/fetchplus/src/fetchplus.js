import { default as _fetch } from 'node-fetch';

const REQUESTS = {};

// Do not change this function signature or the tests will break
export default function fetchPlus(url, options, fetch = _fetch) {
  // Begin the process of making a HTTP request
  let existingRequest = REQUESTS[url];
  if (!existingRequest) {
    existingRequest = REQUESTS[url] = fetch(url, options).then(response =>
      response.json()
    ); // Start decoding body to JSON
  }
  return existingRequest;
}
