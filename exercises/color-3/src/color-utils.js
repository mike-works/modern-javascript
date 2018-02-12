// Implement your color utils here
function hexChannelToDecimal(hex) {
  let h = hex;
  if (h.length === 1) {
    h = `${h}${h}`;
  }
  return parseInt(h, 16);
}

function decimalChannelToHex(decimal) {
  let boxed = Math.min(Math.max(0, decimal), 255);
  let h = boxed.toString(16);
  if (h.length < 2) {
    return `0${h}`;
  }
  return h;
}

export function rgbToHex(r, g, b) {
  return [r, g, b].map(decimalChannelToHex).join('');
}

export function hexToRgb(hex) {
  let channelLength = 2;
  if (hex.length < 6) channelLength = 1;

  // [0, 2, 4]
  let [r, g, b] = [0, channelLength, 2 * channelLength].map(offset =>
    hexChannelToDecimal(hex.slice(offset, offset + channelLength))
  );

  return { r, g, b };
}
