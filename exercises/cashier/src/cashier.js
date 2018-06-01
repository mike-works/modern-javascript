export function cashier() {
  // TODO: implement me
  let items = [];
  let len = 0;
  let tot = 0;
  return {
    add({ name, price, qty = 1 }) {
      items.push({ name, price, qty });
      len += qty;
      tot += qty * price;
      return this;
    },
    get length() {
      return len;
    },
    get total() {
      return tot;
    }
  };
}
