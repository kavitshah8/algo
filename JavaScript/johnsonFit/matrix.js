function defaultMatrix1(size) { // Incorrect one
	// fix me!
	var defaultValue = 0;
	var row = [];
	var matrix = [];
	for (var i=0; i < size; i++) { row.push(defaultValue); }

	// Issue in here is that the values are being referenced, they are not being copied.
	// Hence, setting matrx[1][1] = 1 will update matrix[0][1] = matrix[2][1] = matrix[3][1] = matrix[4][1] = 1
	
	for (var i=0; i < size; i++) { matrix.push(row); }
	return matrix;
}

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
console.log(matrix);
matrix[1][1] = 1; 
matrix[2][2] = 2; 
console.log(matrix);
