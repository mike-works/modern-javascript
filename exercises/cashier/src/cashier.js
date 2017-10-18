// @ts-check
/**
 * @typedef CartItem
 * @property {number} [qty]
 * @property {number} price
 * @property {string} name
 */

export function cashier() {
  /** @type {CartItem[]} */
  let items = [];

  const cartApi = {
    get length() {
      let sum = 0;
      for (let i = 0; i < items.length; i++) sum += items[i].qty;
      return sum;
    },
    get total() {
      let total = 0;
      for (let i = 0; i < items.length; i++) {
        total += (items[i].qty * items[i].price);
      }
      return total;
    },
    /**
     * 
     * @param {CartItem} cartItem item to add to the cart
     * @returns {any} the cart API
     */
    add({name, price, qty = 1}) {
      items.push({name, price, qty});
      return cartApi;
    },
    clear() {
      items = [];
      return cartApi;
    }
  };
  return cartApi;
}

let cart = cashier();
cart.add({name: 'Apple', price: 1.21, qty: 5})
  .add({name: 'Apple', price: 1.21, qty: 5})
  .add({name: 'Apple', price: 1.21, qty: 5})
  .add({name: 'Apple', price: 1.21, qty: 5});