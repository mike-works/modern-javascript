// @ts-nocheck

import { isPromise, wait } from './utils/promise';
/**
 * Given a generator function that yields one or more
 * promises, chain them together in sequence
 *
 * @param {function(): IterableIterator<any>} genFn generator function that yields one or more promises
 * @return {Promise} promise resolving to final value of the task
 */
export function task(genFn) {
  let isCancelled = false;
  function begin() {
    return new Promise((resolve, reject) => {
      let it = genFn(); // get the iterator
      function nextValue(lastVal) {
        let { value, done } = it.next(lastVal);
        if (done) {
          console.log('All done!!!');
          return;
        }
        if (isCancelled) {
          console.log('Cancelled !!!');
          return;
        }
        value
          .then(resolvedValue => {
            nextValue(resolvedValue);
          })
          .catch(err => {
            reject(err);
          });
      }
      nextValue();
    });
  }
  let p = begin();
  p.cancel = () => {
    isCancelled = true;
  };
  p.retry = () => {
    isCancelled = false;
    p = begin();
  };
  return p;
}

let pr = task(function* testGen() {
  yield wait(1000);
  console.log('1');
  yield wait(1000);
  console.log('2');
  yield wait(1000);
  console.log('3');
  yield wait(1000);
  console.log('4');
  yield wait(1000);
  console.log('5');
  yield wait(1000);
  console.log('6');
});

setTimeout(() => {
  pr.cancel();
}, 2700);

setTimeout(() => {
  pr.retry();
}, 3700);
