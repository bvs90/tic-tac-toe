angular.module('ticTacToeApp')
  .controller('GameCtrl', function (BoardSvc) {
    var game = this;
    
    // initialise a board for the game
    game.board = BoardSvc.createBoard();
    
    console.log('board', game.board);
    
    // function to mark player move and update view 
    // then check if player has won
    // then run opponent turn function
    // check if opponent has won
  });
