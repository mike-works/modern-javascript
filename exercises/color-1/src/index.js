export let color = { r: 255, g: 0, b: 0 };
// define the hex property here
Object.defineProperty(color, 'hex', {
  get() {
    return [this.r, this.g, this.b]
      .map((x) => Math.max(0, Math.min(x, 255)).toString(16))
      .map((x) => x.length < 2 ? `0${x}` : x)
      .join('');
  },
  set(hx) {
    let hex = hx.length === 3 ? `${hx[0]}${hx[0]}${hx[1]}${hx[1]}${hx[2]}${hx[2]}` : hx;
    let [r, g, b] = [0, 2, 4]
      .map((x) => parseInt(hex.substring(x, x + 2), 16));
    this.r = r;
    this.g = g;
    this.b = b;
  }
});