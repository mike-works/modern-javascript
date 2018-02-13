const CURRENT_DOC_VERSION = 4;

/* eslint no-fallthrough: "off" */
export function Doc(doc = { version: CURRENT_DOC_VERSION, data: {} }) {
  this._loadDocument(doc.version, doc.data);
}

Doc.prototype = {
  _loadDocument(docVersion, data) {
    // TODO: Update document based on version
    let nameParts = (data.name || '').split(/\s/g);
    switch (docVersion) {
      case 1: // v1 -> v2 upgrade
        data.firstName = nameParts[0];
        data.lastName =
          nameParts.length > 1 ? nameParts[nameParts.length - 1] : '';
        data.location = 'Earth';
      case 2: // v2 -> v3 upgrade
        data.email = 'nobody@example.com';
      case 3: // v3 -> v4 upgrade
        data.middleName = nameParts.slice(1, nameParts.length - 1).join(' ');
      case 4: // PUT NEXT UPGRADE HERE
    }

    /////
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
