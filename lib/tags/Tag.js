module.exports = class Tag {
    static create(id, name) {
        switch (id) {
            case 0:
                return new EndTag(name);
            case 1:
                return new ByteTag(name);
            case 2:
                return new ShortTag(name);
            case 3:
                return new IntTag(name);
            case 4:
                return new LongTag(name);
            case 5:
                return new FloatTag(name);
            case 6:
                return new DoubleTag(name);
            case 7:
                return new ByteArrayTag(name);
            case 8:
                return new StringTag(name);
            case 9:
                return new ListTag(name);
            case 10:
                return new CompoundTag(name);
            case 11:
                return new IntArrayTag(name);
            default:
                return null;
        }
    }

    static readFromBuffer(buffer) {
        let id = buffer.readUInt8();
        var name = null;

        if (id != 0) {
            name = buffer.readUTFString();
        }

        return Tag.create(id, name);
    }

    loadFromBuffer(buffer) {
        throw new Error("This method must be overridden by a subclass");
    }

    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}

let EndTag       = require('./EndTag'),
    ByteTag      = require('./ByteTag'),
    ShortTag     = require('./ShortTag'),
    IntTag       = require('./IntTag'),
    LongTag      = require('./LongTag'),
    FloatTag     = require('./FloatTag'),
    DoubleTag    = require('./DoubleTag'),
    ByteArrayTag = require('./ByteArrayTag'),
    StringTag    = require('./StringTag'),
    ListTag      = require('./ListTag'),
    CompoundTag  = require('./CompoundTag'),
    IntArrayTag  = require('./IntArrayTag');
