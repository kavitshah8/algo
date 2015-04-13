// QUESTION 3
// This function should create a 2 dimension array pre-populated
// with zeros.  The output appears correct, but it has a bug.
// Explain what's wrong and fix it.

// diagnosis me!

function defaultMatrix(size) { // returns array
	// fix me!
	var defaultValue = 0;
	var row = [];
	var matrix = [];
	for (var i=0; i < size; i++) { row.push(defaultValue); }
	for (var i=0; i < size; i++) { matrix.push(row); }
	return matrix;
}

var matrix = defaultMatrix(5);
console.log(matrix);
console.log(matrix[4][4]);
