let zlib       = require('zlib'),
    fs         = require('fs'),
    Tag        = require('./tags/Tag'),
    ReadBuffer = require('./ReadBuffer');

module.exports = function loadNBTFile(filename) {
    let rawBuffer = fs.readFileSync(filename);
    let uncompressedBuffer = zlib.gunzipSync(rawBuffer);
    let readBuffer = new ReadBuffer(uncompressedBuffer);
    let nbtData = Tag.readFromBuffer(readBuffer);

    nbtData.loadFromBuffer(readBuffer);

    return nbtData;
};
