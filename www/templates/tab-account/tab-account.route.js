angular.module('starter')

  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider
      .state('tab.account', {
        url: '/account',
        views: {
          'tab-account': {
            templateUrl: 'templates/tab-account/tab-account.html',
            controller: 'AccountCtrl'
          }
        }
      });
  }]);
