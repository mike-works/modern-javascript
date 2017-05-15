/**
 * A manager of one or more temporarilly-installed "spy" functions
 *
 * @export
 * @returns {Spier} a new instance of a Spier
 */
export function Spier() {
  this._spies = new Map();
}

Spier.prototype = {
  /**
   * Spy on a function
   *
   * @param {any} obj Object that owns the function
   * @param {any} funcName name of the function to spy on
   * @param {any} stub (optional), function to use when invoking the spy
   * @returns {undefined}
   */
  spy(obj, funcName, stub) {
    let originalFunc = obj[funcName];
    let spyFunc = function() {
      let result = (stub || originalFunc)(...arguments);
      spyFunc.invocations.push({ args: [...arguments], result });
      return result;
    };
    spyFunc.funcName = funcName;
    spyFunc.host = obj;
    spyFunc.invocations = [];
    Object.defineProperty(spyFunc, 'count', {
      get() {
        return spyFunc.invocations.length;
      }
    });
    this._spies.set(spyFunc, originalFunc);
    obj[funcName] = spyFunc;
  },
  /**
   * Get the number of installed spies
   */
  get length() {
    return this._spies.size;
  },
  /**
   * Release a spy
   *
   * @param {function} spy the spy to release
   * @return {undefined}
   */
  release(spy) {
    spy.host[spy.funcName] = this._spies.get(spy);
    this._spies.delete(spy);
  },
  /**
   * Release all spies
   * @return {undefined}
   */
  releaseAll() {
    for (let spy of this._spies.keys()) {
      this.release(spy);
    }
  }
};
