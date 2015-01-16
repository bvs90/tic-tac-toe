angular.module('ticTacToeApp')
  .controller('GameCtrl', function (BoardSvc, OpponentSvc) {
    var game = this;
    
    // initialise a board for the game
    game.board = BoardSvc.createBoard();
    
    console.log('board', game.board);
    
    // function to mark player move and update view 
    game.playerMove = function(square) {
      square.value = 'X';
      
      if (BoardSvc.scanBoardForWin(game.board, 'X') === true) {
        game.status = 'Player has won!';
      } else if (game.checkForTies(game.board) === true) {
        // game.status = 'Game is tied!';
      } else {
        game.opponentMove(game.board);
      }
    };
      
    game.opponentMove = function(board) {
      OpponentSvc.makeMove(board);
      
      if (BoardSvc.scanBoardForWin(game.board, 'O') === true) {
        game.status = 'Opponent has won!';
      } else if (game.checkForTies(game.board) === true) {
        // game.status = 'Game is tied!';
      }
    };
      
    game.checkForTies = function(board) {
      if (BoardSvc.findEmptySquares(board) === false) {
        game.status = 'Game is tied!';
        return true;
      } else {
        return false;
      }
    };
          
  });
