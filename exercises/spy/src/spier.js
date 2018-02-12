/**
 * A manager of one or more temporarilly-installed "spy" functions
 *
 * @export
 * @returns {Spier} a new instance of a Spier
 */
export function Spier() {}

Spier.prototype = {
  /**
   * Spy on a function
   *
   * @param {any} obj Object that owns the function
   * @param {any} funcName name of the function to spy on
   * @param {any} stub (optional), function to use when invoking the spy
   * @returns {undefined}
   */
  spy(obj, funcName, stub) {},
  /**
   * Get the number of installed spies
   */
  get length() {},
  /**
   * Release a spy
   *
   * @param {function} spy the spy to release
   * @return {undefined}
   */
  release(spy) {},
  /**
   * Release all spies
   * @return {undefined}
   */
  releaseAll() {}
};
