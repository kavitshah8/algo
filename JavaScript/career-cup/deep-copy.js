// Write a function called deepCopy that takes an object and creates a deep copy of it. 

// var newObj = deepCopy(obj); 

// (can't use JSON, can't use prototype)

//Using JSON 

var v1 = {
	'name': 'Tony',
	'age': 27,
	'hobby': ['meditation','swimming','running'],
	'address': {
		'street': '1230 W Washington Av',
		'city': 'Sunnyvale',
		'Zipcode': 46086
	}
}

// v2 refers to the same object as v1. It does not create a copy of it.
var v2 = v1;

// To create a copy of v1 using JSON object
var temp = JSON.stringify(v1);
var v2 = JSON.parse(temp);