let Tag = require('./Tag');

module.exports = class LongTag extends Tag {
    constructor(name) {
        super(4, name);
    }

    loadFromBuffer(buffer) {
        this.longValue = buffer.readUInt64();
    }
};
