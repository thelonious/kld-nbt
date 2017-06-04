#!/usr/bin/env node

let NBT         = require('./index'),
    loadNBTFile = NBT.loadNBTFile,
    printTag    = NBT.printTag;

let nbtData = loadNBTFile('./test.dat');

printTag(nbtData);
