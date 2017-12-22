angular.module('app').controller('appController', ['$scope', '$state',
    function ($scope, $state) {
        alert(1);
        $scope.settings = {
            htmlClass: '',
            bodyClass: ''
        };

        $scope.$state = $state;

    }]);