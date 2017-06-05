let Tag = require('./Tag');

module.exports = class DoubleTag extends Tag {
    constructor(name) {
        super(Tag.DOUBLE_TAG, name);
    }

    loadFromBuffer(buffer) {
        this.doubleValue = buffer.readDouble();
    }
};
