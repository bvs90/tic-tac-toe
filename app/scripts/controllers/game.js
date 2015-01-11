angular.module('ticTacToeApp')
  .controller('GameCtrl', function (BoardSvc) {
    var game = this;
    
    game.board = BoardSvc.createBoard();
    
    console.log('board', game.board);
  });
