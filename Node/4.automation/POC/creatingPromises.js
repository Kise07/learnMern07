// // constructing our own promise

// let myPromise = new Promise(function (resolve, reject) {
// 	let num1 = 1;
// 	let num2 = 10;
// 	let string = "Value is equal to 2";
// 	if (num1 + num2 == 2) {
// 		// resolve();
// 		resolve(string);
// 	} else {
// 		reject("NO, value are not equal");
// 	}
// });

// myPromise
// 	.then(function (string) {
// 		console.log("in .then", string);
// 	})
// 	.catch(function (err) {
// 		console.log(err);
// 	});

//Constructing a Promise

let myPromise = new Promise(function (resolve, reject) {
	let a = "pepcoders";
	let b = "Pepcoders";

	if (a === b) {
		resolve("The values are Equal");
		// resolve function is responsible for fulfillment of Promise
	} else {
		reject("NO , The values are Not Equal");
	}
});

myPromise
	.then(function (result) {
		console.log(" " + result);
	})
	.catch(function (result) {
		console.log(" " + result);
	});
