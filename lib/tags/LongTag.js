let Tag = require('./Tag');

module.exports = class LongTag extends Tag {
    constructor(name) {
        super(Tag.LONG_TAG, name);
    }

    loadFromBuffer(buffer) {
        this.longValue = buffer.readUInt64();
    }
};
