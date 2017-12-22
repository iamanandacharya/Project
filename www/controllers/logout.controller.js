app.controller('logoutController', function ($scope, $rootScope, $http, $location, $cookieStore, $window) {

    $scope.isLoged = false;

    $rootScope.globals = {};
    $cookieStore.remove('globals');
    $http.defaults.headers.common.Authorization = 'Basic';
    $window.location.href = '#!/';
    $window.location.reload();
});