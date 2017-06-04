let Tag = require('./Tag');

module.exports = class IntTag extends Tag {
    constructor(name) {
        super(3, name);
    }

    loadFromBuffer(buffer) {
        this.intValue = buffer.readInt32();
    }
};
