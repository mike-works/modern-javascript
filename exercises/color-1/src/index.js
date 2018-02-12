export let color = { r: 255, g: 0, b: 0 };
// define the hex property here

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

function rgbToHex(r, g, b) {
  return [r, g, b].map(decimalChannelToHex).join('');
}

function hexToRgb(hex) {
  let channelLength = 2;
  if (hex.length < 6) channelLength = 1;

  // [0, 2, 4]
  let [r, g, b] = [0, channelLength, 2 * channelLength].map(offset =>
    hexChannelToDecimal(hex.slice(offset, offset + channelLength))
  );

  return { r, g, b };
}

Object.defineProperty(color, 'hex', {
  enumerable: true,
  get() {
    return rgbToHex(this.r, this.g, this.b);
  },
  set(newHex) {
    let { r, g, b } = hexToRgb(newHex);
    this.r = r;
    this.g = g;
    this.b = b;
  }
});
