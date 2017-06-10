angular.module('starter.controllers')
  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider
      .state('register', {
        url: '/register',
        templateUrl: 'templates/user-management/registration/register.html',
        controller: 'RegisterCtrl'
      })
  }]);
