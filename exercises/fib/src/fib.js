/**
 * Generate a sequence of fibonacci numbers, with a given length
 *
 * @export
 * @param {any} length length of sequence to generate
 * @returns {undefined|number[]} fibonacci sequence
 */
export function getFibSequence(length) {
  // TODO: replace this with your implementation
  let l = parseInt(length, 10);
  if (l < 0 || isNaN(l)) return;
  let seq = [];
  let twoAgo = 1;
  let oneAgo = 0;
  for (let i = 0; i < l; i++) {
    let next = oneAgo + twoAgo;
    twoAgo = oneAgo;
    oneAgo = next;
    seq.push(next);
  }
  return seq;
}
