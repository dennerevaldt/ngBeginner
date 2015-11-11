(function() {
    'use strict';

    angular
        .module('app.home')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['initFruits'];

    /* @ngInject */
    function HomeController(initFruits) {
        var vm = this;
        vm.title = 'Exemplo de rotas e estrutura.';
        vm.message = 'Bem vindo a página home.'
        vm.fruits = initFruits;

        ////////////////

    }
})();