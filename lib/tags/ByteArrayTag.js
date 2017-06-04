let Tag = require('./Tag');

module.exports = class ByteArrayTag extends Tag {
    constructor(name) {
        super(7, name);
    }

    loadFromBuffer(buffer) {
        let count = buffer.readInt32();

        this.byteValues = buffer.readBytes(count);
    }
};
