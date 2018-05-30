// Implement your color utils here

function hexChToDecimal(h) {
  let hexCh = h;
  if (h.length === 1) hexCh = `${h}${h}`;
  return parseInt(hexCh, 16);
}
function decimalToHexChannel(dec) {
  let result = Math.max(0, Math.min(dec, 255)).toString(16);
  if (result.length === 1) {
    return `0${result}`;
  }
  return result;
}

export function rgbToHex(r, g, b) {
  // returns a hex string
  return (
    decimalToHexChannel(r) + decimalToHexChannel(g) + decimalToHexChannel(b)
  );
}
export function hexToRgb(hex) {
  let chL = 2;
  if (hex.length === 3) chL = 1;
  let r = hexChToDecimal(hex.substr(0, chL));
  let g = hexChToDecimal(hex.substr(chL, chL));
  let b = hexChToDecimal(hex.substr(2 * chL, chL));
  return { r, g, b };
}

export const TEST_ONLY = { hexChToDecimal };
