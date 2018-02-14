import * as module from '../src/fetchplus.js';
const _fetchPlus = module.default;

let fetch = url => {
  fetch.count++;
  return Promise.resolve({
    json: () => Promise.resolve({ url })
  });
};
fetch.count = 0;

function fetchPlus(url, options) {
  return _fetchPlus(url, options, fetch);
}

describe('fetchplus.js exports the correct stuff', () => {
  test('default export is a function', () => {
    expect(typeof fetchPlus).toBe('function');
  });
  test('only one thing exported from the module', () => {
    expect(Object.keys(module).length).toBe(1);
  });
});

describe('fetchPlus("https://api.mike.works/api/v1/courses");', () => {
  let p;
  test('returns a promise', () => {
    p = fetchPlus('https://api.mike.works/api/v1/courses');
    expect(typeof p.then).toBe('function');
  });
  test('promise resolves with json', () => {
    p.then(jsonData => {
      expect(typeof jsonData).toBe('object');
    });
  });
  test('calls fetch once', () => {
    expect(fetch.count).toBe(1);
  });
  test('subsequent GET calls to the same URL use the same response (no new fetch calls are made)', () => {
    fetchPlus('https://api.mike.works/api/v1/courses');
    fetchPlus('https://api.mike.works/api/v1/courses');
    fetchPlus('https://api.mike.works/api/v1/courses');
    fetchPlus('https://api.mike.works/api/v1/courses');
    expect(fetch.count).toBe(1);
  });
});

describe('fetchPlus("https://api.mike.works/api/v1/talks");', () => {
  test('a new request is made for a different URL', () => {
    fetchPlus('https://api.mike.works/api/v1/talks');
    expect(fetch.count).toBe(2);
  });
  test("multiple requests to that same url don't make new API calls", () => {
    fetchPlus('https://api.mike.works/api/v1/talks');
    fetchPlus('https://api.mike.works/api/v1/talks');
    fetchPlus('https://api.mike.works/api/v1/talks');
    expect(fetch.count).toBe(2);
  });
});
