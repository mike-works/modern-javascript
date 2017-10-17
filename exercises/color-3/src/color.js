import { rgbToHex, hexToRgb } from './color-utils';

export function Color(r, g, b) {
  this.r = r;
  this.g = g;
  this.b = b;
}

Color.prototype = {
  get hex() {
    return rgbToHex(this.r, this.g, this.b);
  },
  set hex(hexStr) {
    let { r, g, b } = hexToRgb(hexStr);
    this.r = r;
    this.g = g;
    this.b = b;
  }
};

function fromHexConstructor(hexStr) {
  let { r, g, b } = hexToRgb(hexStr);
  return new Color(r, g, b);
}

Color.fromHex = fromHexConstructor;
