'use strict';

// Make console.log('i am all lowercase'.capitalize()); to print 'I am all lowercase'

String.prototype.capitalize = String.prototype.capitalize || function ( ) {

	return this.charAt(0).toUpperCase() + this.slice(1);

};

// Define a repeatify function on the String object. 
// The function accepts an integer that specifies how many times the string has to be repeated.
// The function returns the string repeated the number of times specified. 
// For example: console.log('hello'.repeatify(3));
// Should print hellohellohello.

String.prototype.repeatify = String.prototype.repeatify || function ( times ) {

	var str = '';

	for ( var i = 0; i < times; i++ ) {
		
		str += this; 
	};

	return str;
};

String.prototype.palindrome = String.prototype.palindrome || function ( ) {

	if ( typeof this == 'string' ) {

		return this === this.split('').reverse().join('');
		
	}
	else {

		return false;
	}

};

console.log('i am all lowercase'.capitalize());

console.log('hello'.repeatify(3));

console.log('lol'.palindrome());
console.log('loll'.palindrome());