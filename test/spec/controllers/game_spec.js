describe('Controller: GameCtrl', function () {

  beforeEach(module('ticTacToeApp'));

  var Game,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Game = $controller('GameCtrl', {
      $scope: scope
    });
  }));
  
  it('should initialise a game board', function () {
    expect(Game.board).toBeDefined();
  });


});
