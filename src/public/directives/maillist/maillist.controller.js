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


    MaillistController.$inject = ['$http'];
    function MaillistController($http) {
      console.log('MaillistController instantiated');

      var ctrl = this;
        ctrl.saved = false;
        ctrl.emailAddress = '';
        ctrl.message = '';
        ctrl.response = '';

        ctrl.submitForm = function() {
            console.log('MaillistController.submitForm()');

            var url = "https://api-beheard.lawrencemcdaniel.com/v1/maillist/";
            var data = '{ "emailAddress" : "' + ctrl.userInfo.emailAddress + '" }';
            var config = "{ 'contentType': 'application/json; charset=utf-8', 'dataType': 'json'}";
            var promise = $http.post(url, data, config);

            promise.then(
              function success(response) {
                console.log('http promise success.', response);
                ctrl.saved = true;
                ctrl.message = 'Thank you! Please check your email inbox.';
              },
              function failure(response) {
                console.log('http promise failure. something terrible happened: ', response);
                ctrl.message = 'Something terrible has happened.';
              });

        };

    }
})();
