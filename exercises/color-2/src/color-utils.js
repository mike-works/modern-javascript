// Implement your color utils here
function decimalToHex(decimal) {
  let h = Math.max(0, Math.min(255, decimal)).toString(16);
  if (h.length === 1) return `0${h}`;
  return h;
}
function hexToDecimal(hexChannel) {
  if (hexChannel.length === 1) {
    return parseInt(`${hexChannel}${hexChannel}`, 16);
  }
  return parseInt(hexChannel, 16);
}

export function rgbToHex(r, g, b) {
  let hr = decimalToHex(r);
  let hg = decimalToHex(g);
  let hb = decimalToHex(b);
  return `${hr}${hg}${hb}`;
}

export function hexToRgb(hex) {
  let hexNumSize;
  if (hex.length === 3) hexNumSize = 1;
  else hexNumSize = 2;

  let hr = hex.substr(0, hexNumSize);
  let hg = hex.substr(hexNumSize, hexNumSize);
  let hb = hex.substr(2 * hexNumSize, hexNumSize);
  let r = hexToDecimal(hr);
  let g = hexToDecimal(hg);
  let b = hexToDecimal(hb);
  return { r, g, b};
}
