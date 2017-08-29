// @ts-check
import { hexToRgb, rgbToHex } from './color-utils';

/**
 * 
 * @param {Number} r red color component 
 * @param {Number} g green color component 
 * @param {Number} b blue color component
 * @return {Object} new instance of type Color
 */
export function Color(r, g, b) {
  this.r = r;
  this.g = g;
  this.b = b;
}
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

Color.fromHex = function fromHex(hexString) {
  let { r, g, b } = hexToRgb(hexString);
  return new Color(r, g, b);
};