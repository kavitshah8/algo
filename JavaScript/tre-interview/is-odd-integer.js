function isOdd(num) {
	if (typeof num === 'number') {	
		if (num % 2 === 1) {
			return true;
		}
		else {
			return false;
		}
	}
	else {
		return 'Not a number';
	}
}

console.log(isOdd(2));  // false
console.log(isOdd(2.1)); // false
console.log(isOdd('3')); // Not a number
console.log(isOdd(3)); // true


Number.prototype.isOdd = function(num) {
	if (typeof num === 'number') {	
		if (num % 2 === 1) {
			return true;
		}
		else {
			return false;
		}
	}
	else {
		return 'Not a number';
	}	
}
