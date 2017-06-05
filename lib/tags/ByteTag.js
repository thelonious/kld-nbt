let Tag = require('./Tag');

module.exports = class ByteTag extends Tag {
    constructor(name) {
        super(Tag.BYTE_TAG, name);
    }

    loadFromBuffer(buffer) {
        this.byteValue = buffer.readUInt8();
    }
};
