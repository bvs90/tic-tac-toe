angular.module('ticTacToeApp')
  .service('BoardSvc', function () {
    
    this.createBoard = function() {
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
    
    
    
  });
