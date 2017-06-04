let Tag = require('./Tag');

module.exports = class DoubleTag extends Tag {
    constructor(name) {
        super(6, name);
    }

    loadFromBuffer(buffer) {
        this.doubleValue = buffer.readDouble();
    }
};
