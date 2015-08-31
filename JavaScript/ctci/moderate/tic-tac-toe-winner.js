// tic:'X', tac:'Y', toe: 'Z'

var board = ['Y','Y','Y',
      		'Y','Y','Z',
      		'Z','Z','X'];

// var board = ['Y','Y','Y',
//       		'Y','Y','Z',
//       		'Y','X','X'];

function findWinner (board) {
  
  var row, column; 
  
  row = 0;
  column = 0;

  //Check rows
  for (var i = 0; i < board.length; i += 3) {
    
    row++;
    if ( ( board[i] === board[i+1] ) && ( board[i+1] === board[i+2] ) ) {
      return board[i] + ' at row : ' + row;
    }
  }
  
  //Check columns
  for (var j = 0; j < Math.sqrt(board.length); j++) {
    
    column++;
    if ( ( board[j] === board[j+3] ) && ( board[j+3] === board[j+6] ) ) {
      return board[i] + ' at column : ' + column;
    }
  }
  
  //Check diagonals
  for (var k = 0; k < ( Math.sqrt(board.length) - 1 ); k++) {
    
    if ( ( board[k] === board[k+4] ) && ( board[k+4] === board[k+8] ) ) {
      return board[k];
    }
  }
  
}

console.log('Winnwe is : ' + findWinner(board));