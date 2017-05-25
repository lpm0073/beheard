(function () {
    "use strict";

    angular.module('public')
    .controller('MaillistController', MaillistController)
    .directive('mailList', mailList);

    function mailList() {
      var ddo = {
          templateUrl: 'src/public/directives/maillist/maillist.directive.html'
        };

      return ddo;
    }


    MaillistController.$inject = [];
    function MaillistController() {
      console.log('MaillistController instantiated');

    }
})();
