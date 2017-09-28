angular.module('starter.controllers', [])



.controller("CameraController", function ($scope, $cordovaCamera) {
  
                  $scope.takePhoto = function () {
                    var options = {
                      quality: 75,
                      destinationType: Camera.DestinationType.DATA_URL,
                      sourceType: Camera.PictureSourceType.CAMERA,
                      allowEdit: true,
                      encodingType: Camera.EncodingType.JPEG,
                      targetWidth: 300,
                      targetHeight: 300,
                      popoverOptions: CameraPopoverOptions,
                      saveToPhotoAlbum: false
                  };
     
                      $cordovaCamera.getPicture(options).then(function (imageData) {
                          $scope.imgURI = "data:image/jpeg;base64," + imageData;
                      }, function (err) {
                          // An error occured. Show a message to the user
                      });
                  }
                  
                  $scope.choosePhoto = function () {
                    var options = {
                      quality: 75,
                      destinationType: Camera.DestinationType.DATA_URL,
                      sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
                      allowEdit: true,
                      encodingType: Camera.EncodingType.JPEG,
                      targetWidth: 300,
                      targetHeight: 300,
                      popoverOptions: CameraPopoverOptions,
                      saveToPhotoAlbum: false
                  };
     
                      $cordovaCamera.getPicture(options).then(function (imageData) {
                          $scope.imgURI = "data:image/jpeg;base64," + imageData;
                      }, function (err) {
                          // An error occured. Show a message to the user
                      });
                  }
              })

              .controller('MapController', function($scope, $cordovaGeolocation, $ionicLoading, $ionicPlatform,$state) {
                
               $ionicPlatform.ready(function() {    
              
                   $ionicLoading.show({
                       template: '<ion-spinner icon="bubbles"></ion-spinner><br/>Acquiring location!'
                   });
                    
                   var posOptions = {
                       enableHighAccuracy: true,
                       timeout: 20000,
                       maximumAge: 0
                   };
              
                   $cordovaGeolocation.getCurrentPosition(posOptions).then(function (position) {
                       var lat  = position.coords.latitude;
                       var long = position.coords.longitude;
                        
                       var myLatlng = new google.maps.LatLng(lat, long);
                        
                       var mapOptions = {
                           center: myLatlng,
                           zoom: 16,
                           mapTypeId: google.maps.MapTypeId.ROADMAP
                       };          
                        
                       var map = new google.maps.Map(document.getElementById("map"), mapOptions);          
                       var marker = new google.maps.Marker({
                        animation:google.maps.Animation.DROP,
                        position:myLatlng,
                        draggable: true,
                        map: map
                      });
                       $scope.map = map;   
                      
                       $ionicLoading.hide();    
                       $state.go('home');
                      console.log('position');
                       console.log(position);
                       myLatlng = {'lat': position.coords.latitude ,'long': position.coords.longitude};
                      console.log(myLatlng);
                      
                        
                   },
                    function(err) {
                       $ionicLoading.hide();
                       console.log(err);
                   });
               });              
              })
.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})


.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
