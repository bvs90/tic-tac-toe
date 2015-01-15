describe('Service: OpponentSvc', function () {
  beforeEach(module('ticTacToeApp'));

  var Opponent;

  beforeEach(inject(function (_OpponentSvc_) {
    Opponent = _OpponentSvc_;
  }));
  
  describe('makeMove method', function() {
      
    it('should return back a board with a move made', function() {
      var mockBoard = [[{ row:0, column:0, value:null}, { row:0, column:1, value:'X'}]];
      var actual = Opponent.makeMove(mockBoard);
      
      expect(actual).toEqual([[{ row:0, column:0, value:'O'}, { row:0, column:1, value:'X'}]]);
    });
  });
  
  describe('findEmptySquares method', function() {
    it('should create a collection of all the empty squares', function() {
      var mockBoard = [[{value:null}, {value:'O'}], [{value:'X'}, {value:null}], [{value:null}, {value:null}]];
      var actual = Opponent._findEmptySquares(mockBoard);
      
      expect(actual.length).toBe(4);
    });    
  });
  
  describe('selectSquare method', function() {
    it('should pick a square in which to move', function() {
      var emptySquare = [{value: null}];
      var actual = Opponent._selectSquare(emptySquare);
      
      expect(actual).toEqual(emptySquare[0]);
    });
  });
  
});
