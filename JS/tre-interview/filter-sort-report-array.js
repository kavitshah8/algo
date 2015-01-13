var arr = [
						{ id: 15, path: 'foo.txt' },
						{ id: -1, path: 'bar.1.txt' },
						{ id: 3, path: 'mine.txt' },
						{ id: 12.2, path: 'yours.txt' },
						{ id: 12.2, path: 'yours.txt.diff' },
						{ path: 'foo.bar.txt' },
						{ id: 'null', path: 'mine.txt' },
						{ id: 'undefined', path: null },
						{ id: undefined, path: null },
						{ id: NaN, path: null },
						{ id: NaN }
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

function filterByExtension ( element ) {

	if ( element.path && ( typeof(element.path ) === 'string') ) {

		var strToArr = element.path.split( '.' );

		var extension = strToArr[strToArr.length - 1];

		if ( extension === 'txt' ) {

			return element;
		}
		else {

			invalidEntries++;
		}

	}
	else
	{
		invalidEntries++;
	}

}

function sortByID ( arr ) {

	return arr.sort(function ( first, second ) {

				return (first.id - second.id);
	});

}

(function filterSortAndReport ( arr ) {

	invalidEntries = 0;

	var arrByID = arr.filter( filterByID );

	var FilteredArray = arrByID.filter( filterByExtension );

	var sortedArray = sortByID( FilteredArray );

	console.log( "Filtered And Sorted Array\n", sortedArray );

	console.log("Number of Invalid Entries = ", invalidEntries);

})( arr );

