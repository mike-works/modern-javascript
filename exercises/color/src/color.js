export let color = {r: 255, g: 0, b: 0};
Object.defineProperty(color, 'hex', {
  get() {
    return [this.r, this.g, this.b]
      .map((x) => Math.min(Math.max(x, 0), 255).toString(16))
      .map((x) => x.length < 2 ? `0${x}` : x)
      .join('')
      .toUpperCase();
  },
  set(hex) {
    let hx = hex.length === 3 ?
      `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}` :
      hex;
    let [r, g, b] = [0, 2, 4]
      .map((s) => hx.substring(s, s+2))
      .map((s) => parseInt(s, 16));
    this.r = r;
    this.g = g;
    this.b = b;
    return this;
  }
});
// define the hex property here
