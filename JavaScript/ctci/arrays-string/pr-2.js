// 1.2 Reverse a null terminated string
var str = "Hello";

function reverseString(string) {

	return str.split('').reverse().join('');
}

console.log(reverseString(str)); // olleH

// -----

var sentence = "This is cat";

function reverseSentence(sentence) {

	return sentence.split(' ').reverse().join(' ');
}

console.log(reverseSentence(sentence)); // cat is This