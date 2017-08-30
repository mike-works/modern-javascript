export function cashier() {
  // TODO: implement me
  let cartItems = [];
  return {
    add(cartItem) {
      cartItems.push(cartItem);
      return this;
    },
    get length() {
      let sum = 0;
      for (let i = 0; i < cartItems.length; i++) {
        sum = sum + cartItems[i].qty;
      }
      return sum;
    },
    get total() {
      let tot = 0;
      for (let i = 0; i < cartItems.length; i++) {
        tot = tot + (cartItems[i].qty * cartItems[i].price);
      }
      return tot;
    }
  };
}
