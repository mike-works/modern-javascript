import { isPromise } from './utils';

/**
 * Given a generator function that yields one or more
 * promises, chain them together in sequence
 *
 * @param {any} genFn generator function that yields one or more promises
 * @return {undefined}
 */
export function task(genFn) {
  let iterator = genFn();
  keepGoing();
  function keepGoing() {
    let yielded = iterator.next.apply(iterator, arguments);
    if (isPromise(yielded.value)) {
      yielded.value.then((d) => {
        keepGoing(d);
      });
    } else if (!yielded.done) {
      keepGoing(yielded.value);
    }
  }
}
