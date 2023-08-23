// File System Module - Gain access to read/write access to the file system.
// returns object with lots of functions we can use.
const fs = require('fs');

// Read file from path and return txt
const textIn = fs.readFileSync('./txt/input.txt','utf-8');


console.log(textIn);

