function isOddInteger ( num ) {
		
	if ( typeof( num ) === 'number') {	
	
		if ( num % 2 === 1 ) {

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

console.log(isOddInteger(2));
console.log(isOddInteger(2.1));
console.log(isOddInteger('3'));
console.log(isOddInteger(3));