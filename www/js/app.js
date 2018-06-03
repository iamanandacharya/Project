var app = angular.module('EAlerceApp', ["ngResource", "ngCookies", "ngMaterial", "ngRoute"]);

app.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {

        $locationProvider.html5Mode(false);
        $locationProvider.hashPrefix('!')
        $routeProvider
                .when("/", {
                    templateUrl: "views/home.html",
                    controller: "homeController"
                })
                .when("/home", {
                    templateUrl: "views/home.html",
                    controller : "homeController"
                })
                .when("/login", {
                    templateUrl: "views/login.html",
                    controller: "loginController"
                })
                .when("/logout", {
                    templateUrl: "views/home.html",
                    controller: "logoutController"
                })
                .when("/register", {
                    templateUrl: "views/sign-up.html",
                    controller: "registerController"
                })
                .when("/s-dashboard", {
                    templateUrl: "views/website-student-courses.html",
                    controller: "sDashboardController"
                })
                .when("/t-dashboard", {
                    templateUrl: "views/website-instructor-dashboard.html",
                    controller: "tDashboardController"
                })
                .when("/website-student-courses",{
                    templateUrl:"views/website-student-courses.html",
                    controller:"websiteStudentCourses"
                })
    }]);


app.run(function ($rootScope, $cookieStore, $location, $http) {
    $rootScope.$on('$routeChangeStart', function (event) {
        var data = $cookieStore.get('globals');
        var path = $location.path();
        console.log(path);
        if (data == undefined) {
            $rootScope.globals = {};
            $cookieStore.remove('globals');
            $http.defaults.headers.common.Authorization = 'Basic';
        } else {
            try {
                $location.path(path);
            } catch (e) {
                $location.path("/");
            }
        }
    });
    $rootScope.settings = {
        htmlClass: '',
        bodyClass: ''
    };
});