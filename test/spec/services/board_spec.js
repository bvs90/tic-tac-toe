describe('Service: BoardSvc', function () {
  beforeEach(module('ticTacToeApp'));

  var Board;

  beforeEach(inject(function (_BoardSvc_) {
    Board = _BoardSvc_;
  }));

  describe('createBoard method', function() {
    var actual;
    
    beforeEach(function() {
      actual = Board.createBoard();
    });
    
    it('should create a Board array', function () {
      expect(Array.isArray(actual)).toEqual(true);
    });
    
    it('should create a Board with 3 rows', function() {
      expect(actual.length).toBe(3);
    });
    
    it('should create a Board with 3 columns', function() {
      expect(actual[1].length).toBe(3);
    });
    
    it('should set a square to have a row value', function() {
      expect(actual[0][0].row).toBe(0);
    });
    
    it('should set a square to have a column value', function() {
      expect(actual[0][0].column).toBe(0);
    });
    
    it('should set a square to have a null value', function() {
      expect(actual[0][0].value).toBeNull();
    });
  });
  
  describe('scanBoardForWin method', function() {
    it('should check all rows, columns and diagonals for a win', function() {
      spyOn(Board, '_checkRows');
      spyOn(Board, '_checkColumns');
      spyOn(Board, '_checkMajorDiagonal');
      spyOn(Board, '_checkMinorDiagonal');
      
      var mockBoard = [[{value:'x'},{value:'o'},{value:'o'}], [{value:'x'},{value:'empty'},{value:'o'}], [{value:'o'},{value:null},{value:'x'}]];
      Board.scanBoardForWin(mockBoard, 'x');
      
      expect(Board._checkRows).toHaveBeenCalled();
      expect(Board._checkColumns).toHaveBeenCalled();
      expect(Board._checkMajorDiagonal).toHaveBeenCalled();
      expect(Board._checkMinorDiagonal).toHaveBeenCalled();
       
    });
    
    it('should confirm a win on a board', function() {
      var mockBoard = [[{value:'x'},{value:'o'},{value:'x'}], [{value:'x'},{value:null},{value:'x'}], [{value:'o'},{value:null},{value:'x'}]];
      var actual = Board.scanBoardForWin(mockBoard, 'x');
      
      expect(actual).toBe(true);      
    });
    
    it('should confirm no win on a board', function() {
      var mockBoard = [[{value:'x'},{value:'o'},{value:'o'}], [{value:'x'},{value:null},{value:'o'}], [{value:'o'},{value:null},{value:'x'}]];
      var actual = Board.scanBoardForWin(mockBoard, 'x');
      
      expect(actual).toBe(false);      
    });
  });
  
  describe('checkRows method', function() {
    it('should confirm a winning row on a given board', function() {
      var mockBoard = [[{value:'x'},{value:'x'},{value:'x'}]];
      var actual = Board._checkRows(mockBoard, 'x');
      
      expect(actual).toBe(true);
    });

    it('should confirm a winning row on a given board with multiple rows', function() {
      var mockBoard = [[{value:'x'},{value:'o'},{value:'x'}], [{value:'x'},{value:'x'},{value:'x'}], [{value:'x'},{value:'o'},{value:'x'}]];
      var actual = Board._checkRows(mockBoard, 'x');
      
      expect(actual).toBe(true);
    });    
  });
  
  describe('checkColumns method', function() {
    it('should confirm a winning column on a given board', function() {
      var mockBoard = [[{value:'x'},{value:'x'},{value:'x'}]];
      var actual = Board._checkColumns(mockBoard, 'x');
      
      expect(actual).toBe(true);
    });

    it('should confirm a winning column on a given board with multiple columns', function() {
      var mockBoard = [[{value:'x'},{value:'x'},{value:'o'}], [{value:'o'},{value:'x'},{value:'x'}], [{value:'x'},{value:'x'},{value:'o'}]];
      var actual = Board._checkColumns(mockBoard, 'x');
      
      expect(actual).toBe(true);
    });    
  });
  
  describe('checkMajorDiagonal method', function() {
    it('should confirm a winning major diagonal on a given board', function() {
      var mockBoard = [[{value:'x'}],[{value:'o'},{value:'x'}],[{value:'o'},{value:'o'},{value:'x'}]];
      var actual = Board._checkMajorDiagonal(mockBoard, 'x');
      
      expect(actual).toBe(true);
    });
  });
  
  describe('checkMinorDiagonal method', function() {
    it('should confirm a winning major diagonal on a given board', function() {
      var mockBoard = [[{value:'o'},{value:'o'},{value:'x'}],[{value:'o'},{value:'x'}],[{value:'x'}]];
      var actual = Board._checkMinorDiagonal(mockBoard, 'x');
      
      expect(actual).toBe(true);
    });
  });  
  
  describe('checkForWinner method', function() {
    it('should report a win for 3 of the same value', function() {
      var elements = [{value:'x'},{value:'x'},{value:'x'}];
      var actual = Board._checkForWinner(elements, 'x');
      
      expect(actual).toBe(true);
    });
    
    it('should not report a win for mixed values', function() {
      var actual = Board._checkForWinner([{value:'x'}],[{value:'o'},{value:'x'}], 'x');
      
      expect(actual).toBe(false);      
    });
  });
  
  describe('findEmptySquares method', function() {
    it('should create a collection of all the empty squares', function() {
      var mockBoard = [[{value:null}, {value:'O'}], [{value:'X'}, {value:null}], [{value:null}, {value:null}]];
      var actual = Board.findEmptySquares(mockBoard);
      
      expect(actual.length).toBe(4);
    });
    
    it('should return false if there are no empty squares', function() {
      
    });  
  });  
  
});
