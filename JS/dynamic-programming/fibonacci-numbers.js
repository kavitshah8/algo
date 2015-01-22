function fibonacci (num) {
	
	if ( typeof num ===  'number' && ( num === 1 || num === 2) ) {

		return 1;
	
	} else {

		return fibonacci (num - 1) + fibonacci (num - 2);

	}
}

console.log( fibonacci ( 10 ) );	