angular.module('starter.controllers')
.controller('LoginCtrl', function ($scope, LoginService, $ionicPopup, $state) {
    $scope.data = {};
    $scope.login = function () {
      LoginService.loginUser($scope.data.username, $scope.data.password).success(function (data) {
        $state.go('tab.dash');

      }).error(function (data) {
        var alertpop = $ionicPopup.alert({
          title: 'Login Failed',
          template: 'Please check your crenditials!'
        });
      });
    }

  });