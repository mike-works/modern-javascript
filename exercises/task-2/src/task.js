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
  return Promise.resolve([]);
}
