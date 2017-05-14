const CURRENT_DOC_VERSION = 4;

/* eslint no-fallthrough: "off" */
export function Doc(doc = { version: CURRENT_DOC_VERSION, data: {} }) {
  this._loadDocument(doc.version, doc.data);
}

Doc.prototype = {
  _loadDocument(docVersion, data) {
    // TODO: Update document based on version
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
