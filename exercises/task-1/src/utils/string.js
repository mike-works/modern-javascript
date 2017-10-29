// @ts-check
/**
 * Shorten a URL string
 * @param {string} rawUrl url string to shorten
 * @param {number} maxLength maximum allowable length
 * @return {string} shortened url string
 * 
 * @example
 * // returns "mike.works/cour..ecurity-5c876cc"
 * shortUrl('https://mike.works/course/web-security-5c876cc', 30)
 */
export function shortUrl(rawUrl, maxLength = 50) {
  let chunkLength = maxLength / 2;
  let path = (rawUrl || '').replace(/https?\:\/{2}/, '');

  if (path.length <= maxLength) {
    return path;
  }

  let startChunk = shortString(path, chunkLength, false);
  let endChunk = shortString(path, chunkLength, true);
  return `${startChunk}..${endChunk}`;
}

/**
 * Generate a "shortened" representation of a string
 * @param {string} rawString the string to shorten
 * @param {number} maxLength maximum allowable length
 * @param {boolean} reverseMode whether the shortening direction should be reversed
 * @returns {string} shortened string
 * 
 * @example
 * // returns 'Hello worl'
 * shortString('Hello world!', 10)
 *
 * @example
 * // returns 'llo world!'
 * shortString('Hello world!', 10, tru)
 */
export function shortString(rawString, maxLength, reverseMode = false) {
  let stopCharacters = [' ', '/', '&'];
  let allowedShortness = maxLength * 0.80; // When to start looking for stop characters
  let reverse = typeof reverseMode !== 'undefined' ? reverseMode : false;
  let s = reverse ? rawString.split('').reverse().join('') : rawString;
  let short = '';

  for (let i = 0; i < maxLength; i++) {
    short += s[i];
    if (i >= allowedShortness && stopCharacters.indexOf(s[i]) >= 0) {
      break;
    }
  }
  if (reverse) {
    return short.split('').reverse().join('');
  }
  return short;
}