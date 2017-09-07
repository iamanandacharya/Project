angular.module('starter.controllers', [])


.controller('MyCtrl', function($scope, Camera) {
$scope.takePhoto = function (options) {
var options = {
    quality: 50,
          destinationType: $cordovaCamera.DestinationType.DATA_URL,
          sourceType: $cordovaCamera.PictureSourceType.CAMERA,
          allowEdit: true,
          encodingType: $cordovaCamera.EncodingType.JPEG,
          targetWidth: 100,
          targetHeight: 100,
          popoverOptions: $cordovaCamera.PopoverArrowDirection.ARROW_UP,
          saveToPhotoAlbum: false,
    	  correctOrientation:true
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
