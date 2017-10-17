// Implement your color utils here
function hexToBinary(h) {
  return parseInt(h, 16);
}

export function rgbToHex(r, g, b) {
  return  [r, g, b]
    .map(decChan => Math.min(255, Math.max(0, decChan)))
    .map(decChan => decChan.toString(16))
    .map(hexCh => hexCh.length === 1 ? `0${hexCh}` : hexCh)
    .join('');
}

export function hexToRgb(hex) {
  let channelLength = hex.length / 3;
  let hexR = hex.substr(0, channelLength);
  let hexG = hex.substr(channelLength, channelLength);
  let hexB = hex.substr(2 * channelLength, channelLength);
  let r = hexToBinary(channelLength === 2 ? hexR : `${hexR}${hexR}`);
  let g = hexToBinary(channelLength === 2 ? hexG : `${hexG}${hexG}`);
  let b = hexToBinary(channelLength === 2 ? hexB : `${hexB}${hexB}`);
  return {r, g, b}; // {r: 255, g: 100, b: 211}
}

// export default {
//   rgbToHex,
//   hexToRgb
// };