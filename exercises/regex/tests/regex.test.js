import * as module from '../src/regex.js';

const { EMAIL_ADDRESS, URL, PASSWORD_INPUT } = module;

/**
 * Regular expression test case
 * @param {RegEx} regex regular expression
 * @param {string} str string to test
 * @param {boolean} expected expected .test result
 * @return {void}
 * @public
 */
function regexTest(regex, str, expected) {
  test(`.test("${str}") --> ${expected}`, () => {
    expect(regex.test(str)).toBe(expected);
  });
}

describe('EMAIL_ADDRESS', () => {
  regexTest(EMAIL_ADDRESS, 'mike@example.com', true);
  regexTest(EMAIL_ADDRESS, 'MIKE@example.com', true);
  regexTest(EMAIL_ADDRESS, 'MIkE-north@Example.com', true);
  regexTest(EMAIL_ADDRESS, 'MIkE-north09@Example.com', true);
  regexTest(EMAIL_ADDRESS, 'mike+others@example.CO.UK', true);
  regexTest(EMAIL_ADDRESS, 'mike@example.com@', false);
  regexTest(EMAIL_ADDRESS, 'mike@example', false);
  regexTest(EMAIL_ADDRESS, 'mike@.example.com', false);
  regexTest(EMAIL_ADDRESS, 'mike@example.', false);
  regexTest(EMAIL_ADDRESS, 'mike.example.com', false);
  regexTest(EMAIL_ADDRESS, '@example@', false);
  regexTest(EMAIL_ADDRESS, 'example@', false);
  regexTest(EMAIL_ADDRESS, '_', false);
});

describe('URL', () => {
  regexTest(URL, 'https://linkedin.com', true);
  regexTest(URL, 'http://linkedin.com', true);
  regexTest(URL, 'ftp://linkedin.com', true);
  regexTest(URL, 'https://linkedin.com/in/', true);
  regexTest(URL, 'http://linkedin.com/in/', true);
  regexTest(URL, 'ftp://linkedin.com/in/', true);
  regexTest(URL, 'https://linkedin.com/in/northm?sort=true', true);
  regexTest(URL, 'http://linkedin.com/in/northm?sort=true&a=b&c=d', true);
  regexTest(URL, 'ftp://linkedin.com/in/northm?sort=true', true);
  regexTest(URL, 'http://linkedin.com/in/northm#readme', true);
  regexTest(URL, 'ftp://linkedin.com/in/northm#readme?sort=true', true);

  regexTest(URL, 'http://', false);
  regexTest(URL, '999', false);
  regexTest(URL, 'linkedin.com/in/northm#readme', false);
  regexTest(URL, '🐹', false);
  regexTest(URL, 'https://com/in/', false);
  regexTest(URL, 'ftp://linkedin.com/in/northm?sort=true#readme', false);
  regexTest(URL, 'http://linkedin.com/in/northm&sort=true', false);
});

describe('PASSWORD_INPUT', () => {
  regexTest(PASSWORD_INPUT, '<input disabled type="password"/>', true);
  regexTest(PASSWORD_INPUT, '<input type="password" disabled />', true);
  regexTest(PASSWORD_INPUT, '<input type="password" />', true);

  regexTest(PASSWORD_INPUT, '<input type="password\' disabled />', false);
  regexTest(PASSWORD_INPUT, '<input type="password disabled />', false);
});
