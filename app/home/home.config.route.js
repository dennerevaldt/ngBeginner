(function() {
    'use strict';

	angular
		.module('app.home')
		.config(Config);

	Config.$inject = ['$routeProvider', '$locationProvider'];

	/* @ngInject */
	function Config($routeProvider, $locationProvider) {
	    $routeProvider
	        .when('/', {
	            templateUrl: 'app/home/view/home.html',
	            controller: 'HomeController',
	            controllerAs: 'vm',
	            resolve: {
	            	initFruits: initFruits
	            }
	        })
	        .when('/home', {
	            templateUrl: 'app/home/view/home.html',
	            controller: 'HomeController',
	            controllerAs: 'vm',
	            resolve: {
	            	initFruits: initFruits
	            }
	        })
	        .otherwise({ templateUrl: 'app/error/404.html' });
	}

	// Init fruits
	function initFruits(HomeService){
		return HomeService.getFruits();
	}
})();