var array1 = [1,2,3];
var res1 = array1.map(function( i ) { return i*2; } ); 

var array2 = [1,2,3, ,5];
var res2 = array2.map(function( i ) { return i*2; } ); 

// Applying map to strings
var str1 = "Hello";
var res3 = [].map.call(str1, function( i ) { return i.charCodeAt(0); });

// Callback function takes two parameters
var array3 = [1,2,3];
array3.map(function( value, index ) {  console.log("index:", index, "value:", value); } );

console.log(res1); // [ 2, 4, 6 ]
console.log(res2); // [ 2, 4, 6, , 10 ]
console.log(res3); // [ 72, 101, 108, 108, 111 ]
