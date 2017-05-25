(function () {
    "use strict";

    angular.module('public')
    .controller('JoinusController', JoinusController)
    .directive('joinUs', joinUs);

    function joinUs() {
      var ddo = {
          templateUrl: 'src/public/directives/joinUs/joinus.directive.html'
        };

      return ddo;
    }

    JoinusController.$inject = ['$http'];
    function JoinusController($http) {
      console.log('JoinusController instantiated');

      var ctrl = this;
        ctrl.userInfo = {};
        ctrl.saved = false;
        ctrl.message = '';
        ctrl.response = '';
        ctrl.userInfo.comment = '';

        ctrl.setContactForm = function() {
            console.log('JoinusController.setContactForm()');

            var url = "https://api-beheard.lawrencemcdaniel.com/v1/joinus/";
            var data = '{ "firstName" : "' + ctrl.userInfo.firstName + '", "lastName" : "' + ctrl.userInfo.lastName + '", "emailAddress" : "' + ctrl.userInfo.emailAddress + '", "comment" : "' + ctrl.userInfo.comment + '" }';
            var config = "{ 'contentType': 'application/json; charset=utf-8', 'dataType': 'json'}";
            var promise = $http.post(url, data, config);

            promise.then(
              function success(response) {
                console.log('http promise success.', response);
                ctrl.saved = true;
                ctrl.message = 'Thank you! Your information has been saved.';
              },
              function failure(response) {
                console.log('http promise failure. something terrible happened: ', response);
                ctrl.message = 'Something terrible has happened.';
              });
        };
    }
})();
