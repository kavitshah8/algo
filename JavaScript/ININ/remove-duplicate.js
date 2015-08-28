var arr = ['john', 'kavit', 'teju', 'john'];

function removeDuplicate (arr) {
	
	var hash = {};

	for (var i = 0; i < arr.length; i++) {
		
		if (!hash[arr[i]]) {

			hash[arr[i]] = 1;
		
		};
	
	};
	
	return Object.keys(hash);
}

function removeDuplicates2 (arr) {

  var hash = {};

  arr.forEach( function (i) {

    if ( !hash[i] ) {

      hash[i] = true;
    }
  });

  return Object.keys(hash);
}

function arrayToString (arr) {

	var str = '';

	for (var i = 0; i < arr.length; i++) {
		
		str += arr[i];

		if (i != arr.length - 1) {

			str += ',';

		};

	};

	return str;
}

console.log(arrayToString(arr)); // john,kavit,teju,john

console.log(removeDuplicate(arr)); // ['john', 'kavit', 'teju']
