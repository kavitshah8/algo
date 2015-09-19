function isOdd(num) {
	if (typeof num === 'number') {	
		return ((num % 2) === 1) || ((num % 2) === -1) ? true : false;
	}
	else {
		throw 'Not a number';
	}
}

console.log(isOdd(3)); // true
console.log(isOdd(2));  // false
console.log(isOdd(-3));  // true
console.log(isOdd(2.1)); // false
console.log(isOdd('3')); // Uncaught Not a number

Number.prototype.isOdd = function() {
		return ((this % 2) === 1) || ((this % 2) === -1) ? true : false;
}


var a = -3;
console.log(a.isOdd());  // true

a = 2.1;
console.log(a.isOdd()); // false

console.log((3).isOdd()); // true
console.log((2).isOdd());  // false

a = '3';
console.log(a.isOdd()); // Uncaught Not a number
