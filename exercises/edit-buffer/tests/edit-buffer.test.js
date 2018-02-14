import * as module from '../src/edit-buffer.js';

const { createProxyHandler } = module;

describe('edit-buffer.js exports are correct', () => {
  test('createProxyHandler function export is found', () => {
    expect(typeof createProxyHandler).toBe('function');
  });
  test('applying the proxy to an object still allows reading of the original properties', () => {
    let obj = { a: 1, b: 2, c: 3 };
    let proxyObj = new Proxy(obj, createProxyHandler());
    expect(proxyObj.a).toBe(1);
    expect(proxyObj.b).toBe(2);
    expect(proxyObj.c).toBe(3);
  });

  test('after wrapping the proxy around the object, values can still be set', () => {
    let obj = { a: 1, b: 2, c: 3 };
    let proxyObj = new Proxy(obj, createProxyHandler());
    proxyObj.a = 99;
    expect(proxyObj.a).toBe(99);
  });

  test('setting values through the proxy does not affect the underlying object', () => {
    let obj = { a: 1, b: 2, c: 3 };
    let proxyObj = new Proxy(obj, createProxyHandler());
    proxyObj.a = 99;
    expect(proxyObj.a).toBe(99);
    expect(obj.a).toBe(1);
  });

  test('save property on proxied object has a function value', () => {
    let obj = { a: 1, b: 2, c: 3 };
    let proxyObj = new Proxy(obj, createProxyHandler());
    expect(typeof proxyObj.save).toBe('function');
    expect(typeof obj.save).toBe('undefined');
  });

  test('invoking the proxyObject#save function persists buffered values onto the wrapped object', () => {
    let obj = { a: 1, b: 2, c: 3 };
    let proxyObj = new Proxy(obj, createProxyHandler());
    proxyObj.a = 99;
    proxyObj.b = 100;
    expect(proxyObj.a).toBe(99);
    expect(proxyObj.b).toBe(100);
    expect(obj.a).toBe(1);
    expect(obj.b).toBe(2);
    proxyObj.save();
    expect(obj.a).toBe(99);
    expect(obj.b).toBe(100);
  });
});
