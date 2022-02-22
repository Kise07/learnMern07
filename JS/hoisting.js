console.log(a); // undefined
console.log(hello); // undefined
greet();
// hello();
var a = 10;
function greet() {
	console.log('hello pepcoders');
}
var hello = function () {
	console.log('you guys rock!');
};

// hello();

// JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables to the top of their scope, prior to execution of the code.

// my definition
// we can access the variables and function even before we have declared it. // hoisting
