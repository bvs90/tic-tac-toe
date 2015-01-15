angular.module('ticTacToeApp')
  .controller('GameCtrl', function (BoardSvc, OpponentSvc) {
    var game = this;
    
    // initialise a board for the game
    game.board = BoardSvc.createBoard();
    
    // game.status;
    
    
    console.log('board', game.board);
    
    // function to mark player move and update view 
    game.playerMove = function(square) {
      square.value = 'X';
      
      if (BoardSvc.scanBoardForWin(game.board, 'X') === true) {
        game.status = 'Player has won!';
      } else {
        game.opponentMove(game.board);
      }
    };
      
    game.opponentMove = function(board) {
      console.log('updated board', board);
      OpponentSvc.makeMove(board);
      
      if (BoardSvc.scanBoardForWin(game.board, 'O') === true) {
        game.status = 'Opponent has won!';
      }
    };  
      
          
  });
