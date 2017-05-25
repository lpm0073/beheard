(function () {
    "use strict";

    angular.module('public')
    .controller('CanvasController', CanvasController)
    .directive('leanCanvas', leanCanvas);

    function leanCanvas() {
      var ddo = {
          templateUrl: 'src/public/directives/canvas/canvas.directive.html'
        };

      return ddo;
    }


    CanvasController.$inject = [];
    function CanvasController() {
      console.log('CanvasController instantiated');

    }
})();
