(function () {
    "use strict";

    angular.module('public')
    .controller('SocialController', SocialController)
    .directive('socialShare', socialShare);

    function socialShare() {
      var ddo = {
          templateUrl: 'src/public/directives/social/social.directive.html'
        };

      return ddo;
    }


    SocialController.$inject = [];
    function SocialController() {
      console.log('SocialController instantiated');

    }
})();
