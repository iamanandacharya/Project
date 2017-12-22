angular.module('app').controller('appController', ['ngCordova','ionic','$scope', '$state',
function ($scope, $state) {
    alert(1);
    $scope.settings = {
        htmlClass: '',
        bodyClass: ''
    };

    $scope.$state = $state;

}]);