// QUESTION 5
// This block of code exhibits some interesting features:
if (typeof jht == 'undefined') { jht = {}; }
jht.trainer = jht.trainer || {};
jht.trainer.application = (function() {
    // private
    var currentId = 0;
    var idPrefix = 'jht-trainer-application-';

    // public
    function getNextId() {
        currentId++;
        return (idPrefix + currentId);
    }

    return {
        getNextId: getNextId
    }

})();
//  You don't need to write any code, just answer these questions:
//  1. What's the purpose of the first three lines?
//  2. What does (function() {...})(); do, and why is it important?
//  3. What makes currentId "private" while getNextId() is "public?"

// 1.	First line make sure that jht is not undefined. I would use strict equality (===) to determine jht is not undefined. 
		// If jht is undefined it initialize jht with an empty object.

		// In javaScript || can be used to fill in the default values.
		// The second line can be read like this: if the jht.trainer is truthy value then assign jht.trainer the value of jht.trainer else assign it an empty object.

		// The third line adds a method application to jht.trainer using self invoking anonymous function, which allows us to create public, private variables and methods using closures. 

// 2. 	(function() {...})(); is self invoking anonymous function.
		// It assigns the return value of the calling the function to jht.trainer.application.
		// It allows us to create private variables inside application. Meaning that only getNextId can access the currentId and idPrefix.

		// This pattern allow us to create module pattern in javascript. It is widely used for creating third-party library and resolving name space issues.

		// This pattern has the following advantages from JavaScript Design Patterns by Addy Osmani:

		// 	"The freedom to have private functions which can only be consumed by our module. As they aren't exposed to the rest of the page (only our exported API is), they're considered truly private.
			
		// 	Given that functions are declared normally and are named, it can be easier to show call stacks in a debugger when we're attempting to discover what function(s) threw an exception."

// 3. 	The scoping of the currentId is wrapped around our functions, and used accessed by only getNextId(). No other part of the code can access that variable.
		// Hence, currentId is private.
		// The scoping of the getNextId is wrapped around our functions, which we called and immediately store the return value of.
		// Hence, getNextId is public.

