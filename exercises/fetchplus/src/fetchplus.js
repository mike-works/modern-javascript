import { default as _fetch } from 'node-fetch';

/**
 * @type { {[k: string]: Promise<any> } }
 */
const FETCH_PROMISE_CACHE = {};

// Do not change this function signature or the tests will break
export default function fetchPlus(url, options, fetch = _fetch) {
  let cachedPromise = FETCH_PROMISE_CACHE[url];
  if (!cachedPromise) {
    cachedPromise = fetch(url).then(response => response.json());
    FETCH_PROMISE_CACHE[url] = cachedPromise;
  }
  return cachedPromise;
}
