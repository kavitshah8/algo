var str = 'This is a test string';

function uppperLower (str) {
	
	var strArray = str.split(' ');
	// Another way of converting a string into an Array is the following
	// var strArray = [].map.call(str, function(x){return x;})

	for (var i = 0; i < strArray.length; i++) {

		if ( i % 2 === 0) {

			strArray[i] = strArray[i].toUpperCase();
		
		} else {

			strArray[i] = strArray[i].split('').reverse().join('');
		
		}
		
	}

	return strArray.join(' ');
}

console.log(uppperLower(str));