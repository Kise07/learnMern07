// String is a sequence of characters

var str = 'Hello pepcoders';
// H e l l o <space> p e p c  o  d  e  r  s
// 0,1,2,3,4,   5,   6,7,8,9,10,11,12,13,14
console.log(str);

console.log(str[4]);
console.log(str.length);

// String methods

// 1. Extraction method

// slice method
// slice(start, end) -> start index is inclusive and end index is exclusive.
//  (start, end)
var slicedStr = str.slice(6, 15); // start index se shuru hoga aur ending index se ek pehle index tak sring kategi
console.log(slicedStr);
console.log(str); // original source of information is not changed

var slicedStr = str.slice(6); // start se leke pori end tak string kategi
console.log(slicedStr);

var slicedStr = str.slice(2, -4); // start se leke peeche ke end jane chod do
console.log(slicedStr);

// SubString methods

// substr(start, length); start index se shuru hoga aur aage ke kitne character capture krne h

let ans = str.substr(2, 6);
console.log(ans);
console.log(str);

// replacing
str = 'YOLO';
console.log(str);

// to lower and uppercase
console.log(str.toLowerCase()); //yolo
str = 'fomo';
console.log(str.toUpperCase()); //FOMO
console.log(str); // information is intact and has not been tampered with

// concatenation methods -> 2 combine 2 strings and make them one string

let firstStr = 'Believe in ';
let secondStr = 'yourself';

let concatenatedStr = firstStr + secondStr;
console.log(concatenatedStr);

// concat methods
let concatStr = firstStr.concat(secondStr, ' and me');
console.log(concatStr);

// trim methods -> remove all the whitespaces of starting and ending of a string

let trimStr =
	'                                      Hello        how are you            ';
console.log(trimStr);
console.log(trimStr.length);

console.log(trimStr.trim());
console.log(trimStr.trim().length);
