angular.module('starter.controllers')
  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider
      .state('chats.detail', {
        url: '/chats-detail',
        templateUrl: 'templates/tab-chats/chat-details/chat-detail.html',
        controller: 'ChatsDetailCtrl'
      })
  }]);