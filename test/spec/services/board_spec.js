describe('Service: BoardSvc', function () {

  // load the controller's module
  beforeEach(module('ticTacToeApp'));

  var BoardSvc,
      scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($service, $rootScope) {
    scope = $rootScope.$new();
    
    BoardSvc = $service('BoardSvc', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
