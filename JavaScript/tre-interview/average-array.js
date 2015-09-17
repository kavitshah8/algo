var arr = [ 1, 2, 3, [4, 5, 6,'abc', [7, 8, 9, []]] ];

var sum;
var count;

function average ( element ) {

		if ( typeof( element ) === 'number') {

			sum += element;
			count++;
		}

		if ( typeof( element ) === 'object' ) {
			
			element.filter( average );
		}
}

sum = 0;
count = 0;

arr.filter( average );

console.log("Sum = ", sum); // 45
console.log("Count = ", count); // 9
console.log("Average = ", sum/count); // 5
