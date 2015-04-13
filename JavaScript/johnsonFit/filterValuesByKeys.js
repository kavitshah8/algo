function filterValuesByKeys(obj, filter) {  // returns array
	// implement me!

	var resultArray = [];

	// iterates over all the unique keys in obj
	for ( var key in obj ) {

		// avoids looking up properties in the prototypical hierarchical chain
		if (obj.hasOwnProperty(key)) {

			if (filter(key) === true) {

				resultArray.push(obj[key]);
			}
		}
	}

	return resultArray;
}

function filter( key ) {

	if (key === 'true') {

		return true;
	} else {

		return false;
	}
}

// JSON keys should be unique
var obj = {
	"firstName": "kavit",
	"rue": "sandip",
	"MotherName":"Pratima",
	"Mothername":"Pratima",
	"true": "Teju",
}

var result = filterValuesByKeys(obj, filter);
console.log(result);