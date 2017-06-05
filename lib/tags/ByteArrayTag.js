let Tag = require('./Tag');

module.exports = class ByteArrayTag extends Tag {
    constructor(name) {
        super(Tag.BYTE_ARRAY_TAG, name);
    }

    loadFromBuffer(buffer) {
        let count = buffer.readInt32();

        this.byteValues = buffer.readBytes(count);
    }
};
