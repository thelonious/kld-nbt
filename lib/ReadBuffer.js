let int64 = require('int64-buffer'),
    Int64BE = int64.Int64BE,
    Uint64BE = int64.Uint64BE;

module.exports = class ReadBuffer {
    constructor(buffer) {
        this.buffer = buffer;
        this.offset = 0;
    }

    seek(position) {
        if (0 <= position && position < this.buffer.length) {
            this.offset = position;
        }
        else {
            throw new Error(
                "seek position out of range. %d is not in [%d,%d)",
                0,
                this.buffer.length
            );
        }
    }

    peekUInt8() {
        return this.buffer.readUInt8(this.offset);
    }

    readUInt8() {
        return this.buffer.readUInt8(this.offset++);
    }

    readInt16() {
        let result = this.buffer.readInt16BE(this.offset);

        this.offset += 2;

        return result;
    }

    readUInt16() {
        let result = this.buffer.readUInt16BE(this.offset);

        this.offset += 2;

        return result;
    }

    readInt32() {
        let result = this.buffer.readInt32BE(this.offset);

        this.offset += 4;

        return result;
    }

    readUInt32() {
        let result = this.buffer.readUInt32BE(this.offset);

        this.offset += 4;

        return result;
    }

    readInt64() {
        let result = new Int64BE(this.readBytes(8));

        return result.toNumber();
    }

    readUInt64() {
        let result = new Uint64BE(this.readBytes(8));

        return result.toNumber();
    }

    readFloat() {
        let result = this.buffer.readFloatBE(this.offset);

        this.offset += 4;

        return result;
    }

    readDouble() {
        let result = this.buffer.readDoubleBE(this.offset);

        this.offset += 8;

        return result;
    }

    readUTFString() {
        let length = this.readInt16();
        var result = null;

        if (length > 0) {
            let characterBuffer = this.readBytes(length);

            result = characterBuffer.toString('utf-8');
        }

        return result;
    }

    readBytes(length) {
        let result = this.buffer.slice(this.offset, this.offset + length);

        this.offset += length;

        return result;
    }
};
