let Tag = require('./Tag');

module.exports = class FloatTag extends Tag {
    constructor(name) {
        super(5, name);
    }

    loadFromBuffer(buffer) {
        this.floatValue = buffer.readFloat();
    }
};
