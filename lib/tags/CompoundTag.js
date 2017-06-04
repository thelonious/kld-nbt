let Tag = require('./Tag');

module.exports = class CompoundTag extends Tag {
    constructor(name) {
        super(10, name);
        this.elements = [];
    }

    loadFromBuffer(buffer) {
        while (buffer.peekUInt8() !== 0) {
            let element = Tag.readFromBuffer(buffer);

            element.loadFromBuffer(buffer);

            this.elements.push(element);
        }
    }
};
