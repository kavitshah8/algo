var dictionary = { };

function fibonacci ( num ) {	

	if ( dictionary[num] ) {

		// console.log(dictionary[num]);

		return dictionary[num];
	
	}

	if ( typeof num === 'number' && ( num === 1 || num === 2 ) ) {

		return 1;
	
	} 
	else {

		var value = fibonacci (num - 1) + fibonacci (num - 2);

		dictionary[num] = value;

		return value;
	}

}

console.log( fibonacci ( 10 ) );	
// console.log( dictionary );	