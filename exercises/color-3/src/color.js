import { hexToRgb, rgbToHex } from './color-utils';

export function Color(r, g, b) {
  this.r = r;
  this.g = g;
  this.b = b;
  this.names = [];
}

Color.prototype = {
  // names: [],
  preferredName: 'NO-PREFERRED-NAME',
  get hex() {
    return rgbToHex(this.r, this.g, this.b);
  },
  set hex(newVal) {
    let { r, g, b} = hexToRgb(newVal);
    this.r = r;
    this.g = g;
    this.b = b;
  }
};

Color.fromHex = function fromHex(hexStr) {
  let { r, g, b} = hexToRgb(hexStr);
  return new Color(r, g, b);
};

let c = new Color(255, 0, 0);
c.preferredName = 'red';
c.names.push('red');

let c2 = new Color(0, 0, 255);
c2.preferredName = 'blue';
c2.names.push('blue');

console.log('c ->', c.names);
console.log('c2 ->', c2.names);