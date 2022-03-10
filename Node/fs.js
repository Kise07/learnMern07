// fs -> file system module -> it helps us to make files/folders append data in them, delete data, read data
const fs = require('fs'); // require('path_of_the_file);
const { format } = require('path');
// console.log(fs);
// cosnt f1=require('./f1.txt');
const abc = require('../JS/temp');
console.log(abc);
const obj = require('../JS/temp');
// require method, goes to the file that is needed to be required. executes that file. and if there is
console.log(obj);
let ans = obj.add(45, 4);
console.log(ans);

// console.log(fs);
// appendFileSync appends data into a file, if file is not present, it create the file and then appends the data
//  file path // data to be appended
fs.appendFileSync('f1.txt', 'Hello i am f2 file');
fs.appendFileSync('f1.txt', '\nYou guys are smart');
// console.log(res);

let data = fs.readFileSync('f1.txt');
console.log(data + '');
// data receive is an object type, data is in buffer format. For it to be readable, we convert it from buffer to string.
console.log(data + ''); // automatic type conversion se buffer string main convert tho gayi h.

// let data = fs.readFileSync('f1.txt', 'utf-8');
// console.log(data);
