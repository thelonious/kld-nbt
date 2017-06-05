let Tag = require('./Tag');

module.exports = class FloatTag extends Tag {
    constructor(name) {
        super(Tag.FLOAT_TAG, name);
    }

    loadFromBuffer(buffer) {
        this.floatValue = buffer.readFloat();
    }
};
