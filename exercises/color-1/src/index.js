function binaryToHex(x) {
  let binValue = null;
  if (x >= 256) binValue = 255;
  else if (x < 0) binValue = 0;
  else binValue = x;
  // binValue = Math.max(0, Math.min(255, x))

  let raw = binValue.toString(16);
  if (raw.length === 1) return ('0' + raw);
  return raw;
}

function hexToBinary(h) {
  return parseInt(h, 16);
}

export let color = {
  r: 255,
  g: 0,
  b: 0,
  get hex() {
    return [this.r, this.g, this.b]
      .map(decChan => decChan.toString(16))
      .map(hexCh => hexCh.length === 1 ? `0${hexCh}` : hexCh)
      .join('');
    // let hexR = binaryToHex(this.r);
    // let hexG = binaryToHex(this.g);
    // let hexB = binaryToHex(this.b);
    // return `${hexR}${hexG}${hexB}`;
  },
  set hex(hexVal) {
    let channelLength = hexVal.length / 3;
    let hexR = hexVal.substr(0, channelLength);
    let hexG = hexVal.substr(channelLength, channelLength);
    let hexB = hexVal.substr(2 * channelLength, channelLength);
    this.r = hexToBinary(channelLength === 2 ? hexR : `${hexR}${hexR}`);
    this.g = hexToBinary(channelLength === 2 ? hexG : `${hexG}${hexG}`);
    this.b = hexToBinary(channelLength === 2 ? hexB : `${hexB}${hexB}`);
  }
};