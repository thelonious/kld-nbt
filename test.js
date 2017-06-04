#!/usr/bin/env node

let zlib       = require('zlib'),
    fs         = require('fs'),
    NBT        = require('./index'),
    Tag        = NBT.Tag,
    ReadBuffer = NBT.ReadBuffer,
    printTag   = NBT.printTag;

let rawBuffer = fs.readFileSync('./test.dat');
let uncompressedBuffer = zlib.gunzipSync(rawBuffer);
let readBuffer = new ReadBuffer(uncompressedBuffer);
let data = Tag.readFromBuffer(readBuffer);
data.loadFromBuffer(readBuffer);

printTag(data);
