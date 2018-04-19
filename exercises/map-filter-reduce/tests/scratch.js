// function makeRgbArray(r, g, b) {
//   return { r, g, b };
// }

// function partial(fn, ...args) {
//   return fn.bind(null, ...args);
// }

// function isAdmin(user) {
//   return user.isAdmin;
// }
// function notAdmin(user) {
//   return !isAdmin(user);
// }

// const notAdmin = not(isAdmin);

// function fillBlue(r, g) {
//   return function(b) {
//     return makeRgbArray(r, g, b);
//   };
// }

// // const fillInBlue = partial(makeRgbArray, 255, 255);
// const fillInBlue = fillBlue(255, 255);

// console.log(fillInBlue(100));

// function dasherize(s) {
//   return s.replace(/\s+/g, '-');
// }

// function capitalize(s) {
//   if (s.length === 0) return '';
//   return `${s[0].toUpperCase()}${s.substring(1)}`;
// }

// function sanitize(s) {
//   return s.replace('>', '&gt;');
// }

// /**
//  *
//  * @param {any} arg value to put into the pipeline
//  * @param {function[]} functions functions to pipe through
//  * @returns {any} result of running all functions
//  */
// function pipe(arg, ...functions) {
//   return functions.reduce((acc, fn) => fn(acc), arg);
// }

// function log(x) {
//   console.log('--->', x);
//   return x;
// }

// let x = pipe('hello world>', dasherize, capitalize, log, sanitize);

// let y = sanitize(capitalize(dasherize('hello world>')));

// console.log({ x, y });

function not(predicate) {
  return function() {
    return !predicate.apply(this, ...arguments);
  };
}

class User {
  constructor() {
    this.admin = true;
  }
  isAdmin() {
    return this.admin;
  }
}
// this === undefined
User.prototype.regularUser = not(User.prototype.isAdmin);

let u = new User();
console.log('regular: ', u.regularUser.apply(u));
console.log('admin: ', u.isAdmin());

class Foo {}
Foo.prototype.serializer = new Serializer();
