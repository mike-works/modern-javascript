import * as autocompleteModule from '../src/autocomplete.js';

describe('autocomplete.js exports are correct', () => {
  test('autocomplete export is found', () => {
    expect(typeof autocompleteModule.autocomplete).toBe('function');
  });
  test('only one thing exported from the module', () => {
    expect(Object.keys(autocompleteModule).length).toBe(1);
  });
});
