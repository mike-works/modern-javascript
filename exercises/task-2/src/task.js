// @ts-check

import { isPromise } from './utils/promise';

/**
 * Given a generator function that yields one or more
 * promises, chain them together in sequence
 *
 * @param {function(): IterableIterator<any>} genFn generator function that yields one or more promises
 * @return {Promise} promise resolving to final value of the task
 */
export function task(genFn) {
  return new Promise((resolve) => {
    let iterator = genFn();
    let lastValue = null;
    keepGoing();
    function keepGoing() {
      let yielded = iterator.next.apply(iterator, arguments);
      if (isPromise(yielded.value)) {
        yielded.value.then(d => {
          lastValue = yielded.value;
          keepGoing(d);
        });
      } else if (!yielded.done) {
        lastValue = yielded.value;
        keepGoing(yielded.value);
      } else {
        resolve(lastValue);
      }
    }
  });
}
