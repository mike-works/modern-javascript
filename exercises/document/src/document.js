const CURRENT_DOC_VERSION = 4;

/* eslint no-fallthrough: "off" */
export function Doc(doc = { version: CURRENT_DOC_VERSION, data: {} }) {
  this._loadDocument(doc.version, doc.data);
}

Doc.prototype = {
  _loadDocument(docVersion, data) {
    // TODO: Update document based on version
    let doc = data;
    let nameParts = (doc.name || '').split(/[\s]+/g);
    switch (docVersion) {
    case 1:
      doc.firstName = nameParts[0];
      doc.lastName = nameParts.length > 1 ? nameParts[nameParts.length - 1] : '';
    case 2:
      doc.email = 'nobody@example.com';
    case 3:
      doc.middleName = nameParts.slice(1, nameParts.length - 1).join(' ');
    default:
      this._data = doc;
    }
  },
  get data() {
    return Object.assign({}, this._data );
  }
};

Doc.fromFile = function fromFile(filename) {
  try {
    let doc = require(`../docs/${filename}`);
    return new Doc(doc);
  } catch (e) {
    let { message } = e;
    if (message && message.indexOf('find') >= 0) {
      throw `Cannot find document: ${filename}`;
    } else {
      throw e;
    }
  }
};
