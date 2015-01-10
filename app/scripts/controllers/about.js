'use strict';

/**
 * @ngdoc function
 * @name ticTacToeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ticTacToeApp
 */
angular.module('ticTacToeApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
