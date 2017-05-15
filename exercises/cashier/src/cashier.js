export function cashier() {
  // TODO: implement me
  let items = [];
  let api = {
    add(item) {
      items.push(item);
      return api;
    },
    get length() {
      return items.reduce((acc, x) => acc + x.qty, 0);
    },
    get total() {
      return items.reduce((acc, x) => acc + x.price * x.qty, 0);
    }
  };
  return api;
}
