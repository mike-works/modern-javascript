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
    nextStep();
    function nextStep() {
      if (cancelled) return;
      let yielded = iterator.next.apply(iterator, arguments);
      if (isPromise(yielded.value)) {
        yielded.value.then(d => {
          lastValue = yielded.value;
          nextStep(d);
        });
      } else if (!yielded.done) {
        lastValue = yielded.value;
        nextStep(yielded.value);
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
