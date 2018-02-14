export function createProxyHandler() {
  let cachedValues = {};
  const save = target => {
    for (let i in cachedValues) {
      if (cachedValues.hasOwnProperty(i)) {
        target[i] = cachedValues[i];
      }
    }
  };
  return {
    get(targ, prop) {
      // "get property" trap
      if (prop === 'save') return save.bind(this, targ);
      return typeof cachedValues[prop] !== 'undefined'
        ? cachedValues[prop]
        : targ[prop];
    },
    set(targ, prop, newVal) {
      // "get property" trap
      cachedValues[prop] = newVal;
      return newVal;
    }
  };
}
