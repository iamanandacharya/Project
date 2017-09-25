angular.module('starter.controllers')
.config(['$stateProvider',function($stateProvider){
    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl:'/user-management/login.html',
            controller: ['$scope', function($scope){
                $scope.app.settings.htmlClass = htmlClass.websiteLogin;
                $scope.app.settings.bodyClass = 'login';
            }]
        })
}]);
