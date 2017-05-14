export function cashier() {
  let items = [];
  let api = {
    add(item = {qty: 1}) {
      if (item.qty === undefined) {
        item.qty = 1;
      }
      items.push(item);
      return api;
    },
    get length() {
      return items.reduce((acc, item) => acc + item.qty, 0);
    },
    get total() {
      return items.reduce((acc, item) => acc + (item.qty * item.price), 0);
    }
  };
  return api;
}

let cart = cashier();

cart.add({name: 'Lemons', price: 0.99, qty: 3});
console.log('Updated Length: ', cart.length);
cart.add({name: 'Grapes', price: 1.12}); // defaults to 1 qty
console.log('Updated Length: ', cart.length);
console.log('Total: ', cart.total);