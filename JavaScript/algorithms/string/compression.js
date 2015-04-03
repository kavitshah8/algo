var str = "abbcccdddd";

var str2 = "abcd";

function compression(str) {
	
	var count = 1;
	var last = str.charAt(0);
	var compressedStr = '';

	for (var i = 1; i < str.length; i++) {
		
		if(last === str[i]) {
			
			count++;

		} else if (count === 1) {

			compressedStr += last;
			last = str[i];
				
		} else {

			compressedStr += last + count;
			last = str[i];
			count = 1;
	
		}

	}

	if (count === 1) {

		compressedStr += last;
	
	} else {

		compressedStr += last + count;
	
	}

	return compressedStr;
}

console.log(compression(str)); // ab2c3d4

console.log(compression(str2)); // abcd