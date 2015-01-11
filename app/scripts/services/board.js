angular.module('ticTacToeApp')
  .service('BoardSvc', function () {
    
    var Board = this;
    
    Board.createBoard = function() {
      var board = [];
      
      for(var i = 0; i < 3; i++) {
        var row = [];
        for(var k = 0; k < 3; k++) {
          var tile = {
            value: 'empty'
          };
          row.push(tile);
        }
        board.push(row);
      }

      return board;
    };
    
    // check row elements
    Board.checkRows = function(board, target) {
      var winner = false;
      
      for(var i = 0; i < board.length; i++) {
        winner = Board.checkForWinner(board[i], target);
        if (winner) {
          break;
        }
      }
      
      return winner;   
    };
    
    // check column elements
    Board.checkColumns = function(board, target) {
      var winner = false;
      var column = [];
      
      //iterate through each column
      for(var i = 0; i < board[i].length; i++) {
        for(var k = 0; k < board.length; k++) {
          column.push(board[k][i]);
        }
        
        winner = Board.checkForWinner(column, target);
        if (winner) {
          break;
        } else {
          column = [];
        }
      } 
       
      return winner;
    };
    
    // check diagonal (major)
    Board.checkMajorDiagonal = function() {
      var winner = false;
      var column = [];
      
      
      
      return winner;
    };
    
    // check diagonal (minor) 
    Board.checkMinorDiagonal = function() {
      
    };
    
    // check pattern of elements 
    Board.checkForWinner = function(elements, mark) {
      var target = mark;
      var winner = true;
      
      angular.forEach(elements, function(element) {
        if(element !== target) {
          winner = false;
        }
      });
      
      return winner;
      
    };
    
    
    
  });
