import { default as _fetch } from 'node-fetch';

const CACHE = {};

// Do not change this function signature or the tests will break
export default function fetchPlus(url, options, fetch = _fetch) {
  let key = `${url}-${JSON.stringify(options)}`;
  if (!CACHE[key]) {
    CACHE[key] = fetch(url, options).then(response => response.json());
  }
  return CACHE[key];
}
