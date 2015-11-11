(function() {
    'use strict';

    angular
        .module('app.home')
        .factory('HomeService', HomeService);

    HomeService.$inject = [];

    /* @ngInject */
    function HomeService() {
        var service = {
            getFruits: getFruits
        };
        return service;

        ////////////////

        function getFruits() {
        	return [
        		{name: 'Banana', price:'1,99'},
        		{name: 'Maça', price:'2,99'},
        		{name: 'Melancia', price:'4,39'},
                {name: 'Jaca', price:'1,99'},
                {name: 'Uva', price:'2,99'},
                {name: 'Pera', price:'4,39'},
                {name: 'Kiwi', price:'1,99'},
                {name: 'Pessego', price:'2,99'},
                {name: 'Manga', price:'4,39'}
        	]
        }
    }
})();