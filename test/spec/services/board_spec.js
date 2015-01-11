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
  
  describe('checkRows method', function() {
    it('should confirm a winning row on a given board', function() {
      var mockBoard = [['x','x','x']];
      var actual = Board.checkRows(mockBoard, 'x');
      
      expect(actual).toBe(true);
    });

    it('should confirm a winning row on a given board with multiple rows', function() {
      var mockBoard = [['x','o','x'], ['x','x','x'], ['x','o','x']];
      var actual = Board.checkRows(mockBoard, 'x');
      
      expect(actual).toBe(true);
    });    
  });
  
  describe('checkColumns method', function() {
    it('should confirm a winning column on a given board', function() {
      var mockBoard = [['x'],['x'],['x']];
      var actual = Board.checkColumns(mockBoard, 'x');
      
      expect(actual).toBe(true);
    });

    it('should confirm a winning column on a given board with multiple columns', function() {
      var mockBoard = [['x','x','o'], ['o','x','x'], ['x','x','o']];
      var actual = Board.checkColumns(mockBoard, 'x');
      
      expect(actual).toBe(true);
    });    
  });
  
  describe('checkMajorDiagonal method', function() {
    it('should confirm a winning major diagonal on a given board', function() {
      var mockBoard = [['x'],['o', 'x'],['o','o','x']];
      var actual = Board.checkMajorDiagonal(mockBoard, 'x');
      
      expect(actual).toBe(true);
    });
  });
  
  describe('checkMinorDiagonal method', function() {
    it('should confirm a winning major diagonal on a given board', function() {
      var mockBoard = [['o','o','x'],['o', 'x'],['x']];
      var actual = Board.checkMinorDiagonal(mockBoard, 'x');
      
      expect(actual).toBe(true);
    });
  });  
  
  describe('checkForWinner method', function() {
    it('should report a win for 3 of the same value', function() {
      var elements = ['x','x','x'];
      var actual = Board.checkForWinner(elements, 'x');
      
      expect(actual).toBe(true);
    });
    
    it('should not report a win for mixed values', function() {
      var actual = Board.checkForWinner(['x','o','x'], 'x');
      
      expect(actual).toBe(false);      
    });
  });
  
});
