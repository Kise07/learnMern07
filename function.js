// 3 types of function

// 1) Normal function

// function definition
// function function_name(param1, param2) {
//   do something
// }

// function invoke
// function_name(arg1, arg2);

// function add(a, b) {
//   console.log(a + b);
// }

// add(2, 6);

// **functions are treated as first class citizens in JavaScript**
// -> functions can be returned
// -> functions can be passed as parameters/arguments

function calculator(str, a, b) {
	if (str == 'add') {
		return function add() {
			console.log(a + b);
		};
	}
	// else if(str == 'sub'){

	// }
}
let returnedFunc = calculator('add', 2, 3);
console.log('returned function is\n' + returnedFunc);
returnedFunc();

// 2) function Expression

// let variable_name = function(){
//   do something
// }
// name of variable is used to invoke the function
// variable_name();

let sayHi = function () {
	console.log("hello guys! I'm a function expression");
};

console.log('line 54\n' + sayHi);
sayHi();

let sayBye = function () {
	console.log('bye guys!');
};

console.log('line 57\n' + sayHi);
sayHi();
console.log('line 59\n' + sayBye);
sayBye();
// abcd(); // error abcd is not defined
