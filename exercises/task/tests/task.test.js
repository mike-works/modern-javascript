import * as taskModule from '../src/task.js';

const task = { taskModule };

describe('fib.js exports are correct', () => {
  test('getFibSequence export is found', () => {
    expect(typeof fib.getFibSequence).toBe('function');
  });
  test('only one thing exported from the module', () => {
    expect(Object.keys(fib).length).toBe(1);
  });
});
