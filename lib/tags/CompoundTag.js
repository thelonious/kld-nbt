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

        // read and discard EndTag
        Tag.readFromBuffer(buffer);
    }

    findTag(name) {
        var result = null;

        for (var i = 0; i < this.elements.length; i++) {
            let candidate = this.elements[i];

            if (candidate.name === name) {
                result = candidate;
                break;
            }
        }

        return result;
    }
};
