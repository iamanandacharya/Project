angular.module('app.controller',[])
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
           $state.go('login');
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
  });