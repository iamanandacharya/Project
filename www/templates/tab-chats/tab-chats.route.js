angular.module('starter.controllers')
  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider
      .state('tab-chats', {
        url: '/tab-chats',
        templateUrl: 'templates/tab-chats/tab-chats.html',
        controller: 'ChatsCtrl'
      })
  }]);