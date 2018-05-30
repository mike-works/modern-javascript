export let color = { r: 255, g: 0, b: 0 };
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
// define the hex property here
Object.defineProperty(color, 'hex', {
  get() {
    let hexRed = decimalToHexChannel(this.r);
    let hexGreen = decimalToHexChannel(this.g);
    let hexBlue = decimalToHexChannel(this.b);
    return `${hexRed}${hexGreen}${hexBlue}`;
  },
  set(newHex) {
    let chL = 2;
    if (newHex.length === 3) chL = 1;
    let r = hexChToDecimal(newHex.substr(0, chL));
    let g = hexChToDecimal(newHex.substr(chL, chL));
    let b = hexChToDecimal(newHex.substr(2 * chL, chL));
    this.r = r;
    this.g = g;
    this.b = b;
  }
});
