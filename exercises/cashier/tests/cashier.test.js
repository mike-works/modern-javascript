import * as module from '../src/cashier.js';


describe('cashier.js exports are correct', () => {
  test('cashier function export is found', () => {
    expect(typeof module.cashier).toBe('function');
  });
  test('cashier returns an object', () => {
    let x = new module.cashier(); //eslint-disable-line
    expect(typeof x).toBe('object');
  });
  test('cashier returns an object, but is not a constructor', () => {
    let x = new module.cashier(); //eslint-disable-line
    //eslint-disable-next-line
    expect(x.constructor == module.cashier.prototype.constructor).toBe(false);
  });
  test('only one thing exported from the module', () => {
    expect(Object.keys(module).length).toBe(1);
  });
});

describe('adding each item, increases length as appropriate', () => {
  let c = module.cashier();
  test('cart.length is initially zero', () => {
    expect(c.length).toBe(0);
  });
  test('length is 2 after cart.add({name: "Grapes", price: 1.12, qty: 2});', () => {
    c.add({name: 'Grapes', price: 1.12, qty: 2});
    expect(c.length).toBe(2);
  });
  test('length is 7 after cart.add({name: "Pears", price: 3.51, qty: 5});', () => {
    c.add({name: 'Pears', price: 3.51, qty: 5});
    expect(c.length).toBe(7);
  });
});

describe('adding each item, increases total as appropriate', () => {
  let c = module.cashier();
  test('total is initially zero', () => {
    expect(c.total).toBe(0);
  });
  test('total is 2.24 after adding 2 grapes ($1.12 each)', () => {
    c.add({name: 'Grapes', price: 1.12, qty: 2});
    expect(c.total).toBe(2.24);
  });
  test('total is 19.79 after adding 5 pears ($3.51 each)', () => {
    c.add({name: 'Pears', price: 3.51, qty: 5});
    expect(c.total).toBe(19.79);
  });
});

describe('chaining to add a few items', () => {
  let c = module.cashier();
  test('add a few items by chaining', () => {
    let tot = c
      .add({name: 'Grapes', price: 1.12, qty: 2})
      .add({name: 'Pears', price: 3.51, qty: 5})
      .total;
    expect(tot).toBe(19.79);
  });
});
