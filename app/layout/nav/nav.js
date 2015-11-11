(function() {
    'use strict';

    angular
        .module('app.ex')
        .directive('uiNav', uiNav);

    uiNav.$inject = [];

    /* @ngInject */
    function uiNav() {
        var directive = {
            link: link,
            templateUrl: 'app/layout/nav/nav.tmpl.html',
            restrict: 'E'
        };
        return directive;

        function link(scope, element, attrs) {
        	// Array de links para nav
            scope.links = [
                {name: 'Home', link: '/home'},
                {name: 'Contato', link: '/contato'}
            ];
        }
    }
})();

