// inner function firstName has the access to the variable outer defined in the outer function called lastName

var glob = "Wel";

(function lastName(last){	
	
	var outer = "come";

	(function firstName(first){

		console.log( glob + outer +' '+ first +' '+ last);			
	
	})("Kavit");

})("Shah");
