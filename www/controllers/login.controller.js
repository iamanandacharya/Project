app.controller('loginController', function ($scope, $rootScope, $http, $location, $cookieStore, $window) {

    $scope.isLoged = false;

    $rootScope.settings = {
        bodyClass: "login",
        htmlClass: ''
    };

    $scope.authenticateUser = function () {
        var parameter = {
            "username": $scope.username,
            "password": $scope.password,
            "rememberMe": false
        }

        $http.post('http://localhost:8080/api/authenticate', parameter).success(function (result, status) {
            if (result.id_token != undefined) {
                $rootScope.globals = {
                    currentUser: {
                        username: $scope.username,
                        authdata: 'Bearer ' + result.id_token,
                    }
                };
//                $http.defaults.headers.common['Authorization'] = 'Bearer ' + result.id_token;
                $cookieStore.put('globals', $rootScope.globals);
                $http.get("http://localhost:8080/api/users/" + $scope.username, {
                    headers: {
                        "Accept": "application/json",
                        "Authorization": 'Bearer ' + result.id_token
                    }
                }).success(function (Uresult, Ustatus) {
                    $scope.isLoged = true;
                    if (Uresult.authorities[0] == "ROLE_STUDENT") {
//                        $window.location.href = '#!/s-dashboard';

                    } else if (Uresult.authorities[0] == "ROLE_INSTRUCTOR") {
//                        $window.location.href = '#!/t-dashboard';
                    }

                    $window.location.reload();
                }).error(function (result, status) {

                });
            } else {
                $scope.errMsg = "Userid and password not match";
            }
        }).error(function (reault, status) {

        });
    }

});