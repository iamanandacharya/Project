angular.module('starter.controllers')
  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'templates/user-management/login/animated_login_screen.html',
        controller: 'LoginCtrl'
      })
  }]);
