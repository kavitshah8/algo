(function  () {
	

	console.log(a);

	console.log(foo());

	var a = 1;

	function foo () {
	
		return 'hello';
	}

})();

// Above code is equivalent to the below code

// (function  () {
	
// 	var a;

// 	function foo () {
	
// 		return 'hello';
// 	}

// 	console.log(a);

// 	console.log(foo());

// 	a = 1;

// })();

