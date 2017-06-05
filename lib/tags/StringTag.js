let Tag = require('./Tag');

module.exports = class StringTag extends Tag {
    constructor(name) {
        super(Tag.STRING_TAG, name);
    }

    loadFromBuffer(buffer) {
        this.stringValue = buffer.readUTFString();
    }
};
