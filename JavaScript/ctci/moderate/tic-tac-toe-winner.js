var board = ['Y','Y','Y',
      		'Y','Y','X',
      		'X','Y','Y'];

function findWinner (board) {

  var winner;
  var row = Math.sqrt(board.length);
  
  //Check rows
  for (var i = 0; i < board.length; i+= 3) {
    
    if ( (board[i] == 'X') && (board[i+1] == 'X') && (board[i+2] == 'X')) {
      return 'X';
    } else if ( (board[i] == 'Y') && (board[i+1] == 'Y') && (board[i+2] == 'Y')) {
      return 'Y';
    }
  }
  
  //Check columns
  for (var i = 0; i < Math.sqrt(board.length); i++) {
    
    if ( (board[i] == 'X') && (board[i+3] == 'X') && (board[i+6] == 'X')) {
      return 'X';
    } else if ( (board[i] == 'Y') && (board[i+3] == 'Y') && (board[i+6] == 'Y')) {
      return 'Y';
    }
  }
  
  //Check diagonals
    for (var i = 0; i < (Math.sqrt(board.length) - 1); i++) {
    
    if ( (board[i] == 'X') && (board[i+4] == 'X') && (board[i+8] == 'X')) {
      return 'X';
    } else if ( (board[i] == 'Y') && (board[i+4] == 'Y') && (board[i+8] == 'Y')) {
      return 'Y';
    }
  }
  
  return 'D';
}

console.log('Winnwe is : ' + findWinner(board));