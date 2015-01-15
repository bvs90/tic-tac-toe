angular.module('ticTacToeApp')
  .controller('GameCtrl', function (BoardSvc) {
    var game = this;
    
    // initialise a board for the game
    game.board = BoardSvc.createBoard();
    
    // game.status;
    
    
    console.log('board', game.board);
    
    // function to mark player move and update view 
    game.playerMove = function(square) {
      square.value = 'X';
    // then check if player has won
      if (BoardSvc.scanBoardForWin(game.board, 'X') === true) {
        game.status = 'Player has won!';
      }
    // then run opponent turn function
    // check if opponent has won
    };
    
  });
