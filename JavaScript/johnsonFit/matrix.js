function defaultMatrix(size) { // returns array
	// fix me!
	var x = new Array(size);
  
  for (var i = 0; i < size; i++) {
    x[i] = new Array(size);
  }

  for( var i = 0; i < size; i++) {
  	for ( var j = 0; j < size; j++) {
  		x[i][j] = 0;
  	}

  }
	return x;
}


var matrix = defaultMatrix(5);
matrix[1][1] = 1; 
matrix[2][2] = 2; 
console.log(matrix);