describe('Controller: GameCtrl', function () {

  beforeEach(module('ticTacToeApp'));

  var Game,
      mockBoardSvc,
      mockOpponentSvc;

  mockBoardSvc = {
    scanBoardForWin: angular.noop,
    findEmptySquare: angular.noop,
    createBoard: function() {
      return [];
    }
  };

  mockOpponentSvc = {
    makeMove: angular.noop
  };

  beforeEach(inject(function ($controller) {
    Game = $controller('GameCtrl', {
      BoardSvc: mockBoardSvc,
      OpponentSvc: mockOpponentSvc
    });
  }));
  
  it('should initialise a game board', function () {
    expect(Array.isArray(Game.board)).toBe(true);
  });

  describe('playerMove method', function() {    
    beforeEach(function() {
      Game.opponentMove = angular.noop;
      mockBoardSvc.findEmptySquares = angular.noop;
    });

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
    
    it('should have the opponent make a move if the player has not won', function() {
      spyOn(Game, 'opponentMove');
      var mockSquare = [{value:null}];
      Game.playerMove(mockSquare);
      
      expect(Game.opponentMove).toHaveBeenCalled();
    });
  });  

  describe('opponentMove method', function() {
    it('should have the opponent make a move', function() {
      spyOn(mockOpponentSvc, 'makeMove');
      Game.opponentMove();
      
      expect(mockOpponentSvc.makeMove).toHaveBeenCalled();
    });
    
    it('should check if the opponent has won', function() {
      spyOn(mockBoardSvc, 'scanBoardForWin');
      var mockSquare = [{value:null}];
      Game.opponentMove(mockSquare);
      
      expect(mockBoardSvc.scanBoardForWin).toHaveBeenCalled();
    });
    
    it('should update the game status if the player has won', function() {
      spyOn(mockBoardSvc, 'scanBoardForWin').and.returnValue(true);
      var mockSquare = [{value:null}];
      Game.opponentMove(mockSquare);
      
      expect(Game.status).toBe('Opponent has won!');
    });
  });
  
  describe('checkForTies method', function() {
    it('should update the game status if there is a tie', function() {
      spyOn(mockBoardSvc, 'findEmptySquares').and.returnValue(false);
      var mockSquare = [{value:null}];
      Game.checkForTies(mockSquare);
      
      expect(Game.status).toBe('Game is tied!');
    });
    
    it('should return false if there is no tie', function() {
      spyOn(mockBoardSvc, 'findEmptySquares').and.returnValue(true);
      var mockSquare = [{value:null}];
      var actual = Game.checkForTies(mockSquare);
      
      expect(actual).toBe(false);      
    });
  });


});
