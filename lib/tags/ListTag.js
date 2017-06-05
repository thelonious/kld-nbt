let Tag = require('./Tag');

module.exports = class ListTag extends Tag {
    constructor(name) {
        super(9, name);
        this.elements = [];
    }

    loadFromBuffer(buffer) {
        let elementId = buffer.readUInt8();
        let count = buffer.readInt32();

        for (var i = 0; i < count; i++) {
            let element = Tag.create(elementId, null);

            element.loadFromBuffer(buffer);

            this.elements.push(element);
        }
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
