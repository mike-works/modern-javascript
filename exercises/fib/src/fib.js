/**
 * Generate a sequence of fibonacci numbers, with a given length
 *
 * @export
 * @param {any} length length of sequence to generate
 * @returns {number[]} fibonacci sequence
 */

export function getFibSequence(length) {
  if (typeof length === 'undefined' || length === null || (typeof length === 'number' && length < 0)) return undefined;
  if (length === 0) return [];
  if (length === 1) return [1];
  let seq = [1, 1];
  let l = parseInt(length, 10); // Not strictly necessary, but a good practice
  for (let i = 2; i < l; i++) {
    seq.push(seq[i - 1] + seq[i - 2]);
  }
  return seq;
}
