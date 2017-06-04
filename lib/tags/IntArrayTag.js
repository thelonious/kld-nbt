let Tag = require('./Tag');

module.exports = class IntArrayTag extends Tag {
    constructor(name) {
        super(11, name);
        this.intValues = [];
    }

    loadFromBuffer(buffer) {
        let count = buffer.readInt32();

        for (var i = 0; i < count; i++) {
            this.intValues.push(buffer.readInt32());
        }
    }
};
