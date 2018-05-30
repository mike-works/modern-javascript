import { hexToRgb, rgbToHex } from './color-utils';

// TODO implement Color type

export function Color(r, g, b) {
  this.r = r;
  this.g = g;
  this.b = b;
  let secret = 'Pa$$word';
  this.matchPassword = function(pw) {
    return pw === secret;
  };
}

Color.fromHex = function colorFromHex(hex) {
  let { r, g, b } = hexToRgb(hex);
  return new Color(r, g, b);
};

Color.prototype = {
  get hex() {
    return rgbToHex(this.r, this.g, this.b);
  },
  set hex(newHex) {
    let { r, g, b } = hexToRgb(newHex);
    this.r = r;
    this.g = g;
    this.b = b;
  }
};
