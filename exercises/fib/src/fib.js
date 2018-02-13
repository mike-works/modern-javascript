/**
 * Generate a sequence of fibonacci numbers, with a given length
 *
 * @export
 * @param {any} length length of sequence to generate
 * @returns {number[]} fibonacci sequence
 */

export function getFibSequence(rawLength) {
  let length = parseInt(rawLength, 10);
  if (isNaN(length) || length < 0) return undefined;
  // Here we know length is a number >= 0
  let older = 1;
  let old = 0;
  let values = [];

  for (let i = 0; i < length; i++) {
    let thisVal = older + old;
    values.push(thisVal);
    older = old;
    old = thisVal;
  }
  // TODO: replace this with your implementation
  return values;
}
