//1.4 Write a method to replace all spaces in a string with '%20'.

var str = 'My name is Tom';

function replace(str) {

	return str.split(' ').join('%20');
}

console.log(replace(str));