let Tag = require('./Tag');

module.exports = class IntTag extends Tag {
    constructor(name) {
        super(Tag.INT_TAG, name);
    }

    loadFromBuffer(buffer) {
        this.intValue = buffer.readInt32();
    }
};
