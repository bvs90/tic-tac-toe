angular.module('ticTacToeApp')
  .service('OpponentSvc', function () {
  
    var Opponent = this;
    
    Opponent.makeMove = function(board) {
      var emptySquares = Opponent._findEmptySquares(board);
      var selectedSquare = Opponent._selectSquare(emptySquares);
      
      // mark the empty square with a 'O'
      var row = selectedSquare.row;
      var column = selectedSquare.column;
      
      board[row][column].value = 'O';
      
      return board; 
    };
  
    Opponent._findEmptySquares = function(board) {
      var emptySquares = [];
      
      for(var i = 0; i < board.length; i++) {
        for(var k = 0; k < board[i].length; k++) {
          if( board[i][k].value === null) {
            emptySquares.push(board[i][k]);
          }
        }
      }
    
      return emptySquares;
    };
    
    Opponent._selectSquare = function(emptySquares) {
      var index = Math.floor(Math.random() * (emptySquares.length -1));
      return emptySquares[index];
    };
    
  
  });
