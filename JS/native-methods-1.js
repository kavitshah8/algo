// Make console.log('i am all lowercase'.capitalize()); to print 'I am all lowercase'

String.prototype.capitalize = function() {

	return this.charAt(0).toUpperCase() + this.slice(1);

};

console.log('i am all lowercase'.capitalize());