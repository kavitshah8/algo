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

module.exports = function () {	

	var instance = new Bird();
	return instance;
};
