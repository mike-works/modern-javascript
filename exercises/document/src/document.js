const CURRENT_DOC_VERSION = 4;

/* eslint no-fallthrough: "off" */
export function Doc(doc = { version: CURRENT_DOC_VERSION, data: {} }) {
  this._loadDocument(doc.version, doc.data);
}

Doc.prototype = {
  _loadDocument(docVersion, data) {
    let nameParts = (data.name || '').split(/\s+/);
    // TODO: Update document based on version
    switch (docVersion) {
    case 1: // v1 to v2
      data.firstName = nameParts[0];
      data.lastName = nameParts.length > 1
        ? nameParts[nameParts.length - 1]
        : '';
    case 2: // v2 to v3
      data.email = 'nobody@example.com';
    case 3: // v3 to v4
      // Foo Bar Bing Baz
      if (nameParts.length > 2) {
        data.middleName = nameParts.slice(1, nameParts.length - 1).join(' ');
      } else {
        data.middleName = '';
      }
    case 4: // Current version
      break;
    default:
      throw `I don't know what to do with this version ${docVersion}`;
    }
    this._data = data;
  },
  get data() {
    return { ...this._data };
  }
};

Doc.fromFile = function fromFile(filename) {
  let doc = require(`../docs/${filename}`);
  return new Doc(doc);
};
