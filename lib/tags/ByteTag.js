let Tag = require('./Tag');

module.exports = class ByteTag extends Tag {
    constructor(name) {
        super(1, name);
    }

    loadFromBuffer(buffer) {
        this.byteValue = buffer.readUInt8();
    }
};
