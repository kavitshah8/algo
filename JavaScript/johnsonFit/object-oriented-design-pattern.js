// QUESTION 4
// (Because JavaScript object-oriented terminology
// is not standardized, we'll define my terms. If
// the concepts are unfamiliar, you may want to skip
// this question.)
//
// Definitions: A "constructor" is a
// function designed to be called with the "new"
// operator.  A "class" is a "constructor" with
// functions defined on its prototype, and these
// functions are refered to as "methods".  A
// constructor is said to build an "instance" of
// the class. A "sub-class" is a class with prototype
// that is an instance of another class.
//
// We have the following class definition:
function Bird(speciesName, isMale, daysSinceBirth) {
	this.speciesName = speciesName || 'unknown';
	this.daysSinceBirth = Number(daysSinceBirth) || 0;
	this.isMale = Boolean(isMale);
}
Bird.prototype.call = function() {
	alert( 'twitter!' );
	return this;
}
Bird.prototype.fly = function() {
	alert('flap!');
	return this;
}
Bird.prototype.panic = function() {
	this.call().call().fly().fly();
}
// Sub-class Bird() to create a Duck() class such that:
// 1. the constructor does not have a speciesName argument.
// 2. every duck has a speciesName attribute equal to 'duck'.  
// 3. the constructor calls the Bird() constructor in order 
//    to re-use the "defaulting" logic.
// 4. call() is overidden to display 'quack!'.
// 5. a call to panic() shows four alert boxes: quack! quack! flap! flap!
//
// Override as few methods as possible.  Try to implement
// methods at the class level instead of the instance level.
// sub-class me!

function Duck(){
	this.speciesName = 'duck';
}

Duck.prototype = Bird();

Duck.prototype.call = function() {
	alert('quack');
	return this;
}