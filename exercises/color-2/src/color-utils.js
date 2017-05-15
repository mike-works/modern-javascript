// Implement your color utils here
export function rgbToHex(r, g, b) {
  return [r, g, b]
    .map(x => Math.max(0, Math.min(x, 255)).toString(16))
    .map(x => (x.length < 2 ? `0${x}` : x))
    .join('');
}

export function hexToRgb(hx) {
  let hex =
    hx.length === 3 ? `${hx[0]}${hx[0]}${hx[1]}${hx[1]}${hx[2]}${hx[2]}` : hx;
  let [r, g, b] = [0, 2, 4].map(x => parseInt(hex.substring(x, x + 2), 16));
  return { r, g, b };
}
