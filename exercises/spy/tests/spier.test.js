import * as module from '../src/spier.js';

const { Spier } = module;

describe('spier.js exports are correct', () => {
  test('Spier function export is found', () => {
    expect(typeof Spier).toBe('function');
  });
  test('Spier is a constructor', () => {
    let x = new Spier(); //eslint-disable-line
    //eslint-disable-next-line
    expect(x.constructor == Spier.prototype.constructor).toBe(true);
  });
  test('only one thing exported from the module', () => {
    expect(Object.keys(module).length).toBe(1);
  });
});

describe('Spier protype has correct public API', () => {
  test('Spier#spy function', () => {
    expect(typeof Spier.prototype.spy).toBe('function');
  });
  test('Spier#releaseAll function', () => {
    expect(typeof Spier.prototype.releaseAll).toBe('function');
  });
  test('Spier#length property', () => {
    expect(typeof (new Spier()).length).toBe('number');
  });
});

describe('Installation of a spy works', () => {
  function f(x) {
    return 123 + x;
  }
  let o = {
    a: f
  };
  let s = new Spier();
  test('Spying replaces the original function', () => {
    expect(o.a === f).toBe(true);
    s.spy(o, 'a');
    expect(typeof o.a).toBe('function');
    expect(o.a === f).toBe(false);
  });

  test('"spy" has a count property, that initially starts at 0', () => {
    expect(o.a.count).toBe(0);
  });

  test('with a "spy" installed, functions still return the same values', () => {
    expect(o.a(2)).toBe(125);
  });

  test('"spy" has a count property, that increments with each invocation', () => {
    expect(o.a.count).toBe(1);
  });

  test('Spier instance has a length property, which tells us how many spies are installed', () => {
    expect(s.length).toBe(1);
  });
});

describe('Stubbing works', () => {
  function f(x) {
    return 123 + x;
  }
  let o = {
    a: f
  };
  test('Invoking a "spy" function returns the same result as usual', () => {
    let s = new Spier();
    expect(o.a(2)).toBe(125);
    s.spy(o, 'a');
    expect(o.a(2)).toBe(125);
  });
  test('Invoking a "spy" installed w/ a provided stub returns the "canned" result', () => {
    let s = new Spier();
    expect(o.a(2)).toBe(125);
    s.spy(o, 'a', (x) => 10 + x);
    expect(o.a(2)).toBe(12);
    s.releaseAll();
  });
});

describe('Releasing a spy works', () => {
  function f() {
    return 123;
  }
  let o = {
    a: f
  };
  let s = new Spier();
  test('Spier#release(spy) restores object back to normal', () => {
    expect(o.a === f).toBe(true);
    s.spy(o, 'a');
    expect(typeof o.a).toBe('function');
    expect(o.a === f).toBe(false);
    s.release(o.a);
    expect(o.a === f).toBe(true);
    expect(typeof o.a.count).toBe('undefined');
  });

  test('Spier#releaseAll() restores all objects back to normal', () => {
    expect(o.a === f).toBe(true);
    s.spy(o, 'a');
    expect(typeof o.a).toBe('function');
    expect(o.a === f).toBe(false);
    expect(s.length).toBe(1);
    s.releaseAll();
    expect(s.length).toBe(0);
    expect(o.a === f).toBe(true);
    expect(typeof o.a.count).toBe('undefined');
  });
});