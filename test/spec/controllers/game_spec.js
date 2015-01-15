describe('Controller: GameCtrl', function () {

  beforeEach(module('ticTacToeApp'));

  var Game,
    mockBoardSvc,
    scope;


    mockBoardSvc = {
      scanBoardForWin: angular.noop,
      createBoard: function() {
        return [];
      }
    };

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Game = $controller('GameCtrl', {
      $scope: scope,
      BoardSvc: mockBoardSvc
    });
  }));
  
  it('should initialise a game board', function () {
    expect(Array.isArray(Game.board)).toBe(true);
  });

  describe('playerMove method', function() {
    it('should update the value of the selected square', function() {
      var mockSquare = [{value:null}];
      Game.playerMove(mockSquare);
      
      expect(mockSquare.value).toBe('X');
    });
    
    it('should check if the player has won', function() {
      spyOn(mockBoardSvc, 'scanBoardForWin');
      
      var mockSquare = [{value:null}];
      Game.playerMove(mockSquare);
      
      expect(mockBoardSvc.scanBoardForWin).toHaveBeenCalled();
    });
    
    it('should update the game status if the player has won', function() {
      spyOn(mockBoardSvc, 'scanBoardForWin').and.returnValue(true);
      
      var mockSquare = [{value:null}];
      Game.playerMove(mockSquare);
      
      expect(Game.status).toBe('Player has won!');
    });
  });  

});
