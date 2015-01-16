angular.module('ticTacToeApp')
  .service('BoardSvc', function () {
    
    var Board = this;
    
    /*
    --- Public API ---
    */
       
    Board.createBoard = function() {
      var board = [];
      
      for(var i = 0; i < 3; i++) {
        var row = [];
        for(var k = 0; k < 3; k++) {
          var square = {
            row: i,
            column: k,
            value: null
          };
          row.push(square);
        }
        board.push(row);
      }

      return board;
    };
    
    Board.scanBoardForWin = function(board, target) {      
      if (Board._checkRows(board, target) ||
          Board._checkColumns(board, target) ||
          Board._checkMinorDiagonal(board, target) ||
          Board._checkMajorDiagonal(board, target)) {
        return true;
      } else {
        return false;
      }
    };
    
    
    Board.findEmptySquares = function(board) {
      var emptySquares = [];
      
      for(var i = 0; i < board.length; i++) {
        for(var k = 0; k < board[i].length; k++) {
          if( board[i][k].value === null) {
            emptySquares.push(board[i][k]);
          }
        }
      }
    
      if (emptySquares.length) {
        return emptySquares;
      } else {
        return false;        
      }
    };
    
        
    /* 
    --- Private helper methods --- 
    */
    
    // check row elements
    Board._checkRows = function(board, target) {
      var winner = false;
      
      for(var i = 0; i < board.length; i++) {
        winner = Board._checkForWinner(board[i], target);
        if (winner) {
          break;
        }
      }
      
      return winner;   
    };
    
    // check column elements
    Board._checkColumns = function(board, target) {
      var winner = false;
      var column = [];
      
      for(var i = 0; i < board.length; i++) {
        for(var k = 0; k < board.length; k++) {
          column.push(board[k][i]);
        }
        
        winner = Board._checkForWinner(column, target);
        if (winner) {
          break;
        } else {
          column = [];
        }
      } 
       
      return winner;
    };
    
    // check diagonal (major)
    Board._checkMajorDiagonal = function(board, target) {
      var winner;
      var diagonal = [];
      
      for(var i = 0; i < board.length; i++) {
        diagonal.push(board[i][i]);
      }

      winner = Board._checkForWinner(diagonal, target);     
      return winner;
    };
    
    // check diagonal (minor) 
    Board._checkMinorDiagonal = function(board, target) {
      var winner;
      var diagonal = [];
      var k = 0;
      
      for(var i = board.length -1; i >= 0; i--) {
          diagonal.push(board[i][k]);
          k++;
      }

      winner = Board._checkForWinner(diagonal, target);     
      return winner;      
    };
    
    // check for winning pattern of elements 
    Board._checkForWinner = function(elements, target) {
      var winner = true;
      
      angular.forEach(elements, function(element) {
        if(element.value !== target) {
          winner = false;
        }
      });
      
      return winner;
    };
    
    
    
  });
