let Tag = require('./Tag');

module.exports = class StringTag extends Tag {
    constructor(name) {
        super(8, name);
    }

    loadFromBuffer(buffer) {
        this.stringValue = buffer.readUTFString();
    }
};
