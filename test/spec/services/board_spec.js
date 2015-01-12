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
  });
  
  describe('scanBoardForWin method', function() {
    it('should check all rows, columns and diagonals for a win', function() {
      spyOn(Board, '_checkRows');
      spyOn(Board, '_checkColumns');
      spyOn(Board, '_checkMajorDiagonal');
      spyOn(Board, '_checkMinorDiagonal');
      
      var mockBoard = [['x','o','o'], ['x','empty','o'], ['o','empty','x']];
      Board.scanBoardForWin(mockBoard, 'x');
      
      expect(Board._checkRows).toHaveBeenCalled();
      expect(Board._checkColumns).toHaveBeenCalled();
      expect(Board._checkMajorDiagonal).toHaveBeenCalled();
      expect(Board._checkMinorDiagonal).toHaveBeenCalled();
       
    });
    
    it('should confirm a win on a board', function() {
      var mockBoard = [['x','o','x'], ['x','empty','x'], ['o','empty','x']];
      var actual = Board.scanBoardForWin(mockBoard, 'x');
      
      expect(actual).toBe(true);      
    });
    
    it('should confirm no win on a board', function() {
      var mockBoard = [['x','o','o'], ['x','empty','o'], ['o','empty','x']];
      var actual = Board.scanBoardForWin(mockBoard, 'x');
      
      expect(actual).toBe(false);      
    });
  });
  
  describe('checkRows method', function() {
    it('should confirm a winning row on a given board', function() {
      var mockBoard = [['x','x','x']];
      var actual = Board._checkRows(mockBoard, 'x');
      
      expect(actual).toBe(true);
    });

    it('should confirm a winning row on a given board with multiple rows', function() {
      var mockBoard = [['x','o','x'], ['x','x','x'], ['x','o','x']];
      var actual = Board._checkRows(mockBoard, 'x');
      
      expect(actual).toBe(true);
    });    
  });
  
  describe('checkColumns method', function() {
    it('should confirm a winning column on a given board', function() {
      var mockBoard = [['x'],['x'],['x']];
      var actual = Board._checkColumns(mockBoard, 'x');
      
      expect(actual).toBe(true);
    });

    it('should confirm a winning column on a given board with multiple columns', function() {
      var mockBoard = [['x','x','o'], ['o','x','x'], ['x','x','o']];
      var actual = Board._checkColumns(mockBoard, 'x');
      
      expect(actual).toBe(true);
    });    
  });
  
  describe('checkMajorDiagonal method', function() {
    it('should confirm a winning major diagonal on a given board', function() {
      var mockBoard = [['x'],['o', 'x'],['o','o','x']];
      var actual = Board._checkMajorDiagonal(mockBoard, 'x');
      
      expect(actual).toBe(true);
    });
  });
  
  describe('checkMinorDiagonal method', function() {
    it('should confirm a winning major diagonal on a given board', function() {
      var mockBoard = [['o','o','x'],['o', 'x'],['x']];
      var actual = Board._checkMinorDiagonal(mockBoard, 'x');
      
      expect(actual).toBe(true);
    });
  });  
  
  describe('checkForWinner method', function() {
    it('should report a win for 3 of the same value', function() {
      var elements = ['x','x','x'];
      var actual = Board._checkForWinner(elements, 'x');
      
      expect(actual).toBe(true);
    });
    
    it('should not report a win for mixed values', function() {
      var actual = Board._checkForWinner(['x','o','x'], 'x');
      
      expect(actual).toBe(false);      
    });
  });
  
});
