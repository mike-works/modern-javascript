/**
 * Invoke a function for each item in an array
 *
 * @export
 * @param {array} array Array to iterate over
 * @param {function} func function to invoke
 * @return {void} nothing
 */
export function forEach(array, func) {
  for (let index = 0; index < array.length; index++) {
    func(array[index]);
  }
}

/**
 * Create a transformed copy of an array, where
 * a transformation function is applied to each item
 *
 * @export
 * @param {array} array list of items to transoform
 * @param {function} transformFunction transformation function
 * @return {array} transformed items
 */
export function map(array, transformFunction) {
  return reduce(
    array,
    (transformedArr, item) => {
      transformedArr.push(transformFunction(item));
      return transformedArr;
    },
    []
  );
}

/**
 * Create a filtered array, given an original array and
 * a filtering function to be invoked on each element.
 * Only those elements where the filtering function returns
 * true will be in the returned filtered array.
 *
 * @export
 * @param {array} array original array
 * @param {function} testFunction filtering function
 * @return {array} filtered array
 */
export function filter(array, testFunction) {
  return reduce(
    array,
    (filteredArr, item) => {
      if (testFunction(item)) {
        filteredArr.push(item);
      }
      return filteredArr;
    },
    []
  );
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
  // SUM UP [1, 2, 3] = 6
  let result = initialVal;
  for (let i = 0; i < array.length; i++) {
    result = reducer(result, array[i], i, array);
    // (sum, value) => {
    //   return sum + value;
    // }
  }
  return result;
}
