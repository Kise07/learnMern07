// JavaScripts objects are always in 'key' = 'value' pair

let obj = {}; // empty object
console.log(obj);

let person = {
	// key : value
	// key(property, method()) : value
	name: 'Abhishek',
	age: 28,
	phone: 99999999999,
	gender: 'Male',
	height: '170cm',
};

console.log(`Hey ${person.name}, thank you for signing up !`);
console.log(person.gender);
console.log(person['gender']);

let str = 'Hello';
console.log(str.length); // dot notation
console.log(str['length']); // square bracket notation

// nesting of objects
let captainAmerica = {
	firstName: 'Steve',
	lastName: 'Rogers',
	friends: ['Bucky', 'Tony Stark', 'Bruce Banner'],
	age: 102,
	isAvenger: true,
	address: {
		state: 'Manhattan',
		city: 'New York',
		country: 'USA',
	},
	sayHi: function () {
		console.log(`Hello my name is ${this.firstName}`);
	},
};

console.log(captainAmerica);
console.log(captainAmerica.friends);
console.log(captainAmerica.friends[0]);
captainAmerica.sayHi(); // methods accesing

// methods -> objects ke andar function
console.log(str.toUpperCase());

// for loop
// in keyword in JS is used to get keys from that objects
for (let haathi in captainAmerica) {
	// key
	console.log(haathi);
	// haathi jo variable h uske andar meri key ki value padi hui h
	// value
	// variable ke andar jo binded value h wo chahiye
	console.log(captainAmerica[haathi]); // bracket notation usage
}

// str{
//     length: //
//     toUpperCase: function() {

//         for()
//     }
// }

// methods -> objects ke andar function
console.log(str.toUpperCase());

let arr = ['a', 'b', 1, true];

let arrr = {
	0: 'a',
	1: 'b',
	2: 1,
	3: true,
};
