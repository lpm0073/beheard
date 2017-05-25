(function () {
    "use strict";

    angular.module('public')
    .controller('JoinusController', JoinusController)
    .directive('joinUs', joinUs);

    function joinUs() {
      var ddo = {
          templateUrl: 'src/public/directives/joinUs/joinUs.directive.html'
        };

      return ddo;
    }


    JoinusController.$inject = [];
    function JoinusController() {
      console.log('JoinusController instantiated');

    }
})();
