angular.module('starter.controllers', [])


.controller('MyCtrl', function($scope, Camera) {
$scope.takePicture = function (options) {
var options = {
    quality:50,
    targetWidth:200,
    targetHeight:200,
    sourceType:0
        //   destinationType: $cordovaCamera.DestinationType.FILE_URI,
        //   sourceType: $cordovaCamera.PictureSourceType.CAMERA,
        //   allowEdit: true,
        //   encodingType: $cordovaCamera.EncodingType.JPEG,
        //   targetWidth: 100,
        //   targetHeight: 100,
        //   saveToPhotoAlbum: true,
    	  // correctOrientation:true
};
Camera.getPicture(options).then(function(imageData) {
$scope.picture = imageData;;
}, function(err) {
console.log(err);
});
};
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
