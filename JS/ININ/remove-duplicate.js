var arr = ['john', 'kavit', 'teju', 'john'];

function removeDuplicate (arr) {
	
	var hash = {};

	for (var i = 0; i < arr.length; i++) {
		
		if ( !hash[arr[i]] ) {

			hash[arr[i]] = 1;
		
		};
	
	};
	
	return Object.keys(hash);
}

console.log(removeDuplicate(arr));