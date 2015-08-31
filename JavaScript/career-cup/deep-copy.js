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
var v3 = JSON.parse(temp);

// To create a copy of v1 using prototype object
var v4 = Object.create(v1); 
// This method will fail for the case of arrays as shown below
v4.name; // 'Tony'
v4.name = 'Jackson';
v4.name; // 'Jackson'
v1.name; //'Tony'

v4.hobby; // ['meditation','swimming','running']
v3.hobby; // ['meditation','swimming','running']
v4.hobby.push('yoga');
v4.hobby; // ['meditation','swimming','running','yoga']
v3.hobby; // ['meditation','swimming','running','yoga']