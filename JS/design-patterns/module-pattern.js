var testModule = (function(){

	var counter = 0;

	return {

		test: function(){
			console.log(counter);
		
		}
	
	};

})();

//testModule = { test: function }

testModule.test; // function() {}

testModule.test(); // 0

testModule.counter; // undefined
