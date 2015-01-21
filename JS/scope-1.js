(function(){

	var a = 5; // a is defined only in this function scope

	b = 5; // b becomes global

})();

if ( typeof a !== 'undefined' ) { // Way to check the variable is defined or not
	
	console.log(a);

}else{

	console.log(b); // 5
}