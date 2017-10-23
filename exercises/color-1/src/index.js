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
export let color = {
  r: 255,
  g: 0,
  b: 0,
  get hex() {
    let hr = decimalToHex(this.r);
    let hg = decimalToHex(this.g);
    let hb = decimalToHex(this.b);
    return `${hr}${hg}${hb}`;
  },
  set hex(newVal) {
    let hexNumSize;
    if (newVal.length === 3) hexNumSize = 1;
    else hexNumSize = 2;

    let hr = newVal.substr(0, hexNumSize);
    let hg = newVal.substr(hexNumSize, hexNumSize);
    let hb = newVal.substr(2 * hexNumSize, hexNumSize);
    this.r = hexToDecimal(hr);
    this.g = hexToDecimal(hg);
    this.b = hexToDecimal(hb);
    // let [r, g, b] = [0, 1, 2]
    //   .map(x => x * hexNumSize)
    //   .map(off => newVal.substr(off, hexNumSize))
    //   .map(hexToDecimal);
    // this.r = r;
    // this.g = g;
    // this.b = b;
  }
};
// define the hex property here
