(function() {
  'use strict';

  angular.module('shop').controller('LoginController', LoginController);
    LoginController.$inject = ['LoginService'];
    function LoginController(LoginService){
      let vm = this;
      vm.user = {};
      vm.loggedinuser = null;
      vm.loguser = function loguser(user){
       vm.loggedinuser = LoginService.addLogin(user);
       console.log(vm.loggedinuser);
      };
    }


}());
