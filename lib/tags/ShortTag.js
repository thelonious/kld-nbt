let Tag = require('./Tag');

module.exports = class ShortTag extends Tag {
    constructor(name) {
        super(Tag.SHORT_TAG, name);
    }

    loadFromBuffer(buffer) {
        this.shortValue = buffer.readInt16();
    }
};
