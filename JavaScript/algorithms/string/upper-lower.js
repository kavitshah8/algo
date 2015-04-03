var str = 'This is a test string';

function uppperLower (str) {
	
	var strArray = str.split(' ');

	for (i = 0; i < strArray.length; i++) {

		if ( i % 2 === 0) {

			strArray[i] = strArray[i].toUpperCase();
		
		} else {

			strArray[i] = strArray[i].split('').reverse().join('');
		
		}
		
	}

	return strArray.join(' ');
}

console.log(uppperLower(str));