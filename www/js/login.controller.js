app.controller('loginController', function ($scope, $rootScope, $http, $location, $cookieStore, $window) {
    
        $scope.isLoged = false;
    
        $rootScope.settings = {
            bodyClass: "login",
            htmlClass: ''
        };
    
    // get data from backend while click on button
        
        $http.get('http://localhost:8080/Elearn/rest/category/editCategory/1')
        .success(function(data,status,headers,config){
            $scope.courseDetails = data;
            console.log(data)
        })
        .error(function(data,status,config,headers){
    
        })
    
    
        $scope.keyword = '';
        $scope.getAllData = function(){
            $http.get('http://localhost:8080/Elearn/rest/course/getAllCourse')
            .success(function(data, status, headers,config) {
                $scope.details= data;
                console.log(data)
                console.log($scope.details)
            })
            .error(function(data, status,header,config){
        
            })
        }
        
    
    
    
    //post data from backend
        $scope.authenticateUser = function () {
            var logindata = {
                "userid": "$scope.userid",
                "password": "$scope.password"
                
            }
            var config = {
                headers : {
                    'Content-Type': 'application/json',
                }
            }
    
            $http.post('http://localhost:8080/Elearn/rest/user/login',logindata,config)
            .success(function (logindata,config,headers, status) {
                $scope.PostDataResponse  = data;
    
                console.log( data);
                $window.location.href = '#!/s-dashboard';
    //             if (result.id_token != undefined) {
    //                 $rootScope.globals = {
    //                     currentUser: {
    //                         userid: $scope.username,
    //                         authdata: 'Bearer ' + result.id_token,
    //                     }
    //                 };
    
    //                 console.log(currentUser)
    // //                $http.defaults.headers.common['Authorization'] = 'Bearer ' + result.id_token;
    //                 $cookieStore.put('globals', $rootScope.globals);
    //                 $http.get("http://localhost:8080/Elearn/rest/user/login" + $scope.username, {
    //                     headers: {
    //                         "Accept": "application/json",
    //                         "Authorization": 'Bearer ' + result.id_token
    //                     }
    //                 }).success(function (Uresult, Ustatus) {
    //                     $scope.isLoged = true;
    //                     $window.location.href = '#!/s-dashboard';
    //                     console.log(result)
    // //                     if (Uresult.authorities[0] == "ROLE_STUDENT") {
    // // //                        $window.location.href = '#!/s-dashboard';
    
    // //                     } else if (Uresult.authorities[0] == "ROLE_INSTRUCTOR") {
    // // //                        $window.location.href = '#!/t-dashboard';
    // //                     }
    
    //                     $window.location.reload();
    //                 }).error(function (result, status) {
    
    //                 });
    //             } else {
    //                 $scope.errMsg = "Userid and password not match";
    //             }
            }).error(function (reault, status) {
    
            });
        }
    
    });