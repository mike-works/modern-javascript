import { isPromise } from './utils';

/**
 * Given a generator function that yields one or more
 * promises, chain them together in sequence
 *
 * @param {any} genFn generator function that yields one or more promises
 * @return {undefined}
 */
export function task(genFn) {
  let cancelled = false;
  let p = new Promise((resolve) => {
    let iterator = genFn();
    let lastValue = null;
    keepGoing();
    function keepGoing() {
      if (cancelled) return;
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
        p.finished = true;
        resolve(lastValue);
      }
    }
  });
  p.finished = false;
  p.cancel = () => {
    cancelled = true;
  };
  return p;
}
