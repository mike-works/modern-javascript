import * as module from '../src/document.js';
const Doc = module.Doc;

describe('document.js exports the correct stuff', () => {
  test('Doc function export is found', () => {
    expect(typeof Doc).toBe('function');
  });
  test('Doc is a constructor', () => {
    let x = new Doc(); //eslint-disable-line
    //eslint-disable-next-line
    expect(x.constructor == Doc.prototype.constructor).toBe(true);
  });
  test('only one thing exported from the module', () => {
    expect(Object.keys(module).length).toBe(1);
  });
});

describe('Doc\'s constructor has the correct public API', () => {
  test('fromFile', () => {
    expect(typeof Doc.fromFile).toBe('function');
  });
});

describe('Doc\'s prototype has the correct public API', () => {
  test('_loadDocument is a function', () => {
    expect(typeof Doc.prototype._loadDocument).toBe('function');
  });
  test('data is a property of type object', () => {
    expect(typeof Doc.prototype.data).toBe('object');
  });
});

describe('Loading a document by filename', () => {
  test('Doc.fromFile("doc-v1.json") should return a new instance of Doc', () => {
    let x = Doc.fromFile('doc-v1.json');
    expect(typeof x).toBe('object');
    expect(x).toBeInstanceOf(Doc);
  });

  test('Attempting to load a non-existing file should throw', () => {
    expect(() => {
      Doc.fromFile('alkshflkh-v1.json');
    }).toThrow('Cannot find document: alkshflkh-v1.json');
  });

  test('doc-v1 - checking changes from v1 to v2', () => {
    let x = Doc.fromFile('doc-v1.json');
    let data = x.data;
    expect(data.firstName).toBe('Michael');
    expect(data.lastName).toBe('North');
    expect(data.name).toBe('Michael L. North');
  });
  test('doc-v1 - checking changes from v2 to v3', () => {
    let x = Doc.fromFile('doc-v1.json');
    let data = x.data;
    expect(data.email).toBe('nobody@example.com');
  });
  test('doc-v1 - checking changes from v3 to v4', () => {
    let x = Doc.fromFile('doc-v1.json');
    let data = x.data;
    expect(data.middleName).toBe('L.');
  });
});

describe('Tricky cases having to do with names', () => {
  test('Empty name is handled by first, middle and last name being empty strings', () => {
    let x = new Doc({version: 1, data: { name: ''}});
    let data = x.data;
    expect(data.firstName).toBe('');
    expect(data.middleName).toBe('');
    expect(data.lastName).toBe('');
  });

  test('Mononym is handled by  middle and last name being empty strings', () => {
    let x = new Doc({version: 1, data: { name: 'Madonna'}});
    let data = x.data;
    expect(data.firstName).toBe('Madonna');
    expect(data.middleName).toBe('');
    expect(data.lastName).toBe('');
  });

  test('Multiple middle names are joined together', () => {
    let x = new Doc({version: 1, data: { name: 'Charles Philip Arthur George Mountbatten-Windsor'}});
    let data = x.data;
    expect(data.firstName).toBe('Charles');
    expect(data.middleName).toBe('Philip Arthur George');
    expect(data.lastName).toBe('Mountbatten-Windsor');
  });
});