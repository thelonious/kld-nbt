let Tag = require('./Tag');

module.exports = class ShortTag extends Tag {
    constructor(name) {
        super(2, name);
    }

    loadFromBuffer(buffer) {
        this.shortValue = buffer.readInt16();
    }
};
