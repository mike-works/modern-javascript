export function cashier() {
  // TODO: implement me
  let items = [];
  let cartApi = {
    add({name, price, qty = 1}) {
      items.push({name, price, qty});
      return cartApi;
    },
    get length() {
      let l = 0;
      for (let i = 0; i < items.length; i++) {
        l += items[i].qty;
      }
      return l;
    },
    get total() {
      let tot = 0;
      for (let i = 0; i < items.length; i++) {
        tot += items[i].qty * items[i].price;
      }
      return tot;
    }
  };
  return cartApi;
}