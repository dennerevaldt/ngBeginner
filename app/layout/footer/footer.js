(function() {
    'use strict';

    angular
        .module('app.ex')
        .directive('uiFooter', uiFooter);

    uiFooter.$inject = [];

    /* @ngInject */
    function uiFooter() {
        var directive = {
            link: link,
            restrict: 'E',
            templateUrl: 'app/layout/footer/footer.tmpl.html'
        };
        return directive;

        function link(scope, element, attrs) {
        	
        }
    }
})();