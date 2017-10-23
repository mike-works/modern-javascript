/**
 * Invoke a function for each item in an array
 *
 * @export
 * @param {array} array Array to iterate over
 * @param {function} func function to invoke
 * @return {null} nothing
 */
export function forEach(array, func) {
  for (let i = 0; i < array.length; i++) {
    func(array[i]);
  }
}

/**
 * Create a transformed copy of an array, where
 * a transformation function is applied to each item
 *
 * @export
 * @param {array} array list of items to transoform
 * @param {function} func transformation function
 * @return {array} transformed items
 */
export function map(array, func) {
  return reduce(array, (transformed, item) => {
    return transformed.concat(func(item)); // add the item
  }, []);
}

/**
 * Create a filtered array, given an original array and
 * a filtering function to be invoked on each element.
 * Only those elements where the filtering function returns
 * true will be in the returned filtered array.
 *
 * @export
 * @param {array} array original array
 * @param {function} func filtering function
 * @return {array} filtered array
 */
export function filter(array, func) {
  return reduce(array, (passers, item) => {
    if (func(item)) return passers.concat(item); // add the item
    return passers; // don't add the item
  }, []);
}

/**
 * Generate a singular value by iterating over an array.
 * More info: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 *
 * @export
 * @param {any} array original array
 * @param {any} reducer reducer function
 * @param {any} initialVal initial value of accumulator
 * @return {any} ultimate value of the accumulator
 */
export function reduce(array, reducer, initialVal) {
  let result = initialVal;
  for (let i = 0; i < array.length; i++) {
    result = reducer(result, array[i]);
  }
  return result;
}