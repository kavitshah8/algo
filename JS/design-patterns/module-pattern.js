var testModule = (function(){

	var counter = 0;

	return {
		test: function(){
			console.log(counter);
		}
	};

})();

testModule.test();
testModule.counter;