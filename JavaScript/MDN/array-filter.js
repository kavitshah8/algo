var arr = [
						{ id: 15 },
						{ id: -1 },
						{ id: 3  },
						{ id: 12.2 },
						{ },
						{ id: null },
						{ id: NaN },
						{ id: 'undefined' }
					];

var invalidEntries;

function filterByID ( element ) {

	if ( element.id && ( typeof( element.id ) === 'number') ) {

		return element;		
	}
	else {

		invalidEntries++;
	}

}

	invalidEntries = 0;

	var filterArrByID = arr.filter( filterByID );

	console.log( "Filtered And Sorted Array\n", filterArrByID );
	console.log("Number of Invalid Entries = ", invalidEntries);