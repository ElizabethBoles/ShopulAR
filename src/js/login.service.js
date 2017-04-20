(function() {
  'use strict';
  angular.module('shop').factory('LoginService', LoginService);
  function LoginService(){
    let vm = this;
      function addLogin(user){
        user.time = new Date();
        return user;
      }
        return{addLogin: addLogin} 
}
}());
