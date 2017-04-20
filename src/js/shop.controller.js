(function() {
  'use strict';

  angular.module('shop').controller('ShopController', ShopController);
    ShopController.$inject = ['ShopService'];
  function ShopController(ShopService){
    let vm = this;
    vm.sortBy = null;
    vm.items = ShopService.getItem();
    console.log(vm.items);
    vm.tax = 0.0575;
    vm.itemPrice = function itemPrice(item){
      let discountPrice = item.price - item.discount;
      return discountPrice * (vm.tax + 1);
    };
    vm.newItem = {};

    vm.addItem = function addItem(item){
      console.log(item);
      ShopService.addItem(item);
      vm.newItem = {};
    };

    vm.sort = function sort(sort){
      vm.sortBy = sort;
    };
}

}());
