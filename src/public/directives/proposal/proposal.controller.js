(function () {
    "use strict";

    angular.module('public')
    .controller('ProposalController', ProposalController)
    .directive('proposedSolution', proposedSolution);

    function proposedSolution() {
      var ddo = {
          templateUrl: 'src/public/directives/proposal/proposal.directive.html'
        };

      return ddo;
    }


    ProposalController.$inject = [];
    function ProposalController() {
      console.log('ProposalController instantiated');

    }
})();
