export let color = {r: 255, g: 0, b: 0};

Object.defineProperty(color, 'hex', {
  get() {
    let hexR = this.r;
    let hexG = this.g;
    let hexB = this.b;
    return [hexR, hexG, hexB]
      .map(ch => Math.max(0, Math.min(255, ch)))
      .map(ch => ch.toString(16))
      .map(ch => ch.length < 2 ? `0${ch}` : ch)
      .join('');
  },
  set(newHex) {
    let threeDigit = newHex.length === 3;
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
      newHex.substring(offsetR, offsetR + delta),
      newHex.substring(offsetG, offsetG + delta),
      newHex.substring(offsetB, offsetB + delta)
    ].map(function toBase10(hexCh) {
      if (hexCh.length === 1) {
        return parseInt(hexCh + hexCh, 16);
      }
      return parseInt(hexCh, 16);
    });
    this.r = r;
    this.g = g;
    this.b = b;
  }
});
// define the hex property here
