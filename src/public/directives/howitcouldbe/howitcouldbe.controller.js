(function () {
    "use strict";

    angular.module('public')
    .controller('HowitcouldbeController', HowitcouldbeController)
    .directive('howitcouldbe', howitcouldbe);

    function howitcouldbe() {
      var ddo = {
          templateUrl: 'src/public/directives/howitcouldbe/howitcouldbe.directive.html'
        };

      return ddo;
    }


    HowitcouldbeController.$inject = [];
    function HowitcouldbeController() {
      console.log('HowitcouldbeController instantiated');

    }
})();
