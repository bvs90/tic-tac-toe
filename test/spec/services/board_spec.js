describe('Service: BoardSvc', function () {
  beforeEach(module('ticTacToeApp'));

  var Board;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_BoardSvc_) {
    // scope = $rootScope.$new();
    Board = _BoardSvc_;
  }));


  describe('createBoard method', function() {
    var actual;
    
    beforeEach(function() {
      actual = Board.createBoard();
    });
    
    it('should create a Board array', function () {
      var expected = [null, null, null];
      
      expect(actual).toEqual(expected);
    });
    
    it('should create a Board with 3 rows', function() {
      var expected = 3;
      
      expect(actual.length).toBe(expected);
    });
    
    it('should create a Board with 3 columns', function() {
      var expected = 3;
      
      expect(actual[1].length).toBe(expected);
    });
  });
  
});
