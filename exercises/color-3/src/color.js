import { rgbToHex, hexToRgb } from './color-utils';

export function Color(r, g, b) {
  this.r = r;
  this.g = g;
  this.b = b;
}

Color.fromHex = function fromHex(hexStr) {
  let { r, g, b } = hexToRgb(hexStr);
  return new Color(r, g, b);
};

Color.prototype = {
  fromHex(hexStr) {
    let { r, g, b } = hexToRgb(hexStr);
    return new Color(r, g, b);
  },
  get hex() {
    return rgbToHex(this.r, this.g, this.b);
  },
  set hex(newVal) {
    let { r, g, b } = hexToRgb(newVal);
    this.r = r;
    this.g = g;
    this.b = b;
  }
};
