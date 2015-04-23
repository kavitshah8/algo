var obj = {
	'name': 'Alex',
	'age': 25,
	'relationship-status': undefined
};

// Features:
// 1. Removes keys with undefined values
// 2. All keys are double quoted
// 3. All string values are double quoted
console.log(JSON.stringify(obj));

// Features:
// 1. Passing third parameter pritifies things
console.log(JSON.stringify(obj, null, 2));
