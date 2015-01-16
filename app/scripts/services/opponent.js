angular.module('ticTacToeApp')
  .service('OpponentSvc', function (BoardSvc) {
  
    var Opponent = this;
    
    Opponent.makeMove = function(board) {
      var emptySquares = BoardSvc.findEmptySquares(board);
      var selectedSquare = Opponent._selectSquare(emptySquares);
      
      // mark the empty square with a 'O'
      var row = selectedSquare.row;
      var column = selectedSquare.column;
      
      board[row][column].value = 'O';
      
      return board; 
    };
    
    Opponent._selectSquare = function(emptySquares) {
      var index = Math.floor(Math.random() * (emptySquares.length -1));
      return emptySquares[index];
    };
    
  
  });
