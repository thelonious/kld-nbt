let Tag = require('./Tag');

module.exports = class EndTag extends Tag {
    constructor(name) {
        super(Tag.END_TAG, name);
    }
};
