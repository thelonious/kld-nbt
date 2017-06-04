#!/usr/bin/env node

let NBT = require('./index');

let nbtData = NBT.loadNBTFile('./test.dat');

NBT.printTag(nbtData);
