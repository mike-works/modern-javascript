import { color } from '../src/color.js';

test('color.r, color.g and color.b properties should all be numbers', () => {
  expect(typeof color.r).toBe('number');
  expect(typeof color.g).toBe('number');
  expect(typeof color.b).toBe('number');
});

test('color.hex property should be a string', () => {
  expect(typeof color.hex).toBe('string');
});

test('r=255, g=255, b=255 --> color.hex.toLowerCase() should be "ffffff"', () => {
  let { r, g, b } = color;
  let _oldVals = {r, g, b};

  color.r = 255;
  color.g = 255;
  color.b = 255;

  expect(color.hex.toLowerCase()).toBe('ffffff');

  color.r = _oldVals.r;
  color.g = _oldVals.g;
  color.b = _oldVals.b;
});

test('r=255, g=0, b=0 --> color.hex.toLowerCase() should be "ff0000"', () => {
  let { r, g, b } = color;
  let _oldVals = {r, g, b};

  color.r = 255;
  color.g = 0;
  color.b = 0;

  expect(color.hex.toLowerCase()).toBe('ff0000');

  color.r = _oldVals.r;
  color.g = _oldVals.g;
  color.b = _oldVals.b;
});

test('r=299, g=0, b=0 --> color.hex.toLowerCase() should be "ff0000"', () => {
  let { r, g, b } = color;
  let _oldVals = {r, g, b};

  color.r = 299;
  color.g = 0;
  color.b = 0;

  expect(color.hex.toLowerCase()).toBe('ff0000');

  color.r = _oldVals.r;
  color.g = _oldVals.g;
  color.b = _oldVals.b;
});

test('r=100, g=100, b=-30 --> color.hex.toLowerCase() should be "646400"', () => {
  let { r, g, b } = color;
  let _oldVals = {r, g, b};

  color.r = 100;
  color.g = 100;
  color.b = -30;

  expect(color.hex.toLowerCase()).toBe('646400');

  color.r = _oldVals.r;
  color.g = _oldVals.g;
  color.b = _oldVals.b;
});

test('hex=aa0000 --> colors {r: 170, g: 0, b: 0}', () => {
  let { r, g, b } = color;
  let _oldVals = {r, g, b};

  color.hex = 'aa0000';

  expect(color.r).toBe(170);
  expect(color.g).toBe(0);
  expect(color.b).toBe(0);

  color.r = _oldVals.r;
  color.g = _oldVals.g;
  color.b = _oldVals.b;
});

test('hex=aaee33 --> colors {r: 170, g: 238, b: 51}', () => {
  let { r, g, b } = color;
  let _oldVals = {r, g, b};

  color.hex = 'aaee33';

  expect(color.r).toBe(170);
  expect(color.g).toBe(238);
  expect(color.b).toBe(51);

  color.r = _oldVals.r;
  color.g = _oldVals.g;
  color.b = _oldVals.b;
});

test('hex=c49 --> colors {r: 204, g: 68, b: 153}', () => {
  let { r, g, b } = color;
  let _oldVals = {r, g, b};

  color.hex = 'c49';

  expect(color.r).toBe(204);
  expect(color.g).toBe(68);
  expect(color.b).toBe(153);

  color.r = _oldVals.r;
  color.g = _oldVals.g;
  color.b = _oldVals.b;
});