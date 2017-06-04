#!/usr/bin/env node

let NBT = require('./index'),
    Tag = NBT.Tag,
    ReadBuffer = NBT.ReadBuffer,
    fs = require('fs');

let buffer = fs.readFileSync('./test.nbt');
let readBuffer = new ReadBuffer(buffer);
let data = Tag.readFromBuffer(readBuffer);
data.loadFromBuffer(readBuffer);

console.log(data);
