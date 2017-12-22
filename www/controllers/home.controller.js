app.controller('homeController', function ($scope, $rootScope, $http, $cookieStore, $location) {
    console.log($location);

    if ($location == "/login" || $location == "/register") {
        //hide nav
    }
});