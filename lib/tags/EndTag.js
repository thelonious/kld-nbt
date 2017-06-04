let Tag = require('./Tag');

module.exports = class EndTag extends Tag {
    constructor(name) {
        super(0, name);
    }
};
