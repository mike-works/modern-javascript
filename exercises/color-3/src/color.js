import { hexToRgb, rgbToHex } from './color-utils';

// TODO implement Color type
export function Color(r, g, b) {
  this.r = r;
  this.g = g;
  this.b = b;
}

Color.prototype = {
  get hex() {
    return rgbToHex(this.r, this.g, this.b);
  },
  set hex(hx) {
    let { r, g, b } = hexToRgb(hx);
    this.r = r;
    this.g = g;
    this.b = b;
  }
};

Color.fromHex = function fromHex(hx) {
  let { r, g, b } = hexToRgb(hx);
  return new Color(r, g, b);
};
