// calling the file system module, this will allow us to manage files from our system.
const fs = require('fs');

// ----------------------------------------------------------------
// Reading and writing files from the filesystem
// Bad / Synchronous - first file system is required, the the file is read and the log to the console,
// each line of code waits for the previous line to be processed before continuing. This can be BLOCKING
// 
// offload working to the background to be worked on
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// const textIn=fs.readFileSync('./txt/input.txt', 'utf8');
// console.log(textIn);

// const textOut = `This is what we know about the avacado ${textIn}.\nCreated on ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt', textOut, 'utf8');
// console.log('Successfully wrote to the file');
// ----------------------------------------------------------------
// SOLUTION is to write Asynchronous code :) 
// ----------------------------------------------------------------
// fs.readFile('./txt/input.txt', 'utf-8', (err, data) => {
//     console.log(data);
// });
// console.log('Reading file...');

// ----------------------------------------------------------------
// Blocking code, synchronous
// const textIn = fs.readFileSync('./txt/input.txt', 'utf8');
// console.log(textIn);
// const textOut = `This is what we know about the avacado ${textIn}.\nCreated on ${Date.now()}`
// fs.writeFileSync('./txt/output.txt', textOut);
// console.log('File written...');
// ----------------------------------------------------------------
// Non-blocking, the asynchronous way.
// fs.readFile(`./txt/input.txt`, 'utf-8', (err, data) => {
//     console.log(data);
// });
// console.log('Will read file!');
// ----------------------------------------------------------------
fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
    if (err) return console.log('ERROR!')
    fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
        console.log(data2);
        fs.readFile('./txt/append.txt', 'utf-8', (err, data3) => {
            console.log(data3);
            // Writing data to file...
            fs.writeFileSync('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', err=> {
                console.log('Your file has been written successfully');
            })
        });
    });
});
console.log('Will read file!');
