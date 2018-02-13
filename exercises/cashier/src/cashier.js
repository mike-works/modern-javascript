export function cashier() {
  // TODO: implement me
  let cartItems = [];
  return {
    add({ name, price, qty = 1 }) {
      cartItems.push({ name, price, qty });
      return this;
    },
    get length() {
      let l = 0;
      for (let i = 0; i < cartItems.length; i++) {
        l += cartItems[i].qty;
      }
      return l;
    },
    get total() {
      let tot = 0;
      for (let i = 0; i < cartItems.length; i++) {
        tot += cartItems[i].qty * cartItems[i].price;
      }
      return tot;
    }
  };
}
