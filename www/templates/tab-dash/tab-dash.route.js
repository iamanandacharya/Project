angular.module('starter.controllers')
  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider
      .state('tab-dash', {
        url: '/tab-dash',
        templateUrl: 'templates/tab-dash/tab-dash.html',
        controller: 'DashCtrl'
      })
  }]);