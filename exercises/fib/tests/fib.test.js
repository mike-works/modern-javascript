import * as fib from '../src/fib.js';

describe('fib.js exports are correct', () => {
  test('getFibSequence export is found', () => {
    expect(typeof fib.getFibSequence).toBe('function');
  });
  test('only one thing exported from the module', () => {
    expect(Object.keys(fib).length).toBe(1);
  });
});

describe('fib.js#getFibSequence basic cases', () => {
  test('getFibSequence(0) returns an array', () => {
    expect(typeof fib.getFibSequence(0).map).toBe('function');
  });
  test('getFibSequence(0) -> []', () => {
    expect(fib.getFibSequence(0)).toMatchObject([]);
  });
  test('getFibSequence(1) -> [1]', () => {
    expect(fib.getFibSequence(1)).toMatchObject([1]);
  });
  test('getFibSequence(2) -> [1, 1]', () => {
    expect(fib.getFibSequence(2)).toMatchObject([1, 1]);
  });
  test('getFibSequence(3) -> [1, 1, 2]', () => {
    expect(fib.getFibSequence(3)).toMatchObject([1, 1, 2]);
  });
  test('getFibSequence(4) -> [1, 1, 2, 3]', () => {
    expect(fib.getFibSequence(4)).toMatchObject([1, 1, 2, 3]);
  });
  test('getFibSequence(5) -> [1, 1, 2, 3, 4]', () => {
    expect(fib.getFibSequence(5)).toMatchObject([1, 1, 2, 3, 5]);
  });
});

describe('fib.js#getFibSequence handles invalid input robustly', () => {
  test('getFibSequence() -> undefined', () => {
    expect(typeof fib.getFibSequence()).toBe('undefined');
  });
  test('getFibSequence(null) -> undefined', () => {
    expect(typeof fib.getFibSequence(null)).toBe('undefined');
  });
  test('getFibSequence("3") -> [1, 1, 2]', () => {
    expect(fib.getFibSequence('3')).toMatchObject([1, 1, 2]);
  });
  test('getFibSequence(-3) -> undefined', () => {
    expect(typeof fib.getFibSequence(-3)).toBe('undefined');
  });
});

describe('fib.js#getFibSequence can calculate long sequences', () => {
  test('getFibSequence(100)', () => {
    expect(fib.getFibSequence(100).length).toBe(100);
  });
  test('getFibSequence(1000)', () => {
    expect(fib.getFibSequence(1000).length).toBe(1000);
  });
  test('getFibSequence(10000)', () => {
    expect(fib.getFibSequence(10000).length).toBe(10000);
  });
  test('getFibSequence(100000)', () => {
    expect(fib.getFibSequence(100000).length).toBe(100000);
  });
  test('getFibSequence(1000000)', () => {
    expect(fib.getFibSequence(1000000).length).toBe(1000000);
  });
  test('getFibSequence(10000000)', () => {
    expect(fib.getFibSequence(10000000).length).toBe(10000000);
  });
});
