const CURRENT_DOC_VERSION = 4;

/* eslint no-fallthrough: "off" */
export function Doc(doc = { version: CURRENT_DOC_VERSION, data: {} }) {
  this._loadDocument(doc.version, doc.data);
}

Doc.prototype = {
  _loadDocument(docVersion, data) {
    // TODO: Update document based on version
    this._data = data;
    switch (docVersion) {
      case 1: {
        // v1 -> v2
        let nameParts = data.name.split(/\s+/);
        data.firstName = nameParts[0];
        data.lastName =
          nameParts.length === 1 ? '' : nameParts[nameParts.length - 1];
      }
      case 2: // v2 -> v3
        data.email = 'nobody@example.com';
      case 3: {
        // v3 -> v4
        let nameParts = data.name.split(/\s+/);
        data.middleName =
          nameParts.length > 2
            ? nameParts.slice(1, nameParts.length - 1).join(' ')
            : '';
      }
      default:
    }
  },
  get data() {
    return { ...this._data };
  }
};

Doc.fromFile = function fromFile(filename) {
  let doc = require(`../docs/${filename}`);
  return new Doc(doc);
};
