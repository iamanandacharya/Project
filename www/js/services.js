angular.module('starter.services', [])

//$q service helps in asynchronous execution of functions by returning a “promise” from the function call
//What exactly is a Promise?

//A promise is the result which is returned from an action after its successful execution. A promise can be one of the following:

//fulfilled: The promise has succeeded.
//rejected: The promise has failed.
//pending: The promise is neither fulfilled or rejected yet.
//settled: The promise is either fulfilled or rejected.

//The deferred object exposes the Promise instance and its APIs which are to be used for resolving the promise. 
//A new instance of deferred is constructed by calling $q.defer(). It exposes three methods:

//resolve: resolves a promise with a value.
//reject: rejects a promise with a reason.
//notify: provides status updates.
//The result of the promise is retrieved by returning deferred.promise.

//After obtaining a Promise object, we will have to register a callback function which will be executed after the async operation is completed. 
//This is done by calling the then() function on the returned promise. 
//This calls one of the success or error callbacks asynchronously as soon as the result is available

.service('LoginService',function($q) {
 return{
  loginUser:function(name,pw) {
    var deferred = $q.defer();
     var promise=deferred.promise;
     if (name == 'user' && pw == 'password') {
       deferred.resolve('welcome' + name + '!');
     }
     else {
       deferred.reject('wrong crendentials');
     }
     promise.success=function(fn) {
       promise.then(fn);
       return promise;
    }
     promise.error = function(fn) {
       promise.then(null,fn);
       return promise;
     }
     return promise;
   }
 }
})

//service - •	Gives us the instance of a function (object)- You just instantiated with the ‘new’ keyword and 
//you’ll add properties to ‘this’ and the service will
// return ‘this’.When you pass the service into your controller,
// those properties on ‘this’ will now be available on that controller through your service. (Hypothetical Scenario)


//•	Factory - Gives us the function's return value ie. You just create an object,
// add properties to it, then return that same object.When you pass this service into your controller,
// those properties on the object will now be available in that controller through your factory. (Hypothetical Scenario)

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});

