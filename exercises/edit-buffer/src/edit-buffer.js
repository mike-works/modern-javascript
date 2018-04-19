function save(staged) {
  for (let p in staged) {
    if (staged.hasOwnProperty(p)) {
      this[p] = staged[p];
    }
  }
}
export function createProxyHandler() {
  let staged = {};

  return {
    get(target, propName) {
      if (propName === 'save') {
        return save.bind(target, staged);
      }
      return staged[propName] || target[propName];
    },
    set(target, propName, newVal) {
      staged[propName] = newVal;
      return newVal;
    }
  };
}

let o = [1, 2, 3];
let p = new Proxy(o, createProxyHandler());

p[0] = 100;
console.log(p[0]);
console.log(o[0]);
p.save();
console.log(o[0]);
