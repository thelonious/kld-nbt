
class Tag {
    static create(id, name) {
        switch (id) {
            case Tag.END_TAG:
                return new EndTag(name);
            case Tag.BYTE_TAG:
                return new ByteTag(name);
            case Tag.SHORT_TAG:
                return new ShortTag(name);
            case Tag.INT_TAG:
                return new IntTag(name);
            case Tag.LONG_TAG:
                return new LongTag(name);
            case Tag.FLOAT_TAG:
                return new FloatTag(name);
            case Tag.DOUBLE_TAG:
                return new DoubleTag(name);
            case Tag.BYTE_ARRAY_TAG:
                return new ByteArrayTag(name);
            case Tag.STRING_TAG:
                return new StringTag(name);
            case Tag.LIST_TAG:
                return new ListTag(name);
            case Tag.COMPOUND_TAG:
                return new CompoundTag(name);
            case Tag.INT_ARRAY_TAG:
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

    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    loadFromBuffer(buffer) {
        throw new Error("This method must be overridden by a subclass");
    }
}

// have to define these after the class definition
Tag.END_TAG = 0;
Tag.BYTE_TAG = 1;
Tag.SHORT_TAG = 2;
Tag.INT_TAG = 3;
Tag.LONG_TAG = 4;
Tag.FLOAT_TAG = 5;
Tag.DOUBLE_TAG = 6;
Tag.BYTE_ARRAY_TAG = 7;
Tag.STRING_TAG = 8;
Tag.LIST_TAG = 9;
Tag.COMPOUND_TAG = 10;
Tag.INT_ARRAY_TAG = 11;

// have to export the Tag class before...
module.exports = Tag;

// ...loading all sub-classes
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
