// QUESTION 2
// Implement and explain this function:
// buildBoundsDetector() takes numeric upper and lower bounds
// and returns a function that accepts a single numeric argument
// and returns true if the argument is inside the bounds and
// false if it is outside.  In other words, it could be used like this:
//     var isPercentage = buildBoundsDetector(0, 100);
//     if (isPercentage(4)) { ...
//
// Use <= and >= for the comparisions.
//
// Explain why this works.

function buildBoundsDetector(lowerBound, upperBound) {  // returns function
	// implement me!

	return function(num) {

		if ( (num >= lowerBound) && (num <= upperBound) ) {
			return true;
		} else {
			return false;
		}
	};
}
// In JavaScript functions are first class objects. Hence, functions can be returned from the functions.
// An inner function can access the variables defined in the outer even after the outer function returned the value, thanks to closures.
// Calling buildBoundsDetector returns another function which accepts one argument 'num'
// when calling returned function (here isPercentage), we can access the variables lowerBound, upperBound.
var isPercentage = buildBoundsDetector(0, 100);