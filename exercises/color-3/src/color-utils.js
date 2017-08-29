// Implement your color utils here

/**
 * 
 * @param {string} hex hex color representation
 * @return {Object} rgb representation of color
 */
export function hexToRgb(hex) {
  let threeDigit = hex.length === 3;
  let offsetR;
  let offsetG;
  let offsetB;
  let delta;
  if (threeDigit) {
    delta = 1;
    offsetR = 0;
    offsetG = 1;
    offsetB = 2;
  } else {
    delta = 2;
    offsetR = 0;
    offsetG = 2;
    offsetB = 4;
  }
  let [ r, g, b] = [
    hex.substring(offsetR, offsetR + delta),
    hex.substring(offsetG, offsetG + delta),
    hex.substring(offsetB, offsetB + delta)
  ].map(function toBase10(hexCh) {
    if (hexCh.length === 1) {
      return parseInt(hexCh + hexCh, 16);
    }
    return parseInt(hexCh, 16);
  });
  return { r, g, b};
}

/**
 * 
 * @param {Number} r red color channel (8-bit decimal) 
 * @param {Number} g green color channel (8-bit decimal) 
 * @param {Number} b blue color channel (8-bit decimal) 
 * @return {string} hex hex color value
 */
export function rgbToHex(r, g, b) {
  let hexR = r;
  let hexG = g;
  let hexB = b;
  return [hexR, hexG, hexB]
    .map(function boxChannel(ch) {
      return Math.max(0, Math.min(255, ch));
    })
    .map(function toHex(ch) {
      return ch.toString(16);
    })
    .map(function padChannel(ch) {
      if (ch.length < 2) return `0${ch}`;
      return ch;
    })
    .join('');
}