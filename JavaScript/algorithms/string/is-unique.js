// Implement an algorithm if a string has all unique characters

// ASK INTERVIEWER
// 	Is string ASCII or Unicode? If its ASCII then we need storage size of 128 bits

function isStringUnique(str) {
  
  if(str.length > 128) {

  	return false;
  } 

	for (var i = 0; i < str.length; i++) {
		
		for (var j = i + 1; j < str.length; j++) {

			if ( str[i] === str[j] ) {
		
				return false;
			}
		};
	};
  
  return true;
}

console.log(isStringUnique('bar')); // true
console.log(isStringUnique('foo')); // false

// Notes: Time Complexity O(n^2), Space Complexity O(1)


function isStrUnique(str) {
    
    var hashTable = {};   

	  if(str.length > 128) {

	  	return false;
	  }

    for (var i = 0; i < str.length; i++ ) {
        
        if(hashTable[str[i]]) {
        
          return false;
        }
        
        hashTable[str[i]] = true;
    }
    
    return true;
}

console.log(isStrUnique('bar')); // true
console.log(isStrUnique('foo')); // false

// Notes: Time Complexity O(n), Space Complexity O(1)