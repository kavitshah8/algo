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
var Bird = require('./bird');

function Duck(){
	this.speciesName = 'duck';
}

Duck.prototype = Bird();

Duck.prototype.call = function() {
	alert('quack');
	return this;
}

var duck = new Duck();