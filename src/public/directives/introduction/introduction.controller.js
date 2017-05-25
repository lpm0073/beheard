(function () {
    "use strict";

    angular.module('public')
    .controller('IntroductionController', IntroductionController)
    .directive('introduction', introduction);

    function introduction() {
      var ddo = {
          templateUrl: 'src/public/directives/introduction/introduction.directive.html'
        };

      return ddo;
    }


    IntroductionController.$inject = [];
    function IntroductionController() {
      console.log('IntroductionController instantiated');

    }
})();
